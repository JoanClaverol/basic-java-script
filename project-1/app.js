const answers = ['B', 'A', 'B'];

// moving inside the quizz exercise
const results = document.getElementsByName('q1');

const results2 = document.getElementsByName('q2');
results.forEach(result => {
    if (result.checked) {
        console.log('Option selected is', result.value);
    }
});

function myFunction() {
    document.getElementById("ninjaForm").submit();
    //console.log(results2);
}

// up a level
// const questions = document.getElementsByClassName('.my-5');

// questions.forEach(question => {
//     console.log(question);
// });