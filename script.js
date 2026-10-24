const myName = "CYIFUZO Benitha";

document.title = myName;
document.querySelector("h1").textContent = myName;

const profileImage = document.querySelector("#profile-image");
profileImage.src = "benitha.jpg";
profileImage.alt = `Profile photo of ${myName}`;

const firstNavLink = document.querySelector("nav a");
firstNavLink.classList.add("active");

const skills = ["HTML", "CSS", "JavaScript"];
const skillsList = document.querySelector("#skills-list");

skills.forEach((skill) => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});

const footer = document.querySelector("#last-updated");
const today = new Date().toLocaleDateString();

footer.textContent = `Last updated: ${today}`;
