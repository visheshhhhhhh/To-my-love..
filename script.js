const questions = [
    {
        question: "What nickname do I call you? ❤️",
        options: ["Rasmalai", "Baby", "Cutie pie", "Bauni"],
        answer: "Rasmalai"
    },
    {
        question: "What is the one thing I love the most about you? 💕",
        options: ["Your smile 😊", "Your cute anger 😤", "Your caring nature 💗", "All of these ❤️"],
        answer: "All of these ❤️"
    },
    {
        question: "Who is the luckiest person to have you in their life? ✨",
        options: ["A random person 😅", "Your best friend 🤭", "Me ❤️", "Nobody 😭"],
        answer: "Me ❤️"
    }
];

let currentQuestion = 0;

function showQuiz() {
    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    loadQuestion();
}

function loadQuestion() {
    let q = questions[currentQuestion];

    document.getElementById("question").innerHTML = q.question;

    let optionsBox = document.getElementById("options");
    optionsBox.innerHTML = "";

    q.options.forEach(option => {
        let button = document.createElement("button");
        button.innerHTML = option;

        button.onclick = () => {
            if(option === q.answer) {
                currentQuestion++;

                if(currentQuestion < questions.length) {
                    loadQuestion();
                } else {
                    showMessage();
                }
            } else {
                alert("Try again ❤️");
            }
        };

        optionsBox.appendChild(button);
    });
}


function showMessage() {
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("message").classList.remove("hidden");

    let text = `Happy Birthday, my Rasmalai ❤️🎂

I still can't believe that the day of the person who means so much to me is finally here.

I wish I could be with you right now, hold your hand, see your smile, and celebrate this beautiful day with you. Even from far away, I want you to feel how much you mean to me.

You are not just my girlfriend, you are my happiness, my comfort, and the person who can make my bad days better just by talking to me.

Thank you for coming into my life and making it more beautiful. Thank you for all the little moments, laughs, care, and memories we share.

No matter how many kilometers are between us, you will always be close to my heart.

Today is your day, so smile as much as you can and remember that someone far away is smiling because you exist.

Happy Birthday once again ❤️

I love you so much 🫶✨`;

    let i = 0;
    let letter = document.getElementById("letter");

    function typing() {
        if(i < text.length) {
            letter.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 30);
        }
    }

    typing();
}


function showFinal() {
    document.getElementById("message").classList.add("hidden");
    document.getElementById("final").classList.remove("hidden");
}


function playMusic() {
    document.getElementById("music").play();
}


// Floating hearts
setInterval(() => {
    let heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}, 500);
