document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("main");

  fetch("content/projects/")
    .then(response => response.text())
    .then(text => {
      const parser = new DOMParser();
      const html = parser.parseFromString(text, "text/html");
      const links = [...html.querySelectorAll("a")];

      links.forEach(link => {
        fetch(`content/projects/${link.textContent}`)
          .then(res => res.text())
          .then(md => {
            const htmlContent = marked.parse(md);
            const section = document.createElement("section");
            section.classList.add("project");
            section.innerHTML = htmlContent;
            container.appendChild(section);
          });
      });
    });
});
