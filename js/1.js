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