<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="project" class="modal-backdrop" @click.self="$emit('close')">
        <div class="modal-container">
          <button class="modal-close" @click="$emit('close')">
            <i class="ti ti-x"></i>
          </button>

          <div class="modal-hero">
            <img :src="project.image" :alt="project.title" />
            <div class="modal-hero-overlay">
              <h2 class="modal-title">{{ project.title }}</h2>
            </div>
          </div>

          <div class="modal-content">
            <p class="modal-description">{{ project.description }}</p>

            <div class="modal-section">
              <h4 class="modal-section-title">
                <i class="ti ti-code"></i> Technologies
              </h4>
              <div class="modal-techs">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="tech-badge"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <div v-if="project.highlights?.length" class="modal-section">
              <h4 class="modal-section-title">
                <i class="ti ti-list-check"></i> Points clés
              </h4>
              <ul class="modal-highlights">
                <li v-for="item in project.highlights" :key="item">
                  {{ item }}
                </li>
              </ul>
            </div>

            <div class="modal-actions">
              <a
                v-if="project.githubLink"
                :href="project.githubLink"
                class="action-btn action-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="ti ti-brand-github"></i>
                Voir le code
              </a>
              <a
                v-if="project.demoLink"
                :href="project.demoLink"
                class="action-btn action-demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="ti ti-external-link"></i>
                Voir le site
              </a>
              <span v-if="!project.githubLink && !project.demoLink" class="confidential">
                <i class="ti ti-lock"></i> Projet confidentiel
              </span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    default: null,
  },
});

defineEmits(["close"]);
</script>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.modal-container {
  position: relative;
  background: $background-primary;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  max-width: 640px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.6),
    0 0 80px rgba(36, 195, 182, 0.08);

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(36, 195, 182, 0.3);
    border-radius: 3px;
  }
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(15, 19, 24, 0.8);
  backdrop-filter: blur(8px);
  color: $text-primary;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s, border-color 0.3s, transform 0.3s;

  &:hover {
    background: rgba(36, 195, 182, 0.2);
    border-color: $primary;
    transform: rotate(90deg);
  }
}

.modal-hero {
  position: relative;
  height: 240px;
  overflow: hidden;
  border-radius: 20px 20px 0 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .modal-hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      transparent 20%,
      rgba(15, 19, 24, 0.95) 100%
    );
    display: flex;
    align-items: flex-end;
    padding: 1.5rem 2rem;
  }

  .modal-title {
    font-size: 1.8rem;
    color: $text-primary;
    font-weight: 700;
  }
}

.modal-content {
  padding: 1.5rem 2rem 2rem;
}

.modal-description {
  color: $text-tertiary;
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 1.8rem;
}

.modal-section {
  margin-bottom: 1.5rem;

  .modal-section-title {
    color: $text-primary;
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    i {
      color: $primary;
    }
  }
}

.modal-techs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  .tech-badge {
    padding: 0.4rem 0.9rem;
    background: rgba(36, 195, 182, 0.1);
    border: 1px solid rgba(36, 195, 182, 0.25);
    border-radius: 8px;
    font-size: 0.8rem;
    color: $primary;
    font-family: "JetBrains Mono", monospace;
    transition: background 0.3s, transform 0.3s;

    &:hover {
      background: rgba(36, 195, 182, 0.2);
      transform: translateY(-2px);
    }
  }
}

.modal-highlights {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    position: relative;
    padding-left: 1.4rem;
    margin-bottom: 0.6rem;
    color: $text-tertiary;
    font-size: 0.9rem;
    line-height: 1.5;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.55rem;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: $primary;
    }
  }
}

.modal-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.4rem;
  border-radius: 10px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-2px);
  }

  &.action-github {
    background: $primary;
    color: $background-primary;

    &:hover {
      box-shadow: 0 8px 24px rgba(36, 195, 182, 0.3);
    }
  }

  &.action-demo {
    background: transparent;
    color: $primary;
    border: 1px solid $primary;

    &:hover {
      background: rgba(36, 195, 182, 0.1);
      box-shadow: 0 8px 24px rgba(36, 195, 182, 0.15);
    }
  }
}

.confidential {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: $text-tertiary;
  font-size: 0.85rem;
  font-style: italic;

  i {
    color: $accent;
  }
}

// Transitions
.modal-enter-active {
  transition: opacity 0.3s ease;

  .modal-container {
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
      opacity 0.3s ease;
  }
}

.modal-leave-active {
  transition: opacity 0.25s ease;

  .modal-container {
    transition: transform 0.25s ease, opacity 0.25s ease;
  }
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;

  .modal-container {
    transform: scale(0.92) translateY(20px);
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .modal-backdrop {
    padding: 1rem;
    align-items: flex-end;
  }

  .modal-container {
    max-height: 90vh;
    border-radius: 20px 20px 0 0;
  }

  .modal-hero {
    height: 180px;
  }

  .modal-hero .modal-title {
    font-size: 1.4rem;
  }

  .modal-content {
    padding: 1.2rem 1.5rem 1.5rem;
  }

  .modal-actions {
    flex-direction: column;
  }
}
</style>
