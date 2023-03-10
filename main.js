console.log("pokeapi");
const typecolor = [
  {
    name: "grass",
    color: "66, 175, 2"
  },

  {
    name: "normal",
    color: "196, 192, 158"
  },

  {
    name: "fighting",
    color: "150, 23, 23"
  },

  {
    name: "flying",
    color: "112, 95, 151"
  },

  {
    name: "poison",
    color: "132, 47, 139"
  },

  {
    name: "ground",
    color: "204, 184, 97"
  },

  {
    name: "rock",
    color: "167, 152, 18"
  },

  {
    name: "bug",
    color: "137, 206, 47"
  },

  {
    name: "ghost",
    color: "98, 27, 190"
  },

  {
    name: "steel",
    color: "176, 185, 192"
  },

  {
    name: "fire",
    color: "216, 138, 35"
  },

  {
    name: "water",
    color: "10, 92, 131"
  },

  {
    name: "electric",
    color: "252, 229, 26, 0.986"
  },

  {
    name: "psychic",
    color: "241, 33, 179"
  },

  {
    name: "ice",
    color: "126, 214, 226"
  },

  {
    name: "dragon",
    color: "129, 69, 156"
  },

  {
    name: "dark",
    color: "78, 63, 22"
  },

  {
    name: "fairy",
    color: "11, 250, 190"
  }
  ,

  {
    name: "shadow",
    color: "50, 53, 52"
  },
  {
    name: "unknown",
    color: "255, 255, 255"
  }


]

var color = ""
var num = 1
var o = 0

const buscar = async (id_o_nombre) => {
  let pokeurl = `https://pokeapi.co/api/v2/pokemon/${id_o_nombre}/`

  const pokeurlApi = await fetch(pokeurl)
  const pokeurlApiJson = await pokeurlApi.json()
  const pokenombre = await pokeurlApiJson.name
  const pokeid = await pokeurlApiJson.id

  let pokefoto = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeid}.png`

  let cartasDiv = document.getElementById("contenedorCartas")

  var type_color = ""
  var type = ""

  pokeurlApiJson.types.forEach(arr => {
    type = arr.type.name
    typecolor.forEach(arr => {
      if (arr.name == type) {
        color = arr.color
      }
    })
    type_color += `<p class="card-text rounded-pill text-center" style="background-color: rgb(${color})">${type}</p>`
  })
  cartasDiv.innerHTML += `  
  <div class="card col-3" style="background-color: aquamarine;" onclick="seleccionado(${pokeid})">
   <img src= ${pokefoto} class="card-img-top" >
   <div class="card-body">
   <h4 class = "card-title text-center">${pokenombre}</h4>
   ${type_color}
     <div class="card-footer">
     <small class="text-muted">the id of the pokemon is :${pokeid}</small>
   </div>
   </div>
  </div>
     `
}

const seleccionado = async (id) => {
  let pokeurl = `https://pokeapi.co/api/v2/pokemon/${id}/`
  let pokefoto = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  const pokeurlApi = await fetch(pokeurl)
  const pokeurlApiJson = await pokeurlApi.json()
  const pokenombre = await pokeurlApiJson.name
  const pokeid = await pokeurlApiJson.id
  let cartasDiv = document.getElementById("contenedorCartas")
  while (cartasDiv.firstChild) {
    cartasDiv.removeChild(cartasDiv.firstChild)
  }
  //----------------------------------------------type and color--------------------------------------------
  var type_color = ""
  var type = ""
  pokeurlApiJson.types.forEach(arr => {
    type = arr.type.name
    typecolor.forEach(arr => {
      if (arr.name == type) {
        color = arr.color
      }
    })
    type_color += `<p class="card-text rounded-pill text-center" style="background-color: rgb(${color})">${type}</p>`
  })
  cartasDiv.innerHTML += `  
  <div class="card col-6" style="background-color: aquamarine;" >
    <img src= ${pokefoto} class="card-img-top" >
    <div class="card-body">
    <h4 class = "card-title text-center">${pokenombre}</h4>
    ${type_color}
    <div class="card-footer">
      <small class="text-muted">the id of the pokemon is :${pokeid}</small>
    </div>
    </div>
  </div>`
  //---------------------------------------------stats-----------------------------------------------------------------
  var hp = pokeurlApiJson.stats[0].base_stat
  var attack = pokeurlApiJson.stats[1].base_stat
  var defense = pokeurlApiJson.stats[2].base_stat
  var special_attack = pokeurlApiJson.stats[3].base_stat
  var special_defense = pokeurlApiJson.stats[4].base_stat
  var speed = pokeurlApiJson.stats[5].base_stat
  //--------------------------------------------carta de informacion------------------------------------------------------------------------
  cartasDiv.innerHTML += ` <div class="card col-6" style="background-color: rgb(126, 190, 219);">
  <div class="card-body">
    <h4 class = "card-title text-center">abilities</h4>
    <div class="accordion accordion-flush" id="accordionFlushExample">
   </div>
 <h4 class = "card-title text-center">moves</h4>
 <div class="accordion accordion-flush" id="accordionFlushExample">
 <div class="accordion-item">
 <h2 class="accordion-header" id="flush-headingtwo">
 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsetwo" aria-expanded="false" aria-controls="flush-collapsetwo">
 moves
 </button>
 </h2>
 <div id="flush-collapsetwo" class="accordion-collapse collapse" aria-labelledby="flush-headingtwo" data-bs-parent="#accordionFlushExample">
 <div class="accordion-body ">
 <p class ="muted" id="moves">
 </p>
 </div>
 </div>
 </div>
 </div>
 <h4 class = "card-title text-center">stats</h4>
 <div class="container row">
 <div class="col-6">
 <ul class="list-group">
 <li class="list-group-item d-flex justify-content-between align-items-center">
 hp
 <span class="badge bg-primary rounded-pill">${hp}</span>
 </li>
 <li class="list-group-item d-flex justify-content-between align-items-center">
 attack
 <span class="badge bg-primary rounded-pill">${attack}</span>
 </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
 defense
 <span class="badge bg-primary rounded-pill">${defense}</span>
 </li>
 </ul>
 </div>
 <div class="col-6">
 <ul class="list-group">
 <li class="list-group-item d-flex justify-content-between align-items-center">
 special attack
 <span class="badge bg-primary rounded-pill">${special_attack}</span>
 </li>
 <li class="list-group-item d-flex justify-content-between align-items-center">
 special defense
 <span class="badge bg-primary rounded-pill">${special_defense}</span>
 </li>
 <li class="list-group-item d-flex justify-content-between align-items-center">
 speed
 <span class="badge bg-primary rounded-pill">${speed}</span>
 </li>
 </ul>
 </div> 
 </div>
 <div class="card-footer">
 <small class="text-muted">the id of the pokemon is :${pokeid}</small>
 </div>
 </div>  
  </div>
  `
  //----------------------------------moves--------------------------------------------------
var moves = document.getElementById("moves")
  const movsawa = async (arr,move) => {
    
    let moveurl = await arr.move.url
    let moveapi = await fetch(moveurl)
    let movejson = await moveapi.json()
    let moveEffect = await movejson.effect_entries[0].short_effect
      moves.innerHTML += `|| <a data-bs-toggle="mensaje" title="${moveEffect}"  href="#">${move}</a> ||`
  }
  var pokemove = await pokeurlApiJson.moves
  pokemove.forEach(arr => {
    let move = arr.move.name
    movsawa(arr,move)
  })
 // ---------------------------------------ability-------------------------------------------------------------------------
  var abilidades = document.getElementById("accordionFlushExample")
  const ability = async (arr, cantidad, ability_name) => {
    let abilityurl = await arr.ability.url
    let abilityAPI = await fetch(abilityurl)
    let abilityJSON = await abilityAPI.json()
    let ability_info = abilityJSON.effect_entries[1].effect

abilidades.innerHTML +=  `<div class="accordion-item">
<h2 class="accordion-header" id="flush-heading${cantidad}">
<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${cantidad}" aria-expanded="false" aria-controls="flush-collapse${cantidad}">
 ${ability_name}
</button>
</h2>
<div id="flush-collapse${cantidad}" class="accordion-collapse collapse" aria-labelledby="flush-heading${cantidad}" data-bs-parent="#accordionFlushExample">
<div class="accordion-body">${ability_info}</div>
</div>
</div>`
  }
  pokeurlApiJson.abilities.forEach((arr, index) => {
    let ability_name = arr.ability.name
    let cantidad = " "
    if (index == 0) {
      cantidad = "One"
    }
    if (index == 1) {
      cantidad = "Two"
    }
    if (index == 2) {
      cantidad = "Three"
    }
    ability(arr, cantidad, ability_name)
  })
}

const mas_10 = async () => {
  o = o + 10
  let cartasDiv = document.getElementById("contenedorCartas")
  while (cartasDiv.firstChild) {
    cartasDiv.removeChild(cartasDiv.firstChild)
  }
  while (num <= o) {
    await buscar(num)
    num++
  }
}

const menos_10 = async () => {
  o = o - 10
  let cartasDiv = document.getElementById("contenedorCartas")
  while (cartasDiv.firstChild) {
    cartasDiv.removeChild(cartasDiv.firstChild)
  }
  num = num - 20
  if (num <= 0) {
    num = 1
    o = 10
  }
  if (o > 0) {
    while (num <= o) {
      await buscar(num)
      num++
    }
  }


}       

const busqueda_general = async () => {
  const id_poke = document.getElementById("id_poke")
  let idPOKE = id_poke.value
  let cartasDiv = document.getElementById("contenedorCartas")
  while (cartasDiv.firstChild) {
    cartasDiv.removeChild(cartasDiv.firstChild)
  }
  if (idPOKE > 0) {
    let numero = 1
    while (numero <= idPOKE) {
      await buscar(numero)
      numero++
    }
  }
}

function buscapokemon_id() {

  let cartasDiv = document.getElementById("contenedorCartas")
  while (cartasDiv.firstChild) {
    cartasDiv.removeChild(cartasDiv.firstChild)
  }

  const id_poke = document.getElementById("id_poke")
  let idPOKE = id_poke.value

  if (idPOKE > 0) {
    buscar(idPOKE)
  }
}

function buscapokemon_nombre() {

  let cartasDiv = document.getElementById("contenedorCartas")
  while (cartasDiv.firstChild) {
    cartasDiv.removeChild(cartasDiv.firstChild)
  }

  const name_poke = document.getElementById("name_poke").value
  let namePOKE = name_poke.toLocaleLowerCase()


  buscar(namePOKE)
}

// funciones que eligen el tipo de busqueda

function tipobuscador_id() {
  const tipobuscador = document.getElementById("tipobuscador")

  while (tipobuscador.firstChild) {
    tipobuscador.removeChild(tipobuscador.firstChild)
  }

 tipobuscador.innerHTML = `
 <div class="row">
                <div class="col">
                    <label class="mr-sm-2" for="inlineFormCustomSelect">Enter the pokemon id</label>
                    <input type="number" id="id_poke" class="form-control text-center" placeholder="put the id of the pokemon">
                </div>
                <button class="btn btn-primary form-control mt-3 col-12" type="button" onclick="buscapokemon_id()">search</button>
            </div>
 `
}
function tipobuscador_nombre() {
  const tipobuscador = document.getElementById("tipobuscador")

  while (tipobuscador.firstChild) {
    tipobuscador.removeChild(tipobuscador.firstChild)
  }

 tipobuscador.innerHTML = `
 <div class="row">
                <div class="col">
                    <label class="mr-sm-2" for="inlineFormCustomSelect">Enter the name of the pokemon</label>
                    <input type="text" id="name_poke" class="form-control text-center" placeholder="put the name of the pokemon (well written)" >
                </div>
                <button class="btn btn-primary form-control mt-3 col-12" type="button" onclick="buscapokemon_nombre()">search</button>
            </div>
 `
}
function tipobuscador_hasta() {
  const tipobuscador = document.getElementById("tipobuscador")

  while (tipobuscador.firstChild) {
    tipobuscador.removeChild(tipobuscador.firstChild)
  }

 tipobuscador.innerHTML = `
 <div class="row">
                <div class="col">
                    <label class="mr-sm-2" for="inlineFormCustomSelect">Enter the number of pokemons you want to see (start with 1)</label>
                    <input type="number" id="id_poke" class="form-control text-center" placeholder="put the number">
                </div>
                <button class="btn btn-primary form-control mt-3 col-12" type="button" onclick="busqueda_general()">search</button>
            </div>
 `
}
function tipobuscador_pagina() {
  const tipobuscador = document.getElementById("tipobuscador")

  while (tipobuscador.firstChild) {
    tipobuscador.removeChild(tipobuscador.firstChild)
  }

 tipobuscador.innerHTML = `
 <div class="row">
                <div class="col">
                    <label class="mr-sm-2" for="inlineFormCustomSelect">they go ten by ten</label>
                </div>
                <div class="container row">
                <button class="btn btn-primary  mt-3 col-6" type="button" onclick="menos_10()">previous</button>
                <button class="btn btn-primary  mt-3 col-6" type="button" onclick="mas_10()">next</button>
                </div>
            </div>
 `
}