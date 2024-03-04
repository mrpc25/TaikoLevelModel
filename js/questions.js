var question = 
[
    {
        topic:"貓的英文是?\n(a)cat\n(b)dog\n(c)turtle",
        answer:"a"
    },
    {
        topic:"湯匙的英文是?\n(a)chopstick\n(b)spoon\n(c)bowl",
        answer:"b"
    },
    {
        topic:"電腦的英文是?\n(a)cellphone\n(b)controller\n(c)computer",
        answer:"c"
    },
    {
        topic:"鍵盤的英文是?\n(a)mouse\n(b)keyboard\n(c)monitor",
        answer:"b"
    },
    {
        topic:"貨幣的英文是?\n(a)money\n(b)interaction\n(c)currency",
        answer:"c"
    }
]
var imput
var correct = 0

alert("一共有" + String(question.length) + "道題目，每題會有\"a\",\"b\",\"c\"一共三個雪項。");
document.write("以下是您的作答紀錄:")
document.write("<br/>")
for(var i = 1 ; i <= question.length ; i = i + 1)
{
    input = prompt(question[i-1].topic)
    if(i <= question.length-1) //到最後一題之前，會提醒做了幾題
    {
        if(input==question[i-1].answer) //輸入的東西跟答案(某一項次的question的answer)一樣
        {
            correct = correct + 1
            alert("恭喜你答對了，目前答對了" + String(correct) + "/" + String(question.length) +  "題.");
        }
        else
        {
            alert("很可惜答錯了，目前答對了" + String(correct) + "/" + String(question.length) +  "題.");
        }
    }
    else //到最後一題的時候，提醒已經作答完畢
    {
        if(input==question[i-1].answer) 
        {
            correct = correct + 1
            alert("恭喜你答對了")
            alert("所有的題目都已經作答完畢。")
        }
        else
        {
            alert("很可惜答錯了")
            alert("所有的題目都已經作答完畢。")
        }
    }

    document.write("(" + String(i) + ")" + input)
    document.write("<br/>")
}

document.write("<br/>")
document.write("你在" + String(question.length) + "題當中，總共答對了" + String(correct) + "題，")
if(correct==question.length)
{
    document.write("全部答對！")
}
else if(correct>=question.length*0.75)
{
    document.write("表現的很亮眼！")
}
else if(correct>=question.length*0.5)
{
    document.write("表現的不錯！")
}
else if(correct>=question.length*0.25)
{
    document.write("好像有點差強人意？")
}
else if(correct>0)
{
    document.write("請再接再厲喔。")
}
else
{
    document.write("你他媽真的爛到出水欸。")
}