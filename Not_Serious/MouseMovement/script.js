const x_coord_text = document.getElementById("x_text");
const y_coord_text = document.getElementById("y_text");

document.addEventListener("mousemove", (event) => {
    x_coord_text.innerHTML = event.clientX;
    y_coord_text.innerHTML = event.clientY;

});