var vlguur;
var vlgmin;
var vlgtijd;

var uurover;
var minover;

var tijd = new Date();
var uur = tijd.getHours();
var min = tijd.getMinutes();

console.log(uur + " : " +  min);

function gettijd(){

tijd = new Date();
uur = tijd.getHours();
min = tijd.getMinutes(); 
welklesuur();
tijdover();

}
gettijd();
setInterval(gettijd,1000);

function welklesuur(){
    if(uur <= 9 && min < 10){
        vlguur = 9;
        vlgmin = 10;
    } else if(uur <= 10 && min < 0){
        vlguur = 10;
        vlgmin = 0;
    } else if(uur <= 11 && min < 5){
        vlguur = 11;
        vlgmin = 5;
    } else if(uur <= 11 && min < 55){
        vlguur = 11;
        vlgmin = 55;
    } else if(uur <= 14 ){
        if(uur === 14){
            if(min < 5){
                vlguur = 14;
            vlgmin = 5;
            } else{
                vlguur = 14;
                vlgmin = 55;
            }
        } else {
        vlguur = 14;
        vlgmin = 5;
        }
    } else if(uur <= 14 && min < 55){
        vlguur = 14;
        vlgmin = 55;
    } else if(uur < 16){
        vlguur = 16;
        vlgmin = 0;
    } else{
        vlguur = 23;
        vlgmin = 59;
    }

    console.log("tot " + vlguur + " : " + vlgmin);
}
var hogte;
function tijdover(){

    uurover = vlguur - uur;
    minover = vlgmin - min;
    if(minover < 0){
        if (uurover > 0){
        uurover--;
        }
        minover = 60 + minover;
    }
    if(uurover === 0 && minover < 51){
        hogte = 100 - (minover * 2);
        document.getElementById("progressb").style.height = hogte + "dvh";
    } else if (minover > 50){
        hogte = 0;
        document.getElementById("progressb").style.height = hogte + "dvh";
    }
    console.log("nog" + uurover + " : " + minover);
    
    if(minover < 10){
        document.getElementById("minuten").innerHTML = "0" + minover;
    } else {
    document.getElementById("minuten").innerHTML = minover;
    }
    if(uurover < 10){
        document.getElementById("uren").innerHTML = "0" + uurover;
    } else {
        document.getElementById("uren").innerHTML = uurover;
    }
}

var kleur;
function changeColor(){
    kleur = document.getElementById("colorpicker").value;
    document.getElementById("progressb").backgroundColor = kleur;
    localStorage.setItem("kleur", kleur);
}

function getcolor(){
    var kleurr = localStorage.getItem("kleur");
    if(kleurr){
    kleur = kleurr;
    document.getElementById("progressb").backgroundColor = kleur;
    document.getElementById("colorpicker").value = kleur;
    }
    
}
