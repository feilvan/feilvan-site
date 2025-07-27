import { useEffect, useState } from "preact/hooks";
import Control from "./controls";

export default function Bar() {
  const [time, setTime] = useState("");

  function refreshTime() {
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
  }

  useEffect(() => {
    refreshTime();
    const timer = setInterval(refreshTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div class="sticky bottom-0 flex justify-center pointer-events-none">
      <div class="flex items-center w-fit bg-gray-800/80 backdrop-blur border border-b-0 border-gray-600 rounded-t-lg py-0.5 pointer-events-auto">
        <Control />
        <span class="mx-2 font-mono text-xs text-gray-400">{time}</span>
      </div>
    </div>
  );
}
