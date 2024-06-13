let bank = 100

let profit = 0

const pots = [
  {
    name: 'pot 1',
    teamNumber: 1,
    value: 0
  },
  {
    name: 'pot 2',
    teamNumber: 2,
    value: 0
  }
]

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
  const team1Element = document.getElementById('teamName1')
  const team2Element = document.getElementById('teamName2')

  players.filter((player) => {
    if (player.teamNumber == 1) {
      team1Skill += player.skill
    }
    else {
      team2Skill += player.skill
    }
  })

  if (team1Skill > team2Skill) {
    console.log('The Cornish Game Hens Win!');
    returnWinnings(1)
    team1Element.innerText = "👑"
    team2Element.innerText = ``
  }
  else if (team1Skill < team2Skill) {
    console.log('The Quetzelcoatallamas Win!');
    returnWinnings(2)
    team2Element.innerText = "👑"
    team1Element.innerText = ``
  }
  else {
    console.log("It's a Draw!");
  }

  draftTeams()
}

function returnWinnings(teamNumber) {
  pots.filter((pot) => {
    if (pot.teamNumber == teamNumber) {
      pot.value *= 2
      bank += pot.value
    }
  })

  pots.forEach((pot) => {
    pot.value = 0
  })
  drawBank()
  drawProfits()
}

function makeBet(betAmount, potNumber) {
  pots.filter((pot) => {
    if (pot.name == potNumber && bank >= betAmount) {
      bank -= betAmount
      pot.value += betAmount
    }
  })
  drawBank()
}

function betAll(potNumber) {
  pots.filter((pot) => {
    if (pot.teamNumber == potNumber) {
      pot.value += bank
      bank -= bank
    }
  })
  drawBank()
}

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

function drawProfits() {
  const profitTotal = document.getElementById('currentProfit')
  profit = bank
  profit -= 100
  profitTotal.innerText = `$${profit.toFixed(2)}`
}

function drawBank() {
  const bankElement = document.getElementById('bankAccount')
  bankElement.innerText = `Account Balance: $${bank.toFixed(2)}`

  const pot1Element = document.getElementById('pot1Account')
  const pot2Element = document.getElementById('pot2Account')
  pots.filter((pot) => {
    if (pot.teamNumber == 1) {
      pot1Element.innerText = `Amount Bet: $${pot.value.toFixed(2)}`
    }
    else {
      if (pot.teamNumber == 2) {
        pot2Element.innerText = `Amount Bet: $${pot.value.toFixed(2)}`
      }
    }
  })
}

function resetGame() {
  bank = 100
  profit = 0
  pots.forEach((pot) => {
    pot.value = 0
  })
  drawBank()
  draftTeams()
  drawProfits()
}

drawBank()
draftTeams()
drawProfits()
