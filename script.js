// @autor Igor Matheus

    //funçao calcular quando ser clicado
    function calcular() {

        // trim() remove espaços em branco do início e do final de uma string.
        let etanol = document.getElementById('inputEta').value.trim();
        let gasolina = document.getElementById('inputGaso').value.trim();

        // variavel dos resultados
        let resultadoGaso = document.getElementById('resultAlcool');
        let resultadoAlcool = document.getElementById('resultGasolina');
        let resultadoCalc = document.getElementById('resultCalc');


        // variavel de resetar a tela depois que atualizar e o valor depois que atualzar
        let inputLimpar = document.getElementById('inputEta' );
        let limparInput = document.getElementById('inputGaso');

        inputLimpar.value = 'R$0,00';
        limparInput.value = 'R$0,00';


        // Remove o "R$" e "," para obter o valor numérico, se houver algo diferente de "R$0,00"
        if (etanol !== 'R$0,00') {
            etanol = parseFloat(etanol.replace(/[^\d,]/g, '').replace(",", "."));
        }
        if (gasolina !== 'R$0,00') {
            gasolina = parseFloat(gasolina.replace(/[^\d,]/g, '').replace(",", "."));
        }

        // validação para ver se foi algo digitado
        if (etanol === 'R$0,00' || gasolina === 'R$0,00') {
            alert("Informe algum valor antes de calcular!");
            return false;
        }


        // calculos
        if (etanol < 0.7 * gasolina){

            resultadoGaso.style.display = 'block';
            resultadoAlcool.style.display = 'none';
            resultadoCalc.style.display = 'block';

        }else {

            resultadoAlcool.style.display = 'block';
            resultadoGaso.style.display = 'none';
            resultadoCalc.style.display = 'block';

        } 

        // para a tela rolar no resultado
        resultadoCalc.scrollIntoView({ behavior: 'smooth' });

    }


    // funçao de mascara ' R$0,00 '
    function formatarMoeda(input) {

        // Remove caracteres não numéricos
        let valor = input.value.replace(/\D/g, '');

        // Remove zeros na esquerda
        valor = valor.replace(/^0+/, '');

        // verifica se a string VALOR tem menos de 3 caracteres. 
        // Se tiver, ela adiciona zeros à esquerda para garantir que a parte inteira tenha pelo menos três dígitos.
        if (valor.length < 3) {
            valor = '0'.repeat(3 - valor.length) + valor;
        }

        // Atualiza o valor no input
        input.value = 'R$' + valor.substr(0, valor.length - 2) + ',' + valor.substr(-2);

    }
        