//ALMACEN 0
function comprar0(id){//es apretado en las cards (cartas para comprar) y en el btn agregar (lista de compras) 
    //el problema:el btn agregar tiene un id!
    
    TagSeleccionado(id);
    let uni=myAlmacen[id].unidades;//no problem

    
    
    sumarCarrito();
if(uni==0){
        myAlmacen[id].unidades++;

        //CREACION DELA ROW DE LA SECCIO "LISTA COMPRA" 
            //comprobamos el estado de BOOLEANLISTACOMPRA 
            //esto es para ir cambiando los colores de las row
        if(booleanListaCompra==false){
            document.getElementById("listacompra").innerHTML+='<tr class="'+booleanListaCompra+'" id="tablerow'+seccion+id+'"><td>'+myAlmacen[id].producto+'</td><td>'+myAlmacen[id].precio+'$</td><td id="unidades'+seccion+id+'">'+myAlmacen[id].unidades+'</td><td id="subtotal'+seccion+id+'">'+subtotal+'$</td><td class="tdbuttons"><button class="btnEliminar" onclick="EliminarProducto0('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar0('+id+')">Agregar</button></td></tr>';
            booleanListaCompra=true;
        }else{
            document.getElementById("listacompra").innerHTML+='<tr class="'+booleanListaCompra+'" id="tablerow'+seccion+id+'"><td>'+myAlmacen[id].producto+'</td><td>'+myAlmacen[id].precio+'$</td><td id="unidades'+seccion+id+'">'+myAlmacen[id].unidades+'</td><td id="subtotal'+seccion+id+'">'+subtotal+'$</td><td class="tdbuttons"><button class="btnEliminar" onclick="EliminarProducto0('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar0('+id+')">Agregar</button></td></tr>';
            booleanListaCompra=false;
        }
        
        calcularSubTotal0(id);
        Factura0.push(id);
contadorProductoSumar();
        
    

    }else{
        myAlmacen[id].unidades++;
        document.getElementById("unidades0"+id).innerHTML=myAlmacen[id].unidades;
        calcularSubTotal0(id);
        
    }
    
   sumarTotal(myAlmacen[id].precio);
    
    }
/*



//Verduleria 1
    function comprar1(id){//es apretado en las cards (cartas para comprar) y en el btn agregar (lista de compras) 
        //el problema:el btn agregar tiene un id!
        
        
        let uni=myVerduleria[id].unidades;//no problem
        
        
        sumarCarrito();
if(uni==0){
            myVerduleria[id].unidades++;
    
            //CREACION DELA ROW DE LA SECCIO "LISTA COMPRA" 
                //comprobamos el estado de BOOLEANLISTACOMPRA 
                //esto es para ir cambiando los colores de las row
            if(booleanListaCompra==false){
                document.getElementById("listacompra").innerHTML+='<tr class="'+booleanListaCompra+'" id="tablerow'+seccion+id+'"><td>'+myVerduleria[id].name+'</td><td>'+myVerduleria[id].precio+'$</td><td id="unidades'+seccion+id+'">'+myVerduleria[id].unidades+'</td><td id="subtotal'+seccion+id+'">'+subtotal+'$</td><td class="tdbuttons"><button class="btnEliminar" onclick="EliminarProducto1('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar1('+id+')">Agregar</button></td></tr>';
                booleanListaCompra=true;
            }else{
                document.getElementById("listacompra").innerHTML+='<tr class="'+booleanListaCompra+'" id="tablerow'+seccion+id+'"><td>'+myVerduleria[id].name+'</td><td>'+myVerduleria[id].precio+'$</td><td id="unidades'+seccion+id+'">'+myVerduleria[id].unidades+'</td><td id="subtotal'+seccion+id+'">'+subtotal+'$</td><td class="tdbuttons"><button class="btnEliminar" onclick="EliminarProducto1('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar1('+id+')">Agregar</button></td></tr>';
                booleanListaCompra=false;
            }
            
            calcularSubTotal1(id);
            Factura1.push(id);
contadorProductoSumar();
            
        
    
        }else{
            myVerduleria[id].unidades++;
            document.getElementById("unidades1"+id).innerHTML=myVerduleria[id].unidades;
            calcularSubTotal1(id);
            
        }
        
        sumarTotal(myVerduleria[id].precio);
        
        }
    
//Limpieza 2
function comprar2(id){//es apretado en las cards (cartas para comprar) y en el btn agregar (lista de compras) 
    //el problema:el btn agregar tiene un id!
    
    
    let uni=myLimpieza[id].unidades;//no problem
    
    
    sumarCarrito();
if(uni==0){
        myLimpieza[id].unidades++;

        //CREACION DELA ROW DE LA SECCIO "LISTA COMPRA" 
            //comprobamos el estado de BOOLEANLISTACOMPRA 
            //esto es para ir cambiando los colores de las row
        if(booleanListaCompra==false){
            document.getElementById("listacompra").innerHTML+='<tr class="'+booleanListaCompra+'" id="tablerow'+seccion+id+'"><td>'+myLimpieza[id].name+'</td><td>'+myLimpieza[id].precio+'$</td><td id="unidades'+seccion+id+'">'+myLimpieza[id].unidades+'</td><td id="subtotal'+seccion+id+'">'+subtotal+'$</td><td class="tdbuttons"><button class="btnEliminar" onclick="EliminarProducto2('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar2('+id+')">Agregar</button></td></tr>';
            booleanListaCompra=true;
        }else{
            document.getElementById("listacompra").innerHTML+='<tr class="'+booleanListaCompra+'" id="tablerow'+seccion+id+'"><td>'+myLimpieza[id].name+'</td><td>'+myLimpieza[id].precio+'$</td><td id="unidades'+seccion+id+'">'+myLimpieza[id].unidades+'</td><td id="subtotal'+seccion+id+'">'+subtotal+'$</td><td class="tdbuttons"><button class="btnEliminar" onclick="EliminarProducto2('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar2('+id+')">Agregar</button></td></tr>';
            booleanListaCompra=false;
        }
        
        calcularSubTotal2(id);
        Factura2.push(id);
contadorProductoSumar();
        
    

    }else{
        myLimpieza[id].unidades++;
        document.getElementById("unidades2"+id).innerHTML=myLimpieza[id].unidades;
        calcularSubTotal2(id);
        
    }
    
    sumarTotal(myLimpieza[id].precio);
    
    }

//LACTEOS 3
function comprar3(id){//es apretado en las cards (cartas para comprar) y en el btn agregar (lista de compras) 
    //el problema:el btn agregar tiene un id!
    
    
    let uni=myLacteos[id].unidades;//no problem
    
    
    sumarCarrito();
if(uni==0){
        myLacteos[id].unidades++;

        //CREACION DELA ROW DE LA SECCIO "LISTA COMPRA" 
            //comprobamos el estado de BOOLEANLISTACOMPRA 
            //esto es para ir cambiando los colores de las row
        if(booleanListaCompra==false){
            document.getElementById("listacompra").innerHTML+='<tr class="'+booleanListaCompra+'" id="tablerow'+seccion+id+'"><td>'+myLacteos[id].name+'</td><td>'+myLacteos[id].precio+'$</td><td id="unidades'+seccion+id+'">'+myLacteos[id].unidades+'</td><td id="subtotal'+seccion+id+'">'+subtotal+'$</td><td class="tdbuttons"><button class="btnEliminar" onclick="EliminarProducto3('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar3('+id+')">Agregar</button></td></tr>';
            booleanListaCompra=true;
        }else{
            document.getElementById("listacompra").innerHTML+='<tr class="'+booleanListaCompra+'" id="tablerow'+seccion+id+'"><td>'+myLacteos[id].name+'</td><td>'+myLacteos[id].precio+'$</td><td id="unidades'+seccion+id+'">'+myLacteos[id].unidades+'</td><td id="subtotal'+seccion+id+'">'+subtotal+'$</td><td class="tdbuttons"><button class="btnEliminar" onclick="EliminarProducto3('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar3('+id+')">Agregar</button></td></tr>';
            booleanListaCompra=false;
        }
        
        calcularSubTotal3(id);
        Factura3.push(id);
contadorProductoSumar();
        
    

    }else{
        myLacteos[id].unidades++;
        document.getElementById("unidades3"+id).innerHTML=myLacteos[id].unidades;
        calcularSubTotal3(id);
        
    }
    
    sumarTotal(myLacteos[id].precio);
    
    }
    
//BEBIDAS 4
function comprar4(id){//es apretado en las cards (cartas para comprar) y en el btn agregar (lista de compras) 
    //el problema:el btn agregar tiene un id!
    
    
    let uni=myBebidas[id].unidades;//no problem
    
    
    sumarCarrito();
if(uni==0){
        myBebidas[id].unidades++;

        //CREACION DELA ROW DE LA SECCIO "LISTA COMPRA" 
            //comprobamos el estado de BOOLEANLISTACOMPRA 
            //esto es para ir cambiando los colores de las row
        if(booleanListaCompra==false){
            document.getElementById("listacompra").innerHTML+='<tr class="'+booleanListaCompra+'" id="tablerow'+seccion+id+'"><td>'+myBebidas[id].name+'</td><td>'+myBebidas[id].precio+'$</td><td id="unidades'+seccion+id+'">'+myBebidas[id].unidades+'</td><td id="subtotal'+seccion+id+'">'+subtotal+'$</td><td class="tdbuttons"><button class="btnEliminar" onclick="EliminarProducto4('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar4('+id+')">Agregar</button></td></tr>';
            booleanListaCompra=true;
        }else{
            document.getElementById("listacompra").innerHTML+='<tr class="'+booleanListaCompra+'" id="tablerow'+seccion+id+'"><td>'+myBebidas[id].name+'</td><td>'+myBebidas[id].precio+'$</td><td id="unidades'+seccion+id+'">'+myBebidas[id].unidades+'</td><td id="subtotal'+seccion+id+'">'+subtotal+'$</td><td class="tdbuttons"><button class="btnEliminar" onclick="EliminarProducto4('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar4('+id+')">Agregar</button></td></tr>';
            booleanListaCompra=false;
        }
        
        calcularSubTotal4(id);
        Factura4.push(id);
contadorProductoSumar();
        
    

    }else{
        myBebidas[id].unidades++;
        document.getElementById("unidades4"+id).innerHTML=myBebidas[id].unidades;
        calcularSubTotal4(id);
        
    }
    
    sumarTotal(myBebidas[id].precio);
    
    }

//CARNICERIA 5
function comprar5(id){//es apretado en las cards (cartas para comprar) y en el btn agregar (lista de compras) 
    //el problema:el btn agregar tiene un id!
    
    
    let uni=myCarniceria[id].unidades;//no problem
    
    
    sumarCarrito();
if(uni==0){
        myCarniceria[id].unidades++;

        //CREACION DELA ROW DE LA SECCIO "LISTA COMPRA" 
            //comprobamos el estado de BOOLEANLISTACOMPRA 
            //esto es para ir cambiando los colores de las row
        if(booleanListaCompra==false){
            document.getElementById("listacompra").innerHTML+='<tr class="'+booleanListaCompra+'" id="tablerow'+seccion+id+'"><td>'+myCarniceria[id].name+'</td><td>'+myCarniceria[id].precio+'$</td><td id="unidades'+seccion+id+'">'+myCarniceria[id].unidades+'</td><td id="subtotal'+seccion+id+'">'+subtotal+'$</td><td class="tdbuttons"><button class="btnEliminar" onclick="EliminarProducto5('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar5('+id+')">Agregar</button></td></tr>';
            booleanListaCompra=true;
        }else{
            document.getElementById("listacompra").innerHTML+='<tr class="'+booleanListaCompra+'" id="tablerow'+seccion+id+'"><td>'+myCarniceria[id].name+'</td><td>'+myCarniceria[id].precio+'$</td><td id="unidades'+seccion+id+'">'+myCarniceria[id].unidades+'</td><td id="subtotal'+seccion+id+'">'+subtotal+'$</td><td class="tdbuttons"><button class="btnEliminar" onclick="EliminarProducto5('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar5('+id+')">Agregar</button></td></tr>';
            booleanListaCompra=false;
        }
        
        calcularSubTotal5(id);
        Factura5.push(id);
contadorProductoSumar();
        
    

    }else{
        myCarniceria[id].unidades++;
        document.getElementById("unidades5"+id).innerHTML=myCarniceria[id].unidades;
        calcularSubTotal5(id);
        
    }
    
    sumarTotal(myCarniceria[id].precio);
    
    }

//OTROS 6
function comprar6(id){//es apretado en las cards (cartas para comprar) y en el btn agregar (lista de compras) 
    //el problema:el btn agregar tiene un id!
    
    
    let uni=myOtros[id].unidades;//no problem
    
    
    sumarCarrito();
if(uni==0){
        myOtros[id].unidades++;

        //CREACION DELA ROW DE LA SECCIO "LISTA COMPRA" 
            //comprobamos el estado de BOOLEANLISTACOMPRA 
            //esto es para ir cambiando los colores de las row
        if(booleanListaCompra==false){
            document.getElementById("listacompra").innerHTML+='<tr class="'+booleanListaCompra+'" id="tablerow'+seccion+id+'"><td>'+myOtros[id].name+'</td><td>'+myOtros[id].precio+'$</td><td id="unidades'+seccion+id+'">'+myOtros[id].unidades+'</td><td id="subtotal'+seccion+id+'">'+subtotal+'$</td><td class="tdbuttons"><button class="btnEliminar" onclick="EliminarProducto6('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar6('+id+')">Agregar</button></td></tr>';
            booleanListaCompra=true;
        }else{
            document.getElementById("listacompra").innerHTML+='<tr class="'+booleanListaCompra+'" id="tablerow'+seccion+id+'"><td>'+myOtros[id].name+'</td><td>'+myOtros[id].precio+'$</td><td id="unidades'+seccion+id+'">'+myOtros[id].unidades+'</td><td id="subtotal'+seccion+id+'">'+subtotal+'$</td><td class="tdbuttons"><button class="btnEliminar" onclick="EliminarProducto6('+id+')">Eliminar</button><button class="btnAgregar" onclick="comprar6('+id+')">Agregar</button></td></tr>';
            booleanListaCompra=false;
        }
        
        calcularSubTotal6(id);
        Factura6.push(id);
contadorProductoSumar();
        
    

    }else{
        myOtros[id].unidades++;
        document.getElementById("unidades6"+id).innerHTML=myOtros[id].unidades;
        calcularSubTotal6(id);
        
    }
    
    sumarTotal(myOtros[id].precio);
    
    }


*/
//FIN



