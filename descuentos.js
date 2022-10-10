const btn = document.getElementById('calcular');
const inPrice = document.getElementById('price');
const inDiscount = document.getElementById('discount');
const pResult = document.getElementById('result');

// let cupones = {1001:10,1002:15,1003:20,1004:25,1005:18,1006:12};

let couponList = [];
couponList.push({
    name: 'A10',
    discount: 10
});
couponList.push({
    name: 'A11',
    discount: 15
});
couponList.push({
    name: 'A12',
    discount: 20
});

btn.addEventListener('click', calculateDiscount);

function calculateDiscount () {
    const price = Number(inPrice.value);
    const coupon = inDiscount.value;

    function isCouponInArray (couponElement) {
        return couponElement.name == coupon;
    }

    const couponInArray = couponList.find(isCouponInArray);

    if (!price) {
        pResult.innerText = '¡¡Porfavor, introduce un precio!!';
        return;
    }
    if (!inDiscount.value) {
        pResult.innerText = 'Usted no posee ningún código de descuento, su precio sigue siendo: Q' + price;
        return;
    }
    if (!couponInArray) {
        pResult.innerHTML = '¡¡El código de descuento no es valido!!</br>Se le aplicará el precio normal: Q' + price;
        return;
    }

    let discount = couponInArray.discount;
    let newPrice = price - (price * (discount/100))

    pResult.innerHTML = 'El código utilizado le da un descuento del ' + discount + '%</br>El nuevo precio con el descuento es de: Q' + newPrice;
}