<template>
  <section class="hero">
    <div class="hero-content">
      <p class="comment comment-green">// Bienvenue sur mon site</p>
      <h1>Marie <span class="text-gradient">Garde</span></h1>
      <p class="comment">
        <span class="comment-purple">const</span>
        <span class="comment-blue"> role</span> =
        <span class="comment-orange">"</span
        ><span class="comment-green">Développeuse web freelance</span
        ><span class="comment-orange">"</span>;
      </p>
      <p class="description">
        Développeuse full-stack <span class="color-primary">JavaScript</span>,
        je m'intègre dans vos équipes pour développer des applications web
        modernes et performantes. Vue.js, Nuxt, React, Node.js, ... Je
        transforme vos idées en code propre et maintenable.
      </p>
      <div class="cta-buttons">
        <a href="#projects" class="cta-button primary">Voir mes projets</a>
        <a
          href="/CV/CV-Marie-Garde.pdf"
          download="CV-Marie-Garde.pdf"
          class="cta-button secondary"
          >Télécharger mon CV</a
        >
      </div>
      <div class="social-icons">
        <a href="https://github.com/Marie-Garde" target="_blank"
          ><i class="ti ti-brand-github"></i
        ></a>
        <a href="https://linkedin.com/in/Marie-Garde" target="_blank"
          ><i class="ti ti-brand-linkedin"></i
        ></a>
        <a href="mailto:contact@marie-garde.com"><i class="ti ti-mail"></i></a>
      </div>
    </div>
    <a href="#about" class="scroll-down-arrow">
      <i class="ti ti-arrow-down"></i>
    </a>
  </section>
</template>

<style lang="scss" scoped>
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
  background: radial-gradient(
    ellipse at top,
    #1a1f28 0%,
    $background-primary 70%
  );
  color: $text-primary;
  text-align: center;
  position: relative;

  .scroll-down-arrow {
    animation: bounce 2s infinite;
    color: $text-primary;
    text-decoration: none;
    position: absolute;
    bottom: 20px;

    i {
      font-size: 2rem;
    }
  }

  .hero-content {
    h1 {
      font-size: 6rem;
      margin-bottom: 1rem;
    }

    .comment {
      margin-bottom: 20px;
    }

    p {
      font-size: 1.25rem;
      margin: 0;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      .description {
        color: $text-tertiary;
      }
    }

    .cta-buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-top: 2rem;

      .cta-button {
        padding: 0.75rem 1.5rem;
        text-decoration: none;
        border-radius: 5px;
        font-weight: bold;
        transition: background-color 0.3s, color 0.3s, border-color 0.3s;
        border: 2px solid transparent;

        &.primary {
          background-color: $primary;
          color: white;
          border-color: $primary;

          &:hover {
            background-color: darken($primary, 10%);
          }
        }

        &.secondary {
          background-color: transparent;
          color: $primary;
          border-color: $primary;

          &:hover {
            background-color: $primary;
            color: white;
          }
        }
      }
    }

    .social-icons {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin-top: 6rem;

      a {
        color: $text-tertiary;
        text-decoration: none;
        transition: color 0.3s;

        i {
          font-size: 3rem;
        }

        &:hover {
          color: $text-primary;
        }
      }
    }
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: calc(
      100vh - 6rem
    ); /* Adjust based on your header/footer height */
    padding: 0 20px; /* Add some padding for smaller screens */

    .hero-content {
      h1 {
        font-size: 3.5rem; /* Smaller font size for mobile */
      }

      p {
        font-size: 1rem; /* Smaller font size for mobile descriptions */
        max-width: 90%; /* Adjust max-width for better text flow */
      }

      .comment {
        font-size: 0.9rem; /* Smaller comment font size */
      }

      .cta-buttons {
        flex-direction: column; /* Stack buttons vertically */
        align-items: center; /* Center the stacked buttons */
        gap: 0.75rem; /* Reduce gap between stacked buttons */

        .cta-button {
          width: 80%; /* Make buttons take more width */
          max-width: 300px; /* Limit max width for buttons */
        }
      }

      .social-icons {
        margin-top: 4rem; /* Adjust margin for social icons */
        gap: 1rem; /* Reduce gap between social icons */

        a i {
          font-size: 2.2rem; /* Smaller social icon size */
        }
      }
    }

    .scroll-down-arrow {
      bottom: 10px; /* Adjust arrow position */
      i {
        font-size: 1.5rem; /* Smaller arrow icon */
      }
    }
  }
}
</style>
