const answers = ['A', 'B', 'B'];
const questions = document.querySelectorAll('.question');

// get the text for each div
questions.forEach(question => {
    console.log(question.innerText)
});