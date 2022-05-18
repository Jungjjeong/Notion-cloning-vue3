<template>
  <nav>
    <div class="header">
      <div class="user-profile"></div>
      Jungsion
    </div>
    <ul>
      <WorkspaceItem
        v-for="workspace in workspaces"
        :key="workspace.id"
        :workspace="workspace"
      />
    </ul>
    <div class="actions"></div>
  </nav>
</template>

<script>
import WorkspaceItem from "~/components/WorkspaceItem";
export default {
  components: {
    WorkspaceItem,
  },
  computed: {
    workspaces() {
      return this.$store.state.workspace.workspaces;
    },
  },
  created() {
    this.$store.dispatch("workspace/readWorkspaces");
  },
};
</script>

<style lang="scss" scoped>
nav {
  width: 240px;
  height: 100%;
  background-color: $color-background;

  .header {
    padding: 14px;
    font-weight: 700;
    display: flex;
    align-items: center;

    .user-profile {
      width: 20px;
      height: 20px;
      border-radius: 4px;
      margin-right: 10px;
      background-image: url("https://user-images.githubusercontent.com/72294509/163410631-70fa3086-191f-4d67-91c9-e343a0590424.png");
      background-size: cover;
    }
  }
  ul {
  }
  .actions {
  }
}
</style>