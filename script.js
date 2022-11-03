//defino valor de ticket
const valorTicket = 200;

//defino los porcentajes

let descuentoEstudiante = 0.80;
let descuentoTrainee = 0.50;
let descuentoJunior = 0.15;

//tomo los valores

const cantidad = document.getElementById('cantidadTicket');
const categoria = document.getElementById('inputGroupSelect01');
const botonCalcular = document.getElementById('calcular');
const botonReset = document.getElementById('reset');
const parrafo = document.getElementById('parrafo');
const nombre=document.getElementById('nombre');
const apellido=document.getElementById('apellido');
const correo=document.getElementById('correo');
const validacionCorreo=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const form=document.querySelector('form');

function totalPagar() {
    //calculo valor total
    let totalValor = cantidadTicket.value * valorTicket;
    //condicionar por descuento
     if (categoria.value == 1) {
        totalValor = totalValor - (totalValor * descuentoEstudiante);
     }
     else if (categoria.value == 2){
        totalValor = totalValor - (totalValor * descuentoTrainee);
     }
    else if (categoria.value == 3){
          totalValor = totalValor - (totalValor * descuentoJunior);
      }else{
         totalValor = totalValor;
    }

    parrafo.innerHTML = 'Total a pagar : $'+(totalValor);
    console.log(totalValor);
    

    
    
    
 }

//boton calcular

 form.addEventListener('submit',function(event) {event.preventDefault();})
 botonCalcular.addEventListener('click', totalPagar,);
// boton de reset
 botonReset.addEventListener('click',()=>{if (nombre.value.length==0){alert('El campo Nombre no puede estar Vacio');}
 else if(apellido.value.length==0){alert('El campo Apellido no puede estar Vacio');} 
 else if (!validacionCorreo.test(correo.value)){alert('El campo correo no es valido');}
 else if (cantidad.value>0) {alert('los datos fueron enviados correctamenta' )  ; } 
 else {alert('la cantidad no es correcta');}

 parrafo.innerHTML = `Total a pagar :  `;
 })
