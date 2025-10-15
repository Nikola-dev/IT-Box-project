import Lottie from "lottie-react";
import loaderAnimation from "../public/animations/loader.json";

export default function Loader({ width = 120, height = 120 }) {
  return (
    <div
      aria-label="Loading"
      style={{
        width,
        height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie
        animationData={loaderAnimation}
        loop
        autoplay
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
