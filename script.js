// @autor Igor Matheus

function calcular() {
    let etanol = parseFloat(frmFlex.txtEtanol.value.replace(",","."));
    let gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",","."));

    let resultadoGaso = document.getElementById('resultAlcool');
    let resultadoAlcool = document.getElementById('resultGasolina');
    let resultadoCalc = document.getElementById('resultCalc')



    let inputLimpar = document.getElementById('inputEta' );
    let limparInput = document.getElementById('inputGaso');

        inputLimpar.value = '';
        limparInput.value = '';


    
    if(isNaN(etanol) || isNaN(gasolina) ){
        
        alert("Informe algum número válido!")
        return false;
    } 

    if (etanol < 0.7 * gasolina){

        resultadoGaso.style.display = 'block';
        resultadoAlcool.style.display = 'none';
        resultadoCalc.style.display = 'block';

    }else {

        resultadoAlcool.style.display = 'block';
        resultadoGaso.style.display = 'none';
        resultadoCalc.style.display = 'block';

    } 

    resultadoCalc.scrollIntoView({ behavior: 'smooth' });

    }

