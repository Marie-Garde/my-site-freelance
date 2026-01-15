<template>
  <div class="legal-notices-container">
    <h1>Mentions Légales</h1>
    <p>Éditeur du site : Le site marie-garde.com est édité par :</p>
    <p><strong>Marie Garde Micro-entreprise</strong></p>
    <p>SIREN : 934 339 706</p>
    <p>Adresse : 101 chemin de la Salade Ponsans, 31400 Toulouse</p>
    <p>Email : contact@marie-garde.com</p>
    <p>Téléphone : +33 6 27 87 44 26</p>

    <h2>Directeur de publication</h2>
    <p>Le directeur de publication du site est Marie Garde.</p>

    <h2>Hébergement</h2>
    <p>Le site est hébergé par :</p>
    <p><strong>Vercel Inc.</strong></p>
    <p>340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
    <p>
      Site web :
      <a href="https://vercel.com" target="_blank">https://vercel.com</a>
    </p>

    <h2>Propriété intellectuelle</h2>
    <p>
      L'ensemble du contenu de ce site (textes, images, code source, design) est
      la propriété exclusive de Marie Garde, sauf mention contraire. Toute
      reproduction, distribution, modification, adaptation, retransmission ou
      publication de ces différents éléments est strictement interdite sans
      l'accord écrit préalable de Marie Garde.
    </p>

    <h2>Protection des données personnelles</h2>
    <p>
      Conformément au Règlement Général sur la Protection des Données (RGPD) et
      à la loi Informatique et Liberté, vous disposez d'un droit d'accès, de
      rectification, de suppression et d'opposition aux données personnelles
      vous concernant.
    </p>

    <h3>Données collectées</h3>
    <p>
      Les seules données personnelles collectées sur ce site le sont via le
      formulaire de contact : Nom, Adresse email, Message.
    </p>
    <p>
      <strong>Finalité :</strong> Ces informations sont utilisées uniquement
      pour répondre à votre demande et ne sont pas conservées au-delà de la
      durée nécessaire au traitement de celle-ci.
    </p>
    <p>
      <strong>Destinataires :</strong> Les données collectées sont destinées
      exclusivement à Marie Garde et ne sont jamais transmises à des tiers.
    </p>
    <p>
      <strong>Sécurité :</strong> Les données sont transmises de manière
      sécurisée et stockées dans le respect des normes de sécurité en vigueur.
    </p>

    <h3>Vos droits</h3>
    <p>
      Pour exercer vos droits d'accès, de rectification, de suppression ou
      d'opposition, contactez-nous à l'adresse : marie_garde@ymail.com
    </p>
    <p><strong>Responsable du traitement des données :</strong> Marie Garde</p>
    <p>Email : contact@marie-garde.com</p>

    <h2>Cookies</h2>
    <p>
      Ce site n'utilise aucun cookie ni outil de tracking. Votre navigation
      reste entièrement privée.
    </p>

    <h2>Crédits</h2>
    <p>Conception et développement : Marie Garde</p>
    <p>
      Icônes : Tabler Icons (<a href="https://tabler-icons.io" target="_blank"
        >https://tabler-icons.io</a
      >)
    </p>

    <h2>Litiges</h2>
    <p>
      Les présentes mentions légales sont régies par le droit français. En cas
      de litige, et à défaut d'accord amiable, les tribunaux français seront
      seuls compétents.
    </p>

    <p>Dernière mise à jour : [DATE_DU_JOUR]</p>
  </div>
</template>

<script setup>
// No specific script logic yet
</script>

<style lang="scss" scoped>
.legal-notices-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 100px auto 0 auto;
  color: $text-primary;

  h1 {
    font-family: "Outfit", sans-serif;
    color: $primary;
    margin-bottom: 1.5rem;
  }

  p {
    font-family: "Space Grotesk", system-ui, sans-serif;
    line-height: 1.6;
  }
}
</style>
