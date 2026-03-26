const course = localStorage.getItem("currentCourse");

const coursesData = {
    web: {
        name: "Web Development",
        desc: "HTML, CSS, JavaScript"
    },
    react: {
        name: "React JS",
        desc: "Frontend Development"
    },
    data: {
        name: "Data Science",
        desc: "Python + ML"
    },
    java: {
        name: "Java Programming",
        desc: "Core + OOP"
    },
    php: {
        name: "PHP & MySQL",
        desc: "Backend Development"
    },
    rn: {
        name: "React Native",
        desc: "Mobile Development"
    }
};

/* SET DATA */
document.getElementById("courseName").innerText = coursesData[course].name;
document.getElementById("courseDesc").innerText = coursesData[course].desc;

/* DATE */
const today = new Date().toLocaleDateString();
document.getElementById("date").innerText = today;

/* CERTIFICATE ID */
const certId = "JMS-" + Math.floor(Math.random() * 100000);
document.getElementById("certId").innerText = certId;