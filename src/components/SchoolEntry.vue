<template>
  <b-row class="mb-2">
    <b-col class="text-left">
      <h4>{{ schoolName }}</h4>
      <p>{{ startYear }} - {{ endYear }}</p>
    </b-col>
    <b-col class="text-left">
      <p>
        <strong>{{ degree }}</strong>
      </p>
    </b-col>
  </b-row>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "SchoolEntry",
  props: ["schoolName", "startYear", "endYear", "degree"],
  components: {},
});
</script>

<style></style>
