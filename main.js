console.log("pokeapi");

const buscar = async (id) => {
    var pokeurl = `https://pokeapi.co/api/v2/pokemon-species/${id}/`

    //url de la imagen
    var pokefoto = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`


    const pokeurlApi = await fetch(pokeurl)
    const pokeurlApiJson = await pokeurlApi.json()
    const pokenombre = await pokeurlApiJson.name
    const pokeid =await pokeurlApiJson.id
    
 // un ejemplo de un de lo que quiero explorar a fondo

    //const poketype = await pokeurlApiJson.types
    // console.log(poketype);

        let cartasDiv = document.getElementById("contenedorCartas")

    while (cartasDiv.firstChild) {
        cartasDiv.removeChild(cartasDiv.firstChild)
    }

console.log(pokefoto);
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
function buscapokemon() {
    const id_poke = document.getElementById("id_poke")
    var idPOKE = id_poke.value
    buscar(String(idPOKE))
}
