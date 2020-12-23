const answers = ['B', 'A', 'B'];

// moving inside the quizz exercise

let percCorrect = null;

function checkResults() {

    let results = [];
    let index = 0;
    let correct = 0;
    percCorrect = 0;
    const options = document.querySelectorAll('.my-5');

    options.forEach(option => {

        if (option.querySelector('.lead')) {
            console.log('Questions: ', option.querySelector('.lead').innerText);
            const inputs = option.querySelectorAll('div > input');
            inputs.forEach(input => {
                if (input.checked) {
                    console.log('Input selected is', input.value);
                    results.push(input.value);
                }
            })

            if (results[index] === answers[index]) {
                console.log('Correct answer!');
                correct++;
            } else {
                console.log('Wrong answer!');
            }
            index++;
        }

    })
    percCorrect = Math.round((correct / answers.length) * 1000) / 10;
    console.log('Results: ', results);
    console.log('Correct %:', percCorrect, '%')

    // go to the top of the window
    window.scrollTo(0, 0);

    if (percCorrect) {
        const resultDiv = document.querySelector('.result');
        // resultDiv.setAttribute('class', 'result text-center');
        resultDiv.classList.remove('d-none');
        resultDiv.querySelector('.text-primary').textContent = `${percCorrect}%`;
    }


}