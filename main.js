console.log("pokeapi");

const buscar = async (id) => {
    // la url del pokemon poniendo el id del usuario busco para que traiga ese pokemon 
    var pokeurl = `https://pokeapi.co/api/v2/pokemon-species/${id}/`

    //url de la imagen poniendo el id del usuario busco para que traiga ese pokemon
    var pokefoto = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

    // lo convierto a json
    const pokeurlApi = await fetch(pokeurl)
    const pokeurlApiJson = await pokeurlApi.json()

    // lo unico que pude sacar para las tarjetas
    const pokenombre = await pokeurlApiJson.name
    const pokeid =await pokeurlApiJson.id
    
 // un ejemplo de un de lo que quiero explorar a fondo

    //const poketype = await pokeurlApiJson.types
    // console.log(poketype);



        let cartasDiv = document.getElementById("contenedorCartas")


   //limpia el contenedor     
    while (cartasDiv.firstChild) {
        cartasDiv.removeChild(cartasDiv.firstChild)
    }

    //imprimo la url de la imagen para revisar a donde va
console.log(pokefoto);

     // la estrutura de la tarjeta por motivo de no poder explorar tuve que usar solo lo que podia sacar de LA API
    cartasDiv.innerHTML += ` <div class="card mb-2 col-sm-12 col-md-6 col-lg-4" style="width: 18rem;">
        <img class="card-img-top" src= ${pokefoto}alt=${pokenombre}>
        <div class="card-body">
          <h5 class="card-title">${pokenombre}</h5>
          <p class="card-text">${pokeid}</p>
          <p class="card-text">el id del pokemon es :${pokeid}</p>
        
        </div>
      </div>
        
        `
}
//busca por el id que el usuario puso 
function buscapokemon() {
    const id_poke = document.getElementById("id_poke")
    var idPOKE = id_poke.value
    //no sabia si era necesario el string  pero no pierdo nada si lo pongo 
    buscar(String(idPOKE))
}
