
var sum=function(a,b){
    return a+b
};

//alert(sum(10,20));
//window.alert(sum(10,20));

//自訂義 function //以log紀錄
function greet(){
    const name = document.getElementById("userName").value;
    console.log(name);
}
//標準function製作
function greetUser(){
    const name = document.getElementById("userName").value;
    document.getElementById("resultUser").textContent = name + "你好!";
}

//模組化 function
function greetUserName(){
    const name = document.getElementById("userName").value;
    //...呼叫執行事件函式
    showMessage(name);
}

function showMessage(name){
    document.getElementById("resultUser").textContent = name + "你好!";
}