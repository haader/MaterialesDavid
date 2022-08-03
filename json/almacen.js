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
    document.getElementById("json").innerHTML+=`<div class="loading" id="load"></div>`;

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

client.open("GET", "https://ouaghhcihsjczmtgkqdg.supabase.co/rest/v1/almacen", true);
client.setRequestHeader("apikey","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91YWdoaGNpaHNqY3ptdGdrcWRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc4MzMwNDYsImV4cCI6MTk3MzQwOTA0Nn0.OqI0wHuqWO97OKTk3tF0XQhwLjPXrtzz0GJe_ofbkOM");
client.setRequestHeader("Authorization","Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im91YWdoaGNpaHNqY3ptdGdrcWRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc4MzMwNDYsImV4cCI6MTk3MzQwOTA0Nn0.OqI0wHuqWO97OKTk3tF0XQhwLjPXrtzz0GJe_ofbkOM");
client.send();


//

/*
let Almacen = '[{"name" : "Almacen-1", "precio" : 10, "unidades":0},{"name" : "Almacen-2", "precio" : 20, "unidades":0},{"name" : "Almacen-3", "precio" : 30, "unidades":0}]';
 myAlmacen= JSON.parse(Almacen);*/


function RenderizarALMACEN(){
    //agregamos el cargando
   

    setTimeout(()=>{
    
        myAlmacen.forEach(element => {
    document.getElementById("json").innerHTML+='<div class="child" id="'+cont+'"><img src="./Almacen/almacen.webp" alt=""><div><h3 id="pid'+cont+'">'+myAlmacen[cont].name+'</h3><button " onclick="comprar0('+cont+')">Comprar '+myAlmacen[cont].precio+'$</button></div></div>';    
    cont++;
})
document.getElementById("load").remove() ;
},2000);

    
    //ocultamos el cargando!!!
};