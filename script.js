//normal div elements

const careerObjective = document.querySelector(".co");
const profacionalSkills = document.querySelector(".ps");
const education = document.querySelector(".ed");
const specialSkills = document.querySelector(".ss");
const projects = document.querySelector(".pro");
const language = document.querySelector(".lng");
const hobbies = document.querySelector(".hob");
const reference = document.querySelector(".ref");
//
//icon elements
//
const careerObjectiveIconRemove = document.querySelector(".coi");
const profacionalSkillsIconRemove = document.querySelector(".psi");
const educationIconRemove = document.querySelector(".edi");
const specialSkillsIconRemove = document.querySelector(".ssi");
const projectsIconRemove = document.querySelector(".proi");
const languageIconRemove = document.querySelector(".lngi");
const hobbiesIconRemove = document.querySelector(".hobi");
const referenceIconRemove = document.querySelector(".refi");

careerObjectiveIconRemove.addEventListener("click", () => {
  careerObjective.classList.toggle("hidden");
  if (!careerObjectiveIconRemove.classList.contains("rotate")) {
    careerObjectiveIconRemove.classList.add("rotate");
    careerObjectiveIconRemove.classList.remove("reverse");
  } else {
    careerObjectiveIconRemove.classList.add("reverse");
    careerObjectiveIconRemove.classList.remove("rotate");
  }
});
profacionalSkillsIconRemove.addEventListener("click", () => {
  profacionalSkills.classList.toggle("hidden");
  if (!profacionalSkillsIconRemove.classList.contains("rotate")) {
    profacionalSkillsIconRemove.classList.add("rotate");
    profacionalSkillsIconRemove.classList.remove("reverse");
  } else {
    profacionalSkillsIconRemove.classList.add("reverse");
    profacionalSkillsIconRemove.classList.remove("rotate");
  }
});
educationIconRemove.addEventListener("click", () => {
  education.classList.toggle("hidden");
  if (!educationIconRemove.classList.contains("rotate")) {
    educationIconRemove.classList.add("rotate");
    educationIconRemove.classList.remove("reverse");
  } else {
    educationIconRemove.classList.add("reverse");
    educationIconRemove.classList.remove("rotate");
  }
});
specialSkillsIconRemove.addEventListener("click", () => {
  specialSkills.classList.toggle("hidden");
  if (!specialSkillsIconRemove.classList.contains("rotate")) {
    specialSkillsIconRemove.classList.add("rotate");
    specialSkillsIconRemove.classList.remove("reverse");
  } else {
    specialSkillsIconRemove.classList.add("reverse");
    specialSkillsIconRemove.classList.remove("rotate");
  }
});
languageIconRemove.addEventListener("click", () => {
  language.classList.toggle("hidden");
  if (!languageIconRemove.classList.contains("rotate")) {
    languageIconRemove.classList.add("rotate");
    languageIconRemove.classList.remove("reverse");
  } else {
    languageIconRemove.classList.add("reverse");
    languageIconRemove.classList.remove("rotate");
  }
});
projectsIconRemove.addEventListener("click", () => {
  projects.classList.toggle("hidden");
  if (!projectsIconRemove.classList.contains("rotate")) {
    projectsIconRemove.classList.add("rotate");
    projectsIconRemove.classList.remove("reverse");
  } else {
    projectsIconRemove.classList.add("reverse");
    projectsIconRemove.classList.remove("rotate");
  }
});
hobbiesIconRemove.addEventListener("click", () => {
  hobbies.classList.toggle("hidden");
  if (!hobbiesIconRemove.classList.contains("rotate")) {
    hobbiesIconRemove.classList.add("rotate");
    hobbiesIconRemove.classList.remove("reverse");
  } else {
    hobbiesIconRemove.classList.add("reverse");
    hobbiesIconRemove.classList.remove("rotate");
  }
});
referenceIconRemove.addEventListener("click", () => {
  reference.classList.toggle("hidden");
  if (!referenceIconRemove.classList.contains("rotate")) {
    referenceIconRemove.classList.add("rotate");
    referenceIconRemove.classList.remove("reverse");
  } else {
    referenceIconRemove.classList.add("reverse");
    referenceIconRemove.classList.remove("rotate");
  }
});
