<script setup lang="ts">
import { ref } from 'vue';
import Squircle from './components/Squircle.vue';

const radius = ref(56);
const roundness = ref(0.2);
const width = ref(300);
const height = ref(200);
</script>

<template>
  <h1>Vue Squircle</h1>
  <a class="github" href="https://github.com/marr/vue-squircle">
    <img src="/github.svg" alt="Vue Squircle Github Repository "/>
  </a>
  <p>Pleasantly rounded corners in your web app.</p>
  <pre class="example">
  <code>
    &lt;Squircle :width :height&gt;
      &lt;img :src="`//picsum.photos/${width}/${height}`" /&gt;
    &lt;/Squircle&gt;
  </code></pre>
  <div class="hero">
    <div>
      <h3>Default values</h3>
      <Squircle :width="+width" :height="+height">
        <img :src="`//picsum.photos/${width}/${height}`" />
      </Squircle>
    </div>
    <div>
      <h3>Customized values</h3>
      <Squircle :width="+width" :height="+height" :radius="+radius" :roundness="+roundness">
        <img :src="`//picsum.photos/${width}/${height}`" />
      </Squircle>
    </div>
  </div>
  <div class="controls">
    <label>
      <span>Radius</span>
      <input type="range" min="0" :max="Math.min(width, height) / 2" v-model="radius" />{{ radius }}
    </label>
    <label>
      <span>Roundness</span>
      <input type="range" min="0" max="1" step="0.01" v-model="roundness" />{{ (+roundness).toFixed(3) }}
    </label>
    <label>
      <span>Width</span>
      <input type="range" min="100" max="600" step="25" v-model="width" />{{ width }}
    </label>
    <label>
      <span>Height</span>
      <input type="range" min="100" max="600" step="25" v-model="height" />{{ height }}
    </label>
  </div>
  <a href="https://blog.minimal.app/rounded-corners-in-the-apple-ecosystem/">Read more about squircles</a>
</template>

<style scoped>
.github {
  position: fixed;
  top: 16px;
  left: 16px;
  @media (prefers-color-scheme: dark) {
    filter: invert(1);
  }
}
.example {
  background-color: #f9f9f903;
  border: 1px solid #888d;
  border-radius: 6px;
  text-align: left;
}
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  @media (min-width: 600px) {
    flex-direction: row;
    gap: 40px;
  }
}
.controls {
  border-bottom: 1px solid #888;
  margin: 0 auto 10px;
  padding-bottom: 10px;
  width: 300px;
}
label {
  display: flex;
  align-items: center;
  height: 40px;
  gap: 10px;
  width: 200px;
}
label span {
  flex: 1 0 80px;
  text-align: right;
}
</style>