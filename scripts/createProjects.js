export function createProject(project){
    const {liveLink, githubLink} = project
    
    const projectLine = document.createElement("div")
    projectLine.classList.add("project-line")

    const titleElement = document.createElement("span")
    titleElement.className = " bold p-large"
    titleElement.textContent = project.title

    const projectBtns = document.createElement("div")
    projectBtns.classList.add("project-btns")

    const githubBtn = document.createElement("button")
    const githubBtnImg = document.createElement("img")
    githubBtnImg.src = "assets/svgs/github.svg"
    githubBtn.onclick = () => window.open(githubLink, "_blank");

    const liveBtn = document.createElement("button")
    const liveBtnImg = document.createElement("img")
    liveBtnImg.src = "assets/svgs/arrow-left-svgrepo-com.svg"
    liveBtn.onclick = () => window.open(liveLink, "_blank");


    githubBtn.append(githubBtnImg)
    liveBtn.append(liveBtnImg)

    projectBtns.append(liveBtn)
    projectBtns.append(githubBtn)

    projectLine.append(titleElement)
    projectLine.append(projectBtns)
    return projectLine
}

