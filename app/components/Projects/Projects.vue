<template>
  <section id="projects" class="projects">
    <p class="comment comment-green">// Portfolio</p>
    <h2 class="section-title">
      Mes <span class="text-gradient">Projets</span> marquants
    </h2>
    <p class="subtitle">
      Quelques exemples de projets les plus marquants sur lesquels j'ai
      travaillé. Le code est parfois soumis à confidentialité.
    </p>
    <div class="projects-container">
      <ProjectCard
        title="Mon Espace Santé"
        description="Ce projet vise à fournir une solution complète de
gestion médicale aux utilisateurs, par le biais d’un lien plus fort
avec les professionnnels de santé, un suivi de leurs informations
et documents, ainsi que de la possibilité de gérer les profils de
leurs enfants."
        :image="mesImage"
        :technologies="['Vue.js', 'NestJs', 'GraphQL', 'Docker']"
        demoLink="https://www.monespacesante.fr/"
      />
      <ProjectCard
        title="Stellantis"
        description="Ce projet a pour objectif de gérer les solutions des objets
connectés dans les voitures. Le cloud AWS est utilisé pour tous les
déploiements et les tests des solutions. Il y a également des
interactions avec Salesforce, Drupal et Zuora."
        :image="stellantisImage"
        :technologies="['NodeJs', 'AWS', 'Jira', 'Scrum']"
      />
      <ProjectCard
        title="Cabinet dentaire Tri-Dent"
        description="Ce projet vise à créer un site web vitrine d’un cabinet
dentaire de banlieux toulousaine moderne et professionnel avec une
identité visuelle forte. Présentation des professionnels et de leurs
valeurs. Prise de rendez-vous et de contact. Optimisation SEO,
spécialement pour du référencement local."
        :image="triDentImage"
        :technologies="['Nuxt.js', 'Pinia', 'Sanity.io', 'Vercel']"
        githubLink="https://github.com/Marie-Garde/tri-dent"
      />
    </div>
  </section>
</template>

<script setup>
import ProjectCard from "./ProjectCard.vue";
import mesImage from "@/assets/Illustrations/MES.png";
import stellantisImage from "@/assets/Illustrations/Stellantis.jpg";
import triDentImage from "@/assets/Illustrations/Tri-Dent.png";
</script>

<style lang="scss" scoped>
.projects {
  padding: 4rem 2rem;
  background-color: $background-secondary;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .subtitle {
    max-width: 1200px;
    color: $text-tertiary;
    margin-bottom: 2rem;
  }

  .projects-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    max-width: 1200px; /* Limit overall width */
    margin: 0 auto; /* Center the container */
    width: 100%;

    :deep(.project-card) {
      flex: 1 1 30%; /* Make cards take equal space, allowing for gap */
      border-radius: 12px; /* Rounded borders */
      // Optionally, set a min-width to prevent cards from becoming too small
      min-width: 280px;
    }
  }
}

@media (max-width: 768px) {
  .projects {
    padding: 2rem 1rem; /* Adjust padding for smaller screens */

    .section-title {
      font-size: 2rem; /* Smaller title for mobile */
    }

    .projects-container {
      flex-direction: column; /* Stack cards vertically */
      align-items: center; /* Center cards */
      gap: 1.5rem; /* Adjust gap for vertical layout */

      :deep(.project-card) {
        width: 90%; /* Cards take 90% width on mobile */
      }
    }
  }
}
</style>
