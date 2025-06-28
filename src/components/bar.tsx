import { useEffect, useState } from "preact/hooks";
import Control from "./controls";

export default function Bar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setTime(
        date.toLocaleTimeString("en-US", {
          timeZone: "Asia/Jakarta",
          month: "short",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div class="sticky bottom-0 left-1/2 -translate-x-1/2 w-fit flex items-center bg-gray-800/80 backdrop-blur border border-b-0 border-gray-600 rounded-t-lg py-0.5">
      <Control />
      <span class="mx-2 font-mono text-xs text-gray-400">{time}</span>
    </div>
  );
}
