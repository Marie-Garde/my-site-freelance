<template>
  <section id="projects" class="projects">
    <p class="comment comment-green">// Portfolio</p>
    <h2 class="section-title">
      Mes <span class="text-gradient">Projets</span> marquants
    </h2>
    <p class="subtitle">
      Quelques exemples de projets les plus marquants sur lesquels j'ai
      travaillé. Cliquez pour en savoir plus.
    </p>

    <div
      class="carousel-wrapper"
      @mouseenter="pauseCarousel"
      @mouseleave="resumeCarousel"
    >
      <div class="carousel-gradient carousel-gradient--left"></div>
      <div class="carousel-gradient carousel-gradient--right"></div>

      <div ref="carouselTrack" class="carousel-track">
        <ProjectCard
          v-for="(project, index) in duplicatedProjects"
          :key="`${project.id}-${index}`"
          :project="project"
          @open="openModal(project)"
        />
      </div>
    </div>

    <ProjectModal :project="selectedProject" @close="closeModal" />
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import ProjectCard from "./ProjectCard.vue";
import ProjectModal from "./ProjectModal.vue";

import mesImage from "@/assets/Illustrations/MES.png";
import stellantisImage from "@/assets/Illustrations/Stellantis.jpg";
import triDentImage from "@/assets/Illustrations/Tri-Dent.png";
import reflexobienetreImage from "@/assets/Illustrations/reflexobienetre.png";
import cevaImage from "@/assets/Illustrations/ceva.png";
import eonImage from "@/assets/Illustrations/eon.jpg";
import sixenseImage from "@/assets/Illustrations/sixense.png";
import InforM3Image from "@/assets/Illustrations/InforM3.png";

const projects = [
  {
    id: 1,
    title: "Mon Espace Santé",
    description:
      "Ce projet vise à fournir une solution complète de gestion médicale aux utilisateurs, par le biais d'un lien plus fort avec les professionnels de santé, un suivi de leurs informations et documents, ainsi que de la possibilité de gérer les profils de leurs enfants.",
    image: mesImage,
    technologies: ["Vue.js", "NestJs", "GraphQL", "Docker"],
    highlights: [
      "Plateforme nationale de santé",
      "Gestion de profils multi-utilisateurs",
      "Intégration avec les professionnels de santé",
      "Suivi et stockage de documents médicaux",
      "Stockage de données de santé sensibles avec des normes de sécurité élevées",
    ],
    demoLink: "https://www.monespacesante.fr/",
  },
  {
    id: 2,
    title: "Stellantis",
    description:
      "Ce projet a pour objectif de gérer les solutions des objets connectés dans les voitures. Le cloud AWS est utilisé pour tous les déploiements et les tests des solutions. Il y a également des interactions avec Salesforce, Drupal et Zuora.",
    image: stellantisImage,
    technologies: ["NodeJs", "AWS", "Jira", "Scrum"],
    highlights: [
      "Premier déploiement d'un repository vide avec l'aide d'un DevOps",
      "Création de lambdas à divers objectifs, surveillance par CloudWatch",
      "Création puis utilisation de SQS et SNS",
      "Gestion sécurisée des credentials via AWS Secrets Manager",
      "Stockage puis récupération d'informations via Secret Manager",
      "Appels et renvoi de données à Salesforce",
      "Créations d'alertes en fonction du retour de Salesforce",
    ],
  },
  {
    id: 3,
    title: "Cabinet dentaire Tri-Dent",
    description:
      "Ce projet vise à créer un site web vitrine d'un cabinet dentaire de banlieue toulousaine moderne et professionnel avec une identité visuelle forte. Présentation des professionnels et de leurs valeurs. Prise de rendez-vous et de contact. Optimisation SEO, spécialement pour du référencement local.",
    image: triDentImage,
    technologies: ["Nuxt.js", "Pinia", "Sanity.io", "Vercel"],
    highlights: [
      "Site vitrine avec identité visuelle forte",
      "Prise de rendez-vous en ligne",
      "Optimisation SEO et référencement local",
      "CMS headless avec Sanity.io",
    ],
    githubLink: "https://github.com/Marie-Garde/tri-dent",
    demoLink: "https://www.cabinet-dentaire-tri-dent-cornebarrieu.fr/",
  },
  {
    id: 4,
    title: "Reflex'ô Bien-êtreCorrèze",
    description:
      "Reflex'ô bien-être Corrèze est un site vitrine développé pour un cabinet de réflexologie et de médecine traditionnelle chinoise situé au sud de Brive-la-Gaillarde (Corrèze). Le site met en valeur l'expertise de la praticienne, détaille ses prestations, explique les bénéfices des soins proposés et communique sur les valeurs du cabinet. Son objectif principal : renforcer la visibilité locale du cabinet et fournir un support de communication professionnel dans le cadre d'une création d'entreprise.",
    image: reflexobienetreImage,
    technologies: ["Vue.JS", "Sanity.io", "Vercel"],
    highlights: [
      "Site vitrine avec identité visuelle forte",
      "Prise de rendez-vous en ligne",
      "Optimisation SEO et référencement local",
      "CMS headless avec Sanity.io",
    ],
    githubLink: "https://github.com/Marie-Garde/reflexo-bien-etre-vuejs",
    demoLink: "https://reflexo-bien-etre.fr/accueil",
  },
  {
    id: 5,
    title: "Infor M3",
    description:
      "Participation à plusieurs projets liés au logiciel InforM3, avec des missions front-end et back-end.",
    image: InforM3Image,
    technologies: ["Angular", "Node.JS", "Nest.JS"],
    highlights: [
      "Création from scratch d'un microservice NestJS pour alléger le front-end",
      "Gestion de statuts multiples et événements associés",
      "Ajout de notifications dynamiques basées sur les retours back-end",
      "Récupération de données depuis InforM3, mapping et renvoi optimisé vers le front-end",
    ],
  },
  {
    id: 6,
    title: "CEVA logistics",
    description:
      "Reprise et modernisation d'une librairie de composants Angular développée sans dépendances externes. Mise en place de Storybook pour présenter des composants indépendants et prêts à l'emploi aux clients.",
    image: cevaImage,
    technologies: ["Angular", "Node.JS", "Nest.JS"],
    highlights: [
      "Migration d'Angular 8 vers Angular 13",
      "Développement de composants complexes sans librairies externes (datepicker, modales ponctuelles et globales)",
      "Intégration de Storybook pour la documentation et la démonstration des composants",
      "Création de composants UI conformes aux maquettes (boutons, formulaires, cards...)",
      "Établissement d'un système de thèmes multi-marques (dark/grey/light + palettes de couleurs personnalisées)",
    ],
  },
  {
    id: 7,
    title: "E ON",
    description:
      "Plateforme de gestion de portefeuilles clients (gaz et électricité). Refonte complète d'un site de gestion de portefeuilles clients pour une entreprise britannique de gaz et d'électricité, avec pour objectif de faciliter le travail des employés.",
    image: eonImage,
    technologies: ["Angular", "Angular Material"],
    highlights: [
      "Développement front-end de pages conformes aux maquettes",
      "Optimisation des formulaires : messages d'erreur personnalisés, amélioration de la récupération et du stockage des données",
      "Application de contraintes de sécurité suite à un audit du site",
    ],
  },
  {
    id: 8,
    title: "Sixense Group",
    description:
      "Plateforme de gestion de portefeuilles Application de liaison pour chantiers nucléaires. Mise en place d'une application de liaison dans les chantiers nucléaires avec une partie desktop pour le suivi depuis les bureaux et une partie mobile pour la communication depuis le terrain. (gaz et électricité). Refonte complète d'un site de gestion de portefeuilles clients pour une entreprise britannique de gaz et d'électricité, avec pour objectif de faciliter le travail des employés.",
    image: sixenseImage,
    technologies: ["Angular", "Nest.JS", "Postgres", "pgAdmin"],
    highlights: [
      "Création de pages de gestion d'utilisateurs conformes aux maquettes, avec permissions basées sur les rôles",
      "Modification de la forme et du contenu des PDF exportés selon les demandes client",
      "Application de contraintes de sécurité suite à un audit du site",
    ],
  },
];

const duplicatedProjects = [...projects, ...projects];

const carouselTrack = ref(null);
const selectedProject = ref(null);
let animationId = null;
let scrollPosition = 0;
let isPaused = false;
const scrollSpeed = 0.5;

function animate() {
  if (!isPaused && carouselTrack.value) {
    scrollPosition += scrollSpeed;
    const trackWidth = carouselTrack.value.scrollWidth / 2;
    if (scrollPosition >= trackWidth) {
      scrollPosition = 0;
    }
    carouselTrack.value.style.transform = `translateX(-${scrollPosition}px)`;
  }
  animationId = requestAnimationFrame(animate);
}

function pauseCarousel() {
  isPaused = true;
}

function resumeCarousel() {
  isPaused = false;
}

function openModal(project) {
  selectedProject.value = project;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  selectedProject.value = null;
  document.body.style.overflow = "";
}

function handleKeydown(e) {
  if (e.key === "Escape" && selectedProject.value) {
    closeModal();
  }
}

onMounted(() => {
  animationId = requestAnimationFrame(animate);
  document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId);
  document.removeEventListener("keydown", handleKeydown);
  document.body.style.overflow = "";
});
</script>

<style lang="scss" scoped>
.projects {
  padding: 4rem 0;
  background-color: $background-secondary;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  .subtitle {
    max-width: 1200px;
    color: $text-tertiary;
    margin-bottom: 3rem;
    padding: 0 2rem;
  }
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 1rem 0 2rem;
}

.carousel-gradient {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 120px;
  z-index: 2;
  pointer-events: none;

  &--left {
    left: 0;
    background: linear-gradient(
      90deg,
      $background-secondary 0%,
      transparent 100%
    );
  }

  &--right {
    right: 0;
    background: linear-gradient(
      270deg,
      $background-secondary 0%,
      transparent 100%
    );
  }
}

.carousel-track {
  display: flex;
  gap: 2rem;
  padding: 1rem 2rem;
  will-change: transform;
}

@media (max-width: 768px) {
  .projects {
    padding: 2rem 0;

    .section-title {
      font-size: 2rem;
      padding: 0 1rem;
    }

    .subtitle {
      margin-bottom: 2rem;
      padding: 0 1rem;
    }
  }

  .carousel-gradient {
    width: 40px;
  }

  .carousel-track {
    gap: 1.2rem;
    padding: 0.5rem 1rem;
  }
}
</style>
