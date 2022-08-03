//Almacen 0
function EliminarProducto0(id){/*boton eliminar compra de la LISTA*/
    
    restarCarrito();

    let unidadesProducto=myAlmacen[id].unidades;//unidades 

    if(unidadesProducto==1){
        myAlmacen[id].unidades=0;
         document.getElementById("tablerow0"+id).remove();//eliminamos el ROW de la "lista compra"
contadorProductoRestar();
        
        let array2=Factura0.filter((item) => item !== id);            
                    array2.forEach(element=>{
                        Factura0.push(element);
                    })

    }else if(unidadesProducto>1){

        myAlmacen[id].unidades--;
        document.getElementById("unidades0"+id).innerHTML=myAlmacen[id].unidades;
        calcularSubTotal0(id);    

    }
    restarTotal(myAlmacen[id].precio);

}

//Verduleria 1
function EliminarProducto1(id){/*boton eliminar compra de la LISTA*/
    
    restarCarrito();

    let unidadesProducto=myVerduleria[id].unidades;//unidades 

    if(unidadesProducto==1){
        myVerduleria[id].unidades=0;
         document.getElementById("tablerow1"+id).remove();//eliminamos el ROW de la "lista compra"
contadorProductoRestar();
        
        let array2=Factura1.filter((item) => item !== id);            
                    array2.forEach(element=>{
                        Factura1.push(element);
                    })

    }else if(unidadesProducto>1){

        myVerduleria[id].unidades--;
        document.getElementById("unidades1"+id).innerHTML=myVerduleria[id].unidades;
        calcularSubTotal1(id);    

    }
    restarTotal(myVerduleria[id].precio);

}


//Limpieza 2
function EliminarProducto2(id){/*boton eliminar compra de la LISTA*/
    
    restarCarrito();

    let unidadesProducto=myLimpieza[id].unidades;//unidades 

    if(unidadesProducto==1){
        myLimpieza[id].unidades=0;
         document.getElementById("tablerow2"+id).remove();//eliminamos el ROW de la "lista compra"
contadorProductoRestar();
        
        let array2=Factura2.filter((item) => item !== id);            
                    array2.forEach(element=>{
                        Factura2.push(element);
                    })

    }else if(unidadesProducto>1){

        myLimpieza[id].unidades--;
        document.getElementById("unidades2"+id).innerHTML=myLimpieza[id].unidades;
        calcularSubTotal2(id);    

    }
    restarTotal(myLimpieza[id].precio);

}



//Lacteos 3
function EliminarProducto3(id){/*boton eliminar compra de la LISTA*/
    
    restarCarrito();

    let unidadesProducto=myLacteos[id].unidades;//unidades 

    if(unidadesProducto==1){
        myLacteos[id].unidades=0;
         document.getElementById("tablerow3"+id).remove();//eliminamos el ROW de la "lista compra"
contadorProductoRestar();
        
        let array2=Factura3.filter((item) => item !== id);            
                    array2.forEach(element=>{
                        Factura3.push(element);
                    })

    }else if(unidadesProducto>1){

        myLacteos[id].unidades--;
        document.getElementById("unidades3"+id).innerHTML=myLacteos[id].unidades;
        calcularSubTotal3(id);    

    }
    restarTotal(myLacteos[id].precio);

}


//Bebidas 4
function EliminarProducto4(id){/*boton eliminar compra de la LISTA*/
    
    restarCarrito();

    let unidadesProducto=myBebidas[id].unidades;//unidades 

    if(unidadesProducto==1){
        myBebidas[id].unidades=0;
         document.getElementById("tablerow4"+id).remove();//eliminamos el ROW de la "lista compra"
contadorProductoRestar();
        
        let array2=Factura4.filter((item) => item !== id);            
                    array2.forEach(element=>{
                        Factura4.push(element);
                    })

    }else if(unidadesProducto>1){

        myBebidas[id].unidades--;
        document.getElementById("unidades4"+id).innerHTML=myBebidas[id].unidades;
        calcularSubTotal4(id);    

    }
    restarTotal(myBebidas[id].precio);

}


//Carniceria 5
function EliminarProducto5(id){/*boton eliminar compra de la LISTA*/
    
    restarCarrito();

    let unidadesProducto=myCarniceria[id].unidades;//unidades 

    if(unidadesProducto==1){
        myCarniceria[id].unidades=0;
         document.getElementById("tablerow5"+id).remove();//eliminamos el ROW de la "lista compra"
contadorProductoRestar();
        
        let array2=Factura5.filter((item) => item !== id);            
                    array2.forEach(element=>{
                        Factura5.push(element);
                    })

    }else if(unidadesProducto>1){

        myCarniceria[id].unidades--;
        document.getElementById("unidades5"+id).innerHTML=myCarniceria[id].unidades;
        calcularSubTotal5(id);    

    }
    restarTotal(myCarniceria[id].precio);

}


//Otros 6
function EliminarProducto6(id){/*boton eliminar compra de la LISTA*/
    
    restarCarrito();

    let unidadesProducto=myOtros[id].unidades;//unidades 

    if(unidadesProducto==1){
        myOtros[id].unidades=0;
         document.getElementById("tablerow6"+id).remove();//eliminamos el ROW de la "lista compra"
contadorProductoRestar();
        
        let array2=Factura6.filter((item) => item !== id);            
                    array2.forEach(element=>{
                        Factura6.push(element);
                    })

    }else if(unidadesProducto>1){

        myOtros[id].unidades--;
        document.getElementById("unidades6"+id).innerHTML=myOtros[id].unidades;
        calcularSubTotal6(id);    

    }
    restarTotal(myOtros[id].precio);

}

