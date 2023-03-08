console.log("pokeapi");
const typecolor = [
  {
    name : "grass",
    color: "66, 175, 2"
  },

  {
    name : "normal",
    color: "196, 192, 158"
  },

  {
    name : "fighting",
    color: "150, 23, 23"
  },

  {
    name : "flying",
    color: "112, 95, 151"
  },

  {
    name : "poison",
    color: "132, 47, 139"
  },

  {
    name : "ground",
    color: "204, 184, 97"
  },

  {
    name : "rock",
    color: "167, 152, 18"
  },

  {
    name : "bug",
    color: "137, 206, 47"
  },

  {
    name : "ghost",
    color: "98, 27, 190"
  },

  {
    name : "steel",
    color: "176, 185, 192"
  },

  {
    name : "fire",
    color: "216, 138, 35"
  },

  {
    name : "water",
    color: "10, 92, 131"
  },

  {
    name : "electric",
    color: "252, 229, 26, 0.986"
  },

  {
    name : "psychic",
    color: "241, 33, 179"
  },

  {
    name : "ice",
    color: "126, 214, 226"
  },

  {
    name : "dragon",
    color: "129, 69, 156"
  },

  {
    name : "dark",
    color: "78, 63, 22"
  },

  {
    name : "fairy",
    color: "11, 250, 190"
  }
  ,

  {
    name : "shadow",
    color: "50, 53, 52"
  },
  {
    name : "unknown",
    color: "255, 255, 255"
  }


]

var color = ""
var color2 = ""
var slot = ""
var num = 1
var o = 0
var slot_ability = ""

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
  <div class="card col-3" onclick="seleccionado(${pokeid})">
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

const seleccionado = async(id) => {   
  let pokeurl = `https://pokeapi.co/api/v2/pokemon/${id}/`
  let pokefoto = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  const pokeurlApi = await fetch(pokeurl)
  const pokeurlApiJson = await pokeurlApi.json()

  const pokenombre = await pokeurlApiJson.name
  const pokeid = await pokeurlApiJson.id
  const type_1 = await pokeurlApiJson.types[0].type.name
  try {var type_2 = await pokeurlApiJson.types[1].type.name} catch (err) { console.log("error por solo un tipo " + err)}
  
  const ability_1 = await pokeurlApiJson.abilities[0].ability.name
  const abilityurl_1 = await pokeurlApiJson.abilities[0].ability.url
  const abilityAPI_1 = await fetch(abilityurl_1)
  const abilityJSON_1 = await abilityAPI_1.json()
  const abilityinfog_1 = await abilityJSON_1.effect_entries
  var abilityinfo_1 = ""
  abilityinfog_1.forEach(arr => {
    if(arr.language.name == "en"){
      abilityinfo_1 = arr.short_effect
    }
  })

  //



 //importante sacar el efecto  de los movimientos usando la url dada en cada moves y poner esa info al tooltip que funciona despues aviriguar como mejorar el diseño y utilizar el tooltip para otras funciones como ---- aun nose  


  //
  var pokemove = await pokeurlApiJson.moves
  var moves = ""
  pokemove.forEach(arr => {
    const movsawa = async(arr) => {
      let move = await arr.move.name
      let moveurl = await arr.move.url
      let moveapi = await fetch(moveurl)
      let movejson =  await moveapi.json()
      let moveEffect = await movejson.effect_entries
      await moveEffect.forEach(arr => {
        moves += `| <a data-bs-toggle="mensaje" title="${arr.effect}"  href="#">${move}</a> |`
    
    })
     }
     movsawa(arr)
  });
  
  var hp = pokeurlApiJson.stats[0].base_stat
  var attack = pokeurlApiJson.stats[1].base_stat
  var defense = pokeurlApiJson.stats[2].base_stat
  var special_attack = pokeurlApiJson.stats[3].base_stat
  var special_defense = pokeurlApiJson.stats[4].base_stat
  var speed = pokeurlApiJson.stats[5].base_stat
  let cartasDiv = document.getElementById("contenedorCartas")

  while(cartasDiv.firstChild){
		cartasDiv.removeChild(cartasDiv.firstChild)
	}

 typecolor.forEach(arr =>{
  if (arr.name == type_1){
   color = arr.color
  }
  if (arr.name == type_2){
   color2 = arr.color
  }
 })

 pokeurlApiJson.types.forEach((arr, index) => {
     slot = arr.slot
  })

  pokeurlApiJson.abilities.forEach((arr, index) => {
    
    slot_ability = index
 })
  if (slot == 1) {
    cartasDiv.innerHTML += `  
      <div  class="card col-6">
        <img src= ${pokefoto} class="card-img-top" >
        <div class="card-body">
        <h3 class = "card-title text-center">${pokenombre}</h3>
        <p class="card-text rounded-pill text-center"style="background-color: rgb(${color});" >${type_1}</p>
        <div class="card-footer">
          <small class="text-muted">the id of the pokemon is :${pokeid}</small>
        </div>
        </div>
      </div>
      `
  }

  if (slot == 2) {
    cartasDiv.innerHTML += `  
      <div class="card col-6">
        <img src= ${pokefoto} class="card-img-top" >
        <div class="card-body">
        <h4 class = "card-title text-center">${pokenombre}</h4>
        <p class="card-text rounded-pill text-center" style="background-color: rgb(${color});">${type_1}</p>
        <p class="card-text  rounded-pill text-center" style="background-color: rgb(${color2});">${type_2}</p>
        <div class="card-footer">
          <small class="text-muted">the id of the pokemon is :${pokeid}</small>
        </div>
        </div>
      </div>` 
  }

 if (slot_ability == 0) {
    cartasDiv.innerHTML += ` <div class="card col-6">
    <div class="card-body">
      <h4 class = "card-title text-center">abilities</h4>
      <div class="accordion accordion-flush" id="accordionFlushExample">
   <div class="accordion-item">
   <h2 class="accordion-header" id="flush-headingOne">
   <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
    ${ability_1}
   </button>
   </h2>
   <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
   <div class="accordion-body">${abilityinfo_1}</div>
   </div>
   </div>
   <h4 class = "card-title text-center">moves</h4>
   <div class="accordion-item">
   <h2 class="accordion-header" id="flush-headingtwo">
   <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsetwo" aria-expanded="false" aria-controls="flush-collapsetwo">
   moves
   </button>
   </h2>
   <div id="flush-collapsetwo" class="accordion-collapse collapse" aria-labelledby="flush-headingtwo" data-bs-parent="#accordionFlushExample">
   <div class="accordion-body ">
   <p class ="muted">
   |${moves}|
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
 }

 if (slot_ability == 1) {
  try {
    const ability_2 = await pokeurlApiJson.abilities[1].ability.name
    const abilityurl_2 = await pokeurlApiJson.abilities[1].ability.url
    const abilityAPI_2 = await fetch(abilityurl_2)
    const abilityJSON_2 = await abilityAPI_2.json()
    const abilityinfog_2 = await abilityJSON_2.effect_entries
    var abilityinfo_2 = ""
    abilityinfog_2.forEach(arr => {
      if(arr.language.name == "en"){
        abilityinfo_2 = arr.short_effect}
    })
        cartasDiv.innerHTML += ` <div class="card col-6">
        <div class="card-body">
          <h4 class = "card-title text-center">abilities</h4>
          <div class="accordion accordion-flush" id="accordionFlushExample">
    <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        ${ability_1}
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">${abilityinfo_1}</div>
    </div>
    </div>
    <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
       ${ability_2}
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">${abilityinfo_2}.</div>
    </div>
    </div>
    <h4 class = "card-title text-center">moves</h4>
    <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
       moves
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">|${moves}|</div>
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
      } catch (error) {
        console.log("ability more 3"+error);}

 } 

 if (slot_ability == 2) {
    try {
    const ability_2 = await pokeurlApiJson.abilities[1].ability.name
    const abilityurl_2 = await pokeurlApiJson.abilities[1].ability.url
    const abilityAPI_2 = await fetch(abilityurl_2)
    const abilityJSON_2 = await abilityAPI_2.json()
    const abilityinfog_2 = await abilityJSON_2.effect_entries
    var abilityinfo_2 = ""
    abilityinfog_2.forEach(arr => {
      if(arr.language.name == "en"){
        abilityinfo_2 = arr.short_effect}
    })

    const ability_3 = await pokeurlApiJson.abilities[2].ability.name
    const abilityurl_3 = await pokeurlApiJson.abilities[2].ability.url
    const abilityAPI_3 = await fetch(abilityurl_3)
    const abilityJSON_3 = await abilityAPI_3.json()
    const abilityinfog_3 = await abilityJSON_3.effect_entries
    var abilityinfo_3 = ""
   abilityinfog_3.forEach(arr => {
  if(arr.language.name == "en"){
    abilityinfo_3 = arr.short_effect}
   })

    cartasDiv.innerHTML += ` <div class="card col-6">
   <div class="card-body">
   <h4 class = "card-title text-center">abilities</h4>
   <div class="accordion accordion-flush" id="accordionFlushExample">
   <div class="accordion-item">
   <h2 class="accordion-header" id="flush-headingOne">
   <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"   aria-controls="flush-collapseOne">
   ${ability_1}
   </button>
   </h2>
   <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
   <div class="accordion-body">${abilityinfo_1}</div>
   </div>
   </div>
   <div class="accordion-item">
   <h2 class="accordion-header" id="flush-headingTwo">
   <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
   ${ability_2}
   </button>
   </h2>
   <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
   <div class="accordion-body">${abilityinfo_2}.</div>
   </div>
   </div>
   <div class="accordion-item">
   <h2 class="accordion-header" id="flush-headingThree">
   <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false"   aria-controls="flush-collapseThree">
   ${ability_3}
   </button>
   </h2>
   <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
   <div class="accordion-body">${abilityinfo_3}</div>
   </div>
   </div>
   <h4 class = "card-title text-center">moves</h4>
   <div class="accordion-item">
   <h2 class="accordion-header" id="flush-headingfour">
   <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false"    aria-controls="flush-collapsefour">
    moves
   </button>
   </h2>
   <div id="flush-collapsefour" class="accordion-collapse collapse" aria-labelledby="flush-headingfour" data-bs-parent="#accordionFlushExample">
   <div class="accordion-body">|${moves}|</div>
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
   } catch (error) {
   console.log("ability more 3"+error);}
  }
  
}

const mas_10 = async () => {
  o = o + 10
  let cartasDiv = document.getElementById("contenedorCartas")
  while(cartasDiv.firstChild){
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
  while(cartasDiv.firstChild){
		cartasDiv.removeChild(cartasDiv.firstChild)
	}
  num = num - 20
  if(num <= 0){
    num = 1
    o = 10
  }
  if (o > 0){
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
  while(cartasDiv.firstChild){
		cartasDiv.removeChild(cartasDiv.firstChild)
	}
  if(idPOKE > 0){
    let numero = 1
    while (numero <= idPOKE) {
    await  buscar(numero)
       numero++
      }
  }
}

function limpiar() {
  let cartasDiv = document.getElementById("contenedorCartas")
  while(cartasDiv.firstChild){
		cartasDiv.removeChild(cartasDiv.firstChild)
	}
}

function buscapokemon_id() {
  
    let cartasDiv = document.getElementById("contenedorCartas")
    while(cartasDiv.firstChild){
      cartasDiv.removeChild(cartasDiv.firstChild)
    }
  
  const id_poke = document.getElementById("id_poke")
  let idPOKE = id_poke.value 
 
  if(idPOKE > 0){
  buscar(idPOKE)
  }
}
function buscapokemon_nombre() {
  
  let cartasDiv = document.getElementById("contenedorCartas")
  while(cartasDiv.firstChild){
    cartasDiv.removeChild(cartasDiv.firstChild)
  }

const name_poke = document.getElementById("name_poke").value 
let namePOKE = name_poke.toLocaleLowerCase()


buscar(namePOKE)
}
