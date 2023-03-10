// ************ Controllers ************

const mainController = {

    index: function (req, res) {
        res.render('index');
    },

    procces: function (req, res) {

        let texto = req.body.texto;

        texto = texto.replace(/[^\w\s]/gi, '')
        texto = texto.replace(/\r?\n/g, " ");
        texto = texto.replace(/[ ]+/g, " ");
        texto = texto.replace(/^ /, "");
        texto = texto.replace(/ $/, "");

        let textoProcesado = texto.split(" ");

        let textoSinDuplicados = [...new Set(textoProcesado)];

        let resultado = []

        for (let i = 0; i < textoSinDuplicados.length; i++) {
            resultado.push(devuelveCantidad(textoSinDuplicados[i], textoProcesado))
        }
        function devuelveCantidad(palabra, array) {
            let count = 0;
            for (let i = 0; i < array.length; i++) {
                if (array[i] == palabra) {
                    count++;
                }
            }
            return count;
        }        
        res.render("result", { textoSinDuplicados, resultado })
    }
}

module.exports = mainController;