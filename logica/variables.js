
/*VARIABLES!!! */
let booleanCarrrito=false;
let booleanListaCompra=false;

let total=0;/*sumatoria de todos los precios*/ 
let contador=0;/*cantidad de veces que aparece el producto en la lista */
let contadorP=0;//cuenta la cantidad de TIPO de productos distintos

/*unidades del producto*/
let subtotal=0; /*contador * precioUnitario */

//carrito
let contadorCarrito=0;//el valor del carrito

//Compralista
let Factura0=[];
let Factura1=[];
let Factura2=[];
let Factura3=[];
let Factura4=[];
let Factura5=[];
let Factura6=[];

//declaramos ArrayVacios
var myAlmacen=[];
var myVerduleria=[];
var myLimpieza=[];
var myLacteos=[];
var myCarniceria=[];
var myBebidas=[];
var myOtros=[];

//whatsapp
let numero="1168160790";
let whatsapp="https://api.whatsapp.com/send/?phone=549"+numero+"&text=";/*despues se concatena HTTP.... */
let whatsapp2="https://api.whatsapp.com/send/?phone=549"+numero+"&text=";/*despues se concatena HTTP.... */
let texto="";
let saltolinea="+%0A+"; /*se agrega al texto por whatsapp */

let booleanTerminarCompra=false;
let seccion=0;

//LISTA
//Datos del Comprador

//metodo de pago
let booleanEstado=false;

//metodo de entrega

let nameComprador="";
let nameCompradorReplace="";
let vuelto=0;
let metodoPago="indefinido";//metodo de pago no definido
let envios=true;
let booleanPanelDatosDomicilio=false;//hace referencia al panel (esta invertido), ebvita que se creen multiples paneles

let metodoEntrega="indefinido";

//terminar pedido
let StringDatosFacturas="";//contiene los datos de la URL

let booleanEnvios=false;//SI TRUE EL USUARIO ELIGIO ENVIO A LA CASA
let address;
let between_streets;
let description;

let linkLocal="http://127.0.0.1:5500/factura.html";
let linkGitHub="http://haader.github.io/kiosco/factura.html";
let linkEstado=false;


