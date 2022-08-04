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
