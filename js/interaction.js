var photo = document.getElementById("photograph");
var i = 0
photo.addEventListener
(
    "mousedown",
    function()
    {
        if(i==0)
        {
            this.src = "img/thinkingpatrick.gif";
            i = i + 1;
        }
        else
        {
            this.src = "img/thinkingsponge.jpg";
            i = i - 1;
        }
    }
)

var text = document.getElementById("text");
var submit = document.getElementById("submit")

submit.addEventListener
(
    "click",
    function()
    {
        if(text.value==12345)
        {
            alert("密碼正確")
        }
        else
        {
            alert("密碼錯誤")
        }
        text.value = ""

    }
)
