function convert_temp(){
    var temp;
    var unit;
    var ans;
    var ans1;

    
    temp=parseInt(document.myform.temperature.value);
    unit=document.myform.unit1.value;
    
    if (unit=="C")
    {
        ans=(temp*5/9)+32;
        ans1=ans+" °F"
    }
    else
    {
        ans=(temp-32)*5/9;    
        ans1=ans+" °C"
    }
    document.myform.ans.value=ans1;
}