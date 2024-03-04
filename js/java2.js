//陣列 Array
var just_a_example = [true,100,"phrase"] //可以存放布林值 數值 字串

var velocities_of_songs = [123,152,99,102,86,116,153,175,182,60,100,103,125,163,147]
random_num = Math.floor(Math.random()*(velocities_of_songs.length))

document.write(random_num)
document.write("<br/>");

document.write("The order of the song is " + String(random_num + 1) + ". Its value of beats per minute is " + velocities_of_songs[random_num] + '.')
document.write("<br/>");

document.write("There are " + String(velocities_of_songs.length) + " songs.")
document.write("<br/>");
document.write("<hr/>");

//函式 fuction
//**定義"hi()"這個函式
function hi(name)
{
    document.write(name + ",Good Morning~");
}
hi("mmthe87"); //**呼叫hi()，然後執行
document.write("<br/>");

function ApexChoose()
{
    var legends = ["Bloodhound","Gibbrator","Lifeline","Pathfinder","Wraith","Bangolore","Caustic","Mirage","Octane","Wasttsom","Crypto","Revenant","Loba","Rampart","Horizon","Fuse","Valkyrie","Seer","Ash","Maggie"]
    decision_number = Math.ceil(Math.random()*(legends.length))
    document.write("This time you could try \"" + legends[decision_number - 1] + "\".")
}
ApexChoose();
document.write("<br/>");

function multiply(num1,num2)
{
    return num1*num2
}
document.write(multiply(7,11));
document.write("<br/>");
document.write("<hr/>");

//if 判斷
//**判斷3個值最大的是誰
function max_number(num_1,num_2,num_3)
{
    if (num_1>=num_2 && num_1>=num_3)
    {
        return num_1;
    }
    else if(num_2>=num_1 && num_2>=num_3)
    {
        return num_2;
    }
    else
    {
        return num_3;
    }
}
document.write(max_number(19,52,51));
document.write("<br/>");

var ethpriceup = false;
var money = 15000;
if( money>=12000 && !ethpriceup)
{
    document.write("RTX3060");
}
else
{
    document.write("wait");
}
document.write("<br/>");
document.write("<hr/>");

//object 物件
var viewer =
{
    is_male : true,
    type : "game",
    time_as_member : 5,
    print_data : function()
    {
        document.write("Yue have been " + String(this.time_as_member) + " months on our website.") ;
    }

}

document.write(viewer.is_male)
document.write("<br/>");
viewer.print_data()