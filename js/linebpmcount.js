let StartBPM;
let StartFraMol;
let StartFraDen;

let LastBPM;
let LastFraMol;
let LastFraDen; 

let actualStartBPM;
let actualLastBPM;

let StartFraction;
let LastFraction;

let Result;

let CalculateButton = document.getElementById('calculater');
let CheckBoxForRound = document.getElementById('checkforround');
//let CleanResult = document.getElementById('resultclean');

//let DigitNeeded = 5
let TenExpo;
let DigitNeeded;
//let DigitNeeded = Number(document.getElementById('DecimalDigitsNumber').value); 

let IsDigitInputIntegral = true;
//let ResultClean = CleanResult.innerHTML.document.getElementById('CLeanResultButton')

CalculateButton.addEventListener
(
    "click",
    function()
    {
        StartBPM = Number(document.getElementById('InitialVelo').value);
        StartFraMol = Number(document.getElementById('initialMole').value);
        StartFraDen = Number(document.getElementById('initialDeno').value);

        LastBPM = Number(document.getElementById('EndingVelo').value);
        LastFraMol = Number(document.getElementById('EndingMole').value);
        LastFraDen = Number(document.getElementById('EndingDeno').value); 

        actualStartBPM = StartBPM + (LastBPM - StartBPM) * StartFraMol / StartFraDen;
        actualLastBPM = StartBPM + (LastBPM - StartBPM) * LastFraMol / LastFraDen;

        StartFraction = StartFraMol / StartFraDen;
        LastFraction = LastFraMol / LastFraDen;

        if(StartFraction <= 1 && StartFraction >= 0 && LastFraction <=1 && LastFraction >=0 && StartBPM > 0 && LastBPM > 0 ) 
        {    
            if(StartBPM == LastBPM)
            {
                Result = StartBPM
                IfRoundNeeded();
                if(!IsDigitInputIntegral)
                {
                    return;
                }
                document.getElementById('resultdisplay').innerHTML = "歌速（單位：BPM）皆為" + String(Result);
            }
            else if(StartFraction == LastFraction)
            {
                Result = StartBPM + ( LastBPM - StartBPM ) * StartFraction
                IfRoundNeeded();
                if(!IsDigitInputIntegral)
                {
                    return;
                }
                document.getElementById('resultdisplay').innerHTML = "於此「點」當時的（單位：BPM）為" + String(Result);
            }
            else
            {
                Result = ( actualLastBPM - actualStartBPM ) / Math.log( actualLastBPM / actualStartBPM ) ;
                IfRoundNeeded();
                if(!IsDigitInputIntegral)
                {
                    return;
                }
                document.getElementById('resultdisplay').innerHTML = "於該「範圍」內之平均歌速（單位：BPM）為" + String(Result);
            }
            //CleanResult.innerHTML = `<input type="button" value="Clean The Result"></input>`
            //document.getElementById('test').innerHTML = String(IfNumberIntegral(DigitNeeded))
        }
        else
        {
            alert("Something is wroung!");
        }
        

        function IfRoundNeeded()
        {
            if(CheckBoxForRound.checked == true)
            {
                DigitNeeded = Number(document.getElementById('DecimalDigitsNumber').value)

                if(IfNumberIntegral(DigitNeeded))
                {
                    if(DigitNeeded < 0)
                    {
                        alert("The \"Needed Digits\" input cannot be negative.");
                    }
                    else if(DigitNeeded == 0)
                    {
                        Result = Math.round(Result);
                    }
                    else
                    {
                        //Result = Math.round( Math.pow(10, DigitNeeded) * Result ) /  ( Math.pow(10, DigitNeeded) ) ;
                        TenExpo = Math.pow(10,DigitNeeded)
                        Result = Math.round( TenExpo * Result ) /  TenExpo  ;
                    }
                    IsDigitInputIntegral = true;
                }
                else
                {
                    alert("The \"Needed Digits\" input must be a integral.")
                    IsDigitInputIntegral = false;
                }
            }
        }

        function IfNumberIntegral(x)
        {
            if( (x - Math.floor(x)) == 0 )
            {
                return true
            }
            else
            {
                return false
            }
        }
    }
)

/*
CleanResult.addEventListener
{
    "click",
    function()
    {
        document.getElementById('resultdisplay').innerHTML = " " ;      
        document.getElementById('resultclean').innerHTML = " " ;
    }
}
*/