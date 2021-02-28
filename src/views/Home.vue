<template>
  <b-container fluid>
    <b-row class="page-header justify-content-center">
      <b-col class="col-lg-9">
        <b-row>
          <b-col class="text-left col-lg-4">
            <img
              alt="Dylan picture"
              class="profile-picture"
              style="height: 225px; width: 300px; border-radius: 10%"
              src="../assets/dylan_shuttle_photo.jpg"
            />
          </b-col>
          <b-col class="text-left">
            <h1>Dylan Drake</h1>
            <hr />
            <p><b-icon icon="geo-alt-fill"></b-icon> Richmond, VA</p>

            <p>
              I write code, and I'm motivated by making people feel smart, and
              look competent using the software I develop.
            </p>
            <b-icon icon="envelope-fill"></b-icon>
            <a class="mr-3" href="mailto:dylan.c.drake@gmail.com"> Email</a>
            <b-icon icon="linkedin"></b-icon>
            <a class="mr-3" href="https://www.linkedin.com/in/dylancdrake/">
              LinkedIn</a
            >
          </b-col>
        </b-row>
      </b-col>
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
            <p>2016 - Current</p>
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
            <p>2014 - 2016</p>
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
    <b-row class="first-container justify-content-center">
      <b-col class="col-lg-9">
        <div class="section-header text-left">Skills and Knowledge</div>
        <hr />
        <b-row class="mb-4">
          <b-col class="text-left">
            <h4>Web</h4>
            <div>VueJS</div>
            <div>AngularJS</div>
            <div>NodeJS</div>
            <div>Flask</div>
          </b-col>
          <b-col class="text-left">
            <h4>Languages</h4>
            <div>C++</div>
            <div>Python</div>
            <div>Javascript</div>
            <div>Java</div>
            <div>Kotlin</div>
          </b-col>
        </b-row>
        <b-row class="mb-4">
          <b-col class="text-left">
            <h4>Revision Control</h4>
            <div>git</div>
            <div>svn</div>
          </b-col>
          <b-col class="text-left">
            <h4>Databases</h4>
            <div>MongoDB</div>
            <div>MySQL</div>
          </b-col>
        </b-row>
        <b-row class="mb-4">
          <b-col class="text-left">
            <h4>Tools</h4>
            <div>Atlassian</div>
            <div>GitLab</div>
            <div>Jupyter</div>
          </b-col>
          <b-col class="text-left">
            <h4>Containerization</h4>
            <div>Docker</div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
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

.profile-picture {
  border: 7px solid #f4f1de;
}

.page-header {
  position: relative;
  padding: 25px 25px;
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