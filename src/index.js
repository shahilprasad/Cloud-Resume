const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://uenuo7baywyo5s67snqfvxp6ba0ysplu.lambda-url.ap-southeast-2.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();
