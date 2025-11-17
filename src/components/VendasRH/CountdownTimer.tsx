import { useEffect, useState } from "react";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(59 * 60); // 59 minutos em segundos

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="inline-flex items-center gap-2 text-3xl md:text-4xl font-heading font-bold text-rh-magenta">
      <span className="bg-white rounded-xl px-4 py-2 shadow-soft">
        {String(minutes).padStart(2, "0")}
      </span>
      <span>:</span>
      <span className="bg-white rounded-xl px-4 py-2 shadow-soft">
        {String(seconds).padStart(2, "0")}
      </span>
    </div>
  );
};
