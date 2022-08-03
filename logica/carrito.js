//function carrito contador 

//sumar carrito
function sumarCarrito(){
    contadorCarrito++;
    document.getElementById("carritoCont").innerHTML=contadorCarrito;
    OpacityBtnBorrar();

    AnimateCarrito();/*es la animación del carrito*/
  
}

//restar carrito
function restarCarrito(){
    contadorCarrito--;
    document.getElementById("carritoCont").innerHTML=contadorCarrito;
    OpacityBtnBorrar();
}

function OpacityBtnBorrar(){
      //funcion global que determina la opacity del btn "borrar todo" 

if(contadorCarrito==0){
    document.getElementById("btnborrarTodo").style.opacity="0.3";
}else{
    document.getElementById("btnborrarTodo").style.opacity="1";
}
}




/* ANIMACION CIRCULAR DE COMPRA */

function AnimateCarrito(){
  
document.getElementById("icon").innerHTML+='<span id="animateCarrito"></span>';
document.getElementById("animateCarrito").style.width='1rem';
document.getElementById("animateCarrito").style.height='1rem';
document.getElementById("animateCarrito").style.borderWidth='3px'; 
document.getElementById("animateCarrito").style.borderStyle='solid';
document.getElementById("animateCarrito").style.borderColor='red';
document.getElementById("animateCarrito").style.opacity='1';
/*
   document.getElementById("animateCarrito").style.width=string;
    document.getElementById("animateCarrito").style.height=string;
*/

   
setTimeout(()=>{
    document.getElementById("animateCarrito").style.width='14rem';
document.getElementById("animateCarrito").style.height='14rem';
document.getElementById("animateCarrito").style.opacity='0';
},20);
setTimeout(()=>{

document.getElementById("icon").innerHTML='<ion-icon name="cart-outline"></ion-icon>';
},1000);

/*
let myinterval=setInterval(()=>{


    w-=1;
    string='"'+w.toString()+'rem"';
    console.log("string "+string);

    
    document.getElementById("animateCarrito").style.width=w+'rem';
    document.getElementById("animateCarrito").style.height=w+'rem';

   if(w==1){
    clearInterval(myinterval);
    console.log("fin de todo");
    document.getElementById("icon").innerHTML='<ion-icon name="cart-outline"></ion-icon>';
   }

}, 500); 
    
*/
    

    
    

}

