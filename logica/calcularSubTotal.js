//LISTA sub-total
function calcularSubTotal0(id){
    let precio=myAlmacen[id].precio;
    let calsubtotal=precio*(myAlmacen[id].unidades);
    document.getElementById("subtotal0"+id).innerHTML=calsubtotal+"$";
    
}

//verduleria

function calcularSubTotal1(id){
    let precio=myVerduleria[id].precio;
    let calsubtotal=precio*(myVerduleria[id].unidades);
    document.getElementById("subtotal1"+id).innerHTML=calsubtotal+"$";
    
}
//Limpieza 2

function calcularSubTotal2(id){
    let precio=myLimpieza[id].precio;
    let calsubtotal=precio*(myLimpieza[id].unidades);
    document.getElementById("subtotal2"+id).innerHTML=calsubtotal+"$";
    
}

//Lacteos 3

function calcularSubTotal3(id){
    let precio=myLacteos[id].precio;
    let calsubtotal=precio*(myLacteos[id].unidades);
    document.getElementById("subtotal3"+id).innerHTML=calsubtotal+"$";
    
}

//Bebidas 4

function calcularSubTotal4(id){
    let precio=myBebidas[id].precio;
    let calsubtotal=precio*(myBebidas[id].unidades);
    document.getElementById("subtotal4"+id).innerHTML=calsubtotal+"$";
    
}

//Carniceria 5

function calcularSubTotal5(id){
    let precio=myCarniceria[id].precio;
    let calsubtotal=precio*(myCarniceria[id].unidades);
    document.getElementById("subtotal5"+id).innerHTML=calsubtotal+"$";
    
}

//Otros 6

function calcularSubTotal6(id){
    let precio=myOtros[id].precio;
    let calsubtotal=precio*(myOtros[id].unidades);
    document.getElementById("subtotal6"+id).innerHTML=calsubtotal+"$";
    
}