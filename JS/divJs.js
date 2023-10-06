
var grayid= document.getElementById('gray')

blue.addEventListener('mouseover',function () {
    grayid.style.backgroundColor='blue'
});

red.addEventListener('mouseover',function () {
    grayid.style.backgroundColor='red'
});

green.addEventListener('mouseover',function () {
    grayid.style.backgroundColor='green'
});

blue.addEventListener('mouseout',function () {
    grayid.style.backgroundColor='gray'
});
red.addEventListener('mouseout',function () {
    grayid.style.backgroundColor='gray'
});
green.addEventListener('mouseout',function () {
    grayid.style.backgroundColor='gray'
});