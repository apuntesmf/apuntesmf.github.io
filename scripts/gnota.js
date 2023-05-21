
function gyo(){
    if(document.getElementById("sexo").value == "femenino"){
        const selec = document.querySelector('.container-gyo');
        const div = document.createElement('div');
        div.classList('id','thediv');
    }
    
}

function nota(form){
    var nombre1 = document.getElementById("nombre").value+ document.getElementById("apellido-paterno").value+ document.getElementById("apellido-materno").value;
    var dato = "\n\n" + document.getElementById("edad").value +" \n"+ document.getElementById("sexo").value + " \n" +document.getElementById("peso").value + "kg";
    var app = "\n\n App:\n " + document.getElementById("alergia").value + document.getElementById("enfermedades").value + document.getElementById("cirugias").value  + document.getElementById("hospitalizaciones").value  + document.getElementById("traumatismo").value + document.getElementById("transfusion").value;  
    var apnp = "\n\n Apnp:\n " + document.getElementById("etilismo").value + document.getElementById("tabaquismo").value + document.getElementById("toxico").value ;  
    var gine = "\n\n Gyo: \n " + "Menarca:" + " " + document.getElementById("menarca").value + " " + "Ivsa:" + document.getElementById("ivsa").value + " " + "Npsa:" + document.getElementById("npsa").value + " " +"Gestas:" + document.getElementById("gesta").value + " " + "Partos:" + document.getElementById("parto").value + " " + "Cesareas:" + document.getElementById("cesarea").value + " " + "Aborto:"+ document.getElementById("aborto").value + " " + "Citologia:" + document.getElementById("citologia").value + " " + "Fum:" + document.getElementById("fum").value;
    var pa = "\n\n Pa:\n " + document.getElementById("pa").value;
    var ef="\n\n Ef:\n " + document.getElementById("neuro").value + document.getElementById("piel").value + document.getElementById("cabeza").value + document.getElementById("cuello").value + document.getElementById("torax").value + document.getElementById("abdomen").value + document.getElementById("genitales").value + document.getElementById("extremidad").value;
    var analisis="\n\n Analisis:\n "+ document.getElementById("analisis").value;
    var dx="\n\n Diagnostico:\n "+ document.getElementById("idx").value;
    var plan="\n\n Plan:\n "+ document.getElementById("plan").value+"\n";
    var text= document.getElementById("final");
    
    
    if(document.getElementById("sexo").value == "femenino"){
        text.value = nombre1 + dato + app + apnp + gine + pa + ef + analisis+dx+plan;
    }else{
        text.value = nombre1 + dato + app + apnp + pa + ef + analisis+dx+plan;
    }
}

function indicaciones(form){

    if (document.getElementById("alarma").value == "Deshidratacion"){
        var text= document.getElementById("plan");
        text.value += "Medidas generales:\n"+"Datos de alarma(llanto sin lagrimas, hundimiento de ojos,irritabilidad, boca y lengua seca, no presenta micciones)."+ "\nCita abierta a urgencias en caso de presentar datos de alarma."+"\nSeguimiento con medico familair en caso de continuar con sintomatologia."; 
    }else if(document.getElementById("alarma").value == "Respiratoria"){
        var text= document.getElementById("plan");
        text.value += "Medidas generales:\n"+"Datos de alarma(disnea, sibnilancias, piel que se unde entre costillas, cambio de coloracion de unas y labios). "+ "\nCita abierta a urgencias en caso de presentar datos de alarma."+"\nSeguimiento con medico familair en caso de continuar con sintomatologia.";
    }else if(document.getElementById("alarma").value == "Obstetrica"){
        var text= document.getElementById("plan");
        text.value += "Medidas generales:\n"+"Datos de alarma(Sangrado vaginal,  convulsiones, falta de motilidad fetal, fiebre, dolor de cabeza, ver luces, escuchar zumbidos, dolor abdominal.) "+ "\nCita abierta a urgencias en caso de presentar datos de alarma."+"\nSeguimiento con medico familair en caso de continuar con sintomatologia.";
    }
}

function calc(form){
    var A = document.getElementById("peso").value;
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
    
    let medicamento ={
        nombre: document.getElementById("medicamento").value,
        mg: document.getElementById("mg").value,
        ml: document.getElementById("ml").value,
        dosis: document.getElementById("dosis").value,
        horas: document.getElementById("horario").value,
        dia:document.getElementById("dias").value
    }
    if (document.getElementById("peso").value >= 40){
        var L = medicamento.nombre +" "+ medicamento.mg + " mg  cada "+ medicamento.horas +"hrs por "+medicamento.dia+" días";
        var text= document.getElementById("final");
        text.value += L+"\n";
        return false;
    }
    else{
        if (document.getElementById("dia").checked){
            var A = document.getElementById("peso").value;
            var F = (((A * medicamento.dosis) * (medicamento.ml) / medicamento.mg) / medicamento.horas);
            var F = F.toFixed(2)
            var L = medicamento.nombre + " " +medicamento.mg + " mg/" + medicamento.ml +" ml, tomar "+ F + " ml  cada "+ medicamento.horas +"hrs por "+medicamento.dia+" días";
            var text= document.getElementById("plan");
            text.value += L+"\n";
            return false;
        }
        else{
            var A = document.getElementById("peso").value;
            var F = (((A * medicamento.dosis) * medicamento.ml) / medicamento.mg);
            var F = F.toFixed(2)
            var L = medicamento.nombre + " " + medicamento.mg+ " mg/" + medicamento.ml +" ml, tomar "+F+ " ml  cada "+ medicamento.horas +"hrs por "+medicamento.dia+" días";
            var text= document.getElementById("plan");
            text.value += L+"\n";
            return false;
        }

    }
}

function download(){
    var nombre1 = document.getElementById("nombre").value+ document.getElementById("apellido-paterno").value+ document.getElementById("apellido-materno").value;
    var text = document.getElementById("final").value;
    text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = nombre1+".txt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}
