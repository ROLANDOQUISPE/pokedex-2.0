console.log("pokeapi");
const typecolor = [
  {
    name : "grass",
    color: "bg-success bg-opacity-50"
  },

  {
    name : "normal",
    color: "bg-warning-subtle"
  },

  {
    name : "fighting",
    color: "bg-danger bg-opacity-50"
  },

  {
    name : "flying",
    color: "bg-info"
  },

  {
    name : "poison",
    color: "bg-secondary text-white"
  },

  {
    name : "ground",
    color: "bg-danger bg-opacity-10"
  },

  {
    name : "rock",
    color: "bg-secondary"
  },

  {
    name : "bug",
    color: "bg-success  bg-opacity-10"
  },

  {
    name : "ghost",
    color: "bg-black text-white"
  },

  {
    name : "steel",
    color: "bg-success-subtle"
  },

  {
    name : "fire",
    color: "bg-danger"
  },

  {
    name : "water",
    color: "bg-info"
  },

  {
    name : "electric",
    color: "bg-warning"
  },

  {
    name : "psychic",
    color: "bg-danger-subtle"
  },

  {
    name : "ice",
    color: "bg-info-subtle"
  },

  {
    name : "dragon",
    color: "bg-success bg-opacity-50"
  },

  {
    name : "dark",
    color: "bg-primary-subtle"
  },

  {
    name : "fairy",
    color: "bg-danger-subtle bg-opacity-75"
  }
  ,

  {
    name : "shadow",
    color: "bg-white text-dark"
  },
  {
    name : "unknown",
    color: "bg-light"
  }


]
var color = ""
var color2 = ""
var slot = ""



const buscar = async (id) => {
  let pokeurl = `https://pokeapi.co/api/v2/pokemon/${id}/`
let pokefoto = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  const pokeurlApi = await fetch(pokeurl)
  const pokeurlApiJson = await pokeurlApi.json()

 
  const pokenombre = await pokeurlApiJson.name
  const pokeid = await pokeurlApiJson.id
  console.log(pokenombre);
  console.log(pokeid);

  const type_1 = await pokeurlApiJson.types[0].type.name
  try {
    var type_2 = await pokeurlApiJson.types[1].type.name

  } catch (err) {
    console.log("error por solo un tipo " + err);
  }
  let cartasDiv = document.getElementById("contenedorCartas")

  /*while (cartasDiv.firstChild) {
    cartasDiv.removeChild(cartasDiv.firstChild)
}*/
typecolor.forEach(arr =>{
  if (arr.name == type_1){
   color = arr.color
  }
  if (arr.name == type_2){
   color2 = arr.color
  }
})
  pokeurlApiJson.types.forEach((arr, index) => {
    console.log(arr.slot);
     slot = arr.slot
  })
  if (slot == 2) {
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
    console.log("tipo 1 " + type_1);
    console.log("tipo 2 " + type_2);
  }
  if (slot == 1) {

    cartasDiv.innerHTML += `  
      <div  class="card col-3">
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
    console.log("tipo 1 " + type_1);
  }
}


//busca por el id que el usuario puso 
function buscapokemon() {
  const id_poke = document.getElementById("id_poke")
  var idPOKE = id_poke.value
  //no sabia si era necesario el string  pero no pierdo nada si lo pongo 
  buscar(idPOKE)
}
