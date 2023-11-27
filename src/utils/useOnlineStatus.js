import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // Try to check if online

  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  //Boolean value
  return onlineStatus;
};

export default useOnlineStatus;
