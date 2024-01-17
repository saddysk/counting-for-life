"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const calculateTimeLeft = () => {
  const difference = +new Date("2024-01-20T04:00:00") - +new Date();

  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <main className="flex min-h-screen relative items-center justify-around p-24">
      <div className="w-1/2">
        <div className="flex items-center justify-center gap-4 font-semibold text-8xl">
          <span>{timeLeft.days}</span>
          <span>:</span>
          <span>
            {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
          </span>
          <span>:</span>
          <span>
            {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}
          </span>
          <span>:</span>
          <span>
            {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
          </span>
        </div>

        <div className="text-lg mt-8">
          <p className="text-center">
            Can`t wait anymore to meet you Cutu ⏰ <br /> I`m hella excited to
            meet you after exactly 90 days since we have last met. <br /> I
            don`t know how would I react when I see you for the first time.{" "}
            <br /> All I know is, these have beem the toughest 90 days of my
            life so far fr 🤒
          </p>
          <p className="text-center mt-4">
            On a closing note 😛, <br /> I feel, I`m the luckiest person on the
            planet to have you in my life. <br /> And, I couldn`t be more
            grateful ⚘
          </p>
          <p className="mt-4 text-xl text-center">❤️</p>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative right-0"
          src="/love.png"
          alt="Next.js Logo"
          width={750}
          height={750}
          priority
        />
      </div>
    </main>
  );
}
