let bank = 100

let pot1 = 0

let pot2 = 0

const players = [
  {
    name: "D'Marcus Williums",
    teamNumber: 0,
    emoji: '🏃‍♂️',
    skill: 10
  },
  {
    name: "Tyroil Smoochie-Wallace",
    teamNumber: 0,
    emoji: '🤾‍♂️',
    skill: 30
  },
  {
    name: "Jackmerius Tacktheratrix",
    teamNumber: 0,
    emoji: '🏇',
    skill: 88
  },
  {
    name: "Javaris Jamar Javarison-Lamar",
    teamNumber: 0,
    emoji: '🏌️‍♀️',
    skill: 15
  },
  {
    name: "D'Pez Poopsie",
    teamNumber: 0,
    emoji: '🏋️‍♂️',
    skill: 77
  },
  {
    name: "D'Jasper Probincrux III",
    teamNumber: 0,
    emoji: '🏌️‍♂️',
    skill: 21
  },
  {
    name: "Leoz Maxwell Jilliumz",
    teamNumber: 0,
    emoji: '🤾',
    skill: 5
  },
  {
    name: "Hingle McCringleberry",
    teamNumber: 0,
    emoji: '🏂',
    skill: 99
  },
  {
    name: "L'Carpetron Dookmarriot",
    teamNumber: 0,
    emoji: '🧘‍♀️',
    skill: 50
  },
  {
    name: "Xmus Jaxon Flaxon-Waxon",
    teamNumber: 0,
    emoji: '🚶‍♀️',
    skill: 1
  },
  {
    name: "Saggitariutt Jefferspin",
    teamNumber: 0,
    emoji: '🏋️‍♀️',
    skill: 61
  },
  {
    name: "Quatro Quatro",
    teamNumber: 0,
    emoji: '🤺',
    skill: 34
  },
  {
    name: "X-Wing @Aliciousness",
    teamNumber: 0,
    emoji: '🏄',
    skill: 71
  },
  {
    name: "Bisquiteen Trisket",
    teamNumber: 0,
    emoji: '🧜‍♂️',
    skill: 76
  },
  {
    name: "Scoish Velociraptor Maloish",
    teamNumber: 0,
    emoji: '🤸',
    skill: 47
  },
  {
    name: "Donkey Teeth",
    teamNumber: 0,
    emoji: '⛹️‍♀️',
    skill: 23
  },
  {
    name: "T.J. A.J. R.J. Backslashinfourth V",
    teamNumber: 0,
    emoji: '🕴️',
    skill: 58
  },
  {
    name: "Firstname Lastname",
    teamNumber: 0,
    emoji: '💃',
    skill: 99
  },
  {
    name: "Dan Smith",
    teamNumber: 0,
    emoji: '🧍‍♂️',
    skill: 3
  },
  {
    name: "Tiger",
    teamNumber: 0,
    emoji: '🐅',
    skill: 100
  },
]


function startBattle() {

  let team1Skill = 0
  let team2Skill = 0

  players.filter((player) => {
    if (player.teamNumber == 1)
      team1Skill += player.skill

    else {
      team2Skill += player.skill
    }
  })

  if (team1Skill > team2Skill) {
    console.log('The Cornish Game Hens Win!');
  }
  else if (team1Skill < team2Skill) {
    console.log('The Quetzelcoatallamas Win!');
  }
  else {
    console.log("It's a Draw!");
  }

  draftTeams()
}

function betTeam(betAmount, potNumber) {
  if (bank >= betAmount)
    bank -= betAmount
  potNumber += betAmount
  console.log(pot1, pot2);
  drawBank()
}
// function betTeam2(betAmount) {
//   if (bank >= 1)
//     bank -= 1
//   pot2 += 1
//   drawBank()
// }


function draftTeams() {
  players.forEach((player) => {
    const randomTeamIndex = Math.ceil(Math.random() * 2)
    player.teamNumber = randomTeamIndex
  })
  drawTeams()
}

function drawTeam(teamNum) {
  const playerTeamElement = document.getElementById(`team${teamNum}`)
  let teamEmojis = ``
  players.filter((player) => {
    if (player.teamNumber == teamNum)
      teamEmojis += `<span title="${player.name}">${player.emoji}</span>`
    playerTeamElement.innerHTML = teamEmojis
  })
}

function drawTeams() {
  drawTeam(1)
  drawTeam(2)
}

function drawBank() {
  const bankElement = document.getElementById('bankAccount')
  bankElement.innerText = `Account Balance: $${bank.toFixed(2)}`

  const pot1Element = document.getElementById('pot1Account')
  pot1Element.innerText = `Amount Bet: $${pot1.toFixed(2)}`

  const pot2Element = document.getElementById('pot2Account')
  pot2Element.innerText = `Amount Bet: $${pot2.toFixed(2)}`
}

drawBank()
draftTeams()
