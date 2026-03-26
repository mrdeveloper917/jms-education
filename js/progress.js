const courses = ["web", "react", "data", "java", "php", "rn"];

const defaults = {
    web: 80,
    react: 60,
    data: 40,
    java: 70,
    php: 50,
    rn: 30
};

courses.forEach(course => {
    let progress = localStorage.getItem(course + "_progress");

    if (progress === null) {
        progress = defaults[course];
        localStorage.setItem(course + "_progress", progress);
    }

    document.getElementById(course + "-progress").style.width = progress + "%";
    document.getElementById(course + "-text").innerText = progress + "% Complete";
});