function inteiro(){
    var n1=parseFloat(document.getElementById("num1").value);

    var n2=parseFloat(document.getElementById("num2").value);

    var resultado=document.getElementById("res");

    if(n1>n2){
        resultado.innerHTML=">";
    }
    else if(n1==n2){
        resultado.innerHTML="=";
    }

    if(n1<n2){
        resultado.innerHTML="<";
    }
    else if(n1==n2){
        resultado.innerHTML="="
    }
}
function segundo(){

var n3=parseInt(document.getElementById("num3").value);

var n4=parseInt(document.getElementById("num4").value);

var n5=parseInt(document.getElementById("num5").value);

var maior=document.getElementById("res1");

var menor=document.getElementById("res2");

var se1=document.getElementById("se1");

maior.innerHTML=Math.max(n3,n4,n5);

menor.innerHTML=Math.min(n3,n4,n5);

if(n3==n4 && n4==n5){
se1.innerHTML="Todos os valores são iguais";
}
if(n3==n4){
    se1.innerHTML="O 1° e o 2° valor são iguais";
    }
    if(n4==n5){
        se1.innerHTML="O 2° e 3° valor são iguais";
        }
        if(n3==n5){
            se1.innerHTML="O 1° e 3° valor são iguais";
            }
            if(n3==n4 && n4==n5){
                se1.innerHTML="Todos os valores são iguais";
                }
}


function terceiro(){
    var n6=parseInt(document.getElementById("num6").value);

    var resultado5=document.getElementById("res5");

if(n6%2==0){
    resultado5.innerHTML="Par";
}
else if(n6%2==1){
    resultado5.innerHTML="Ímpar";
}
}


function quarta(){
    var n7=parseInt(document.getElementById("num7").value);

    var n8=parseInt(document.getElementById("num8").value);

    var n9=parseInt(document.getElementById("num9").value);

    var resultado6=document.getElementById("res6");

if(n7>=1 && n7<=31 && n8>=1 && n8<=12 && n9==2021){
    resultado6.innerHTML="Data válida";
}
else{
    resultado6.innerHTML="Data inválida";
}
}

//By : Bernardo Tadeu Alves Carvalho