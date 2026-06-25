const password = document.getElementById("password");
const fill = document.getElementById("strength-fill");
const strengthText = document.getElementById("strength-text");
const scoreText = document.getElementById("score");
const toggleBtn = document.getElementById("toggleBtn");
const tips = document.getElementById("tips");

const commonPasswords = [
    "password",
    "123456",
    "qwerty",
    "admin",
    "welcome"
];

toggleBtn.addEventListener("click", () => {
    password.type =
        password.type === "password"
        ? "text"
        : "password";
});

password.addEventListener("input", checkPassword);

function checkPassword(){

    const pwd = password.value;

    let score = 0;

    const checks = {
        length: pwd.length >= 8,
        upper: /[A-Z]/.test(pwd),
        lower: /[a-z]/.test(pwd),
        number: /\d/.test(pwd),
        special: /[^A-Za-z0-9]/.test(pwd)
    };

    Object.keys(checks).forEach(id => {

        const element = document.getElementById(id);

        if(checks[id]){
            element.classList.add("valid");
            element.innerHTML =
            element.innerHTML.replace("❌","✅");

            score++;
        }
        else{
            element.classList.remove("valid");
            element.innerHTML =
            element.innerHTML.replace("✅","❌");
        }
    });

    let percentage = score * 20;

    fill.style.width = percentage + "%";

    if(score <= 2){
        fill.style.background =
        "linear-gradient(to right,#ff4d4d,#ff0000)";
        strengthText.textContent =
        "Strength: Weak";
    }
    else if(score === 3 || score === 4){
        fill.style.background =
        "linear-gradient(to right,#ffcc00,#ff9900)";
        strengthText.textContent =
        "Strength: Moderate";
    }
    else{
        fill.style.background =
        "linear-gradient(to right,#00ff95,#00cc66)";
        strengthText.textContent =
        "Strength: Strong";
    }

    scoreText.textContent =
    `Score: ${percentage}%`;

    if(commonPasswords.includes(
        pwd.toLowerCase()
    )){
        tips.innerHTML =
        "⚠ This is a commonly used password and can be cracked easily.";
    }
    else if(score < 5){
        tips.innerHTML =
        "💡 Try adding uppercase letters, numbers, and symbols.";
    }
    else{
        tips.innerHTML =
        "🎉 Excellent password! Very difficult to guess.";
    }
}
