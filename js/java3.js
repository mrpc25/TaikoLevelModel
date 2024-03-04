//while 迴圈
//**寫法1
var i = 1;
while(i <= 5)
{
    document.write(i);
    document.write("<br/>");
    i = i + 1;
}

document.write("<hr/>");

//**寫法2
var j = 1;
do
{
    document.write(j);
    document.write("<br/>");
    j = j + 1;
}
while(j <= 5)
document.write("<hr/>");

//for 迴圈

for(var k=1 ; k<=5 ; k=k+1)
{
    document.write(k);
    document.write("<br/>");
}

document.write("<hr/>");

var stringarray = ["abc" ,"def" ,"ghi", "jkl", "mno", "pqr", "stu", "vwx", "yz"]
for(var k=1 ; k<=stringarray.length ; k=k+1)
{
    document.write(stringarray[k-1])
    document.write("<br/>")
}

var p = 1
while (p<=stringarray.length) 
{
    document.write(stringarray[p-1])
    document.write("<br/>")
    p = p + 1
}
document.write("<hr/>")

//二微陣列 & 巣狀迴圈
var array2d = 
[
    [1,2],
    [3,4,5],
    [6],
    [7,8,9],
    [0],
]
document.write(array2d[1][2])
document.write("<br/>")

for(var i=0 ; i < array2d.length ; i = i + 1)
{
    for(var j=0 ; j < array2d[i].length ; j = j + 1)
    {
        document.write(array2d[i][j]);
    }
    document.write("<br/>")
}

//class 模板
class person
{
    constructor(input_string ,input_OX ,input_numericalvalue)
    {
        this.name = input_string //person的name性質會取決於輸入的input_string)
        this.is_male = input_OX
        this.born = input_numericalvalue
    }
    age(yearinpresent)
    {
        document.write(String(yearinpresent - this.born))
    }
}

var Rwei = new person("rwei" ,true ,2002)
var RB = new person("rb" ,true ,2002)
var Overload = new person("airfuckguy" ,true ,1998)
var butter = new person("butterflyouo" ,false ,1997)

butter.age(2022);
document.write("<br/>");
document.write(Overload.name);
document.write("<br/>");
document.write(RB.is_male);

document.write("<br/>");
document.write(String( Date() ) );


document.write("<br/>");
var nowyear = new Date().getFullYear()
document.write(String(nowyear))
document.write("<br/>");
var nowmonth = new Date().getMonth()
document.write(String(nowmonth + 1))
document.write("<br/>");
var nowdate = new Date().getDate()
document.write(String(nowdate))
document.write("<br/>");
var nowhour = new Date().getHours()
document.write(String(nowhour))
document.write("<br/>");
var nowmin = new Date().getMinutes()
document.write(String(nowmin))
document.write("<br/>");
var nowsec = new Date().getSeconds()
document.write(String(nowsec))
document.write("<br/>");

