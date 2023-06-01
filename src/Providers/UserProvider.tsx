import { createContext, useContext, useEffect, useReducer } from "react";
import { GuestActionType, GuestType, UserContextType } from "../types/types";
import { getLocalStorage } from "../utils/localStorage";

const UserContext = createContext<UserContextType>({});

const useUserContext = () => {
  return useContext(UserContext);
};

const initialState = {
  success: getLocalStorage("guest_session_id")?.success,
  guest_session_id: getLocalStorage("guest_session_id")?.guest_session_id,
  expires_at: getLocalStorage("guest_session_id")?.expires_at,
};

const reducer = (state: GuestType, action: GuestActionType): GuestType => {
  switch (action.type) {
    case "CREATE_GUEST_SESSION": {
      return {
        ...state,
        success: action.payload.success,
        guest_session_id: action.payload.guest_session_id,
        expires_at: action.payload.expires_at,
      };
    }
    default: {
      return state;
    }
  }
};

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  useEffect(() => {
    if (getLocalStorage("guest_session_id")) {
      dispatch?.({
        type: "CREATE_GUEST_SESSION",
        payload: getLocalStorage("guest_session_id"),
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useUserContext };
