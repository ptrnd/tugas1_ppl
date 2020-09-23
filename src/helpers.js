const incrementQty = (qty) => parseInt(qty) + 1;
const decrementQty = (qty) => parseInt(qty) - 1;

function hitungSubtotal(price, qty) {
    return price * qty;
}

function grandTotal(price, qty, kode) {
    return hitungSubtotal(price, qty) - hitungDiskon(price, qty, kode);
}

function absoluteQty(qty) {
    return (parseInt(qty) < 1) ? 1 : qty;
}

function hitungDiskon(price, qty, kode) {
    const subTotal = hitungSubtotal(price, qty);
    switch (kode) {
        case "KODE25":
            hasilDiskon = subTotal * 0.25;
            break;
        case "KODE10":
            hasilDiskon = subTotal * 0.10;
            break;
        case "KODE50":
            hasilDiskon = subTotal * 0.50;
            break;
        case "PELANGGAN1JT":
            hasilDiskon = subTotal * 0.40;
            break;
        default:
            hasilDiskon = 0;
            break;
    }
    return hasilDiskon;
}

module.exports = {
    incrementQty,
    decrementQty,
    hitungSubtotal,
    absoluteQty,
    hitungDiskon,
    grandTotal
};