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
              I enjoy writing clean code. I aspire to build effective,
              respectful teams. I'm motivated by making people look smart, and
              feel confident using the products I create.
            </p>
            <b-icon icon="envelope-fill"></b-icon>
            <a class="mr-3" href="mailto:dylan.c.drake@gmail.com"> Email</a>
            <b-icon icon="linkedin"></b-icon>
            <a class="mr-3" href="https://www.linkedin.com/in/dylancdrake/">
              LinkedIn</a
            >
            <b-icon icon="github"></b-icon>
            <a class="mr-3" href="https://github.com/dcdrake/resume"> GitHub</a>
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
          :degree="''"
        ></school-entry>
      </b-col>
    </b-row>
    <b-row class="second-container justify-content-center">
      <b-col class="col-lg-9">
        <div class="section-header text-left">Career</div>
        <hr />
        <job-entry
          v-for="(entry, i) in jobs"
          :key="i"
          :companyName="entry.companyName"
          :city="entry.city"
          :state="entry.state"
          :startYear="entry.startYear"
          :endYear="entry.endYear"
          :jobTitle="entry.jobTitle"
          :description="entry.description"
        ></job-entry>
      </b-col>
    </b-row>
    <b-row class="first-container justify-content-center">
      <b-col class="col-lg-9">
        <div class="section-header text-left">Skills</div>
        <hr />
        <b-row class="mb-4">
          <b-col class="text-left">
            <h4>Languages</h4>
            <div>C++</div>
            <div>Python</div>
            <div>Javascript</div>
            <div>Java</div>
            <div>Kotlin</div>
          </b-col>
          <b-col class="text-left">
            <h4>Web Frameworks</h4>
            <div>Flask</div>
            <div>NodeJS</div>
            <div>Spring Boot</div>
            <div>VueJS</div>
          </b-col>
        </b-row>
        <b-row class="mb-4">
          <b-col class="text-left">
            <h4>RCS</h4>
            <div>git</div>
          </b-col>
          <b-col class="text-left">
            <h4>Databases</h4>
            <div>MongoDB</div>
            <div>MySQL</div>
          </b-col>
        </b-row>
        <b-row class="mb-4">
          <b-col class="text-left">
            <h4>Hosting Software</h4>
            <div>Atlassian</div>
            <div>GitLab</div>
            <div>GitHub</div>
          </b-col>
          <b-col class="text-left">
            <h4>Containers</h4>
            <div>Docker</div>
            <div>Podman</div>
          </b-col>
        </b-row>
        <b-row class="mb-4">
          <b-col class="text-left">
            <h4>Automation</h4>
            <div>Drone</div>
            <div>Concourse</div>
          </b-col>
          <b-col class="text-left">
            <h4>Analysis</h4>
            <div>Jupyter</div>
            <div>Pandas</div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="second-container justify-content-center">
      <b-col class="col-lg-9">
        <div class="section-header text-left">Domain Experience</div>
        <hr />
        <b-row class="mb-4">
          <b-col class="text-left">
            <ul>
              <li>Simulation</li>
              <li>Data Engineering/Analysis</li>
              <li>Civil Aviation</li>
            </ul>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-link href="https://github.com/dcdrake/resume"
      >See the code behind this page</b-link
    >
  </b-container>
</template>

<script>
import JobEntry from "@/components/JobEntry.vue";
import SchoolEntry from "@/components/SchoolEntry.vue";

export default {
  name: "Home",
  components: { JobEntry, SchoolEntry },
  data() {
    return {
      jobs: [
        {
          companyName: "MITRE",
          city: "McLean",
          state: "VA",
          startYear: "2016",
          endYear: "Current",
          jobTitle: "Senior Software Engineer",
          description: [
            "Led creation of software development guidelines for 15 engineers",
            "Sped up post-experiment data analysis by a factor of 10",
            "Reduced downtime of core lab software by implementing automated testing",
            "Eliminated months of duplicated work by using scrum workflows",
            "Reduced time to develop prototype displays from weeks to days",
            "Mentored (and was mentored by) junior engineers",
          ],
        },
        {
          companyName: "Unisys",
          city: "Hampton",
          state: "VA - NASA Langley Research Center",
          startYear: "2014",
          endYear: "2016",
          jobTitle: "Software Engineer",
          description: [
            "Learned how to present simulation concepts, and technologies to groups with differing levels of technical expertise",
            "Learned how to present a design review",
            "Learned how to participate in a code review",
            "Learned how to integrate external software into internal codebase",
          ],
        },
      ],
    };
  },
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
