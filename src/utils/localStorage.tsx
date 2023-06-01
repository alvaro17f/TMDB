export function setLocalStorage(key: string, value: {}, ttl: number) {

  const item = {
    value: value,
    expiry: ttl,
  };

  localStorage.setItem(key, JSON.stringify(item));
}

export function getLocalStorage(key: string) {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }

  return item.value;
}
