const button = document.getElementById("go");
const again = document.getElementById("again");
const hidden_content = document.getElementById("hide_me");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const line_color = "rgb(235, 21, 142)"

const display_width = window.innerWidth;
const display_height = window.innerHeight;
canvas.width = display_width;
canvas.height = display_height;
let points;

const xcoords = [];
const ycoords = [];

button.onclick = () => {
    points = parseInt(document.getElementById("points").value, 10);
    if (points <= 2) {
        alert("Please enter a valid number greater than 2.");
        return;
    }

    hidden_content.remove();
    canvas.classList.remove("hidden")
    again.classList.remove("hidden")

    coords(points);
    for (let i = 1; i < points; i++) {
        if (i === points - 1){
            connect(xcoords[0], ycoords[0], xcoords[i], ycoords[i]);
        }
        connect(xcoords[i-1], ycoords[i-1], xcoords[i], ycoords[i]);
    }
};

again.onclick = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    coords(points);
    
    for (let i = 1; i < points; i++) {
        if (i === points - 1){
            connect(xcoords[0], ycoords[0], xcoords[i], ycoords[i]);
        }
        connect(xcoords[i-1], ycoords[i-1], xcoords[i], ycoords[i]);
    }
}

function coords(points) {
    xcoords.length = 0;
    ycoords.length = 0;
    
    for (let i = 0; i < points; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * (canvas.height * 0.95);

        xcoords[i] = x;
        ycoords[i] = y;

        drawPoint(x, y, "white");
    }
}

function drawPoint(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 3, 3);
}

function connect(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = line_color;
    ctx.lineWidth = 1;
    ctx.stroke();
}