console.log("pokeapi");
const buscar = async (id) => {

    // la url del pokemon poniendo el id del usuario busco para que traiga ese pokemon 

    var pokeurl = `https://pokeapi.co/api/v2/pokemon/${id}/`

    //url de la imagen poniendo el id del usuario busco para que traiga ese pokemon

    var pokefoto = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

    // lo convierto a json

    const pokeurlApi = await fetch(pokeurl)
    const pokeurlApiJson = await pokeurlApi.json()

    // lo unico que pude sacar para las tarjetas

    const pokenombre = await pokeurlApiJson.name
    const pokeid =await pokeurlApiJson.id
    console.log(pokenombre);
    console.log(pokeid);

    const type_1 = await pokeurlApiJson.types[0].type.name
    try {
        var type_2 = await pokeurlApiJson.types[1].type.name
      
      } catch (err) {
      console.log("error por solo un tipo "+ err);
       
      }
      let cartasDiv = document.getElementById("contenedorCartas")
    
      /*while (cartasDiv.firstChild) {
        cartasDiv.removeChild(cartasDiv.firstChild)
    }*/

    pokeurlApiJson.types.forEach((arr,index) => {
        console.log(arr.slot);
        var types = arr.slot

// colocar los colores a su respctivo tipo con ayuda d bootstrap sugerencia hacer un arrey de objto y poner un for que itere probar en codigo aparte 

       if(type_1 == "grass"){
        var color = "bg-success bg-opacity-50"
       }
       if(type_1 == "normal"){
        var color = "bg-warning-subtle"
       }
       if(type_1 == "fighting"){
        var color = "bg-danger bg-opacity-50"
       }
       if(type_1 == "flying"){
        var color = "bg-info"
       }
       if(type_1 == "poison"){
        var color = "bg-secondary text-white"
       }
       if(type_1 == "ground"){
        var color = "bg-danger bg-opacity-10"
       }
       if(type_1 == "rock"){
        var color = "bg-secondary"
       }
       if(type_1 == "bug"){
        var color = "bg-success  bg-opacity-10"
       }
       if(type_1 == "ghost"){
        var color = "bg-black text-white"
       }
       if(type_1 == "steel"){
        var color = "bg-success-subtle"
       }
       if(type_1 == "fire"){
        var color = "bg-danger"
       }
       if(type_1 == "water"){
        var color = "bg-info"
       }
       if(type_1 == "electric"){
        var color = "bg-warning"
       }
       if(type_1 == "psychic"){
        var color = "bg-danger-subtle"
       }
       if(type_1 == "ice"){
        var color = "bg-info-subtle"
       }
       if(type_1 == "dragon"){
        var color = "bg-success bg-opacity-50"
       }
       if(type_1 == "dark"){
        var color = "bg-primary-subtle"
       }
       if(type_1 == "fairy"){
        var color = "bg-danger-subtle bg-opacity-75"
       }
       if(type_1 == "shadow"){
        var color = "bg-white text-dark"
       }
       if(type_1 == "unknown"){
        var color = "bg-light"
       }

       if(type_2 == "grass"){
        var  color2 = "bg-success bg-opacity-50"
       }
       if(type_2 == "normal"){
        var  color2 = "bg-warning-subtle"
       }
       if(type_2 == "fighting"){
        var  color2 = "bg-danger bg-opacity-50"
       }
       if(type_2 == "flying"){
        var  color2 = "bg-info"
       }
       if(type_2 == "poison"){
        var  color2 = "bg-secondary text-white"
       }
       if(type_2 == "ground"){
        var  color2 = "bg-danger bg-opacity-10"
       }
       if(type_2 == "rock"){
        var  color2 = "bg-secondary"
       }
       if(type_2 == "bug"){
        var  color2 = "bg-success  bg-opacity-10"
       }
       if(type_2 == "ghost"){
        var  color2 = "bg-black text-white"
       }
       if(type_2 == "steel"){
        var  color2 = "bg-success-subtle"
       }
       if(type_2 == "fire"){
        var  color2 = "bg-danger"
       }
       if(type_2 == "water"){
        var  color2 = "bg-info"
       }
       if(type_2 == "electric"){
        var  color2 = "bg-warning"
       }
       if(type_2 == "psychic"){
        var  color2 = "bg-danger-subtle"
       }
       if(type_2 == "ice"){
        var  color2 = "bg-info-subtle"
       }
       if(type_2 == "dragon"){
        var  color2 = "bg-success bg-opacity-50"
       }
       if(type_2 == "dark"){
        var  color2 = "bg-primary-subtle"
       }
       if(type_2 == "fairy"){
        var  color2 = "bg-danger-subtle bg-opacity-75"
       }
       if(type_2 == "shadow"){
        var  color2 = "bg-white text-dark"
       }
       if(type_2 == "unknown"){
        var  color2 = "bg-light"
       }
    
   
    if(types == 2){
        let primertpo = document.getElementById("untipo")
        
       
    
        cartasDiv.innerHTML += `  
        <div class="card col-3">
          <img src= ${pokefoto} class="card-img-top" >
          <div class="card-body">
          <h4 class = "card-title text-center">${pokenombre}</h4>
          <p class="card-text ${color} rounded-pill text-center">${type_1}</p>
          <p class="card-text ${color2} rounded-pill text-center">${type_2}</p>
            <div class="card-footer">
            <small class="text-muted">the id of the pokemon is :${pokeid}</small>
          </div>
          </div>
        </div>
       
            `
            primertpo.removeChild(primertpo.firstElementChild)
        console.log("tipo 1 "+type_1);
       console.log("tipo 2 "+type_2);
    }
    else{
       
        cartasDiv.innerHTML += `  
        <div id="untipo" class="card col-3">
          <img src= ${pokefoto} class="card-img-top" >
          <div class="card-body">
          <h3 class = "card-title text-center">${pokenombre}</h3>
          <p class="card-text ${color} rounded-pill text-center">${type_1}</p>
            <div class="card-footer">
            <small class="text-muted">the id of the pokemon is :${pokeid}</small>
          </div>
          </div>
        </div>
       
            `
        console.log("tipo 1 "+type_1);
    }
    })

       


   //limpia el contenedor     
  
    //imprimo la url de la imagen para revisar a donde va
console.log(pokefoto);

     // la estrutura de la tarjeta por motivo de no poder explorar tuve que usar solo lo que podia sacar de LA API
 
        
}


//busca por el id que el usuario puso 
function buscapokemon() {
    const id_poke = document.getElementById("id_poke")
    var idPOKE = id_poke.value
    //no sabia si era necesario el string  pero no pierdo nada si lo pongo 
    buscar(idPOKE)
}
