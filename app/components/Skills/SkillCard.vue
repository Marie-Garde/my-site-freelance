<template>
  <div class="skill-card">
    <div class="card-header">
      <i v-if="icon" :class="['ti', icon]"></i>
      <h3>{{ title }}</h3>
    </div>
    <hr />
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  icon: String,
});
</script>

<style lang="scss" scoped>
.skill-card {
  background-color: $background-secondary;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #25303e;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: $primary;
  }

  .card-header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    h3 {
      margin: 0;
    }

    i {
      font-size: 1.5rem;
      color: $primary;
      margin-right: 10px;
    }
  }

  hr {
    border: none;
    height: 1px;
    background-color: #25303e;
    margin-bottom: 1rem;
  }

  :deep(.badge-container) {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  :deep(.badge) {
    background-color: #25303e;
    color: $text-tertiary;
    padding: 0.5rem 0.75rem;
    border-radius: 5px;
    font-size: 0.8rem;
    border: 1px solid transparent; // Initial transparent border for badge
    transition: color 0.3s ease, border-color 0.3s ease; // Smooth transition for badge

    &:hover {
      color: $primary; // Badge text becomes primary color on hover
      border-color: $primary; // Badge border becomes primary color on hover
    }
  }
}
</style>
