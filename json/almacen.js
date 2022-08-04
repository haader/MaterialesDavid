//conectamos con SUPABASE
// Creamos la instancia del objeto XHR

//PARA LA IMAGEN USAMOS EL MISMO NUMERO QUE EL DEL CODIGO DE BARRA 7790387800135.JPG Y LISTO!!!

    //VARIABLES 
seccion=0;
var id=0;//empezamos a contar en 0 cada vez que
        //la página es llamada para renderizar los productos de la seccion
cont=0;/* contador del JSON (array) GENERA EL ID que se le asigna a la tarjeta */
var respuesta;

console.log("vuelta:")
    //LLAMADA XMLHTTPREQUEST
    document.getElementById("contenedorProductos").innerHTML+=`<div class="loading" id="load"></div>`;

client.addEventListener("readystatechange", () => {

    if (client.readyState === 3) {
        // cargando
        console.log("cargando!!!");
      
      }
      if (client.readyState === 4) {
        // solicitud finalizada
        respuesta=client.responseText;
        myAlmacen=JSON.parse(respuesta);
        console.log(myAlmacen);  
        RenderizarALMACEN();    
      }



  
            
    
  });

client.open("GET", "https://wwomxcbnhczomvlfkjca.supabase.co/rest/v1/productos?", true);
client.setRequestHeader("apikey","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3b214Y2JuaGN6b212bGZramNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk1NDM4NjYsImV4cCI6MTk3NTExOTg2Nn0.GmmsvPpAlMXwZhbM1iLrSsslJ5MNd11dXOcN3q3dVSk");
client.setRequestHeader("Authorization","Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3b214Y2JuaGN6b212bGZramNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk1NDM4NjYsImV4cCI6MTk3NTExOTg2Nn0.GmmsvPpAlMXwZhbM1iLrSsslJ5MNd11dXOcN3q3dVSk");
client.send();


//

/*
let Almacen = '[{"name" : "Almacen-1", "precio" : 10, "unidades":0},{"name" : "Almacen-2", "precio" : 20, "unidades":0},{"name" : "Almacen-3", "precio" : 30, "unidades":0}]';
 myAlmacen= JSON.parse(Almacen);*/


function RenderizarALMACEN(){
    //agregamos el cargando
   

    setTimeout(()=>{
    
        myAlmacen.forEach(element => {
    document.getElementById("contenedorProductos").innerHTML+=`<div class="child" id="${cont}">
                                                    <img src="./imgProductos/${myAlmacen[cont].url}" alt="">
                                                            <div>
                                                                <h3 id="pid${cont}">${myAlmacen[cont].producto}</h3>
                                                                <button " onclick="comprar0(${cont})">Comprar ${myAlmacen[cont].precio}$</button>
                                                            </div>
                                                </div>`;    
    cont++;
})
document.getElementById("load").remove() ;
},2000);

    
    //ocultamos el cargando!!!
};