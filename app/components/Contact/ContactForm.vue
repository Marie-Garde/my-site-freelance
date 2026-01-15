<template>
  <div class="contact-form-container">
    <div class="toast-notification" :class="{ 'is-visible': formSubmitted }">
      <p>
        Merci pour votre message ! Je vous répondrai dans les plus brefs délais.
      </p>
    </div>

    <form class="contact-form" @submit.prevent="submitForm" novalidate>
      <div v-if="formError" class="error-message-box">
        <p>{{ formError }}</p>
      </div>
      <div class="form-group">
        <label for="name">Nom</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          placeholder="Votre nom"
          :class="{ 'is-invalid': errors.name }"
        />
        <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          placeholder="votre@email.com"
          :class="{ 'is-invalid': errors.email }"
        />
        <span v-if="errors.email" class="error-message">{{
          errors.email
        }}</span>
      </div>
      <div class="form-group">
        <label for="phone">Téléphone</label>
        <input
          type="tel"
          id="phone"
          v-model="form.phone"
          placeholder="Votre numéro de téléphone"
          :class="{ 'is-invalid': errors.phone }"
        />
        <span v-if="errors.phone" class="error-message">{{
          errors.phone
        }}</span>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          placeholder="Décrivez votre projet..."
          :class="{ 'is-invalid': errors.message }"
        ></textarea>
        <span v-if="errors.message" class="error-message">{{
          errors.message
        }}</span>
      </div>
      <button type="submit" :disabled="loading">
        <i class="ti ti-send"></i>
        <span>{{ loading ? "Envoi en cours..." : "Envoyer le message" }}</span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const config = useRuntimeConfig();

const form = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const errors = ref({});
const formSubmitted = ref(false);
const formError = ref("");
const loading = ref(false);

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const submitForm = async () => {
  errors.value = {};
  formError.value = "";

  if (!form.value.name) {
    errors.value.name = "Le nom est requis.";
  }
  if (!form.value.email && !form.value.phone) {
    errors.value.email = "L'email ou le téléphone est requis.";
    errors.value.phone = "L'email ou le téléphone est requis.";
  } else {
    if (form.value.email && !validateEmail(form.value.email)) {
      errors.value.email = "L'adresse email n'est pas valide.";
    }
  }

  if (!form.value.message) {
    errors.value.message = "Le message est requis.";
  }

  if (Object.keys(errors.value).length === 0) {
    loading.value = true;

    try {
      await emailjs.send(
        config.public.emailjsServiceId,
        config.public.emailjsTemplateId,
        {
          name: form.value.name,
          email: form.value.email,
          phone: form.value.phone,
          message: form.value.message,
        },
        config.public.emailjsPublicKey
      );

      formSubmitted.value = true;

      setTimeout(() => {
        form.value = { name: "", email: "", phone: "", message: "" };
        formSubmitted.value = false;
      }, 5000);
    } catch (error) {
      formError.value = "Erreur lors de l'envoi. Réessayez plus tard.";
      console.error("EmailJS error:", error);
    } finally {
      loading.value = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  position: relative;

  label {
    margin-bottom: 0.5rem;
    font-family: "Outfit", sans-serif;
  }

  input,
  textarea {
    padding: 0.75rem;
    border: 1px solid $background-secondary;
    border-radius: 5px;
    background-color: $background-secondary;
    color: $text-primary;
    font-family: "Space Grotesk", system-ui, sans-serif;
    font-size: 1rem;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: $primary;
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }

  &::placeholder {
    color: $text-tertiary;
    font-family: "Space Grotesk", system-ui, sans-serif;
  }
}

.is-invalid {
  border-color: #e53e3e;
}

.error-message {
  color: #e53e3e;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.error-message-box {
  padding: 1rem;
  background-color: #e53e3e;
  color: white;
  border-radius: 5px;
  margin-bottom: 1rem;
  text-align: center;
  font-family: "Space Grotesk", system-ui, sans-serif;
}

button {
  padding: 0.75rem;
  background-color: $background-secondary;
  color: $primary;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.3s ease;
  font-family: "Outfit", sans-serif;
  font-size: 1rem;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  i {
    margin-right: 5px;
    z-index: 2;
    position: relative;
  }

  span {
    z-index: 2;
    position: relative;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: $primary;
    transition: width 0.3s ease;
    z-index: -1;
  }

  &:hover:not(:disabled) {
    color: $text-primary;
    &::before {
      width: 100%;
    }
  }
}

.toast-notification {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translate(-50%, 10px);
  background-color: #26d99c;
  color: $background-primary;
  padding: 1rem 2rem;
  border-radius: 5px;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;

  &.is-visible {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, 0);
  }
}
</style>
