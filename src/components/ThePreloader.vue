<template>
  <div>
    <div class="loader relative w-12 h-12 rounded-full border-3 border-blue" />
  </div>
</template>

<script>
  export default {
    name: "ThePreloader",
  };
</script>

<style scoped>
  .loader {
    animation: loader 2s linear infinite;
  }

  .loader:after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    background-color: #20a368;
    transform: translate(-50%, -50%);
  }

  @keyframes loader {
    0% {
      transform:rotate(0deg);
    }
    100% {
      transform:rotate(360deg);
    }
  }
</style>
