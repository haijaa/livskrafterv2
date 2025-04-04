"use client";
import { useEffect, useState } from "react";

export default function WelcomeScreen() {
  const [showScreen, setShowScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowScreen(!showScreen);
    }, 2500);
  }, []);

  return (
    <div className="h-screen w-screen flex text-center justify-center">
      Välkommen till mig
    </div>
  );
}
