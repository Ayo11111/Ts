let c = 2;
function fn2() {
    alert(this);
}
let box1 = document.getElementById('box1');
box1 === null || box1 === void 0 ? void 0 : box1.addEventListener('click', function () {
    alert('hello');
});
