import frontEnd from "../photo/certificates/coursera-frontend.png";

export const resumeLink =
  "https://drive.google.com/file/d/1bzObHZLgD7oKRmj21glTZz1KTzFSOCYP/view?usp=sharing";

// Education section
export const educationHeading = "Education";
export const educationList = [
  {
    degree: "Bsc",
    department: "Electrical & Electronic Engineering",
    institute: "Chittagong University of Engineering & Technology",
    start: "feb,2017",
    end: "May, 2022",
    CGPA: "3.32/4.00",
  },
  {
    degree: "Hsc",
    department: "Science",
    institute: "Notre Dame College, Dhaka",
    start: "june,2014",
    end: "june,2016",
    GPA: "5.00/5.00",
  },
];

// Experience Section
export const experienceHeading = "Experience";
export const experienceList = [
  {
    title: "Doctor's portal",
    features: [
      "Single page application.",
      "clients can give appointment by choosing a specific date and doctor.",
      "doctors can check which petients gave appointments on which date.",
      "doctors can approve and cancel appointment.",
      "The petients don't have access to the doctors panel.",
      "this is a responsive website.",
    ],
    githubRepo: {
      client: "https://github.com/tanvir5230/doctor-s-portal-client",
      server: "https://github.com/tanvir5230/doctor-s-portal-server",
    },
    liveSite: "https://doctors-portal-t1.web.app/",
  },
  {
    title: "Creative Agency",
    features: [
      "Responsive and Single page web application",
      "Creative agency group can take client's order through this site",
      "They can inform the clients of their order status",
      "Specific data will be shown to specific user",
      "None can see others data",
      "Only admin can add,remove and modify service.",
      "clients can give feedback.",
      "clients have no access to admin section.",
    ],
    githubRepo: {
      client: "https://github.com/tanvir5230/creative-agency-client",
      server: "https://github.com/tanvir5230/creative-agency-server",
    },
    liveSite: "creative-agency-t1.web.app/",
  },
  {
    title: "Volunteer Network",
    features: [
      "save user's registration on specific event",
      "send the registered event info to admin",
      "add, delete and modify the events(only for admin)",
      "can delete user(only for admin)",
    ],

    githubRepo: {
      client: "https://github.com/tanvir5230/volunteer-network-client",
      server: "https://github.com/tanvir5230/volunteer-network-server",
    },
    liveSite: "https://volunteer-network-t.web.app/",
  },
];

// SKill section
export const frontEndList = [
  { name: "html", value: 85 },
  { name: "css", value: 80 },
  { name: "javascript", value: 80 },
  { name: "react", value: 85 },
  { name: "redux", value: 80 },
  { name: "bootstrap", value: 90 },
];
export const backendList = [
  { name: "Node js", value: 50 },
  { name: "express", value: 60 },
  { name: "mongodb", value: 90 },
  { name: "mongoose", value: 85 },
  { name: "REST api", value: 80 },
  { name: "GraphQL", value: 85 },
];
export const otherToolsList = [
  { name: "vs code" },
  { name: "chrome dev tools" },
  { name: "firebase" },
  { name: "heroku" },
  { name: "git" },
  { name: "netlify" },
];

export const otherSkillsList = [
  {
    name: "leadership",
    experience: "Treasurer,IEEE CUET student branch",
  },
];

// Language skill
export const languageList = [
  { level: "native", name: "bangla" },
  { level: "proficient", name: "english" },
];

// Certificates
export const certificateList = [
  {
    name: "Front end development",
    instructor: "joggesh muppala",
    platform: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/certificate/C4GEZ9CSQL8R",
    img: frontEnd,
  },
  {
    name: "back end development",
    instructor: "joggesh muppala",
    platform: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/certificate/C4GEZ9CSQL8R",
    img: frontEnd,
  },
];

// hobbies
export const hobbyList = [
    "playing cricket or football",
    "reading literature",
    "get close to nature",
  ];