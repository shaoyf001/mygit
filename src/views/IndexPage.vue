<template>
  <div class="index-page">
    <a-input-search
      v-model:value="searText"
      placeholder="input search text"
      enter-button="Search"
      size="large"
      @search="onSearch"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const searText = ref('');
const onSearch = (value: string) => {
  alert(value);
};
</script>
