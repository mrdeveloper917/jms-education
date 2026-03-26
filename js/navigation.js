function openCourse(course) {
    localStorage.setItem("currentCourse", course);
    window.location.href = "player.html";
}

function viewCertificate(course) {
    const progress = localStorage.getItem(course + "_progress");

    if (progress >= 100) {
        localStorage.setItem("currentCourse", course);
        window.location.href = "certificate.html";
    } else {
        alert("Complete the course first!");
    }
}