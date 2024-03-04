//密碼迴圈
var correctword = 69691234;
var password;
var attempt_limit = 3
var k = 0;
while(password!=correctword && k < attempt_limit)
{
    if(k == 0)
    {
        password = prompt("請輸入密碼，您總共有" + String(attempt_limit) + "次輸入機會。");
    }
    else
    {
        password = prompt("你已經輸入錯誤" + String(k) + "次，請再次輸入密碼。您還有" + String(attempt_limit - k) + "次輸入機會。");
    }
    k = k + 1;
}
if(password!=correctword && k >= attempt_limit)
{
    alert("登入失敗，請稍後再嘗試。")
    document.write("<a href=password.html>點此重新載入</a>")
}
else
{
    alert("登入成功。")
    document.write("屁眼")
}