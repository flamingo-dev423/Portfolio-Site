<script setup>
import { ref } from 'vue';

const arr = ref(["I'm George Ogumba", "A User Interface Designer", "User Researcher", "Frontend Developer"]);

defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>

    <h3> <span style="font-weight: bolder; font-size: 1.2rem; color: #fff;">
      <VueWriter 
      :array="arr"
      :typeSpeed="200"
      :eraseSpeed="20"
      :delay="2000"
      :intervals="200"
      />
    </span>
      i'm passionate about designing beautiful and functional user experiences.
    </h3>
    
    <div class="_self" style="display: flex; align-items: center; justify-content: center;">
      <h2>
     UI Chef 
    </h2>
    <img src="@/assets/chef-hat-svgrepo-com.svg" alt="chef hat" width="35" height="35">
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: lighter;
  font-size: 3.2rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1rem;
  font-weight: lighter;
}
h2 {
  font-size: 0.85rem;
  font-weight: 200;
  color: hsla(160, 100%, 37%, 1);
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
  ._self {
    margin-top: 10px;
    float: left;
  }
}
</style>
