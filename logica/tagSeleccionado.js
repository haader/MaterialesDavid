
function TagSeleccionado(id){

    try{
        document.getElementById("TagSeleccionado"+id).remove();
    }catch{

    }
    document.getElementById(id).innerHTML+='<span class="TagSeleccionado" id="TagSeleccionado'+id+'">Seleccionado</span>';
    
};