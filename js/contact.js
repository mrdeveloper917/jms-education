document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    
    const data = {
        name,
        email,
        message,
        date: new Date().toLocaleString()
    };

    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push(data);
    localStorage.setItem("messages", JSON.stringify(messages));

    alert("✅ Message sent successfully!");

    document.getElementById("contactForm").reset();
});