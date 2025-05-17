"use client";
import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
}

const Typewriter = ({ text, speed = 200, delay = 10000 }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const nextText = isDeleting
        ? text.slice(0, displayedText.length - 1)
        : text.slice(0, displayedText.length + 1);

      setDisplayedText(nextText);

      if (!isDeleting && nextText === text) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && nextText === "") {
        setIsDeleting(false);
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, text, speed, delay]);

  return (
    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-300">
      {displayedText}
      <span className="animate-pulse">|</span>
    </h1>
  );
};

export default Typewriter;
