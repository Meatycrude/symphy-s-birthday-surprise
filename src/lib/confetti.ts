import confetti from "canvas-confetti";

const romanticColors = ["#f8c8d8", "#e88aab", "#c45c7c", "#e8b478", "#f3d9a4", "#ffffff"];

export function burstConfetti() {
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.7 },
    colors: romanticColors,
    scalar: 1.1,
  });
}

export function sideCannons() {
  const end = Date.now() + 600;
  (function frame() {
    confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0, y: 0.7 }, colors: romanticColors });
    confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1, y: 0.7 }, colors: romanticColors });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

export function startContinuousConfetti(): () => void {
  let running = true;
  const tick = () => {
    if (!running) return;
    confetti({
      particleCount: 4,
      angle: 60 + Math.random() * 60,
      spread: 70,
      startVelocity: 45,
      origin: { x: Math.random(), y: Math.random() * 0.3 },
      colors: romanticColors,
      scalar: 0.9 + Math.random() * 0.6,
      ticks: 200,
    });
    setTimeout(tick, 250);
  };
  tick();
  return () => { running = false; };
}
