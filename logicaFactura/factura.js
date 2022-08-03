// ?taco=2&name=melina%20narvaez&dir=marcos%20del%20pont%20725&mp=false&send=false&---clp=4&can=1&id=2&---clp=0&can=5&id=2


let booleanFondo=false;

let contador=0;

let addressURL=""+location.search;//location.search es la URL
let urlClip="";
console.warn("url="+addressURL);
        
        /*
        const str = 'JavaScript';
const newStr = str.replace("ava", "-");
console.log(newStr);
// J-Script
        */

//FUNCIONES
        function getParameterByName(name,cortadoURL) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");//remplazo de string (actual, aderir)
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(cortadoURL);//
            return results === null ? "no se encontro nada" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }


        function clipURL(url,tipo,valor){//funcion para cortar la URL
            console.warn("---cortando--");
            console.log("URL 1  = "+url);
            let text=tipo+"="+valor;
            console.warn(text);
            urlClip=url.replace(text,"");
            console.log("URL 2  = "+urlClip);
            console.warn("-----");
        }
//FUNCIONES


//DETERMINAMOS EL TAMAÑO DE LA COMPTA (no se pinta)
var tamañoCompra=getParameterByName('taco',addressURL);//tamaño de la compra determina el tamaño del bucle?
clipURL(addressURL,"?taco",tamañoCompra);//cortamos de la url el tamaño de compra


//tomamos la direccion y el tipo de envio

//http://127.0.0.1:5500/factura.html?taco=2&name=melina%20narvaez&dir=marcos%20del%20pont&mp=true&send=false&---clp=4&can=1&id=2&---clp=0&can=5&id=1
   
//name=melina&dir=marcos&mp=true&send=false&

    var nombre= getParameterByName('name',addressURL);//comprador
    clipURL(urlClip,"&name",nombre);    //cortamos el URL

    var address= getParameterByName('dir',addressURL);//direccion
    clipURL(urlClip,"&dir",address);    //cortamos el URL

   /*(BOOLEANO) */ var metodoPago=getParameterByName('mp',addressURL);//metodo de pago (BOOLEANO)
   clipURL(urlClip,"&mp",metodoPago);    //cortamos el URL

   /*(BOOLEANO) */ var envio=getParameterByName('send',addressURL);//si se realiza envio(ligado a dirección)(BOOLEANO)
   clipURL(urlClip,"&send",envio);    //cortamos el URL
   
        
        
        
        

//modificamos el doom
//1-datos del comprador (incluye meto de pago y envio)

        if(envio == "true"){//la compra se envia al domicilio
            
            if(metodoPago == "true"){//abona por mercado pago
                document.getElementById("datosComprador").innerHTML='<h3>Datos del Comprador</h3><h4>Nombre: '+nombre+'</h4><h4>Dirección: '+address+'</h4><h4>Metodo de Pago: Mercado Pago</h4>';
            }else{//abona en efectivo
                document.getElementById("datosComprador").innerHTML='<h3>Datos del Comprador</h3><h4>Nombre: '+nombre+'</h4><h4>Dirección: '+address+'</h4><h4>Metodo de Pago: Efectivo</h4>';
            }
            
        }else if(envio == "false"){//la compra se retira en el LOCAL
            if(metodoPago == "true"){//abona por mercado pago
                document.getElementById("datosComprador").innerHTML='<h3>Datos del Comprador</h3><h4>Nombre: '+nombre+'</h4><h4>Retira la compra en el local</h4><h4>Metodo de Pago: Mercado Pago</h4>';
            }else{//abona en efectivo
                document.getElementById("datosComprador").innerHTML='<h3>Datos del Comprador</h3><h4>Nombre: '+nombre+'</h4><h4>Retira la compra en el local</h4><h4>Metodo de Pago: Efectivo</h4>';
            }
        }

//pintamos con un for

                for (let i = 0; i < tamañoCompra; i++) {
                    console.log(i);
                    //clp "CLASE DE PROFUCTO 0 1 2 3 4 5 6 (ALMACEN VERDULERIA ECT"
                    var tipodeProduc=getParameterByName('---clp',urlClip);//tipo de producto (ALMACEN VERDULERIA LACTEOS etc) --0123456--
                    clipURL(urlClip,"&---clp",tipodeProduc);    //cortamos el URL

                    var cantidadP=getParameterByName('can',urlClip);
                    clipURL(urlClip,"&can",cantidadP);

                    var idProductos=getParameterByName('id',urlClip);
                    clipURL(urlClip,"&id",idProductos);

                    pintar(tipodeProduc,idProductos,cantidadP);//pintamos el row
                    console.log("<<--PINTADO-->>");

                }

                

        /*
    
        var tipoProduc=getParameterByName('tip');//tipo de producto (ALMACEN VERDULERIA LACTEOS etc) --0123456--
        var cantidad = getParameterByName('can');//cantidad de unidades que se venden
        var idProducto= getParameterByName('ip');//el id que determina el tipo de producto que se vende
        

        var abona= getParameterByName('ab');//dinero que abona en efectivo
    
        
*/


//dependiendo el tipo de producto utilizamos el id proporcionado y pintamos
function pintar(tipoProduc,idProducto,cantidad){

        switch(tipoProduc){
            case "0":
                console.log("TIPO PROD="+tipoProduc);
                document.getElementById("listacompra").innerHTML+='<tr id="row'+contador+'"><td>'+myAlmacen[idProducto].name+'</td><td>'+myAlmacen[idProducto].precio+'$</td><td>'+cantidad+'</td><td>'+(myAlmacen[idProducto].precio*cantidad)+'$</td><td><button onclick="ok('+contador+')">ok</button></td></tr>';
                break;
            case "1":
                console.log("TIPO PROD="+tipoProduc);
                document.getElementById("listacompra").innerHTML+='<tr id="row'+contador+'"><td>'+myVerduleria[idProducto].name+'</td><td>'+myVerduleria[idProducto].precio+'$</td><td>'+cantidad+'</td><td>'+(myVerduleria[idProducto].precio*cantidad)+'$</td><td><button onclick="ok('+contador+')">ok</button></td></tr>';
                break;
            case "2":
                console.log("TIPO PROD="+tipoProduc);
                document.getElementById("listacompra").innerHTML+='<tr id="row'+contador+'"><td>'+myLimpieza[idProducto].name+'</td><td>'+myLimpieza[idProducto].precio+'$</td><td>'+cantidad+'</td><td>'+(myLimpieza[idProducto].precio*cantidad)+'$</td><td><button onclick="ok('+contador+')">ok</button></td></tr>';
                break;
            case "3":
                console.log("TIPO PROD="+tipoProduc);
                document.getElementById("listacompra").innerHTML+='<tr id="row'+contador+'"><td>'+myLacteos[idProducto].name+'</td><td>'+myLacteos[idProducto].precio+'$</td><td>'+cantidad+'</td><td>'+(myLacteos[idProducto].precio*cantidad)+'$</td><td><button onclick="ok('+contador+')">ok</button></td></tr>';
                break;
            case "4":
                console.log("TIPO PROD="+tipoProduc);
                document.getElementById("listacompra").innerHTML+='<tr id="row'+contador+'"><td>'+myBebidas[idProducto].name+'</td><td>'+myBebidas[idProducto].precio+'$</td><td>'+cantidad+'</td><td>'+(myBebidas[idProducto].precio*cantidad)+'$</td><td><button onclick="ok('+contador+')">ok</button></td></tr>';
                break;
            case "5":
                console.log("TIPO PROD="+tipoProduc);
                document.getElementById("listacompra").innerHTML+='<tr id="row'+contador+'"><td>'+myCarniceria[idProducto].name+'</td><td>'+myCarniceria[idProducto].precio+'$</td><td>'+cantidad+'</td><td>'+(myCarniceria[idProducto].precio*cantidad)+'$</td><td><button onclick="ok('+contador+')">ok</button></td></tr>';
                break;
            case "6":
                console.log("TIPO PROD="+tipoProduc);
                document.getElementById("listacompra").innerHTML+='<tr id="row'+contador+'"><td>'+myOtros[idProducto].name+'</td><td>'+myOtros[idProducto].precio+'$</td><td>'+cantidad+'</td><td>'+(myOtros[idProducto].precio*cantidad)+'$</td><td><button onclick="ok('+contador+')">ok</button></td></tr>';
                break;
        }
    }

contador++;


function ok(contador){
    
    document.getElementById("row"+contador).style.background="red";

}
//2-lista de productos comprados 
        /*declaramos funciones que ayudan a obtener: 

                                    Productos
                                    Precio Unitario
                                    Sub-total
                                    Estado//son btn que cambian el color 
                                    
        los datos que se traen del la URL
                                         tamañoCompra
lo que debo pitar directamente=>=>=>=> cantidad (la canidad de unidades vendidas)
                                         idProducto
                                         tipoProducto
        */                                          

//3-total (incluye cuanto paga y vuelto)

        
/*
  function getParameterByName(name) {
            let url=location.search;//location.search es la URL
            console.log("url="+url);
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");//remplazo de string (actual, aderir)
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)")
            console.log("regeex="+regex);
            results = regex.exec(url);//
            console.log("result="+results);
            return results === null ? "no se encontro nada" : decodeURIComponent(results[1].replace(/\+/g, " "));
            
        }
*/