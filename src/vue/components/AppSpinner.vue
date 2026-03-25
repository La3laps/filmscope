<template>
  <svg width="200" height="120" viewBox="0 0 100 60">
    <g class="dot" style="--i: 0"><circle cx="10" cy="30" r="6" fill="#d0e799" /></g>
    <g class="dot" style="--i: 1"><circle cx="30" cy="30" r="6" fill="#599e71" /></g>
    <g class="dot" style="--i: 2"><circle cx="50" cy="30" r="6" fill="#05282e" /></g>
    <g class="dot" style="--i: 3"><circle cx="70" cy="30" r="6" fill="#81a3bd" /></g>
  </svg>
</template>

<style>
.dot {
  transform-box: fill-box;
  transform-origin: center;
  animation: pulse 1s infinite ease-in-out;
  animation-delay: calc(var(--i) * 0.15s);
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(0.6);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
