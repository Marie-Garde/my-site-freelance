<template>
  <footer class="main-footer">
    <div class="footer-content">
      <div class="footer-left">
        <img :src="logoImage" alt="logo" />
      </div>
      <div class="footer-center">
        <div class="social-icons">
          <a href="#" target="_blank"><i class="ti ti-brand-github"></i></a>
          <a href="#" target="_blank"><i class="ti ti-brand-linkedin"></i></a>
          <a href="mailto:#"><i class="ti ti-mail"></i></a>
        </div>
      </div>
      <div class="footer-right">
        <p>2026</p>
        <NuxtLink to="/mentions-legales" class="legal-link">Mentions légales</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
import logoImage from "@/assets/Illustrations/logo.png";
</script>

<style lang="scss" scoped>
.main-footer {
  padding: 2rem 0;
  background-color: $background-secondary;
  color: $text-primary;
  border-top: 1px solid #25303e;

  .footer-content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; // 3 colonnes égales
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-left {
    justify-self: start;
    img {
      width: 90px;
    }
  }

  .footer-center {
    justify-self: center;
    display: flex;
    justify-content: center;
    gap: 1.5rem; /* Add gap for social icons on desktop */

    a {
      color: $text-tertiary;
      text-decoration: none;
      transition: color 0.3s;

      i {
        font-size: 2rem;
      }

      &:hover {
        color: $primary;
      }
    }
  }

  .footer-right {
    justify-self: end; // Aligné à droite
    text-align: right;
    p {
      font-size: 0.8rem;
      color: $text-tertiary;
      i {
        font-size: 1.2rem;
        margin: 0;
      }
    }
    .legal-link {
        color: $text-tertiary;
        text-decoration: none;
        font-size: 0.8rem;
        &:hover {
            color: $primary;
        }
    }
  }
}

@media (max-width: 768px) {
  .main-footer {
    padding: 1.5rem 1rem; /* Adjust padding for mobile */

    .footer-content {
      display: flex;
      flex-direction: column; /* Stack items vertically */
      gap: 1.5rem; /* Adjust gap between stacked items */
      text-align: center; /* Center all text content */

      .footer-left {
        justify-self: center; /* Center logo */
        img {
          width: 70px; /* Smaller logo on mobile */
        }
      }

      .footer-center {
        justify-self: center; /* Center social icons */
        gap: 1rem; /* Adjust gap for social icons */
        a i {
          font-size: 1.6rem; /* Smaller social icons */
        }
      }

      .footer-right {
        justify-self: center; /* Center legal info */
        text-align: center;
        p, .legal-link {
          font-size: 0.7rem; /* Smaller text for legal info */
        }
      }
    }
  }
}
</style>
