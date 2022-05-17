<template>
  <h1>Child {{ msg.value }}</h1>
</template>

<script>
export default {
  inject: ["msg"],
};
</script>