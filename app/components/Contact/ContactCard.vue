<template>
  <div class="info-card">
    <i v-if="icon" :class="['info-card-icon', 'ti', icon]"></i>
    <div class="text">
      <p class="subtitle">{{ subtitle }}</p>
      <h3>{{ title }}</h3>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: false,
  },
  title: String,
  subtitle: String,
});
</script>

<style lang="scss" scoped>
.info-card {
  background: $card-gradient;
  padding: 2rem 1rem;
  border-radius: 8px;
  flex: 1;
  display: flex;
  align-items: center;
  border: 2px solid transparent;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: $primary;

    .info-card-icon {
      transform: scale(1.1);
    }
  }

  .info-card-icon {
    font-size: 2.5rem;
    color: $primary;
    margin-bottom: 0;
    transition: transform 0.3s ease;
  }

  .text {
    margin-left: 20px;

    .subtitle {
      font-size: 1rem;
      font-weight: normal;
      font-style: italic;
      color: $text-tertiary;
      margin: 0;
    }
  }
}
</style>
