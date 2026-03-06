<template>
  <div class="carousel-card" @click="$emit('open')">
    <div class="card-image">
      <img :src="project.image" :alt="project.title" />
      <div class="card-overlay">
        <div class="overlay-content">
          <span class="view-label">
            <i class="ti ti-eye"></i> Voir le projet
          </span>
        </div>
      </div>
    </div>
    <div class="card-body">
      <h3 class="card-title">{{ project.title }}</h3>
      <div class="card-techs">
        <span
          v-for="tech in project.technologies.slice(0, 3)"
          :key="tech"
          class="tech-pill"
        >
          {{ tech }}
        </span>
        <span v-if="project.technologies.length > 3" class="tech-pill tech-more">
          +{{ project.technologies.length - 3 }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
});

defineEmits(["open"]);
</script>

<style lang="scss" scoped>
.carousel-card {
  flex-shrink: 0;
  width: 340px;
  border-radius: 16px;
  overflow: hidden;
  background: $card-gradient;
  border: 1px solid rgba(255, 255, 255, 0.06);
  cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    box-shadow 0.4s ease, border-color 0.4s ease;
  user-select: none;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 60px rgba(36, 195, 182, 0.15),
      0 8px 24px rgba(0, 0, 0, 0.4);
    border-color: rgba(36, 195, 182, 0.3);

    .card-overlay {
      opacity: 1;
    }

    .card-image img {
      transform: scale(1.08);
    }
  }

  .card-image {
    position: relative;
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
  }

  .card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      transparent 30%,
      rgba(15, 19, 24, 0.9) 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 1rem;

    .overlay-content {
      .view-label {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.5rem 1.2rem;
        background: rgba(36, 195, 182, 0.2);
        border: 1px solid $primary;
        border-radius: 20px;
        color: $primary;
        font-size: 0.85rem;
        font-weight: 500;
        backdrop-filter: blur(8px);
      }
    }
  }

  .card-body {
    padding: 1.2rem 1.4rem;

    .card-title {
      font-size: 1.15rem;
      color: $text-primary;
      margin-bottom: 0.8rem;
      font-weight: 600;
    }

    .card-techs {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;

      .tech-pill {
        padding: 0.3rem 0.7rem;
        background: rgba(36, 195, 182, 0.1);
        border: 1px solid rgba(36, 195, 182, 0.2);
        border-radius: 12px;
        font-size: 0.75rem;
        color: $primary;
        font-family: "JetBrains Mono", monospace;
      }

      .tech-more {
        background: rgba(255, 165, 0, 0.1);
        border-color: rgba(255, 165, 0, 0.2);
        color: $accent;
      }
    }
  }
}

@media (max-width: 768px) {
  .carousel-card {
    width: 280px;

    .card-image {
      height: 160px;
    }
  }
}
</style>
