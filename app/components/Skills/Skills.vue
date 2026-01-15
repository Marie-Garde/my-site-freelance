<template>
  <section id="skills" class="skills">
    <p class="comment comment-green">// Compétences</p>
    <h2>Ma stack <span class="text-gradient">technique</span></h2>
    <p class="subtitle">
      Les technologies que j''utilise au quotidien pour créer des expériences
      web modernes et performantes. Je m'adapte également très vite aux
      nouvelles technologies pour compléter efficacement vos besoins.
    </p>
    <div class="skills-container">
      <SkillCard title="Frontend" icon="ti-layout-sidebar-left-collapse">
        <div class="badge-container">
          <span class="badge">Vue.js</span>
          <span class="badge">Nuxt.js</span>
          <span class="badge">React</span>
          <span class="badge">Angular</span>
          <span class="badge">HTML5</span>
          <span class="badge">CSS3</span>
          <span class="badge">Tailwind CSS</span>
          <span class="badge">JavaScript</span>
          <span class="badge">TypeScript</span>
          <span class="badge">GraphQL (Client side)</span>
        </div>
      </SkillCard>
      <SkillCard title="Backend et BDD" icon="ti-server-2">
        <div class="badge-container">
          <span class="badge">Node.js</span>
          <span class="badge">Nest.js</span>
          <span class="badge">Express</span>
          <span class="badge">GraphQL (Server side)</span>
          <span class="badge">MySQL</span>
          <span class="badge">MongoDB</span>
          <span class="badge">Prisma</span>
        </div>
      </SkillCard>
      <SkillCard title="Outils & Autre" icon="ti-tools">
        <div class="badge-container">
          <span class="badge">Git</span>
          <span class="badge">GitHub</span>
          <span class="badge">Docker</span>
          <span class="badge">Jest</span>
          <span class="badge">AWS</span>
          <span class="badge">Figma</span>
          <span class="badge">Vercel</span>
          <span class="badge">Netlify</span>
          <span class="badge">Scrum</span>
          <span class="badge">Jira</span>
          <span class="badge">Sanity.io</span>
        </div>
      </SkillCard>
    </div>
  </section>
</template>

<script setup>
import SkillCard from "./SkillCard.vue";
</script>

<style lang="scss" scoped>
.skills {
  padding: 4rem 2rem;
  background-color: $background-primary;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .subtitle {
    max-width: 1200px;
    color: $text-tertiary;
    margin-bottom: 2rem;
  }

  .skills-container {
    display: flex;
    justify-content: center;
    gap: 2rem;
    max-width: 1200px; // Added max-width
    width: 100%; // Added width to make the container responsive

    :deep(.skill-card) {
      flex: 1; // Make cards take up equal space
    }
  }
}

@media (max-width: 768px) {
  .skills {
    padding: 2rem 1rem; /* Adjust padding for smaller screens */

    h2 {
      font-size: 2rem; /* Smaller title for mobile */
    }

    .subtitle {
      font-size: 0.9rem; /* Smaller subtitle for mobile */
    }

    .skills-container {
      flex-direction: column; /* Stack cards vertically */
      gap: 1.5rem; /* Adjust gap for vertical layout */
    }
  }
}
</style>
