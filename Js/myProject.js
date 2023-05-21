function emptyFormAlert() {
  let projectName = document.getElementById("projectName").value;
  let startDate = document.getElementById("input-start-date").value;
  let endDate = document.getElementById("input-end-date").value;
  let description = document.getElementById("input-description").value;
  let image = document.getElementById("input-imgae").value;

  if (projectName == "") {
    return alert("Please input your project name");
  } else if (startDate == "") {
    return alert("When did you start this project ?");
  } else if (endDate) {
    return alert("When did you end this project ?");
  } else if (description == "") {
    return alert("Please describe this project");
  } else if (image) {
    return alert("Please input your image project");
  }
}

let projectData = [];

function postProject(event) {
  event.preventDefault();

  let projectName = document.getElementById("projectName").value;
  let startDate = document.getElementById("input-start-date").value;
  let endDate = document.getElementById("input-end-date").value;
  let description = document.getElementById("input-description").value;
  let image = document.getElementById("input-image").files;

  const nodeIcon = '<i class="fa-brands fa-node"></i>';
  const reactIcon = '<i class="fa-brands fa-react"></i>';
  const golangIcon = '<i class="fa-brands fa-golang"></i>';
  const jsIcon = '<i class="fa-brands fa-square-js"></i>';

  let nodeIconChecked = document.getElementById("nodeCheck").checked? nodeIcon : "";
  let reactIconChecked = document.getElementById("reactCheck").checked? reactIcon : "";
  let golangIconChecked = document.getElementById("goCheck").checked? golangIcon : "";
  let jsIconChecked = document.getElementById("jsCheck").checked ? jsIcon : "";

  image = URL.createObjectURL(image[0]);
  console.log(image);

  let projectPreviewCard = {
    projectName,
    startDate,
    endDate,
    description,
    nodeIconChecked,
    reactIconChecked,
    golangIconChecked,
    jsIconChecked,
    image,
  };

  projectData.push(projectPreviewCard);
  console.log(projectData);

  renderProject();
}

function renderProject() {
  document.getElementById("card-project").innerHTML = "";

  for (let i = 0; i < projectData.length; i++) {
    document.getElementById("card-project").innerHTML += `
        <div class="my-project" style="padding-top: 50px;">
        <div style="text-align: center;">
        </div>
        <div class="project-flex">
          <div class="project-flex-box">
            <img src="${projectData[i].image}">
            <a href="#">
              <h3 class="project-name">${projectData[i].projectName}</h3>
            </a>
            <h5 class="duration">${projectData[i].startDate} - ${projectData[i].endDate}</h5>
            <p>${projectData[i].description}</p>
            <p class="project-icon">
              ${projectData[i].nodeIconChecked}
              ${projectData[i].reactIconChecked}
              ${projectData[i].golangIconChecked}
              ${projectData[i].jsIconChecked}
            </p>
            <div class="project-button">
              <button type="button">edit</button>
              <button type="button">delete</button>
            </div>
          </div>
        </div>
      </div>
      `;
  }
}
