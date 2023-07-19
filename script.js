let displaynum = "";
let add;
let total=0;
let input = document.querySelector(`#input`);
let result = document.querySelector("#result");
let equal = document.querySelector("#equal");
document.getElementById("clear").onclick=function(){
    displaynum="";
    add=[];
    total=0;
    input.value = `${displaynum}`;
    result.value="";
}
function addfunc(value) {
    displaynum += value;
}
document.getElementById("1").onclick = function () {
    addfunc(this.value);
    input.value = `${displaynum}`;
}
document.getElementById("2").onclick = function () {
    addfunc(this.value);
    input.value = `${displaynum}`;
}
document.getElementById("3").onclick = function () {
    addfunc(this.value);
    input.value = `${displaynum}`;
}
document.getElementById("4").onclick = function () {
    addfunc(this.value);
    input.value = `${displaynum}`;
}
document.getElementById("5").onclick = function () {
    addfunc(this.value);
    input.value = `${displaynum}`;
}
document.getElementById("6").onclick = function () {
    addfunc(this.value);
    input.value = `${displaynum}`;
}
document.getElementById("7").onclick = function () {
    addfunc(this.value);
    input.value = `${displaynum}`;
}
document.getElementById("8").onclick = function () {
    addfunc(this.value);
    input.value = `${displaynum}`;
}
document.getElementById("9").onclick = function () {
    addfunc(this.value);
    input.value = `${displaynum}`;
}
document.getElementById("0").onclick = function () {
    addfunc(this.value);
    input.value = `${displaynum}`;
}

document.getElementById("+").onclick = function () {
    displaynum += "+";
    input.value = `${displaynum}`;
    equal.onclick=function(){
        add = displaynum.split("+");
        for(let i =0;i<add.length;i++){
            total+=Number(add[i]);
        }
        result.value=total;
        total=0;
    }
}
document.getElementById("-").onclick = function () {
    displaynum += "-";
    input.value = `${displaynum}`;
    equal.onclick=function(){
        add = displaynum.split("-");
        total=add[0];
        for(let i =1;i<add.length;i++){
            total-=Number(add[i]);
        }
        result.value=total;
        total=0;
    }
}
document.getElementById("*").onclick = function () {
    displaynum += "*";
    input.value = `${displaynum}`;
    equal.onclick=function(){
        add = displaynum.split("*");
        total=1;
        for(let i =0;i<add.length;i++){
            total*=Number(add[i]);
        }
        result.value=total;
    }
}
document.getElementById("/").onclick = function () {
    displaynum += "/";
    input.value = `${displaynum}`;
    equal.onclick=function(){
        add = displaynum.split("/");
        total=add[0];
        for(let i =1;i<add.length;i++){
            total/=Number(add[i]);
        }
        result.value=total;
    }
}