const course = localStorage.getItem("currentCourse");

/* SET TITLE */
document.getElementById("courseTitle").innerText = course + " Course";

/* MARK COMPLETE */
function markComplete() {
    let progress = localStorage.getItem(course + "_progress") || 0;

    progress = parseInt(progress) + 10;

    if (progress > 100) progress = 100;

    localStorage.setItem(course + "_progress", progress);

    alert("Progress: " + progress + "%");

    if (progress === 100) {
        window.location.href = "certificate.html";
    }
}

/* PLAY LESSON */
function playLesson(num) {
    alert("Playing Lesson " + num);
}

/* BACK */
function goBack() {
    window.location.href = "courses.html";
}

/* OPEN DETAIL */
function openDetail() {
    window.location.href = "course-detail.html";
}

/* VIEW CERTIFICATE */
function viewCertificate() {
    const progress = localStorage.getItem(course + "_progress");

    if (progress >= 100) {
        window.location.href = "certificate.html";
    } else {
        alert("Complete course first!");
    }
}