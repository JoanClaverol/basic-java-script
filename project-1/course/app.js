const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
console.log(result);

form.addEventListener('submit', e => {
    // we don't want to refresh the page, witch is the default action
    e.preventDefault();

    // declare variable to store the scores
    let score = 0;
    // store in an array the results of the form
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check the answers
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    });

    // log the score to console
    // scroll at the begining of the page
    window.scrollTo(0, 0);
    // show results on page
    result.querySelector('span').textContent = `${score}%`;
    // console.log(result.querySelector('span').textContent);
    // remove the class of not showing the results 
    result.classList.remove('d-none');
    // helps to create an animation
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
});

let i = 0;
setInterval(() => {
    console.log('hello');
    i++;
    if (i === 5) {
        clearInterval(timer);
    }
}, 1000);