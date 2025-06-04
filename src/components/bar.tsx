import { useState, useEffect } from "preact/hooks";

export default function Bar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
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
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
      <div class="flex gap-2 items-center text-xs text-gray-400 border border-b-0 border-gray-600 shadow p-1 rounded-t-lg bg-gray-900/90">
        <span class="mx-4 font-mono">{time}</span>
      </div>
    </div>
  );
}
