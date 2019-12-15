const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska", 
    canThrowBall: true, 
    canDodgeBall: true, 
    hasPaid: true, 
    isHealthy: true, 
    yearsExperience: true,
    team: "redTeam"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky", 
    canThrowBall: true, 
    canDodgeBall: true, 
    hasPaid: true, 
    isHealthy: true, 
    yearsExperience: true, 
    team: "blueTeam"    
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas", 
    canThrowBall: true, 
    canDodgeBall: true, 
    hasPaid: true, 
    isHealthy: true, 
    yearsExperience: true, 
    team: "redTeam"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York", 
    canThrowBall: true, 
    canDodgeBall: true, 
    hasPaid: true, 
    isHealthy: true, 
    yearsExperience: true, 
    team: "blueTeam" 
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia", 
    canThrowBall: true, 
    canDodgeBall: true, 
    hasPaid: true, 
    isHealthy: true, 
    yearsExperience: true, 
    team: "redTeam"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California", 
    canThrowBall: true, 
    canDodgeBall: true, 
    hasPaid: true, 
    isHealthy: true, 
    yearsExperience: true, 
    team: "blueTeam" 
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana",
    canThrowBall: true, 
    canDodgeBall: true, 
    hasPaid: true, 
    isHealthy: true, 
    yearsExperience: true, 
    team: "redTeam"
  },
]

const listOfPlayers = []
const blueTeam = []
const redTeam = []

const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  while(listElement.firstChild) {
    listElement.firstChild.remove()
  }
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person.id)} )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
    
  })
}

const makePlayer = (id) => {
  const list = document.getElementById('players')
  // while(list.firstChild) {
  //   list.firstChild.remove()
  // }
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Pick Team"
    button.addEventListener('click', function() {dodgeBallPlayer(person.id)} )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name))
    list.append(li)
  })
  
}

class DodgeBallPlayer {
  constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
  }
  // Push these new dodge ball Player objects into a new array
  // then display them in the DOM as available players to pick.
}
const dodgeBallPlayer = new DodgeBallPlayer();

function pickPlayer() {
  for(i = 0; i < arrOfPeople.length; i++) {
    arrOfPeople.push(DodgeBallPlayer)
    // create loop to go through array w for loop in function
  }
}


class BlueTeammate extends DodgeBallPlayer {
  constructor(blueTeam, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
    super(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
    this.blueTeam = blueTeam;
  }
}
class RedTeammate extends DodgeBallPlayer{
  constructor(redTeam, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
    super(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience)
    this.readTeam = redTeam;
  }
}

