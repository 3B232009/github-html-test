document.title = "我的網頁";

document.getElementById("txt").textContent = "你好鴨！";

const p = document.createElement("p");
p.textContent = "動態文字段落。";
document.body.appendChild(p);

document.getElementById("heading").innerHTML = "<h1> 今天過的好嗎 </h1>"