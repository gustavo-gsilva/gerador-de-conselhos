const botao = document.getElementById("btn");

botao.addEventListener('click', function () {
    fetch("https://api.adviceslip.com/advice")

        .then(response => response.json())

        .then(data => {
            document.getElementById("advice").innerText = data.slip.advice;
            document.getElementById("advice-id").innerText = `ADVICE #${data.slip.id}`;
        })
});