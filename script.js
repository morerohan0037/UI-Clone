function scrollSlider(direction) {
    const slider = document.getElementById("slider");
    const scrollAmount = 250; // Adjust scroll speed

    slider.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth"
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        const question = box.querySelector(".ques");
        const answer = box.querySelector(".answer");
        const icon = box.querySelector(".toggle-icon");

        question.addEventListener("click", function () {
            answer.classList.toggle("show");
            icon.classList.toggle("rotate");
        });
    });
});
