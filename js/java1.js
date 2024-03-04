document.write("123")
document.write("<br/>")

//---定義值
//**var的命名只能是 (1)英文 (2)數字 (3)$ (4)_ 的組合，開頭不能是數字

//字串
var a_string = "This is a string.";
document.write(a_string)
document.write("<br/>")
document.write("<hr/>");

//數值
var age = 20;
document.write(age);
document.write("<br/>");

document.write("我今年要" + String(age + 1)  + "歲了欸幹");
document.write("<br/>");
document.write("<hr/>");

//布林值(True/False)
//var IsKartriderPopular = False;
document.write("<br/>");

//如何將雙引號(")加進字串:在前面加上\
var stringex = "The word \"WTF\" basically means \"what the fuck\".";
//              012345678 9
document.write(stringex);
document.write("<br/>");

//字串長度
document.write("The phase ahove totally has " + String(stringex.length) + "  words.");
document.write("<br/>");

//字串功能
document.write(stringex.toUpperCase()); //大寫
document.write("<br/>");
document.write(stringex.toLowerCase()); //小寫
document.write("<br/>");
document.write(stringex.charAt(4)); //在"4"這個位置的是哪個字
document.write("<br/>");
document.write(stringex.indexOf("W")); //"W"這個字在哪個位置
document.write("<br/>");
document.write(stringex.substring(0,3)); //在"0~3"這個範圍內的字
document.write("<br/>");
document.write("<hr/>");

//數字相關用法
var number = 487
document.write(3);
document.write("<br/>");
document.write(number);
document.write("<br/>");
document.write(Math.abs(-12)); //絕對值
document.write("<br/>");
document.write(Math.max(1,100,81,994,number)); //最大
document.write("<br/>");
document.write(Math.min(1000,1002,810,994,number)); //最小
document.write("<br/>");
document.write(Math.round(9.87)); //四捨五入
document.write("<br/>");
document.write(Math.pow(3,6)); //3的6次方
document.write("<br/>");
document.write(Math.sqrt(81)); //開平方根
document.write("<br/>");
document.write(Math.random()); //0~1之間隨機一個數字
document.write("<br/>");
document.write(Math.round(Math.random()*1000)/100); //0~10當中隨機一個到小數二位後的數字
document.write("<br/>");
document.write("<hr/>");

//輸入
my_twitchID = prompt("你的Twitch ID是?"); //預設輸入形式是字串
document.write("你的TwitchID是" + my_twitchID + ".");
document.write("<br/>");

Anumber = prompt("請輸入一個數字")
document.write(parseInt(Anumber)) //將字串轉成整數 (不看小數點後)
document.write("<br/>");
document.write(parseFloat(Anumber)) //將字串轉成數字
document.write("<br/>");
document.write("<hr/>");