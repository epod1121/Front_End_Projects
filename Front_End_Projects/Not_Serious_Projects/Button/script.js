const button = document.getElementById("button");
const num = document.getElementById("num");
let count = 0;

button.addEventListener('click', function() {
    count += 1;
    num.innerHTML = count + 1;
})