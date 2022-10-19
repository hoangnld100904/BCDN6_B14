//Bai 1
function sapxep(){
    var a=document.getElementById('bai1-value1').value;
   var  b=document.getElementById('bai1-value2').value;
    var c=document.getElementById('bai1-value3').value;
    var array=[a,b,c];
    array.sort();
    // if (a>b) [a,b] = [b,a];
    // if (a>c) [a,c] = [c,a]; ;
    // if (b>c) [b,c] = [c,b];
    var bai1_output=document.getElementById('bai1_output');
    bai1_output.innerHTML=array.toString();
}
//Bai 2
function hello(a){
    var output=document.getElementById('bai2_output');
    switch(a){
        case 1:{
            output.innerHTML="Bố"
            break
        }
        case 2:{
            output.innerHTML="Mẹ"
            break
        }
        case 3:{
            output.innerHTML="Em"
            break
        }
        case 4:{
            output.innerHTML="Anh"
        }
    }
}
//Bai 3
function demso(){
    var a=document.getElementById('bai3-value1').value;
    var b=document.getElementById('bai3-value2').value;
    var c=document.getElementById('bai3-value3').value;
    var array=[a,b,c]
    var chan=0;
    var le=0
    for (var i=0; i<3; i++){
        var input=array[i];
        if (input%2==0){
            chan++
        } 
        else{
            le++
        }
    }
    var output1=document.getElementById('bai3_output1');
    var output2=document.getElementById('bai3_output2');
    output1.innerHTML=chan;
    output2.innerHTML=le;
}
//Bai 4
function tamgiac(){
    var a=document.getElementById('bai4-value1').value;
    var b=document.getElementById('bai4-value2').value;
    var c=document.getElementById('bai4-value3').value;
    output=document.getElementById('bai4_output');
    if (a==b && b==c){
        output.innerHTML='Tam giác đều'
    }
    else if (a==b || b==c || a==c){
        output.innerHTML='Tam giác cân'
    }
    else if (a**2+b**2==c**2 || a**2==b**2+c**2 ||b**2== a**2+c**2){
        output.innerHTML='Tam giác vuông'
    }
    else{
        output.innerHTML='Tam giác thường'
    }
}