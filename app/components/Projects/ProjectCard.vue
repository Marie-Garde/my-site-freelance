<template>
  <div class="project-card">
    <img :src="image" :alt="title" />
    <div class="project-info">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <div class="technologies">
        <span v-for="tech in technologies" :key="tech" class="badge">{{
          tech
        }}</span>
      </div>
      <div class="buttons">
        <a
          v-if="githubLink"
          :href="githubLink"
          class="button button-code"
          target="_blank"
          rel="noopener noreferrer"
          ><i class="ti ti-brand-github"></i> Code</a
        >

        <a
          v-if="demoLink"
          :href="demoLink"
          class="button button-demo"
          target="_blank"
          rel="noopener noreferrer"
          ><i class="ti ti-external-link"></i>Demo</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  technologies: Array,
  githubLink: String,
  demoLink: String,
});
</script>

<style lang="scss" scoped>
.project-card {
  background-color: $background-primary;
  border-radius: 8px;
  width: 300px;
  color: $text-primary;
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .project-info {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-grow: 1;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    flex-grow: 1;
    font-size: 0.9rem;
    margin-bottom: 2rem;
    color: $text-tertiary;
    text-align: left;
  }

  .technologies {
    margin-bottom: 1rem;
    .badge {
      background-color: $background-secondary;
      color: $text-tertiary;
      padding: 0.5rem 0.75rem;
      margin-right: 10px;
      border-radius: 5px;
      font-size: 0.8rem;
      border: 1px solid transparent;
      transition: color 0.3s ease, border-color 0.3s ease;

      &:hover {
        color: $primary;
        border-color: $primary;
      }
    }
  }

  .buttons {
    display: flex;
    gap: 1rem;
    margin-top: auto;
    width: 100%;

    .button {
      padding: 0.5rem 1rem;
      border-radius: 4px;
      text-decoration: none;
      transition: background-color 0.3s;
      flex-grow: 1;
      text-align: center;

      &-code {
        background-color: $primary;
        color: $text-primary;
        i {
          color: $text-primary;
        }
      }

      &-demo {
        background-color: $background-primary;
        color: $primary;
        border: 1px solid $primary;
      }
    }
  }
}
</style>
