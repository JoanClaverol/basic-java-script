const answers = ['B', 'A', 'B'];

// moving inside the quizz exercise

let percCorrect = null;

function checkResults() {

    let results = [];
    let index = 0;
    let correct = 0;
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

    if (percCorrect) {
        const resultDiv = document.querySelector('.result');
        resultDiv.setAttribute('class', 'result text-center');
        console.log(resultDiv.querySelector('.container').innerHTML = `
        <h2 class="score">Your score is <span class="text-primary">${percCorrect}%</span></h2>
        `);
    }
    return percCorrect;

}