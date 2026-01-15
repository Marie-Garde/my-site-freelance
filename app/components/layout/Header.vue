<template>
  <header class="main-header">
    <div class="header-left">
      <a href="/">
        <img :src="logoImage" alt="logo" class="logo" />
      </a>
    </div>

    <!-- Desktop Menu -->
    <nav class="header-center">
      <a href="#about">À propos</a>
      <a href="#skills">Compétences</a>
      <a href="#projects">Projets</a>
    </nav>
    <div class="header-right">
      <a href="#contact" class="contact-button">Me contacter</a>
    </div>

    <!-- Burger Menu Button -->
    <button
      class="burger-menu"
      @click="toggleMenu"
      :class="{ 'is-active': isMenuOpen }"
    >
      <span class="burger-line"></span>
      <span class="burger-line"></span>
      <span class="burger-line"></span>
    </button>

    <!-- Mobile Menu Overlay -->
    <!-- Mobile Menu Overlay -->
    <div class="mobile-menu" :class="{ 'is-open': isMenuOpen }">
      <div class="mobile-menu-header">
        <img :src="logoImage" alt="logo" class="logo" />
      </div>

      <!-- Nouveau wrapper pour nav + bouton -->
      <div class="mobile-menu-content">
        <nav class="mobile-menu-nav">
          <a href="#about" @click="closeMenu">À propos</a>
          <a href="#skills" @click="closeMenu">Compétences</a>
          <a href="#projects" @click="closeMenu">Projets</a>
        </nav>
        <a href="#contact" class="contact-button" @click="closeMenu"
          >Me contacter</a
        >
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import logoImage from "@/assets/Illustrations/logo.png";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style lang="scss" scoped>
.main-header {
  padding: 1rem;
  background-color: $background-secondary;
  color: $text-primary;
  border-bottom: 1px solid #25303e;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; // 3 colonnes égales
  align-items: center;
  z-index: 10;
  position: sticky;
  top: 0;
  height: 60px;

  .header-left {
    justify-self: start; // Aligné à gauche

    .logo {
      height: 60px;
    }
  }

  .header-center {
    justify-self: center; // Centré
    display: flex;
    gap: 2rem;

    a {
      color: $text-primary;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: $primary;
      }
    }
  }

  .header-right {
    justify-self: end; // Aligné à droite

    .contact-button {
      background-color: transparent;
      color: $primary;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      border: 1px solid $primary;
      text-decoration: none;
      transition: background-color 0.3s, color 0.3s;

      &:hover {
        background-color: #1d9180;
        color: $text-primary;
      }
    }
  }

  .burger-menu,
  .mobile-menu {
    display: none;
  }
}

// Responsive Styles
@media (max-width: 768px) {
  .main-header {
    display: flex;
    justify-content: space-between;

    .header-center,
    .header-right {
      display: none;
    }

    .burger-menu {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 2rem;
      height: 2rem;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
      z-index: 20;

      &:focus {
        outline: none;
      }

      .burger-line {
        width: 2rem;
        height: 0.25rem;
        background: $text-primary;
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
      }

      &.is-active .burger-line:nth-child(1) {
        transform: rotate(45deg);
      }
      &.is-active .burger-line:nth-child(2) {
        opacity: 0;
        transform: translateX(20px);
      }
      &.is-active .burger-line:nth-child(3) {
        transform: rotate(-45deg);
      }
    }

    .mobile-menu {
      position: fixed;
      top: 0;
      left: 0;
      right: 0; // ← Ajoutez ceci
      bottom: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba($background-secondary, 0.95);
      z-index: 15;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transform: translateX(-100%);
      transition: transform 0.3s ease-in-out;

      &.is-open {
        transform: translateX(0);
      }

      .mobile-menu-header {
        .logo {
          height: 60px;
          padding: 2rem;
        }
      }

      .mobile-menu-content {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 2rem;
        padding: 2rem;

        .mobile-menu-nav {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 2rem;

          a {
            color: $text-primary;
            text-decoration: none;
            font-size: 1.5rem;

            &:hover {
              color: $primary;
            }
          }
        }

        .contact-button {
          background-color: $primary;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 5px;
          border: 1px solid $primary;
          text-decoration: none;
          font-size: 1.2rem;
        }
      }
    }
  }
}
</style>
