<template>
  <li>
    <div class="title">
      {{ workspace.title }}
    </div>
    <ul>
      <WorkspaceItem
        v-for="ws in workspace.documents"
        :key="ws.id"
        :workspace="ws"
      />
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    workspace: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>