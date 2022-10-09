const ladoCuadrado = 9;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado**2;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
});

console.group('Triángulo');
function calcularTriangulo (ladosIguales, base) {
const altura = Math.sqrt((ladosIguales**2)-((base/2)**2));

    return {
        perimetro: 2 * ladosIguales + base,
        altura: altura,
        area: (base*altura)/2
    }
}

console.log(calcularTriangulo(6, 5));
console.groupEnd('Triángulo');

console.group('Circle');
const radioCirculo = 3;

function calcularCirculo (radio) {
    return {
        radio: radio,
        diametro: radio * 2,
        circunferencia: 2 * radio * Math.PI,
        areaCirculo: Math.PI * (radio**2)
    }
}

console.log(calcularCirculo(radioCirculo));
console.groupEnd('Circle');