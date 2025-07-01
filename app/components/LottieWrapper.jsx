"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "/public/skull.json";

export default function LottieWrapper() {
  return (
    <Player
      autoplay
      loop
      src={animationData}
      style={{ height: "208px", width: "208px" }}
    />
  );
}
