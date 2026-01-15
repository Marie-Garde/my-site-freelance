<template>
  <section id="about" class="about">
    <p class="comment comment-green">// À propos</p>
    <h2 class="section-title">
      <span class="text-gradient">Qui</span> suis-je ?
    </h2>

    <div class="about-layout">
      <div class="about-left">
        <div class="about-intro">
          <div class="about-image">
            <img :src="myPicture" alt="Photo de la développeuse" />
          </div>
          <div class="about-text">
            <p>
              Développeuse full-stack JavaScript depuis 5 ans, j'ai démarré ma
              carrière chez IBM puis Accenture, où j'ai travaillé sur des
              projets d'envergure comme Mon Espace Santé (CNAM) et les solutions
              connectées pour Stellantis. En 2024, je me suis lancée en
              freelance pour découvrir des projets variés qui me challengent.
            </p>
            <p>
              Autonome, pédagogue (ex-backup Tech Lead), je m'intègre rapidement
              dans vos équipes et monte vite en compétence sur de nouvelles
              technos. J'ai également managé des développeurs juniors et
              contribué à des migrations techniques complexes.
            </p>
            <p>
              Je livre du code propre, testé et maintenable, avec une attention
              particulière à la qualité et aux bonnes pratiques : tests
              unitaires, clean architecture, méthodologie Scrum.
            </p>
          </div>
        </div>
        <pre class="code-block">
<code><span class="comment-purple">const</span> <span class="comment-blue">developer</span> = {
  <span class="comment-green">name</span> : <span class="comment-orange">"Marie Garde"</span>,
  <span class="comment-green">location</span> : <span class="comment-orange">"Toulouse, France"</span>,
  <span class="comment-green">available</span> : <span class="comment-blue">true</span>
};</code>
</pre>
      </div>

      <div class="about-right">
        <div class="info-cards-grid">
          <InfoCard
            icon="ti-code"
            title="5+ ans d'XP"
            value="En développement web JS full-stack"
          />
          <InfoCard
            icon="ti-rocket"
            title="20+ projets"
            value="livrés avec succès"
          />
          <InfoCard
            icon="ti-mug"
            title="Hybride ou full remote"
            value="Flexibilité totale"
          />
          <InfoCard
            icon="ti-bolt"
            title="Montée en compétence rapide"
            value="Autonome sur VueJs en 1.5mois"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import InfoCard from "./InfoCard.vue";
import myPicture from "@/assets/Illustrations/my-picture.png";
</script>

<style lang="scss" scoped>
.about {
  padding: 4rem 2rem;
  background-color: $background-secondary;
  text-align: center;

  .comment {
    margin-bottom: 1rem;
  }

  .about-layout {
    display: grid;
    grid-template-columns: 2fr 1fr; // Two equal columns
    gap: 1rem;
    max-width: 1200px;
    margin: 0 auto;
    text-align: left;

    .about-left {
      display: flex;
      flex-direction: column; // Changed back to column
      gap: 1.5rem;

      .about-intro {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 1.5rem;

        .about-image {
          img {
            width: 300px;
            height: 300px;
            object-fit: cover;
          }
        }

        .about-text {
          display: flex;
          flex-direction: column;
        }
      }

      p {
        color: $text-tertiary;
      }

      .code-block {
        background: $background-primary;
        border: 1px solid #25303e;
        border-radius: 12px;
        padding: 2rem;
        margin: 0;
        // max-height: 30%;
      }
    }

    .about-right {
      display: flex;
      justify-content: center; // Center the grid of cards

      .info-cards-grid {
        display: grid;
        grid-template-columns: 1fr 1fr; // 2x2 grid
        gap: 1.5rem;
      }
    }
  }
}

@media (max-width: 768px) {
  .about {
    padding: 2rem 1rem; /* Adjust padding for smaller screens */

    .section-title {
      font-size: 2rem; /* Smaller title for mobile */
    }

    .about-layout {
      grid-template-columns: 1fr; /* Stack columns vertically */
      gap: 2rem; /* Increase gap between stacked sections */
      text-align: center; /* Center text for mobile */

      .about-left {
        .about-intro {
          flex-direction: column; /* Stack image and text vertically */
          align-items: center; /* Center items when stacked */
          gap: 1rem;

          .about-image {
            img {
              width: 200px; /* Larger image on mobile */
              height: 200px;
            }
          }

          .about-text {
            p {
              font-size: 0.9rem; /* Smaller text for mobile */
              margin-bottom: 1rem;
            }
          }
        }

        .code-block {
          padding: 1rem; /* Adjust padding for code block */
          font-size: 0.8rem; /* Smaller font for code block */
        }
      }

      .about-right {
        justify-content: flex-start; /* Ensure cards are not centered, take full width */
        .info-cards-grid {
          grid-template-columns: 1fr; /* Stack info cards vertically */
          gap: 1rem;
          width: 100%; /* Make info cards grid take full width */
        }
      }
    }
  }
}
</style>
