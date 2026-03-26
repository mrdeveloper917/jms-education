window.onload = () => {
    const bars = document.querySelectorAll(".progress");

    bars.forEach(bar => {
        let width = bar.getAttribute("data-width");
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
};