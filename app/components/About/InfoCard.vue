<template>
  <div class="info-card">
    <div v-if="icon" class="icon-frame">
      <i :class="['info-card-icon', 'ti', icon]"></i>
    </div>
    <h3>{{ title }}</h3>
    <p class="subtitle">{{ value }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: false,
  },
  title: String,
  value: String, // This will be the subtitle now
});
</script>

<style lang="scss" scoped>
.info-card {
  background: $card-gradient;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid transparent; // Initial transparent border
  transition: border-color 0.3s ease; // Only border-color transition now

  &:hover {
    border-color: $primary; // Border becomes primary color on hover

    .info-card-icon {
      transform: scale(1.1); // Icon grows on hover
    }
  }

  .icon-frame {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .info-card-icon {
    font-size: 2.5rem;
    color: $primary;
    // Removed margin-bottom as it's now handled by icon-frame margin
    transition: transform 0.3s ease; // Smooth transition for icon
  }

  h3 {
    margin-bottom: 0.25rem;
    color: $text-primary;
  }

  .subtitle {
    font-size: 1rem;
    font-weight: normal;
    font-style: italic;
    color: $text-tertiary;
  }
}
</style>
