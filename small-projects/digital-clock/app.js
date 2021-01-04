const clock = document.querySelector('.clock');

// my solution
// setTimeout(() => {

//     clock.textContent = `
//         Actual time is 
//         ${time.getHours()}:
//         ${time.getMinutes()}: 
//         ${time.getSeconds()}
//         `;
//     location.reload();
// }, 1000)

// course solution
const tick = () => {
    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `
        <span>${h}</span> : 
        <span>${m}</span> : 
        <span>${s}</span>
    `;

    clock.innerHTML = html;

};

setInterval(tick, 1000);