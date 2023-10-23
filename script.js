const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const header = document.querySelector("header");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 100;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
      //active section for animation on scroll
      sec.classList.add("show-animate");
    }

    //for repeats animation on scroll
    // else {
    //   sec.classList.remove("show-animate");
    // }
  });

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  //footer animation
  document
    .querySelector("footer")
    .classList.toggle(
      "show-animate",
      this.innerHeight + this.scrollY + 10 >=
        document.scrollingElement.scrollHeight
    );
};

///////Projects

function getProject(project) {
  return `
  <div class="project-container">
        <div class="project-content">
          <h2>Project <span>${project.projectNo}</span></h2>
          <h3>Title: <span>${project.projectTitle}</span></h3>
          <p>
           ${project.description}
          </p>
          <div class="btn-box">
            <!-- <span class="animate" style="--i: 5"></span> -->
            <a target="_blank" href="${project.projectLink}" class="btn">See Live</a>
            <a target="_blank" href="${project.projectCodeLink}" class="btn">Source Code</a>
          </div>
        </div>

        <div class="container">
          <div class="card">
          <a href=${project.projectImgLink} target="_blank">
            <img
              src=${project.projectImgLink}
              alt="Project Image"
            />
            </a>
          </div>
        </div>
      </div>
  `;
}

function renderProjects() {
  const projctDiv = document.getElementById("projects");
  projects.forEach((proj) => {
    const projectEl = getProject(proj);
    projctDiv.insertAdjacentHTML("beforeend", projectEl);
  });
}

renderProjects();

//////Skills

function renderSkills() {
  //Remeber there is a array that content skills in config.js
  const skillBox = document.querySelector(".skills-content");
  skills.forEach((skll) => {
    const html = `
    <div class="progress">
    <h3>${skll.skillName} <span>${skll.skillPercent}%</span></h3>
    <div class="bar"><span style="width:${skll.skillPercent}%"></span></div>
    </div>
    `;
    skillBox.insertAdjacentHTML("beforeend", html);
  });
}

renderSkills();

/////Dark mode
const root = document.documentElement;
const appearence = document.getElementById("appearance");

appearence.addEventListener("change", function () {
  if (this.checked) {
    root.style.setProperty("--bg-color", "#fafafa");
    root.style.setProperty("--second-bg-color", "#d2d3db");
    root.style.setProperty("--text-color", "#081b29");
  } else {
    root.style.setProperty("--bg-color", "#081b29");
    root.style.setProperty("--second-bg-color", "#112e42");
    root.style.setProperty("--text-color", "#ededed");
  }
});
///////Vanila tilt effect

VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 5,
  speed: 200,
  glare: true,
  "max-glare": 0.2,
});
