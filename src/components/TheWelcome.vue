<script setup>
import { RouterLink, RouterView } from 'vue-router'
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <RouterLink to="/">
        <DocumentationIcon />
      </RouterLink>
    </template>
    <template #heading>Visual Design</template>
    <p>
      Effective
      <a href="https://www.nngroup.com/articles/principles-visual-design/" target="_blank" rel="noopener">Visual
        design</a>
      is a crucial element which emcompasses the creative and strategic use of visual element to communicate a message.
    </p>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <RouterLink to="">
        <ToolingIcon />
      </RouterLink>
    </template>
    <template #heading>User Experience</template>
    <p>
      Creating good user interfaces and interactions that are intuitive, efficient, and enjoyable.
      <a href="https://www.nngroup.com/articles/definition-user-experience/" target="_blank" rel="noopener">A successful
        ux design</a> focuses on usability, accessibility, and aethetics to ensure a positive experience.
    </p>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <a href="https://github.com/flamingo-dev423" target="_blank" rel="noopener" class="Resume">
        <EcosystemIcon />
      </a>
    </template>
    <template #heading>Github Repo</template>
    <p>
      <a href="https://www.figma.com/resource-library/what-is-prototyping/" target="_blank" rel="noopener">Prototyping</a>
      deals with creating a preliminary version of a product to test its functionality, design, and user experience before
      investing resources in full-scale production.
    </p>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <a href="https://drive.google.com/file/d/1BpqA5Yxf49On1mgAWFKTn4upbo6jgFaG/view?usp=drivesdk" download class="Resume">
        <CommunityIcon />
      </a>
    </template>
    <template #heading>Resume</template>
    <p>
      Click on the icon to download resume.
    </p>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <router-link to="">
        <SupportIcon />
      </router-link>
    </template>
    <template #heading>Contact Information</template>
    <p style="display: flex; position: relative; top: 10px;">
      <div style="margin-right: 2rem;">
    <a v-bind:href="'https://instagram.com/uiux.hokage'" target="_blank" rel="noopener" class="tag">
      <img src="@/assets/instagram-1-svgrepo-com.svg" width="25" height="25" alt="instagram logo" srcset="">
    </a>
  </div>

    <div style="margin-right: 2rem;">
      <a v-bind:href="'https://twitter.com/uiux_hokage'" target="_blank" rel="noopener" class="tag">
        <img src="@/assets/twitter-1-svgrepo-com.svg" width="25" height="25" alt="twitter logo" srcset="">
      </a>
    </div>

    <!-- <div style="margin-right: 2rem;">
      <a v-bind:href="''" target="_blank" rel="noopener" class="tag">
        <img src="@/assets/behance-svgrepo-com.svg" width="25" height="25" alt="twitter logo" srcset="">
      </a>
    </div> -->

    <div style="margin-right: 2rem;">
      <a v-bind:href="'https://mainstack.me/flamingo'" target="_blank" rel="noopener" class="tag">
        <img src="@/assets/link-icon.svg" width="25" height="25" alt="twitter logo" srcset="">
      </a>
    </div>

    <div class="elfsight-app-bdb9180a-3fc3-4587-99cb-e1e622863df2">
      <a v-bind:href='""' target="_blank" rel="noopener" class="tag">
        <img src="@/assets/whatsapp-svgrepo-com.svg" width="25" height="25" alt="whatsapp logo" srcset="">
      </a>
    </div>
    </p>
  </WelcomeItem>

  <RouterView />
</template>

<style scoped>
p {
  font-weight: 100;
}
.Resume {
  color: var(--color-text);
}
.Resume:hover {
  background-color: transparent;
  color: hsla(160, 100%, 37%, 1);
}
a.tag:hover {
  background-color: transparent;
}

.router-link-exact-active {
  color: var(--color-text);
}

.router-link-exact-active:hover {
  background-color: transparent;
  color: hsla(160, 100%, 37%, 1);
}
</style>


