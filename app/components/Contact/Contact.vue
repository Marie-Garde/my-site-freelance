<template>
  <section id="contact" class="contact">
    <p class="comment comment-green">// Contact</p>
    <h2>Travaillons <span class="text-gradient">ensemble</span></h2>
    <div class="contact-content">
      <div class="contact-text">
        <div class="contact-cards-container">
          <ContactCard
            icon="ti-mail"
            title="contact@marie-garde.com"
            subtitle="Email"
          />
          <ContactCard
            icon="ti-phone"
            title="+33 6 27 87 44 26"
            subtitle="Téléphone"
          />
          <ContactCard
            icon="ti-map-pin"
            title="Toulouse, France (remote friendly)"
            subtitle="Localisation"
          />
        </div>
        <div class="code-card">
          <pre><code><span>// Disponibilité</span>
<span class="comment-purple">status</span>: <span class="comment-green">"Disponible"</span>
<span class="comment-purple">response_time</span>: <span class="comment-orange">"24-48h"</span>
</code></pre>
        </div>
      </div>
      <ContactForm />
    </div>
  </section>
</template>

<script setup>
import ContactForm from "./ContactForm.vue";
import InfoCard from "../About/InfoCard.vue"; // Import InfoCard
</script>

<style lang="scss" scoped>
.contact {
  padding: 4rem 2rem;
  background-color: $background-primary;
  display: flex;
  flex-direction: column;
  align-items: center;

  .contact-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    gap: 2rem;

    .contact-text {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      flex: 1;

      .contact-cards-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .code-card {
        background: $background-secondary;
        border: 1px solid #25303e;
        border-radius: 12px;
        padding: 1rem;

        pre {
          margin: 1rem 0;
        }
      }
    }

    :deep(.contact-form-container) {
      flex: 1;
    }
  }
}

@media (max-width: 768px) {
  .contact {
    padding: 2rem 1rem; /* Adjust padding for smaller screens */

    h2 {
      font-size: 2rem; /* Smaller title for mobile */
    }

    .contact-content {
      flex-direction: column; /* Stack content vertically */
      gap: 2rem; /* Adjust gap for vertical layout */
      justify-content: center; /* Center content */

      :deep(.contact-form-container) {
        width: 90%; /* Form takes 90% width on mobile */
      }
    }
  }
}
</style>
