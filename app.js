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
    button.addEventListener('click', function() {
      
      if (listOfPlayers.indexOf(person.id) === -1) {
        makePlayer(person.id)
      }
      listOfPlayers.push(person.id)
      }
    )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
    
  })
}

const makePlayer = (id) => {
  const list = document.getElementById('players')
  let person = arrOfPeople.find(x =>
    x.id == id
  )
  const li = document.createElement("li")
  const button = document.createElement("button")
  button.innerHTML = "Pick Team"
  button.addEventListener('click', function() {pickTeam(person.id)} )
  li.appendChild(button)
  li.appendChild(document.createTextNode(person.name))
  list.append(li)
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

function pickTeam(id) {
  const bteam = document.getElementById('blue')
  const rteam = document.getElementById('red')
  let player = arrOfPeople.find(player => 
    player.id == id )
    if (player.team == "redTeam") {
      const li = document.createElement("li")
      li.appendChild(document.createTextNode(player.name))
      rteam.append(li)
    } if (player.team =="blueTeam") {

      const li = document.createElement("li")
      li.appendChild(document.createTextNode(player.name))
      bteam.append(li)
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

// canThrowBall, canDodgeBall, hasPaid

if (typeof describe === 'function') {
  describe('DodgeBallPlayer', () => {
    it('canThrowBall', () => {
      assert.equal(DodgeBallPlayer.canThrowBall, 'canThrowBall');
    });
    it('canDodgeBall', () => {
      assert.equal(DodgeBallPlayer.canDodgeBall, 'canDodgeBall');
    });
    it('hasPaid', () => {
      assert.equal(DodgeBallPlayer.hasPaid, 'hasPaid');
    });  
  });
} 