const PlatziMath = {};

PlatziMath.sortArray = function sortArray (unorderedArray) {
    const orderedArray = unorderedArray.sort( function (acumulado, nuevoValor) {
        return acumulado - nuevoValor;
    });
    console.log(orderedArray);
    return orderedArray;
}

PlatziMath.esPar = function esPar (Array) {
    const elements = Array.length;
    return !(elements%2);
}

PlatziMath.sortListArrays = function sortListArrays (unorderedListArrays) {
    const orderedListArrays = unorderedListArrays.sort(function (acumulado,nuevoValor) {
        return nuevoValor[1] - acumulado[1];
    });
    return orderedListArrays;
}

PlatziMath.promedio = function promedio (Array) {
    const sumaLista = Array.reduce((acumulado,nuevoValor) => acumulado + nuevoValor);
    const promedio = sumaLista/Array.length;
    console.log(promedio);
}

PlatziMath.calculoMediana = function calculoMediana (Array) {
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

PlatziMath.calculoModa = function calculoModa (Array) {
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