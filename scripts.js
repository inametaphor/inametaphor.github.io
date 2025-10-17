const toggle = document.getElementById("toggle")

const theme = () => {
    if (toggle.checked === true) {    
        document.documentElement.setAttribute('data-theme', "dark"); 
        localStorage.setItem("theme", "dark");
    } else {
    document.documentElement.removeAttribute('data-theme');
    localStorage.removeItem("theme");
    }
};

if (localStorage.getItem("theme") === "dark") {
    toggle.checked = true;
    document.documentElement.setAttribute("data-theme", "dark");
}

toggle.addEventListener('change', theme)