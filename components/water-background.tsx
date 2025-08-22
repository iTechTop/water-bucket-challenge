"use client";

export function WaterBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-300 via-blue-500 to-blue-800" />

      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-blue-600/20 to-cyan-200/10" />

      <div className="absolute inset-0 opacity-40">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => {
          const size = 4 + Math.random() * 12;
          const opacity = 0.2 + Math.random() * 0.4;
          return (
            <div
              key={i}
              className="bubble"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${10 + Math.random() * 8}s`,
                opacity: opacity,
              }}
            />
          );
        })}
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        .wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 300%;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.2) 25%,
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0.05) 75%,
            rgba(255, 255, 255, 0.1) 100%
          );
          border-radius: 50%;
          animation: wave ease-in-out infinite;
        }

        .wave1 {
          height: 120px;
          animation-duration: 8s;
          animation-delay: 0s;
          opacity: 0.4;
        }

        .wave2 {
          height: 100px;
          animation-duration: 10s;
          animation-delay: -3s;
          opacity: 0.3;
        }

        .wave3 {
          height: 80px;
          animation-duration: 12s;
          animation-delay: -6s;
          opacity: 0.2;
        }

        .wave4 {
          height: 60px;
          animation-duration: 14s;
          animation-delay: -9s;
          opacity: 0.15;
        }

        @keyframes wave {
          0%,
          100% {
            transform: translateX(-66%) translateY(0px) rotate(0deg) scaleY(1);
          }
          25% {
            transform: translateX(-66%) translateY(-15px) rotate(90deg)
              scaleY(1.1);
          }
          50% {
            transform: translateX(-66%) translateY(-25px) rotate(180deg)
              scaleY(0.9);
          }
          75% {
            transform: translateX(-66%) translateY(-15px) rotate(270deg)
              scaleY(1.1);
          }
        }

        .bubble {
          position: absolute;
          bottom: -50px;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.6) 0%,
            rgba(255, 255, 255, 0.2) 70%,
            transparent 100%
          );
          border-radius: 50%;
          animation: bubble linear infinite;
          box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.3);
        }

        @keyframes bubble {
          0% {
            transform: translateY(0) scale(1) rotate(0deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-50vh) scale(0.8) rotate(180deg);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-110vh) scale(0.2) rotate(360deg);
            opacity: 0;
          }
        }

        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: float linear infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.8;
          }
          25% {
            transform: translateY(-25vh) translateX(10px) scale(1.2);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-50vh) translateX(-5px) scale(0.8);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-75vh) translateX(15px) scale(1.1);
            opacity: 0.2;
          }
          100% {
            transform: translateY(-100vh) translateX(-10px) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
