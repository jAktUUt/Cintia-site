document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("main");
  const files = [
    "threaded-landscapes.md"
    // Add more filenames here as you publish them
  ];

  files.forEach(file => {
    fetch(`content/projects/${file}`)
      .then(res => res.text())
      .then(md => {
        const frontmatterMatch = md.match(/---([\s\S]*?)---/);
        const content = md.replace(/---[\s\S]*?---/, "").trim();
        const frontmatter = {};

        if (frontmatterMatch) {
          frontmatterMatch[1].split("\n").forEach(line => {
            const [key, value] = line.split(":").map(s => s.trim());
            frontmatter[key] = value.replace(/^"|"$/g, "");
          });
        }

        const section = document.createElement("section");
        section.classList.add("project", frontmatter.category);
        section.setAttribute("data-era", frontmatter.era);

        section.innerHTML = `
          <h2>${frontmatter.title}</h2>
          <img src="${frontmatter.image}" alt="${frontmatter.title}" />
          <p>${marked.parse(content)}</p>
        `;

        container.appendChild(section);
      });
  });
});

