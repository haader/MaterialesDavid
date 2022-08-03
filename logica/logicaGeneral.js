/*
https://zainex.es/guia-rapida/html/html-url-encode-codificacion
 */


/* COMPRAR*/


/*boton eliminar todo! */
function reiniciarLinks(){
linkLocal="http://127.0.0.1:5500/factura.html";
linkGitHub="http://haader.github.io/kiosco/factura.html";

let whatsapp="https://api.whatsapp.com/send/?phone=549"+numero+"&text=";/*despues se concatena HTTP.... */
let whatsapp2="https://api.whatsapp.com/send/?phone=549"+numero+"&text=";/*despues se concatena HTTP.... */
}
function borrarTodo(){

   
    if(total!=0){
       
        let boleandConfirm=confirm("desea borrar todo?");

        switch(boleandConfirm){
            case true:
                procesoBorrarTodo();
                break;
            case false:

                break;
        }
        

    }else{
        alert("El carrito ya está vacio!");
    }

}

function procesoBorrarTodo(){
     /*eliminamo los indicadores de "seleccionado" */
      
     [].forEach.call(document.querySelectorAll("TagSeleccionado"), function(TagSeleccionado){
        TagSeleccionado.parentNode.removeChild(TagSeleccionado);
    });

    contadorCarrito=0;
    document.getElementById("carritoCont").innerHTML=contadorCarrito;
    document.getElementById("carritoTotal").innerText=total+"$";


    document.getElementById("listacompra").remove();
    
    document.getElementById("tabla").innerHTML+='<tbody id="listacompra"></tbody>';
    booleanTerminarCompra=false;

    //vaciamos array de lista
    Factura0=[];
    Factura1=[];
    Factura2=[];
    Factura3=[];
    Factura4=[];
    Factura5=[];
    Factura6=[];
    array2=[];

    myAlmacen.forEach((element,index)=>{
        myAlmacen[index].unidades=0;
    })
    myVerduleria.forEach(( element,index)=>{
        myVerduleria[index].unidades=0;
    })
    myLimpieza.forEach(( element,index)=>{
        myLimpieza[index].unidades=0;
    })
    myLacteos.forEach(( element,index)=>{
        myLacteos[index].unidades=0;
    })
    myBebidas.forEach(( element,index)=>{
        myBebidas[index].unidades=0;
    })
    myCarniceria.forEach(( element,index)=>{
        myCarniceria[index].unidades=0;
    })
    myOtros.forEach(( element,index)=>{
        myOtros[index].unidades=0;
    })
   

    contadorP=0;//colocamos el contador de TIPO DE PRODUCTOS en cero
    

    total=0;
    document.getElementById("total").innerHTML=total;

    document.getElementById("carritoTotal").innerText=total+"$";

   /* btnTerminarCompra.setAttribute('onClick',"compranull()");*/
   //limpiamos los metdos de pagos y el vuelto
    vuelto=0;
    metodoPago="indefinido";//No establecido
    if(booleanEstado==true){
    document.getElementById("inmp").checked =false;
    document.getElementById("incash").checked =false;
    }

    

    //limpiamos los datosDireccion
    
    booleanPanelDatosDomicilio=false;

    //opacidad del btn CONTINUAR
    document.getElementById("btnContinuar").style.opacity="0.3";

    reseteardiv();//reseteamos los div "metodo de pago, div abono, entrega y direccion"
    document.getElementById("inputnameUsuario").value="";
    booleanEstado=false;
    linkEstado=false;
    document.getElementById("enviarPedido").innerHTML="";

    reiniciarLinks();//variables de link
    OpacityBtnBorrar();
}

//funcion que resetea los div de las compras
function reseteardiv(){
    document.getElementById("metodoPago").innerHTML="<h4>Metodo de Pago</h4>";
    document.getElementById("divabono").innerHTML="";
    document.getElementById("metodoEntrega").innerHTML="<h4>Metodos de Entrega</h4>";
    document.getElementById("datosDireccion").innerHTML="";
}

//funcion escuchador INPUT de nameComprador
function validarNameComprador(){
if(booleanEstado==false){

    if(document.getElementById("inputnameUsuario").value!==""){
        
        document.getElementById("metodoPago").innerHTML="<div><h3>Metodo de Pago</h3></div>";
        document.getElementById("metodoPago").innerHTML+='<div id="divmetodoPago"></div>';
        document.getElementById("divmetodoPago").innerHTML+='<input id="incash" name="metodo_pago" type="radio" value="Efectivo" onclick="PagoCash()">';
        document.getElementById("divmetodoPago").innerHTML+='<text onclick="PagoCash()">Efectivo</text>';

        document.getElementById("divmetodoPago").innerHTML+='<input id="inmp" name="metodo_pago" type="radio" value="Mercado Pago" onclick="PagoMP()">';
        document.getElementById("divmetodoPago").innerHTML+='<text onclick="PagoMP()">Mercado Pago</text>';

        booleanEstado=true;//hace que no se repita el pintado constantemente!
    }

}else if(document.getElementById("inputnameUsuario").value==""){
            reseteardiv();//resetea todos los div de "datos comprador" "metodo de pago" etc
        booleanEstado=false;
    }
    
}
    


/*funcion de radio button */

function PagoMP(){

    nameComprador=document.getElementById("inputnameUsuario").value;
    document.getElementById("datosDireccion").innerHTML="";
    booleanPanelDatosDomicilio=false;
    if(nameComprador!=""&total!=0){

        metodoPago="mp";
        document.getElementById("divabono").innerHTML='';
        document.getElementById("metodoEntrega").innerHTML='<h4>Metodos de Entrega</h4>';
        document.getElementById("inmp").checked =true;
        document.getElementById("incash").checked =false;
        booleanTerminarCompra=false;

        //colorear el boton "CONTINUAR"
        document.getElementById("btnContinuar").style.opacity="1";

    }else if(total==0){
        alert("No agregaste productos al carrito!");
    }else if(nameComprador==""){
        alert("falta que coloques tu nombre!");
    }
        
}

function PagoCash(){//input "abono"
    
    nameComprador=document.getElementById("inputnameUsuario").value;
    document.getElementById("datosDireccion").innerHTML="";
    booleanPanelDatosDomicilio=false;
    if((nameComprador!="")&&(total!=0)){
        
        metodoPago="cash";
    document.getElementById("divabono").innerHTML='<text>Pago con: </text ><input class="abono" id="abono" onkeyup="abono()" type="number" value=0> </input><text> Vuelto :</text><input class="abono" disabled id="Mivuelto" value="'+vuelto+'$"></input>'
    document.getElementById("inmp").checked =false;
    document.getElementById("incash").checked =true;
    document.getElementById("metodoEntrega").innerHTML='<h4>Metodos de Entrega</h4>';
    booleanTerminarCompra=false;


        abono();
    

    }else if(total==0){
        alert("No agregaste productos al carrito!");
    }else if(nameComprador==""){
        alert("falta que coloques tu nombre!");
    }

}

function abono(){
    vuelto=document.getElementById("abono").value-total;
    document.getElementById("Mivuelto").value=vuelto+"$";
    if(vuelto>=0){
        document.getElementById("btnContinuar").style.opacity="1";
    }else{
        document.getElementById("btnContinuar").style.opacity="0.3";
    }
}



/*ULTIMA SECCION */
function Continuar(){

    nameComprador=document.getElementById("inputnameUsuario").value;//nombre del usuario
  

    if((total!==0)&(nameComprador!=="")&(metodoPago!=="indefinido")){

        if(metodoPago=="mp"){
            pintarContinuar();
        }else if((metodoPago=="cash")&(vuelto<=0)){

            alert("ingrese un valor valido para pagar");

        }else if((metodoPago=="cash")&(vuelto>=0)){
            pintarContinuar();
        }
        
        //colocamos la logica si elige MERCADO PAGO O EFECTIVO???

    }else if(total==0){
        alert("El carrito esta vacio!");
    }else if(nameComprador === ""){
        alert("Debe ingresar su nombre");
    }else if(metodoPago=="indefinido"){
        alert("No se eligio un metodo de pago");
    }else{
        alert("otro problema");
    }
    
}



function pintarContinuar(){
    switch(booleanTerminarCompra){

        case true:

            enviosContinuar();
                
            break;                
        case false:
            
            if(envios=true){

                document.getElementById("metodoEntrega").innerHTML='<h3>Metodos de Entrega</h3>'
                document.getElementById("metodoEntrega").innerHTML+='<div class="circuloCasa" id="idcirculoCasa" onclick="detalleEnvio()"><text class="texto">recibir en mi domicilio</text></div>';
                document.getElementById("metodoEntrega").innerHTML+='<div class="circuloLocal" id="idcirculoLocal" onclick="iralLocal()"><text class="texto">retirar en el local</text></div>';
                
                document.getElementById("btnContinuar").style.opacity="0.3";
            }else{
               //ACA COLOCAMOS SI envio=false
            }
            
           /* document.getElementById("metodoEntrega").innerHTML+='<button id="btnregistrarDatos"onclick="enviarPedidos()" >Registrar Datos</button>';*/
    
            booleanTerminarCompra=true;

            break;
    }
}

function enviosContinuar(){
    switch(booleanPanelDatosDomicilio){
        
        case true:
            if(linkEstado==false){

                //alert("tomamos las variables que se ingresen y las enviamos");
                console.log("booleanPanelDatosDomicilio="+booleanPanelDatosDomicilio);
                guardarDatosEnvio();
                
                //guardarDatos();
            }
                

         //guardarDatosEnvio() tiene incluido GUARDAR DATOS() dentro IMPORTANTE!!!
            break;
        case false:

            if(linkEstado==false){
                //alert("No se envia a la casa, lo pasa a buscar");
                console.log("booleanPanelDatosDomicilio="+booleanPanelDatosDomicilio);
                guardarDatos();
            }
                
            break;
    }
}

//funciones que suceden botones circulares ELEGIR ENVIO
function iralLocal(){
    document.getElementById("datosDireccion").innerHTML="";
    booleanPanelDatosDomicilio=false;//hace referencia al panel de datos nada mas
    booleanEnvios=false;//declaro que NO hay datos de domicilio
    //pintamos el btn de color permanente
    document.getElementById("idcirculoLocal").className+=" activo";
    document.getElementById("idcirculoCasa").className="circuloCasa";
    document.getElementById("btnContinuar").style.opacity="1";
    //creamosun btn para terminar pedido

}

function detalleEnvio(){
    
    if(booleanPanelDatosDomicilio==false){
    
        document.getElementById("idcirculoCasa").className+=" activo";
        document.getElementById("idcirculoLocal").className="circuloLocal";
        document.getElementById("btnContinuar").style.opacity="1";

    document.getElementById("datosDireccion").innerHTML+='<h3>Datos de Entrega</h3>';
    document.getElementById("datosDireccion").innerHTML+='<input class="input" id="direccion" placeholder="Dirección de entrega" value="calle falsa 123"></input>';
    document.getElementById("datosDireccion").innerHTML+='<input class="input" id="entrecalles" placeholder="Entre calles" value="ruta 210"></input>';
    document.getElementById("datosDireccion").innerHTML+='<textArea class="input" id="detalles" placeholder="Descripción del lugar de entrega (Color de pared, Color de rejas ect)" >ss</textArea>';
    document.getElementById("datosDireccion").innerHTML+='<hr>';

           booleanEnvios=true;//declaro que hay datos de domicilio
           booleanPanelDatosDomicilio=true;
    }else{

        
    }
}

//terminamos el pedido
//terminamos el pedido
//terminamos el pedido



/*GUARDAR VARIABLES PREPARANDO LA URL*/ 
/*GUARDAR VARIABLES PREPARANDO LA URL*/ 
/*GUARDAR VARIABLES PREPARANDO LA URL*/ 


function guardarDatos(){   /* GUARDA LOS DATO DE LAS DIFERENTES VARIABLES Y LOS COLOCA EN UNA URL */
  
//DATOS FACTURA
StringDatosFacturas="";//vaciamos el string por las dudas

    //obtenemos el CONTADOR (cantidad de TIPOS de productos comprados )
    StringDatosFacturas="?taco="+contadorP;
    
    //obtenemos  nombre la dirección metodo de pago
    nameCompradorReplace=nameComprador.replaceAll(" ","_");
    console.log(nameCompradorReplace);
    StringDatosFacturas+="%26name="+nameCompradorReplace;

    //HAY ENVIO A DOMICILIO??
    if((envios==true)&(booleanEnvios==true)){
        StringDatosFacturas+="%26send=true";//ENVIO TRUE
        StringDatosFacturas+="%26dir="+address;

    }else{
        StringDatosFacturas+="%26send=false";//ENVIO FALSO
    }
    if(metodoPago=="mp"){//meto de pago  "MERCADO PAGO"
        StringDatosFacturas+="%26mp=true";
    }else if(metodoPago=="cash"){//meto de pago  "EFECTIVO"
        StringDatosFacturas+="%26mp=false";
    }
      
    //VAMOS A RECORRER LAS FACTURAS y agregamos los valores a StringDatosFacturas
        
    recorrerFacturas(); //tenemos a StringDatosFacturas (SUPER CARGADOS)
    
    //obtenemos el tipo de prod, la cantidad y el id
    //debemos usar un forech?

//DATOS WHATSAPP
    
    let stringProductos="";
    let stringTotal=saltolinea+"*Total:* *"+total+"*$";

    //Factura: guarda los id de los productos (el tema es separarlo por seccion)
    //recorrerFacturasWhatsapp();

    //linkLocal   "http://127.0.0.1:5500/factura.html"+DATOS DE LA FACTURA
    linkLocal+=StringDatosFacturas;

    //linkLocalGITHUB    "http://haader.github.io/kiosco/factura.html"+DATOS DE LA FACTURA
    linkGitHub+=StringDatosFacturas;


    //whatsapp   "https://api.whatsapp.com/send/?phone=549"+numero+"&text="
    whatsapp+=linkLocal+stringTotal;//String total tiene el salto de linea
                /*document.getElementById("enviarPedido").innerHTML+='<a class="btnenviarPedido" href="'+whatsapp+'" target="_blank"><ion-icon name="logo-whatsapp"></ion-icon>  Enviar Pedido LOCAL</a>';*/

    //whatsapp2+github+factura
    whatsapp2+=linkGitHub+stringTotal;//String total tiene el salto de linea
    document.getElementById("enviarPedido").innerHTML+='<a class="btnenviarPedido" href="'+whatsapp2+'" target="_blank"><ion-icon name="logo-whatsapp"></ion-icon>  Enviar Pedido GIT HUB</a>';

    //sin link de whatsapp (hay que convertir los %26 a &)

    let linkGitHubReplace=linkGitHub.replaceAll('%26','&');
    //console.log("2"+linkGitHubReplace);

    //sin link de whatsapp (hay que convertir los %26 a &)
                /*document.getElementById("enviarPedido").innerHTML+='<a class="btnenviarPedido" href="'+linkLocalReplace+'" target="_blank">Directo LOCAL</a>';*/

    document.getElementById("enviarPedido").innerHTML+='<a class="btnenviarPedido" href="'+linkGitHubReplace+'" target="_blank">Directo GIT HUB</a>';
    linkEstado=true;
}

function guardarDatosEnvio(){  /*TIENE INCORPORADA LA FUNCTION "guardarDatos" */
// verifica que haya valores en los input 
let letaddress=document.getElementById("direccion").value;/* direccion */
let letbetween_streets=document.getElementById("entrecalles").value; /* entre calle */
let letdescription=document.getElementById("detalles").value; /* descripcion */
   
//>>>>>DIRECCIÓN y ENTRE CALLES se envian por whatsapp!!!!<<<<<<<<

                if(address==""||between_streets==""||description==""){

                    alert("Para que podamos entregarle su compra en su domicilio necesitamos que complete los datos requeridos");

                }else{
                    address=letaddress.replaceAll(" ","_");
                    between_streets=letbetween_streets.replaceAll(" ","_");
                    description=letdescription.replaceAll(" ","_");
                    //concatenamos los valores de los input a la URL

                    guardarDatos();

                }
    
}

function recorrerFacturasWhatsapp(){
    Factura0.forEach((element)=>{

        stringProductos+="-"+myAlmacen[Factura0[element]].unidades+" *"+myAlmacen[Factura0[element]].name+"* "+saltolinea;
        
    })
    console.table(Factura0);
    Factura1.forEach((element)=>{

        stringProductos+="-"+myVerduleria[Factura1[element]].unidades+" *"+myVerduleria[Factura1[element]].name+"* "+saltolinea;
        
    })
    console.table(Factura1);
    Factura2.forEach((element)=>{

        stringProductos+="-"+myLimpieza[Factura2[element]].unidades+" *"+myLimpieza[Factura2[element]].name+"* "+saltolinea;
        
    })
    console.table(Factura2);
    Factura3.forEach((element)=>{

        stringProductos+="-"+myLacteos[Factura3[element]].unidades+" *"+myLacteos[Factura3[element]].name+"* "+saltolinea;
        
    })
    console.table(Factura3);
    Factura4.forEach((element)=>{

        stringProductos+="-"+myBebidas[Factura4[element]].unidades+" *"+myBebidas[Factura4[element]].name+"* "+saltolinea;
        
    })
    console.table(Factura4);
    Factura5.forEach((element)=>{

        stringProductos+="-"+myCarniceria[Factura5[element]].unidades+" *"+myCarniceria[Factura5[element]].name+"* "+saltolinea;
        
    })
    console.table(Factura5);
    Factura6.forEach((element)=>{

        stringProductos+="-"+myOtros[Factura6[element]].unidades+" *"+myOtros[Factura6[element]].name+"* "+saltolinea;
        
    })
    console.table(Factura6);



}


function recorrerFacturas(){

    Factura0.forEach((element)=>{//element 1234 no hay 0!
        
      StringDatosFacturas+="%26---clp=0";
        StringDatosFacturas+="%26can="+myAlmacen[element].unidades;
        StringDatosFacturas+="%26id="+element;

    })

    Factura1.forEach((element)=>{
      StringDatosFacturas+="%26---clp=1";
        StringDatosFacturas+="%26can="+myVerduleria[element].unidades;
        StringDatosFacturas+="%26id="+element;

    })

    Factura2.forEach((element)=>{
      StringDatosFacturas+="%26---clp=2";
        StringDatosFacturas+="%26can="+myLimpieza[element].unidades;
        StringDatosFacturas+="%26id="+element;

    })

    Factura3.forEach((element)=>{
      StringDatosFacturas+="%26---clp=3";
        StringDatosFacturas+="%26can="+myLacteos[element].unidades;
        StringDatosFacturas+="%26id="+element;

    })

    Factura4.forEach((element)=>{
      StringDatosFacturas+="%26---clp=4";
        StringDatosFacturas+="%26can="+myBebidas[element].unidades;
        StringDatosFacturas+="%26id="+element;

    })

    Factura5.forEach((element)=>{
      StringDatosFacturas+="%26---clp=5";
        StringDatosFacturas+="%26can="+myCarniceria[element].unidades;
        StringDatosFacturas+="%26id="+element;

    })

    Factura6.forEach((element)=>{
      StringDatosFacturas+="%26---clp=6";
        StringDatosFacturas+="%26can="+myOtros[element].unidades;
        StringDatosFacturas+="%26id="+element;

    })
}


/*HOVER EN containerPanel */
/*HOVER EN containerPanel */
/*HOVER EN containerPanel */
/*HOVER EN containerPanel */
                        let padre=document.getElementById("containerPanel");
                        let child2=document.getElementById("containerLista");

                        function entra(){

                            padre.style="transform: translateX(0rem);"
                            padre.style.opacity=1;
                            child2.style.opacity=1;
                            child2.style.visibility="visible";
                            child2.style.marginLeft="0.2rem";

                            booleanCarrrito=true;
                            
                        }

                        function sale()
                        {
                            
                            padre.style="transform: translateX(90%);"
                            child2.style.opacity=0.5;
                            child2.style.marginLeft="0.5rem";
                            booleanCarrrito=false;
                        }
                        /*
                        child2.addEventListener("mouseout",sale);
                        */
                        



                        function clickCarrito()
                        {
                            switch(booleanCarrrito){
                                
                                case false:
                                            entra();

                                
                                    break;
                                
                                case true:
                                             sale();

                 
                                    break;
                            }
                            
                        }

                       


/*

let saltolinea="+%0A+";

https://api.whatsapp.com/send/?phone=5491164688926&text= 

(COPIAR AL HERRAMIETAS DEV)
https://forfrontend.tips/eliminar-elementos-de-un-array-en-javascript

(hacer un pull por consola)
git pull --tags origin gh-pages  






git branch -m master gh-pages
git fetch origin
git branch -u origin/gh-pages gh-pages
git remote set-head origin -a
*/


