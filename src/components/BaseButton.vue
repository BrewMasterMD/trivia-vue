<template>
  <button
    type="button"
    class="
      font-bold
      p-3
      bg-blue
      text-white
      border-3
      border-blue
      rounded-md
      hover:opacity-75
      disabled:opacity-75
      disabled:cursor-not-allowed
    "
  >
    <slot />
  </button>
</template>

<script>
  export default {
    name: "BaseButton",
  };
</script>

<style scoped>

</style>
