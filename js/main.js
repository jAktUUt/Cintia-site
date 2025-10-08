
//theme

const themeSelector = document.getElementById('theme');
const root = document.documentElement;

if (themeSelector) {
    const savedTheme = localStorage.getItem('cintiaTheme');
    if (savedTheme) {
        themeSelector.value = savedTheme;
        applyTheme(savedTheme);
    }

    themeSelector.addEventListener('change', function () {
        const theme = this.value;
        applyTheme(theme);
        localStorage.setItem('cintiaTheme', theme);
    });
}


// Theme logic
function applyTheme(theme) {
    if (theme === 'sunset') {
        root.style.setProperty('--bg-color', '#fff0e6');
        root.style.setProperty('--text-color', '#5c3d2e');
        root.style.setProperty('--accent-color', '#ff7f50');
    } else if (theme === 'mint') {
        root.style.setProperty('--bg-color', '#e6fff9');
        root.style.setProperty('--text-color', '#2e5c5c');
        root.style.setProperty('--accent-color', '#66cdaa');
    } else if (theme === 'lavender') {
        root.style.setProperty('--bg-color', '#f3f0ff');
        root.style.setProperty('--text-color', '#4b3d5c');
        root.style.setProperty('--accent-color', '#b39ddb');
    } else {
        root.style.setProperty('--bg-color', '#fdf6f0');
        root.style.setProperty('--text-color', '#333');
        root.style.setProperty('--accent-color', '#d36c6c');
    }
}

function applyCustomTheme() {
    root.style.setProperty('--bg-color', document.getElementById('bgColor').value);
    root.style.setProperty('--text-color', document.getElementById('textColor').value);
    root.style.setProperty('--accent-color', document.getElementById('accentColor').value);
}

//project filter
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".filter-buttons button");
    const projects = document.querySelectorAll(".project");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            // Highlight active button
            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Filter projects
            projects.forEach(project => {
                if (category === "all" || project.classList.contains(category)) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });
});
