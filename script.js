let answer = Math.floor(Math.random() * 100)+1;
function checkAnswer() {
    let input = document.getElementById("kotae").value;
    let setsumei = document.getElementById("setsumei");
    if (input == answer) {
        alert("정답!");
    } else if (input < answer) {
        setsumei.innerText = "더 커요!";
    } else {
        setsumei.innerText = "더 작아요!";
    }
}