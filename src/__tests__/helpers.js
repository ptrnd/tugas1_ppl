/*
    Gunakan file ini untuk membuat test case dengan Jest
*/

const {
    incrementQty,
    decrementQty,
    hitungSubtotal,
    absoluteQty,
    hitungDiskon,
    grandTotal
} = require('../helpers.js')

test('Qty 1 jika ditambah 1 hasilnya 2', () => {
    expect(incrementQty(1)).toBe(2);
});

test('Qty 1 jika ditambah "1" hasilnya 2', () => {
    expect(incrementQty("1")).toBe(2);
});

test('Qty 2 jika dikurangi 1 hasilnya 1', () => {
    expect(decrementQty(2)).toBe(1);
});

test('jika qty -5, maka keluarnya jadi 1', () => {
    expect(absoluteQty(-5)).toBe(1);
});

test('Subtotal dari 50000 dn qty 2 adalah 100000', () => {
    expect(hitungSubtotal(50000, 2)).toBe(100000);
});

test('Diskon kode KODE25 dari barang berharga 50k dan qty 2 (total 100k) adalah 25000', () => {
    expect(hitungDiskon(50000, 2, "KODE25")).toBe(25000);
});

test('Grandtotal dari barang dengan harga 50000 qty 2 diskon KODE25 adalah 75000', () => {
    expect(grandTotal(50000, 2, "KODE25")).toBe(75000);
});