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
              I write code and I'm motivated by making people look smart, and
              feel confident using the software I develop.
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
        <school-entry
          :schoolName="'The College of William and Mary'"
          :startYear="2010"
          :endYear="2014"
          :degree="'BS Computer Science'"
        ></school-entry>
        <school-entry
          :schoolName="'Thomas Jefferson High School for Science and Technology'"
          :startYear="2006"
          :endYear="2010"
          :degree="'It was high school, but a small world. Listed in case you, dear reader, and I have this in common.'"
        ></school-entry>
      </b-col>
    </b-row>
    <b-row class="second-container justify-content-center">
      <b-col class="col-lg-9">
        <div class="section-header text-left">Career</div>
        <hr />
        <job-entry
          :companyName="'MITRE'"
          :city="'McLean'"
          :state="'VA'"
          :startYear="2016"
          :endYear="'Current'"
          :jobTitle="'Senior Software Engineer'"
          description="I develop software in support of Federal Aviation Administration, 
          and international civil aviation research efforts. I am a generalist, and may 
          use 2-3 different languages and frameworks on a daily basis. I've lead small 
          teams of developers to write individual applications, and I helped lead a project 
          to improve the software development processes for a group of 15+ engineers."
        ></job-entry>
        <job-entry
          :companyName="'Unisys'"
          :city="'Hampton'"
          :state="'VA -- NASA Langley Research Center'"
          :startYear="2014"
          :endYear="2016"
          :jobTitle="'Software Engineer'"
          description="Wrote code for 6-DOF flight simulators in C++. Learned about the
              discipline needed to write software in 'the real world' including
              writing design documents, holding code reviews, and testing so you
              don't trash a multi-million dollar piece of hardware."
        ></job-entry>
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

<script>
import JobEntry from "@/components/JobEntry.vue";
import SchoolEntry from "@/components/SchoolEntry.vue";

export default {
  name: "Home",
  components: { JobEntry, SchoolEntry },
};
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
