
        function sumarTotal(costo){//pasamos un objeto
            total+=costo;            
            document.getElementById("total").innerHTML=total;//pintamos el valor del total
            document.getElementById("carritoTotal").innerText=total+"$";//pintamos el valor del total del carrito
        }

        function restarTotal(costo){//pasamos un objeto
            total-=costo;
            document.getElementById("total").innerHTML=total;//pintamos el valor del total
            document.getElementById("carritoTotal").innerText=total+"$";//pintamos el valor del total del carrito
        }