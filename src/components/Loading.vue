<template>
  <div class="container">
    <div class="loading">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.94 75.83">
        <g id="Capa_2" data-name="Capa 2">
          <path
            d="M88.19,30l-8,12.32-7.28,0a.6.6,0,0,1-.38-.13L80.46,30H72.14l-8,12.32-7.28,0a.65.65,0,0,1-.38-.13L64.4,30H56.08l-8,12.32-7.28,0a.6.6,0,0,1-.38-.13L48.35,30H40L32,42.35l-7.28,0a.65.65,0,0,1-.38-.13L32.29,30H24L16,42.35l-7.28,0a.6.6,0,0,1-.38-.13L16.24,30h-8V73.51a8.5,8.5,0,0,0,8.5,8.5H79.88a8.51,8.51,0,0,0,8.5-8.5V30Z"
            transform="translate(-7.44 -6.18)"
          />
          <path
            d="M56.8,42.37l7.28,0,8-12.32H64.35L56.42,42.24A.62.62,0,0,0,56.8,42.37Z"
            transform="translate(-7.44 -6.18)"
            fill="#fff"
          />
          <path
            d="M72.85,42.37l7.29,0,8-12.32H80.41L72.47,42.24A.65.65,0,0,0,72.85,42.37Z"
            transform="translate(-7.44 -6.18)"
            fill="#fff"
          />
          <path
            d="M40.74,42.37l7.29,0L56,30H48.3L40.36,42.24A.65.65,0,0,0,40.74,42.37Z"
            transform="translate(-7.44 -6.18)"
            fill="#fff"
          />
          <path
            d="M24.69,42.37l7.28,0L40,30H32.24L24.31,42.24A.62.62,0,0,0,24.69,42.37Z"
            transform="translate(-7.44 -6.18)"
            fill="#fff"
          />
          <path
            d="M8.63,42.37l7.29,0,8-12.32H16.19L8.25,42.24A.65.65,0,0,0,8.63,42.37Z"
            transform="translate(-7.44 -6.18)"
            fill="#fff"
          />
          <path
            d="M40,50.5v17a1,1,0,0,0,1.54.89l14.6-8.48a1,1,0,0,0,0-1.78l-14.6-8.48A1,1,0,0,0,40,50.5Z"
            transform="translate(-7.44 -6.18)"
            fill="#fff"
          />
        </g>
        <g id="Capa_3" data-name="Capa 3">
          <polygon
            points="45.99 3.96 37.68 5.3 47.66 16.23 55.96 14.89 45.99 3.96"
          />
          <polygon
            points="31.69 18.81 40 17.47 30.03 6.54 21.72 7.88 31.69 18.81"
          />
          <path
            d="M21.51,15.29l-7.35,1.19a8,8,0,0,0-6.62,9.17l.59,3.68a.65.65,0,0,0,.75.54l22.6-3.65Z"
            transform="translate(-7.44 -6.18)"
          />
          <polygon
            points="61.95 1.38 53.64 2.73 63.62 13.66 71.92 12.31 61.95 1.38"
          />
          <path
            d="M86.9,17.13a.62.62,0,0,0,.19-.55L86.5,12.9a8,8,0,0,0-9.18-6.62l-.28,0Z"
            transform="translate(-7.44 -6.18)"
          />
          <circle cx="7.57" cy="16.82" r="2.96" fill="#fff" />
          <polygon
            points="14.13 9.12 24.1 20.05 31.75 18.81 21.78 7.88 14.13 9.12"
            fill="#fff"
          />
          <polygon
            points="30.09 6.54 40.06 17.47 47.71 16.23 37.74 5.3 30.09 6.54"
            fill="#fff"
          />
          <polygon
            points="46.05 3.96 56.02 14.89 63.67 13.65 53.7 2.73 46.05 3.96"
            fill="#fff"
          />
          <path
            d="M87,17.13,77.1,6.32,69.44,7.56l10,10.93,7.19-1.16A.62.62,0,0,0,87,17.13Z"
            transform="translate(-7.44 -6.18)"
            fill="#fff"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
}
.loading {
  position: fixed;
  animation: rotation 2s ease-in-out 0s infinite normal;
  margin-top: 20vh;
}
svg {
  fill: var(--bg-loading);
  width: 5rem;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  15% {
    transform: rotate(-45deg);
  }
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>