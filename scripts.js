function loadAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
}

async function loadProjects() {
  const projectsFile = "projects.json";
  const projectsJSON = await (await fetch(projectsFile)).json();
  const projectsContainer = document.querySelector(".projects-container");

  projectsJSON.projects.forEach((project) => {
    projectsContainer.insertAdjacentHTML(
      "beforeend",
      `
            <div class="project">
                <p class="project-title">${project["title"]}</p>
                <div class="project-image" style="background-image: url('${
                  project["image"]
                }');"></div>
                <p class="project-description">${project["description"]}</p>
                <p class="project-technologies">${project["technologies"]
                  .toString()
                  .replaceAll(",", "   ")}</p>
                <div class="project-links">
                    <a class="project-github" href="${
                      project["github-link"]
                    }" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
                        </svg>
                    </a>
                    <a class="project-youtube" href="${
                      project["youtube-link"]
                    }" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                            <path fill="currentColor" d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"/>
                        </svg>
                    </a>
                </div>
            </div>
            `
    );
  });
}

async function loadCarausel() {
  const imagesFile = "carausel.json";
  const imageContainer = document.querySelector(".image-container");
  const imagesJson = await (await fetch(imagesFile)).json();

  imagesJson.images.forEach((image) => {
    console.log(imagesJson.images[0] === image);
    if (imagesJson.images[0] === image) {
      imageContainer.insertAdjacentHTML(
        "beforeend",
        `<img class="image-element active-image" src="${image}" alt="carausel image" onclick="zoomIn()"/>`
      );
    } else {
      imageContainer.insertAdjacentHTML(
        "beforeend",
        `<img class="image-element hidden-image" src="${image}" alt="carausel image" onclick="zoomIn()"/>`
      );
    }
  });
}

function moveCarausel(offset) {
  const imageContainer = document.querySelector(".image-container");
  const activeImage = document.querySelector(".active-image");
  const imageList = [...imageContainer.children];
  let newIndex = imageList.indexOf(activeImage) + offset;

  if (newIndex < 0) {
    newIndex = imageList.length - 1;
  } else if (newIndex >= imageList.length) {
    newIndex = 0;
  }

  activeImage.classList.remove("active-image");
  imageList[newIndex].classList.remove("hidden-image");

  imageList[newIndex].classList.add("active-image");
  activeImage.classList.add("hidden-image");
}

function zoomIn() {
  console.log("Image has been zoomed in");
}

function changeTheme() {
  const body = document.querySelector("body");
  body.classList.toggle("dark");
}

window.onload = function () {
  loadProjects();
  loadCarausel();
  loadAnimations();
  // window.scrollTo(0, parseFloat(localStorage.getItem("scrollY")));
  // console.log(parseFloat(localStorage.getItem("scrollY")));
};

// window.onbeforeunloadload = () => {
//     localStorage.setItem("scrollY", `${window.screenY}`);
// }
