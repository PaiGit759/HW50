var a = new Number(5);

a+=a;

a*=2;

a/=3;

a-=4;

a%=5;


var boxElem = document.activeElement.querySelector(".result");

    boxElem.innerHTML = boxElem.innerHTML + a;

