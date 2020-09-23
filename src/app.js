import {
    incrementQty,
    decrementQty,
    hitungSubtotal,
    absoluteQty,
    grandTotal
} from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const qtyInput = document.querySelector('#qty');
const priceInput = document.querySelector('#price');
const subtotal = document.querySelector('#subtotal');
const kodeInput = document.querySelector('#code');
const okButton = document.querySelector('#confirmButton');

incrButton.addEventListener('click', () => {
    qtyInput.value = incrementQty(qtyInput.value);
    subtotal.textContent = `Rp. ${grandTotal(priceInput.value, qtyInput.value, kodeInput.value)}`
});

decrButton.addEventListener('click', () => {
    qtyInput.value = decrementQty(qtyInput.value);
    qtyInput.value = absoluteQty(qtyInput.value);
    subtotal.textContent = `Rp. ${grandTotal(priceInput.value, qtyInput.value, kodeInput.value)}`
});

okButton.addEventListener('click', () => {
    subtotal.textContent = `Rp. ${grandTotal(priceInput.value, qtyInput.value, kodeInput.value)}`
});

priceInput.addEventListener('keyup', () => {
    subtotal.textContent = `Rp. ${grandTotal(priceInput.value, qtyInput.value, kodeInput.value)}`
});

qtyInput.addEventListener('keyup', () => {
    subtotal.textContent = `Rp. ${grandTotal(priceInput.value, qtyInput.value, kodeInput.value)}`
});

kodeInput.addEventListener('keyup', () => {
    subtotal.textContent = `Rp. ${grandTotal(priceInput.value, qtyInput.value, kodeInput.value)}`
});