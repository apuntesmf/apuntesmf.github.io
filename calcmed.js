function calc2(form){
    
    let medicamento ={
        mg: document.getElementById("mg").value,
        ml: document.getElementById("ml").value,
        dosis: document.getElementById("dosis").value,
        horas: document.getElementById("hrs").value,
    }
    if (document.getElementById("dia").checked){
        var A = document.getElementById("peso").value;
        var F = (((A * medicamento.dosis) * (medicamento.ml) / medicamento.mg) / medicamento.horas);
        var F = F.toFixed(2)
        document.getElementById("resultado").innerHTML = F;
    }
    else{
        var A = document.getElementById("peso").value;
        var F = (((A * medicamento.dosis) * medicamento.ml) / medicamento.mg);
        var F = F.toFixed(2)
        document.getElementById("resultado").innerHTML = F;
    }
}