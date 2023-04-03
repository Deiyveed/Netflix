// const faqAnswer = document.querySelectorAll('.faq-answer');
// const faqToggle = document.querySelectorAll('.faq-question');

let faq1 = document.getElementById("faq-list");
let faq2 = document.getElementById("faq-list-1");
let faq3 = document.getElementById("faq-list-2");
let faq4 = document.getElementById("faq-list-3");
let faq5 = document.getElementById("faq-list-4");
let faq6 = document.getElementById("faq-list-5");

let faqAns1 = document.getElementById("faq-ans");
let faqAns2 = document.getElementById("faq-ans1");
let faqAns3 = document.getElementById("faq-ans2");
let faqAns4 = document.getElementById("faq-ans3");
let faqAns5 = document.getElementById("faq-ans4");
let faqAns6 = document.getElementById("faq-ans5");

const questions = [faq1, faq2, faq3, faq4, faq5, faq6]
const answers = [faqAns1, faqAns2, faqAns3, faqAns4, faqAns5, faqAns6]

// for (const question of questions) {
//     question.addEventListener("click", function(event) {
//         const index = questions.indexOf(question);

//         for (const answer of answers) {
//             const visibility = answer.getAttribute("data-visible")
//             if (answer === answers[index]) {
//                 answer.setAttribute("data-visible", "true")
//                 question.setAttribute("aria-expanded", "true")
//             } else if (visibility === "true") {
//                 answer.setAttribute("data-visible", "false")
//                 question.setAttribute("aria-expanded", "false")

//                if (index === answer) {
//                     answer.setAttribute("data-visible", "false")
//                 }
//             }; 
//         };
//     });
// };

questions[0].addEventListener('click', () => {
    const visibility = answers[0].getAttribute("data-visible");

    if (visibility === "false") {
        answers[0].setAttribute("data-visible", true);
        questions[0].setAttribute("aria-expanded", true);
    }
    else if (visibility === "true") {
        answers[0].setAttribute("data-visible", false);
        questions[0].setAttribute("aria-expanded", false);
    }
});

questions[1].addEventListener('click', () => {
    const visibility = answers[1].getAttribute("data-visible");

    if (visibility === "false") {
        answers[1].setAttribute("data-visible", true);
        questions[1].setAttribute("aria-expanded", true);
    }
    else if (visibility === "true") {
        answers[1].setAttribute("data-visible", false);
        questions[1].setAttribute("aria-expanded", false);
    }
});

questions[2].addEventListener('click', () => {
    const visibility = answers[2].getAttribute("data-visible");

    if (visibility === "false") {
        answers[2].setAttribute("data-visible", true);
        questions[2].setAttribute("aria-expanded", true);
    }
    else if (visibility === "true") {
        answers[2].setAttribute("data-visible", false);
        questions[2].setAttribute("aria-expanded", false);
    }
});

questions[3].addEventListener('click', () => {
    const visibility = answers[3].getAttribute("data-visible");

    if (visibility === "false") {
        answers[3].setAttribute("data-visible", true);
        questions[3].setAttribute("aria-expanded", true);
    }
    else if (visibility === "true") {
        answers[3].setAttribute("data-visible", false);
        questions[3].setAttribute("aria-expanded", false);
    }
});

questions[4].addEventListener('click', () => {
    const visibility = answers[4].getAttribute("data-visible");

    if (visibility === "false") {
        answers[4].setAttribute("data-visible", true);
        questions[4].setAttribute("aria-expanded", true);
    }
    else if (visibility === "true") {
        answers[4].setAttribute("data-visible", false);
        questions[4].setAttribute("aria-expanded", false);
    }
});

questions[5].addEventListener('click', () => {
    const visibility = answers[5].getAttribute("data-visible");

    if (visibility === "false") {
        answers[5].setAttribute("data-visible", true);
        questions[5].setAttribute("aria-expanded", true);
    }
    else if (visibility === "true") {
        answers[5].setAttribute("data-visible", false);
        questions[5].setAttribute("aria-expanded", false);
    }
});

// questions.forEach(function(toggle) {
//     toggle.addEventListener('click', () => {
//         answers.forEach(function(answer) {
//             const visibility = answer.getAttribute("data-visible");
        
//             if (visibility === "false") {
//                 answer.setAttribute("data-visible", "true");
//                 toggle.setAttribute("aria-expanded", "true");
//             }
//             else if (visibility === "true") {
//                 answer.setAttribute("data-visible", "false");
//                 toggle.setAttribute("aria-expanded", "false");
//             }
//         });
//     });
// });

