window.addEventListener("load", function () {

    // CAPTURA DE FORMULARIO Y CAMPOS   

    let form = document.querySelector('.form');
    let formTextArea = document.querySelector('#texto');
    let errorsView = document.querySelector('.errores');

    formTextArea.focus();  // HACE FOCO EN ESTE CAMPO

    form.addEventListener("submit", function (e) {

        let count = 0;
        let errors = [];

        // TEXT AREA

        if (formTextArea.value == "") {
            count++;
            errors.push("Ingresa un texto.");
        }
        
        // MOSTRAMOS ERRORES

        if (count > 0) {
            errorsView.innerHTML = "";
            e.preventDefault();
            for (let i = 0; i < errors.length; i++) {
                errorsView.innerHTML += errors[i] + "<br>";
            }
        }
    });
})
