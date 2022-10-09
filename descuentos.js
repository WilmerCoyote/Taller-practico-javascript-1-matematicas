const btn = document.getElementById('calcular');
const inPrice = document.getElementById('price');
const inDiscount = document.getElementById('discount');
const pResult = document.getElementById('result');

btn.addEventListener('click', calculateDiscount);

function calculateDiscount () {
    const price = Number(inPrice.value);
    const discount = Number(inDiscount.value);

    if (!price || !discount) {
        pResult.innerText = '¡¡Porfavor, introduce los valores correntamente!!';
        return;
    }

    if (discount > 100) {
        pResult.innerText = '¡¡El descuento no puede ser de mas del 100%!!';
        return;
    }

    let newPrice = price - (price * (discount/100))

    pResult.innerText = 'El nuevo precio con el descuento es de: Q' + newPrice;
}