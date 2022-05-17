<template>
  <h1>{{ $route.params.id }}</h1>
</template>

<script>
export default {
  created() {
    console.log("DocsID");
  },
};
</script>