export function createDisplayProject(project) {
    const {stack, imgSrc, title, id, githubLink, liveLink, description} = project
  const card = document.createElement("div");
  card.className = "card";
  card.id = `card${id}`;

  const bg = document.createElement("div");
  bg.className = "card-background";

  const content = document.createElement("div");
  content.className = "card-content";

  /* ---------- INFO ---------- */
  const info = document.createElement("div");
  info.className = "info";

  const titleheading = document.createElement("h3");
  titleheading.className = "heading3 bold";
  titleheading.textContent = title;

  const descWrap = document.createElement("div");
  descWrap.className = "description";

  const descTitle = document.createElement("h4");
  descTitle.className = "heading4";
  descTitle.textContent = "Description";

  const desc = document.createElement("p");
  desc.className = "p-small light-p funnel";
  desc.textContent = description;

  descWrap.append(descTitle, desc);

  /* ---------- TECH STACK ---------- */
  const techWrap = document.createElement("div");
  techWrap.className = "tech-stack";

  const techTitle = document.createElement("h4");
  techTitle.className = "heading4";
  techTitle.textContent = "Tech stack";

  const stacks = document.createElement("div");
  stacks.className = "stacks";

  stack.forEach(tech => {
    const item = document.createElement("div");
    item.className = "tabbed-item bold2 stack funnel p-tiny";
    item.textContent = tech;
    stacks.appendChild(item);
  });

  techWrap.append(techTitle, stacks);

  info.append(titleheading, descWrap, techWrap);

  /* ---------- SITE ---------- */
  const site = document.createElement("div");
  site.className = "site";

  const preview = document.createElement("div");
  preview.className = "preview";

  const previewHeader = document.createElement("h4");
  previewHeader.className = "heading4 gapped";

  const previewText = document.createElement("div");
  previewText.className = "p-tiny";
  previewText.textContent = "Live preview";

  const cta = document.createElement("div");
  cta.className = "card-cta";

  const githubBtn = document.createElement("button");
  githubBtn.className = "project-btn";
  githubBtn.onclick = () => window.open(githubLink, "_blank");

  const githubIcon = document.createElement("img");
  githubIcon.src = "assets/svgs/github.svg";
  githubIcon.alt = "github icon";

  githubBtn.appendChild(githubIcon);

  const visitBtn = document.createElement("button");
  visitBtn.className = "project-btn";
  visitBtn.onclick = () => window.open(liveLink, "_blank");

  const visitText = document.createElement("span");
  visitText.className = "p-tiny";
  visitText.textContent = "Visit site";

  const arrow = document.createElement("img");
  arrow.src = "assets/svgs/arrow-left-svgrepo-com.svg";

  visitBtn.append(visitText, arrow);

  cta.append(githubBtn, visitBtn);
  previewHeader.append(previewText, cta);

  const website = document.createElement("div");
  website.className = "website";

  const iframe = document.createElement("iframe");
  iframe.src = liveLink;
  iframe.loading = "lazy";

  website.appendChild(iframe);
  preview.append(previewHeader, website);
  site.appendChild(preview);

  /* ---------- ASSEMBLY ---------- */
  content.append(info, site);
  card.append(bg, content);

  return card;
}