export const localSessionStorageHandler = () => {
  const getDataLocalStorage = (key) => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem(key));
    }
  };

  const setDataLocalStorage = (key, data) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(data));
    }
  };

  const getDataSessionStorage = (key) => {
    if (typeof window !== "undefined") {
      return JSON.parse(sessionStorage.getItem(key));
    }
  };

  const setDataSessionStorage = (key, data) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(key, JSON.stringify(data));
    }
  };

  const removeItemSessionStorage = (key) => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem(key);
    }
  };

  const removeItemLocalStorage = (key) => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  };

  return {
    getDataLocalStorage,
    setDataLocalStorage,
    getDataSessionStorage,
    setDataSessionStorage,
    removeItemSessionStorage,
    removeItemLocalStorage,
  };
};
