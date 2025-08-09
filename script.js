// Plain autoplaying background video with gentle compatibility nudges.
(function(){
  const v = document.getElementById('bg');
  v.setAttribute('playsinline',''); // iOS / mobile
  v.muted = true;                   // required for autoplay on most browsers

  // Try to play on load, then on first user gesture if blocked
  const tryPlay = () => v.play().catch(()=>{ /* user gesture needed */ });
  window.addEventListener('load', tryPlay);
  window.addEventListener('pointerdown', tryPlay, { once:true });
  document.addEventListener('visibilitychange', () => { if(!document.hidden) tryPlay(); });
})();
document.addEventListener('DOMContentLoaded', () => {
  const v = document.getElementById('bgvideo');
  if (!v) return;
  const tryPlay = () => v.play().catch(() => {});
  v.addEventListener('canplay', tryPlay, { once: true });
  // if it ever gets paused by the browser, try again
  ['pause','ended'].forEach(evt => v.addEventListener(evt, tryPlay));
});
