import Wave from "react-wavify";

export default function WaveBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "-90px",
          left: 0,
          width: "100%",
          height: "240px",
        }}
      >
        <Wave
          mask="url(#mask)"
          fill="rgba(167, 216, 255, 0.85)"   // softer blue for white bg
          paused={false}
          options={{
            height: 22,                   // slightly smaller crest
            amplitude: 30,
            speed: 0.12,                  // smoother / slower
            points: 3,
          }}
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="0" stopColor="white" stopOpacity="1" />
              <stop offset="0.6" stopColor="white" stopOpacity="0.35" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>

            <mask id="mask">
              <rect
                x="0"
                y="0"
                width="2000"
                height="2000"
                fill="url(#gradient)"
              />
            </mask>
          </defs>
        </Wave>
      </div>
    </div>
  );
}