// Autoplay helper (handles iOS/Chrome gesture requirements)
(function () {
  const v = document.getElementById('bg');
  if (!v) return;

  v.muted = true;
  v.setAttribute('playsinline','');

  const tryPlay = () => v.play().catch(() => {});
  if (document.readyState === 'complete') tryPlay();
  else window.addEventListener('load', tryPlay);

  window.addEventListener('pointerdown', tryPlay, { once: true });
  document.addEventListener('visibilitychange', () => { if (!document.hidden) tryPlay(); });
})();
