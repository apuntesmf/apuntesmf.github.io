function nota(form){
    var nombre1 = document.getElementById("nombre").value+ document.getElementById("apellido-paterno").value+ document.getElementById("apellido-materno").value;
    var dato = "\n\n" + document.getElementById("edad").value +" \n"+ document.getElementById("sexo").value + " \n" +document.getElementById("peso").value + "kg";
    var app = "\n\n App: " + document.getElementById("alergia").value + document.getElementById("enfermedades").value + document.getElementById("cirugias").value  + document.getElementById("hospitalizaciones").value  + document.getElementById("traumatismo").value + document.getElementById("transfusion").value;  
    var apnp = "\n\n Apnp: " + document.getElementById("etilismo").value + document.getElementById("tabaquismo").value + document.getElementById("toxico").value ;  
    var pa = "\n\n Pa:" + document.getElementById("pa").value;
    var ef="\n\n Ef:" + document.getElementById("neuro").value + document.getElementById("piel").value + document.getElementById("cabeza").value + document.getElementById("cuello").value + document.getElementById("torax").value + document.getElementById("abdomen").value + document.getElementById("genitales").value + document.getElementById("extremidad").value;
    var analisis="\n\n Analisis:"+ document.getElementById("analisis").value;
    var dx="\n\n Diagnostico:"+ document.getElementById("analisis").value;
    var plan="\n\n Plan:"+ document.getElementById("analisis").value;
    var text= document.getElementById("final");
    
    text.value = nombre1 + dato + app + apnp + pa + ef + analisis+dx+plan;
}