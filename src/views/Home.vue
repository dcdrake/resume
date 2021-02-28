<template>
  <b-container fluid>
    <b-row class="justify-content-center">
      <img
        alt="Dylan picture"
        style="height: 200px; width: 275px; border-radius: 10%"
        src="../assets/dylan_shuttle_photo.jpg"
      />
    </b-row>
    <b-row class="justify-content-center pb-10">
      <h1>Dylan Drake</h1>
    </b-row>
    <b-row class="justify-content-center second-container">
      <p class="lead">
        I write code, and I'm motivated by making people feel smart, and look
        competent using the software I develop.
      </p>
    </b-row>
    <b-row class="first-container justify-content-center">
      <b-col class="col-lg-9">
        <div class="section-header text-left">Education</div>
        <hr />
        <b-row class="mb-2">
          <b-col class="text-left">
            <h4>The College of William and Mary</h4>
            <p>2010-2014</p>
          </b-col>
          <b-col class="text-left">
            <p>BS Computer Science</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="text-left">
            <h4>Thomas Jefferson High School for Science and Technology</h4>
            <p>2006-2010</p>
          </b-col>
          <b-col class="text-left">
            <p>An inflated ego, and questionable self-esteem</p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="second-container justify-content-center">
      <b-col class="col-lg-9">
        <div class="section-header text-left">Career</div>
        <hr />
        <b-row class="mb-2">
          <b-col class="text-left">
            <h4>MITRE</h4>
            <p>McLean, VA</p>
            <p>2016-Current</p>
          </b-col>
          <b-col class="text-left">
            <p><strong>Senior Software Engineer</strong></p>
            <p>
              Some great description about what I did here. Some great
              description about what I did here. Some great description about
              what I did here. Some great description about what I did here.
              Some great description about what I did here. Some great
              description about what I did here.
            </p>
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col class="text-left">
            <h4>Unisys Corporation</h4>
            <p>Hampton, VA - NASA Langley Research Center</p>
            <p>2016-Current</p>
          </b-col>
          <b-col class="text-left">
            <p><strong>Software Engineer</strong></p>
            <p>
              Some great description about what I did here. Some great
              description about what I did here. Some great description about
              what I did here. Some great description about what I did here.
              Some great description about what I did here. Some great
              description about what I did here.
            </p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <!-- <b-row class="first-container">
      <b-col>
        <div class="section-header">Abilities</div>
        <b-row style="padding-bottom: 60px">
          <b-col>
            <h4>Tools</h4>
            <div>Atlassian</div>
            <div>GitLab</div>
            <div>Jupyter</div>
          </b-col>
          <b-col>
            <h4>Languages</h4>
            <div>C++</div>
            <div>Python</div>
            <div>Javascript</div>
            <div>Java</div>
            <div>Kotlin</div>
          </b-col>
          <b-col>
            <h4>Web</h4>
            <div>VueJS</div>
            <div>AngularJS</div>
            <div>NodeJS</div>
            <div>Flask</div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h4>Revision Control</h4>
            <div>git</div>
            <div>svn</div>
          </b-col>
          <b-col>
            <h4>Containerization</h4>
            <div>Docker</div>
          </b-col>
          <b-col>
            <h4>Databases</h4>
            <div>MongoDB</div>
            <div>MySQL</div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="justify-content-center second-container">
      <b-col>
        <div class="section-header">Contact</div>
        <div style="font-weight: bold; font-size: 1.5rem">
          dylan.c.drake at gmail
        </div>
      </b-col>
    </b-row> -->
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",

  components: {},
});
</script>

<style scoped>
h1 {
  color: #81b29a;
}

hr {
  border: solid #f2cc8f 2px;
  border-bottom: none;
  width: 30%;
  margin: 5px auto 20px 0;
}

.section-header {
  color: #81b29a;
  font-weight: 500;
  font-size: 2rem;
  padding-bottom: 15px;
}

.first-container {
  background-color: #f4f1de;
  position: relative;
  padding: 25px 25px;
}

.second-container {
  position: relative;
  padding: 25px 25px;
}
</style>