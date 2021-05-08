<template>
  <b-row class="mb-2">
    <b-col class="text-left">
      <h4>{{ companyName }}</h4>
      <p>{{ city }}, {{ state }}</p>
      <p>{{ startYear }} - {{ endYear }}</p>
    </b-col>
    <b-col class="text-left">
      <p>
        <strong> {{ jobTitle }}</strong>
      </p>
      <ul>
        <li v-for="(bullet, i) in description" :key="i">{{ bullet }}</li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "JobEntry",
  props: [
    "companyName",
    "city",
    "state",
    "startYear",
    "endYear",
    "jobTitle",
    "description",
  ],
  components: {},
});
</script>

<style></style>
