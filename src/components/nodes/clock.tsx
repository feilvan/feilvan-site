import { useEffect, useState, useRef } from "preact/hooks";
import "./clock.css";

export default function Clock() {
  const clockRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState("");
  const [timeFormatted, setTimeFormatted] = useState("");

  function refreshTime() {
    const date = new Date();
    setTime(date.toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
    setTimeFormatted(
      date.toLocaleTimeString("en-US", {
        timeZone: "Asia/Jakarta",
        weekday: "short",
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

  const jakartaTime = new Date(time);
  const hours = jakartaTime.getHours() * 30 + jakartaTime.getMinutes() / 2;
  const minutes = jakartaTime.getMinutes() * 6;
  const seconds = jakartaTime.getSeconds() * 6;

  clockRef.current?.style.setProperty("--hour-rotation", `${hours}deg`);
  clockRef.current?.style.setProperty("--min-rotation", `${minutes}deg`);
  clockRef.current?.style.setProperty("--sec-rotation", `${seconds}deg`);

  return (
    <div class="flex flex-col p-4 gap-4">
      <div
        ref={clockRef}
        id="clock"
        class="aspect-square flex justify-center items-center rounded-full border-2 border-gray-800 shadow-lg shadow-gray/20"
      >
        <div id="hour"></div>
        <div id="min"></div>
        <div id="sec"></div>
      </div>
      <div class="flex flex-col items-center text-xs">
        <span class="font-semibold text-gray-400">{timeFormatted}</span>
        <span class="text-gray-500">Banyuwangi, Indonesia</span>
      </div>
    </div>
  );
}
