
const contenedorJSON=document.getElementById("contenedorProductos");


function Buscar(){

    document.getElementById("contenedorProductos").innerHTML="";
    let txt=document.getElementById("inputSearch").value;
    var coincidencias=0;

    console.log("txt: "+txt);
//    contenedorJSON.remove();

myAlmacen.forEach((element,index) => {
    
            if(((myAlmacen[index].producto.toUpperCase()).includes(txt.toUpperCase()))&&(txt!="")){


                document.getElementById("contenedorProductos").innerHTML+=`<div class="child" id="${index}">
                <img src="./imgProductos/${myAlmacen[index].url}" alt="">
                        <div>
                            <h3 id="pid${index}">${myAlmacen[index].producto}</h3>
                            <button " onclick="comprar0(${index})">Comprar ${myAlmacen[index].precio}$</button>
                        </div>
            </div>`; 
            
            coincidencias++;

            }
            
    });
    
    if((coincidencias==0)&&(txt!="")){
        document.getElementById("contenedorProductos").innerHTML=`
    
        <h3>Ninguno de nuestros productos contiene "${txt}" en su nombre</h3>

`;
    }
    if(txt==""){

        //pintamos todo el JSON

        RenderizarProductos();
            
    


    }
    
}