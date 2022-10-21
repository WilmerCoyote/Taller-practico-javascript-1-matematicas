// CALCULO DEL PROMEDIO
let ramdomNumbers = [16,28,13,17,21,10,15,16,32,13,18,13];
console.log(ramdomNumbers.length);

console.group('Promedio');
function promedio (Array) {
    // let suma = 0;

    // for (number of Array) {
    //     suma = suma + number;
    // }

    // const sumaLista = ramdomNumbers.reduce(function (acumulado, nuevoValor) {
    //     return acumulado + nuevoValor;
    // });

    const sumaLista = Array.reduce((acumulado,nuevoValor) => acumulado + nuevoValor);
    const promedio = sumaLista/Array.length;
    console.log(promedio);
}

promedio(ramdomNumbers);
console.groupEnd('Promedio');

// CALCULO DE LA MEDIANA
// Determinar si el arreglo es par o impar
console.group('Mediana');

function sortArray (unorderedArray) {
    const orderedArray = unorderedArray.sort( function (acumulado, nuevoValor) {
        // if (acumulado > nuevoValor) {
        //     return 1;
        // } else if (acumulado == nuevoValor) {
        //     return 0;
        // } else {
        //     return -1;
        // }
        return acumulado - nuevoValor;
    });
    console.log(orderedArray);
    return orderedArray;
}

function esPar (Array) {
    const elements = Array.length;

    // if (elements%2 == 0) {
    //     return false;
    // } else {
    //     return true;
    // }

    return !(elements%2);
}

console.log(esPar(ramdomNumbers));

function calculoMediana (Array) {
    const listaEsPar = esPar(Array);
    const orderedArray = sortArray(Array);

    if (listaEsPar) {
        const indexFirstElement = (Array.length/2)-1;
        const indexSecondElement = Array.length/2;
        promedio([orderedArray[indexFirstElement],orderedArray[indexSecondElement]]);
    } else {
        const indexElement = Math.floor(Array.length/2);
        console.log(indexElement);
        const mediana = orderedArray[indexElement];
        return console.log(mediana);
    }
}

calculoMediana(ramdomNumbers);
console.groupEnd('Mediana');

//CALCULO DE LA MODA
console.group('Moda');

function sortListArrays (unorderedListArrays) {
    const orderedListArrays = unorderedListArrays.sort(function (acumulado,nuevoValor) {
        return nuevoValor[1] - acumulado[1];
    });
    return orderedListArrays;
}

function calculoModa (Array) {
    const countList = {};

    for (let i = 0; i < Array.length; i++) {
        const elemento = Array[i];

        if (countList[elemento]) {
            countList[elemento] += 1;
        } else {
            countList[elemento] = 1;
        }
    }

    console.log(countList);
    const listaArrays = Object.entries(countList);
    console.log(listaArrays);

    orderedListArrays = sortListArrays(listaArrays);
    const moda = orderedListArrays[0][0];
    console.log(moda);    
}

calculoModa(ramdomNumbers);

console.groupEnd('Moda');