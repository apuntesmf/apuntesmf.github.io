function calc(form){
    var A = document.getElementById("kg").value;
    var B = document.getElementById("ml").value;
    var C = document.getElementById("hrs").value;
    var D = "0";

    if (document.getElementById("m2SC").checked){
        if (A < 10){
            var D = (((parseInt(A) * 4)) + 9) / 100;
            var D = (D * B) / C; 
            document.getElementById("resultado").innerHTML = D;
            return false;
        }
        else{
            var F = (((parseInt(A) * 4)) + 7) / (parseInt(A) + 90);
            var F = F * B
            var D = F / C
            var D = D.toFixed(2)
            document.getElementById("resultado").innerHTML = D + " ml";
            return false;
        }
        
    }
    else{
        if (A <= 10){
            var D = A *  100
            var D = D / C
            document.getElementById("resultado").innerHTML = D + " ml";
            return false;
        }
        else if ( A >= 11 && A <= 20){
            var E = A - 10
            var E = E *  50
            var D = E + 1000  
            var D = D / C
            document.getElementById("resultado").innerHTML = D + " ml";
            return false;   
        }
        else{
            var E = A - 20
            var E = E * 20
            var D = E + 1500
            var D = D / C
            document.getElementById("resultado").innerHTML = D + " ml";
            return false;
        }
        
        
    }
    
}
function calc2(form){
    var A = document.getElementById("kg").value;
    var B = document.getElementById("mg").value;
    var C = document.getElementById("ml").value;
    var D = document.getElementById("dosis").value;
    var E = document.getElementById("hrs").value;
    var F = "0";

    if (document.getElementById("dia").checked){
        var F = (((A * D) * (C) / B)/E);
        var F = F.toFixed(2)
        document.getElementById("resultado").innerHTML = F + " ml.";
        return false;
    }
    else{
        var F = (((A * D) * C) / B);
        var F = F.toFixed(2)
        document.getElementById("resultado").innerHTML = F + " ml.";
        return false;
    }
    
}

function emb(form){
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var ano = document.getElementById("ano").value;
    dia = parseInt(dia) + 7;
    mes = parseInt(mes) - 3;
    if (!mes <+ 12 ){
        document.getElementById("resultado").innerHTML = parseInt(dia) +"/"+ parseInt(mes)+"/"+parseInt(ano);
        return false;
    }
    else if (mes == 0){
        mes = 12
        document.getElementById("resultado").innerHTML = parseInt(dia) +"/"+ parseInt(mes)+"/"+parseInt(ano);
        return false;
    }
    else if(mes <= -1){
        mes = 11
        document.getElementById("resultado").innerHTML = parseInt(dia) +"/"+ parseInt(mes)+"/"+parseInt(ano);
        return false;
    }
    else if(mes == -2){
        mes = 10
        ano  = ano - 1
        document.getElementById("resultado").innerHTML = parseInt(dia) +"/"+ parseInt(mes)+"/"+parseInt(ano);
        return false;
    }
    

    if (dia == 32){
        dia = dia - 31;
        mes = mes + 1;
        document.getElementById("resultado").innerHTML = parseInt(dia) +"/"+ parseInt(mes)+"/"+parseInt(ano);
        return false;
    }
    else if(dia == 35){
        dia = dia - 31;
        mes = mes + 1;
        document.getElementById("resultado").innerHTML = parseInt(dia) +"/"+ parseInt(mes)+"/"+parseInt(ano);
        return false;
    }

}