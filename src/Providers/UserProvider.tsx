import { createContext, useContext, useReducer } from "react";
import { GuestActionType, GuestType, UserContextType } from "../types/types";

const UserContext = createContext<UserContextType>({});

const useUserContext = () => {
  return useContext(UserContext);
};

const initialState = {
  success: undefined,
  guest_session_id: undefined,
  expires_at: undefined,
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

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useUserContext };
