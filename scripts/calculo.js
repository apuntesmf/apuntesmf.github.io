let calculo={
    peso: document.getElementById("kg").value,
    mg: document.getElementById("mg").value,
    ml: document.getElementById("ml").value,
    dosis: document.getElementById("dosis").value,
    hrs: document.getElementById("hrs").value,
};

function calc(peso, mg, ml, dosis, hrs){
    var A = document.getElementById("kg").value;
    var B = document.getElementById("ml").value;
    var C = document.getElementById("hrs").value;
    var D = "0";

    if (document.getElementById("m2SC").checked){
        if (peso < 10){
            let D = (((peso * 4)) + 9) / 100;
            var D = (D * ml) / hrs; 
            document.getElementById("resultado").innerHTML = D;
            return D;
        }
        else{
            var F = (((peso * 4)) + 7) / (peso + 90);
            var F = F * ml
            var D = F / hrs
            var D = D.toFixed(2)
            document.getElementById("resultado").innerHTML = D + " ml";
            return false;
        }
        
    }
    else{
        if (peso <= 10){
            var D = peso *  100
            var D = D / hrs
            document.getElementById("resultado").innerHTML = D + " ml";
            return false;
        }
        else if ( peso >= 11 && peso <= 20){
            var E = peso - 10
            var E = E *  50
            var D = E + 1000  
            var D = D / hrs
            document.getElementById("resultado").innerHTML = D + " ml";
            return false;   
        }
        else{
            var E = peso - 20
            var E = E * 20
            var D = E + 1500
            var D = D / hrs
            document.getElementById("resultado").innerHTML = D + " ml";
            return false;
        }
        
        
    }
    
}


function calc2(form){
    if (document.getElementById("dia").checked){
        var F = (((A * D) * (C) / B)/E);
        var F = F.toFixed(2)
        document.getElementById("resultado").innerHTML = F + " ml.";
    }
    else{
        var F = (((A * D) * C) / B);
        var F = F.toFixed(2)
        document.getElementById("resultado").innerHTML = F + " ml.";
    }
    
}

function emb(form){
    var sdg = document.getElementById("sdg").value;
    if (sdg <14){
        const element = document.getElementById('selector');
        element.style.backgroundColor = 'red';
    }
    /*  var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var ano = document.getElementById("ano").value;

    mese = mes - 3;
    dias = parseInt(dia) + 7;

    var fd = new Date();
    ano = fd.getFullYear();
    dia = fd.getDate();
    mes = fd.getMonth();
    document.getElementById("resultado").innerHTML = dia + " / " + mes + " / " + ano;
    return false;



    switch(mes){
        case 0:
            mes = 12;
            if(dia <=31){
                document.getElementById("resultado").innerHTML = dia + " / " + mes;
                return false;
            }
            else{
                dia = dia - 31;
                document.getElementById("resultado").innerHTML = dia + " / " + mes;
                return false;
            }
        case 1:
            if(dia <=31){
                document.getElementById("resultado").innerHTML = dia + " / " + mes;
                return false;
            }
            else{
                dia = dia - 31;
                document.getElementById("resultado").innerHTML = dia + " / " + mes;
                return false;
            }
        
        case 2:
            if(dia <=31){
                document.getElementById("resultado").innerHTML = dia + " / " + mes;
                return false;
            }
            else{
                dia = dia - 31;
                document.getElementById("resultado").innerHTML = dia + " / " + mes;
                return false;
            }

        case 3:
            if(dia <=31){
                document.getElementById("resultado").innerHTML = dia + " / " + mes;
                return false;
            }
            else{
                dia = dia - 31;
                var mesa = mes + 1 ;
                document.getElementById("resultado").innerHTML = dia + " / " + mesa;
                return false;
            }

        case 4:
            ano = parseInt(ano) + 1
            if(dia <=31){
                document.getElementById("resultado").innerHTML = dia + " / " + mes + " / " + ano;
                return false;
            }
            else{
                dia = dia - 31;
                var mesa =  mesa + 1;
                document.getElementById("resultado").innerHTML = dia + " / " + mesa + " / " + ano;
                return false;
            }

        case 5:
            if(dia <=31){
                document.getElementById("resultado").innerHTML = dia + " / " + mes;
                return false;
            }
            else{
                dia = dia - 31;
                var mesa =  mesa + 1;
                document.getElementById("resultado").innerHTML = dia + " / " + mesa + " / " + ano;
                return false;
            }

        case 6:
            if(dia <=31){
                document.getElementById("resultado").innerHTML = dia + " / " + mes;
                return false;
            }
            else{
                dia = dia - 31;
                var mesa =  mesa + 1;
                document.getElementById("resultado").innerHTML = dia + " / " + mesa + " / " + ano;
                return false;
            }

        case 7:
            if(dia <=31){
                document.getElementById("resultado").innerHTML = dia + " / " + mes;
                return false;
            }
            else{
                dia = dia - 31;
                var mesa =  mesa + 1;
                document.getElementById("resultado").innerHTML = dia + " / " + mesa + " / " + ano;
                return false;
            }

        case 8:
            if(dia <=31){
                document.getElementById("resultado").innerHTML = dia + " / " + mes;
                return false;
            }
            else{
                dia = dia - 31;
                var mesa =  mesa + 1;
                document.getElementById("resultado").innerHTML = dia + " / " + mesa + " / " + ano;
                return false;
            }

        case 9:
            if(dia <=31){
                document.getElementById("resultado").innerHTML = dia + " / " + mes;
                return false;
            }
            else{
                dia = dia - 31;
                var mesa =  mesa + 1;
                document.getElementById("resultado").innerHTML = dia + " / " + mesa + " / " + ano;
                return false;
            }

        case -2:
            var mesa = 10;
            if(dia <=31){
                document.getElementById("resultado").innerHTML = dia + " / " + mesa;
                return false;
            }
            else{
                dia = dia - 31;
                mesa = mesa + 1;
                var mesa =  mesa + 1;
                document.getElementById("resultado").innerHTML = dia + " / " + mesa + " / " + ano;
                return false;
            }

        case -1:
            var mesa = 11;
            if(dia <=31){
                document.getElementById("resultado").innerHTML = dia + " / " + mesa;
                return false;
            }
            else{
                dia = dia - 31;
                mesa = mesa + 1;
                var mesa =  mesa + 1;
                document.getElementById("resultado").innerHTML = dia + " / " + mesa + " / " + ano;
                return false;
            }

        case 12:
            if(dia <=31){
                document.getElementById("resultado").innerHTML = dia + " / " + mes;
                return false;
            }
            else{
                dia = dia - 31;
                var mesa =  mesa + 1;
                document.getElementById("resultado").innerHTML = dia + " / " + mesa + " / " + ano;
                return false;
            }
    }*/
}
function selec(form){
    var sdg = document.getElementById("sdg").value;
    if (sdg <14){
        const element = document.getElementById('selector');
        element.style.backgroundColor = 'green';
        element.hide('#selector2');
    }
    else if( sdg >=14 && sdg <=24){
        const element2 = document.getElementById('selector2');
        element2.style.backgroundColor = 'green';
        const element = document.getElementById('selector');
        element.style.backgroundColor = '#dddddd';
    }
    else if( sdg >=24 && sdg <=28){
        const element3 = document.getElementById('selector3');
        element3.style.backgroundColor = 'green';
        const element2 = document.getElementById('selector');
        element2.style.backgroundColor = '#dddddd';
        const element = document.getElementById('selector2');
        element.style.backgroundColor = '#dddddd';
    }
    else if( sdg >=28 && sdg <=34){
        const element4 = document.getElementById('selector4');
        element4.style.backgroundColor = 'green';
        const element2 = document.getElementById('selector2');
        element2.style.backgroundColor = '#dddddd';
        const element3 = document.getElementById('selector3');
        element3.style.backgroundColor = '#dddddd';
        const element = document.getElementById('selector');
        element.style.backgroundColor = '#dddddd';
    }
    else if( sdg >=34 && sdg <=40){
        const element5 = document.getElementById('selector5');
        element5.style.backgroundColor = 'green';
        element = document.getElementById('selector');
        element.style.backgroundColor = '#dddddd';
        const element2 = document.getElementById('selector2');
        element2.style.backgroundColor = '#dddddd';
        const element3 = document.getElementById('selector3');
        element3.style.backgroundColor = '#dddddd';
        const element4 = document.getElementById('selector4');
        element4.style.backgroundColor = '#dddddd';
        
    }
}