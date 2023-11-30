import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };
    const handleOofline = () => { 
      setIsOnline(false);
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOofline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOofline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
