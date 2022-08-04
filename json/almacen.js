//conectamos con SUPABASE
// Creamos la instancia del objeto XHR

//PARA LA IMAGEN USAMOS EL MISMO NUMERO QUE EL DEL CODIGO DE BARRA 7790387800135.JPG Y LISTO!!!

    //VARIABLES 
    const division=["Aridos","Bloques de Cemento","Cemento y Cales","Hidrofugos","Hierros","Ladrillos","Membranas","Pegamento para Ceramicas"]

    division.forEach(element=>{
        document.getElementById("irDivision").innerHTML+=`

            <a href="#${element}"><li>${element}</li></a>
    `;
    })
    
seccion=0;
var id=0;//empezamos a contar en 0 cada vez que
        //la página es llamada para renderizar los productos de la seccion
//cont=0;/* contador del JSON (array) GENERA EL ID que se le asigna a la tarjeta */
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

        RenderizarProductos()

document.getElementById("load").remove() ;





},2000);

    
    //ocultamos el cargando!!!
};

function RenderizarProductos(){
   // cont=0;

    division.forEach(element=>{
    
        document.getElementById("contenedorProductos").innerHTML+=`<div class="division" id="${element}">
                                
                            <h3>${element}</h3>
        </div>
        `;


        myAlmacen.forEach((e,index) => {

            if(myAlmacen[index].division==element){

                document.getElementById("contenedorProductos").innerHTML+=`<div class="child" id="${index}">
                                                            <img src="./imgProductos/${myAlmacen[index].url}" alt="Error al cargar la imagen">
                                                                    <div>
                                                                        <h3 id="pid${index}">${myAlmacen[index].producto}</h3>
                                                                        <button " onclick="comprar0(${index})">Comprar ${myAlmacen[index].precio}$</button>
                                                                    </div>
                                                        </div>`;    
            //cont++;

            }
            

    })


    
      
})
}