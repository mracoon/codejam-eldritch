import blueCardsData from "./cardsData/blue.js"
import brownCardsData from "./cardsData/brown.js"
import greenCardsData from "./cardsData/green.js"
import ancientsCardsData from "./cardsData/ancientsCard.js"
//console.log(ancientsCardsData)

const azathothCard = document.querySelector('.azathoth-card')
const cthulthuCard = document.querySelector('.cthulthu-card')
const iogSothothCard = document.querySelector('.iog-sothoth-card')
const shubNiggurathCard = document.querySelector('.shub-niggurath-card')

const levels = document.querySelector('.levels-container')
const shuffleBtn = document.querySelector('.shuffle-btn')
let ancientActive = 'azathoth'
let currentLevel = 'normal'
let deck = {}

const cardsDeck = document.querySelector('.deck')
const currentCard = document.querySelector('.current-card')
currentCard.style.backgroundImage = 'unset'
//currentCard.style.border = 'none'

const currentAncientCard = document.querySelector('.current-ancient-card')

azathothCard.addEventListener('click', () => {
  ancientActive = 'azathoth'
  console.log(ancientsCardsData[ancientActive])
  azathothCard.classList.add('ancient-card-active')
  cthulthuCard.classList.remove('ancient-card-active')
  iogSothothCard.classList.remove('ancient-card-active')
  shubNiggurathCard.classList.remove('ancient-card-active')
  cardsDeck.classList.add('hidden-block')
  ancientContainer.classList.remove('ancient-container-active')
  currentAncientCard.style.backgroundImage = `url(./assets/Ancients/Azathoth.png)`
  // counter = stageITotal[0]
  counter = 4
  currentStage = 1
  console.log('counter is', counter, 'currentStage is', currentStage)
  updateTracker()
  currentCard.style.backgroundImage = 'unset'
  //currentCard.style.border = 'none'
})

cthulthuCard.addEventListener('click', () => {
  ancientActive = 'cthulhu'
  console.log(ancientsCardsData[ancientActive])
  azathothCard.classList.remove('ancient-card-active')
  cthulthuCard.classList.add('ancient-card-active')
  iogSothothCard.classList.remove('ancient-card-active')
  shubNiggurathCard.classList.remove('ancient-card-active')
  cardsDeck.classList.add('hidden-block')
  ancientContainer.classList.remove('ancient-container-active')
  currentAncientCard.style.backgroundImage = `url(./assets/Ancients/Cthulthu.png)`
  //counter = stageITotal[0]
  counter = 4
  currentStage = 1
  console.log('counter is', counter, 'currentStage is', currentStage)
  updateTracker()
  currentCard.style.backgroundImage = 'unset'
  // currentCard.style.border = 'none'

})

iogSothothCard.addEventListener('click', () => {
  ancientActive = 'iogSothoth'
  console.log(ancientsCardsData[ancientActive])
  azathothCard.classList.remove('ancient-card-active')
  cthulthuCard.classList.remove('ancient-card-active')
  iogSothothCard.classList.add('ancient-card-active')
  shubNiggurathCard.classList.remove('ancient-card-active')
  cardsDeck.classList.add('hidden-block')
  ancientContainer.classList.remove('ancient-container-active')
  currentAncientCard.style.backgroundImage = `url(./assets/Ancients/IogSothoth.png)`
  // counter = stageITotal[0]
  counter = 3
  currentStage = 1
  console.log('counter is', counter, 'currentStage is', currentStage)
  updateTracker()
  currentCard.style.backgroundImage = 'unset'
  // currentCard.style.border = 'none'
})

shubNiggurathCard.addEventListener('click', () => {
  ancientActive = 'shubNiggurath'
  // console.log(ancientsCardsData[ancientActive])
  azathothCard.classList.remove('ancient-card-active')
  cthulthuCard.classList.remove('ancient-card-active')
  iogSothothCard.classList.remove('ancient-card-active')
  shubNiggurathCard.classList.add('ancient-card-active')
  cardsDeck.classList.add('hidden-block')
  ancientContainer.classList.remove('ancient-container-active')
  currentAncientCard.style.backgroundImage = `url(./assets/Ancients/ShubNiggurath.png)`
  // counter = stageITotal[0]
  counter = 4
  currentStage = 1
  console.log('counter is', counter, 'currentStage is', currentStage)
  updateTracker()
  currentCard.style.backgroundImage = 'unset'
  //currentCard.style.border = 'none'
})

levels.addEventListener('click', (e) => {
  const elem = e.target
  //console.log(e.target)
  const levButtons = document.querySelectorAll('.level-btn')
  levButtons.forEach((el) => {
    el.classList.remove('level-btn-active')
  })
  if (e.target.classList.contains('level-btn')) {
    counter = stageITotal[0]
    currentCard.style.backgroundImage = 'unset'
    //currentCard.style.border = 'none'
    currentStage = 1

    console.log('counter is', counter, 'currentStage is', currentStage)
    cardsDeck.classList.add('hidden-block')
    currentLevel = elem.name
    elem.classList.add('level-btn-active')
    console.log(currentLevel)
  }

})
/*
function createStartDeck(colorKey, colorEasyIds, colorReqTotal, colorNormalIds) {
  if (colorReqTotal === colorEasyIds.length) {
    deck[colorKey] = [...colorEasyIds]
  } else if (colorReqTotal > colorEasyIds.length) {
    deck[colorKey] = [...colorEasyIds]
    //deck.blue.push(...(blueNormalIds.slice(0, blueReqTotal - blueEasyIds.length)))
    let arr = []
    while (arr.length < colorReqTotal - colorEasyIds.length) {
      const randomIndex = Math.floor(Math.random() * colorNormalIds.length)
      if (arr.indexOf(randomIndex) === -1) {
        arr.push(randomIndex)
        deck[colorKey].push(colorNormalIds[randomIndex])
      }
    }

  } else if (colorReqTotal < colorEasyIds.length) {
    deck[colorKey] = []
    let arr2 = []
    while (arr2.length < colorReqTotal) {
      const randomIndex2 = Math.floor(Math.random() * colorEasyIds.length)
      if (arr2.indexOf(randomIndex2) === -1) {
        arr2.push(randomIndex2)
        deck[colorKey].push(colorEasyIds[randomIndex2])
      }
    }

  }

}*/

//createStartDeck('brown', brownEasyIds, brownReqTotal, brownNormalIds)

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}


function createStartDeck(colorKey, startCards, colorReqTotal, colorNormalIds) {
  if (colorReqTotal === startCards.length) {
    deck[colorKey] = [...startCards]
  } else if (colorReqTotal > startCards.length) {
    deck[colorKey] = [...startCards]
    //deck.blue.push(...(blueNormalIds.slice(0, blueReqTotal - blueEasyIds.length)))
    let arr = []
    while (arr.length < colorReqTotal - startCards.length) {
      const randomIndex = Math.floor(Math.random() * colorNormalIds.length)
      if (arr.indexOf(randomIndex) === -1) {
        arr.push(randomIndex)
        deck[colorKey].push(colorNormalIds[randomIndex])
      }
    }

  } else if (colorReqTotal < startCards.length) {
    deck[colorKey] = []
    let arr2 = []
    while (arr2.length < colorReqTotal) {
      const randomIndex2 = Math.floor(Math.random() * startCards.length)
      if (arr2.indexOf(randomIndex2) === -1) {
        arr2.push(randomIndex2)
        deck[colorKey].push(startCards[randomIndex2])
      }
    }

  }
  // console.log(deck)
  return shuffle(deck[colorKey])
}

function getColorStageDeck(color, colorReqStage, stageiDeck) {
  for (let i = 0; i < colorReqStage; i++) {
    stageiDeck.push(deck[color].pop())
  }
  return shuffle(stageiDeck)
}

let finalDeck = []
//ancientsCardsData[ancientActive].firstStage.greenCards + ancientsCardsData[ancientActive].secondStage.greenCards + ancientsCardsData[ancientActive].thirdStage.greenCards

let greenReqStage1 = ancientsCardsData[ancientActive].firstStage.greenCards
let brownReqStage1 = ancientsCardsData[ancientActive].firstStage.brownCards
let blueReqStage1 = ancientsCardsData[ancientActive].firstStage.blueCards

let greenReqStage2 = ancientsCardsData[ancientActive].secondStage.greenCards
let brownReqStage2 = ancientsCardsData[ancientActive].secondStage.brownCards
let blueReqStage2 = ancientsCardsData[ancientActive].secondStage.blueCards

let greenReqStage3 = ancientsCardsData[ancientActive].thirdStage.greenCards
let brownReqStage3 = ancientsCardsData[ancientActive].thirdStage.brownCards
let blueReqStage3 = ancientsCardsData[ancientActive].thirdStage.blueCards


let currentStage = 1
let stage1Total = greenReqStage1 + brownReqStage1 + blueReqStage1
let stage2Total = greenReqStage2 + brownReqStage2 + blueReqStage2
let stage3Total = greenReqStage3 + brownReqStage3 + blueReqStage3
let stageITotal = [stage1Total, stage2Total, stage3Total]
console.log(stageITotal, 'stageitotal')
let counter = stage1Total

const trackerContainer = document.querySelector('.tracker')
const greenStage1CounterEl = trackerContainer.children[0].children[1]
const brownStage1CounterEl = trackerContainer.children[0].children[2]
const blueStage1CounterEl = trackerContainer.children[0].children[3]

const greenStage2CounterEl = trackerContainer.children[1].children[1]
const brownStage2CounterEl = trackerContainer.children[1].children[2]
const blueStage2CounterEl = trackerContainer.children[1].children[3]

const greenStage3CounterEl = trackerContainer.children[2].children[1]
const brownStage3CounterEl = trackerContainer.children[2].children[2]
const blueStage3CounterEl = trackerContainer.children[2].children[3]
//cardsDeck.classList.remove('hidden-block')

function updateTracker() {
  greenReqStage1 = ancientsCardsData[ancientActive].firstStage.greenCards
  brownReqStage1 = ancientsCardsData[ancientActive].firstStage.brownCards
  blueReqStage1 = ancientsCardsData[ancientActive].firstStage.blueCards

  greenReqStage2 = ancientsCardsData[ancientActive].secondStage.greenCards
  brownReqStage2 = ancientsCardsData[ancientActive].secondStage.brownCards
  blueReqStage2 = ancientsCardsData[ancientActive].secondStage.blueCards

  greenReqStage3 = ancientsCardsData[ancientActive].thirdStage.greenCards
  brownReqStage3 = ancientsCardsData[ancientActive].thirdStage.brownCards
  blueReqStage3 = ancientsCardsData[ancientActive].thirdStage.blueCards


  greenStage1CounterEl.textContent = greenReqStage1
  brownStage1CounterEl.textContent = brownReqStage1
  blueStage1CounterEl.textContent = blueReqStage1

  greenStage2CounterEl.textContent = greenReqStage2
  brownStage2CounterEl.textContent = brownReqStage2
  blueStage2CounterEl.textContent = blueReqStage2


  greenStage3CounterEl.textContent = greenReqStage3
  brownStage3CounterEl.textContent = brownReqStage3
  blueStage3CounterEl.textContent = blueReqStage3
}
updateTracker()

shuffleBtn.addEventListener('click', () => {

  cardsDeck.classList.remove('hidden-block')
  counter = stage1Total
  greenReqStage1 = ancientsCardsData[ancientActive].firstStage.greenCards
  brownReqStage1 = ancientsCardsData[ancientActive].firstStage.brownCards
  blueReqStage1 = ancientsCardsData[ancientActive].firstStage.blueCards

  greenReqStage2 = ancientsCardsData[ancientActive].secondStage.greenCards
  brownReqStage2 = ancientsCardsData[ancientActive].secondStage.brownCards
  blueReqStage2 = ancientsCardsData[ancientActive].secondStage.blueCards

  greenReqStage3 = ancientsCardsData[ancientActive].thirdStage.greenCards
  brownReqStage3 = ancientsCardsData[ancientActive].thirdStage.brownCards
  blueReqStage3 = ancientsCardsData[ancientActive].thirdStage.blueCards

  stage1Total = greenReqStage1 + brownReqStage1 + blueReqStage1
  stage2Total = greenReqStage2 + brownReqStage2 + blueReqStage2
  stage3Total = greenReqStage3 + brownReqStage3 + blueReqStage3
  stageITotal = [stage1Total, stage2Total, stage3Total]
  console.log(stageITotal, 'stageitotal')
  /*const trackerContainer = document.querySelector('.tracker')
  const greenStage1CounterEl = trackerContainer.children[0].children[1]
  const brownStage1CounterEl = trackerContainer.children[0].children[2]
  const blueStage1CounterEl = trackerContainer.children[0].children[3]*/

  // trackerContainer.children[0].children[1].textContent = ancientsCardsData[ancientActive].firstStage.greenCards
  // trackerContainer.children[0].children[2].textContent = ancientsCardsData[ancientActive].firstStage.brownCards
  // trackerContainer.children[0].children[3].textContent = ancientsCardsData[ancientActive].firstStage.blueCards

  greenStage1CounterEl.textContent = greenReqStage1
  brownStage1CounterEl.textContent = brownReqStage1
  blueStage1CounterEl.textContent = blueReqStage1
  /*
    const greenStage2CounterEl = trackerContainer.children[1].children[1]
    const brownStage2CounterEl = trackerContainer.children[1].children[2]
    const blueStage2CounterEl = trackerContainer.children[1].children[3]
  */
  //trackerContainer.children[1].children[1].textContent = ancientsCardsData[ancientActive].secondStage.greenCards
  // trackerContainer.children[1].children[2].textContent = ancientsCardsData[ancientActive].secondStage.brownCards
  // trackerContainer.children[1].children[3].textContent = ancientsCardsData[ancientActive].secondStage.blueCards
  greenStage2CounterEl.textContent = greenReqStage2
  brownStage2CounterEl.textContent = brownReqStage2
  blueStage2CounterEl.textContent = blueReqStage2

  /*
    const greenStage3CounterEl = trackerContainer.children[2].children[1]
    const brownStage3CounterEl = trackerContainer.children[2].children[2]
    const blueStage3CounterEl = trackerContainer.children[2].children[3]
  */
  //trackerContainer.children[2].children[1].textContent = ancientsCardsData[ancientActive].thirdStage.greenCards
  //trackerContainer.children[2].children[2].textContent = ancientsCardsData[ancientActive].thirdStage.brownCards
  //trackerContainer.children[2].children[3].textContent = ancientsCardsData[ancientActive].thirdStage.blueCards

  greenStage3CounterEl.textContent = greenReqStage3
  brownStage3CounterEl.textContent = brownReqStage3
  blueStage3CounterEl.textContent = blueReqStage3

  //console.log(trackerContainer.children[0].children[0])
  //console.log(ancientsCardsData[ancientActive].firstStage.greenCards)
  //console.log(greenCardsData.easy.map(el => el.path))
  const greenEasyIds = greenCardsData.easy.map(el => el.id)
  const greenNormalIds = greenCardsData.normal.map(el => el.id)
  const greenHardIds = greenCardsData.hard.map(el => el.id)
  //console.log('easy', greenEasyIds)
  //console.log('norm', greenNormalIds)
  //console.log('hard', greenHardIds)

  const brownEasyIds = brownCardsData.easy.map(el => el.id)
  const brownNormalIds = brownCardsData.normal.map(el => el.id)
  const brownHardIds = brownCardsData.hard.map(el => el.id)
  // console.log('easy', brownEasyIds)
  //console.log('norm', brownNormalIds)
  //console.log('hard', brownHardIds)

  const blueEasyIds = blueCardsData.easy.map(el => el.id)
  const blueNormalIds = blueCardsData.normal.map(el => el.id)
  const blueHardIds = blueCardsData.hard.map(el => el.id)
  //console.log('easy', blueEasyIds)
  //console.log('norm', blueNormalIds)
  //console.log('hard', blueHardIds)

  const greenReqTotal = ancientsCardsData[ancientActive].all.greenCards
  const brownReqTotal = ancientsCardsData[ancientActive].all.brownCards
  const blueReqTotal = ancientsCardsData[ancientActive].all.blueCards
  //console.log(greenReqTotal, brownReqTotal, blueReqTotal)


  switch (currentLevel) {
    case 'very-easy':
      deck = {}
      createStartDeck('green', greenEasyIds, greenReqTotal, greenNormalIds)
      createStartDeck('blue', blueEasyIds, blueReqTotal, blueNormalIds)
      createStartDeck('brown', brownEasyIds, brownReqTotal, brownNormalIds)
      console.log('deck bef', deck)
      break

    case 'easy':
      deck = {}
      createStartDeck('green', [...greenEasyIds, ...greenNormalIds], greenReqTotal, greenNormalIds)
      createStartDeck('blue', [...blueEasyIds, ...blueNormalIds], blueReqTotal, blueNormalIds)
      createStartDeck('brown', [...brownEasyIds, ...brownNormalIds], brownReqTotal, brownNormalIds)

      break

    case 'high':
      deck = {}
      createStartDeck('green', [...greenNormalIds, ...greenHardIds], greenReqTotal, greenNormalIds)
      createStartDeck('blue', [...blueNormalIds, ...blueHardIds], blueReqTotal, blueNormalIds)
      createStartDeck('brown', [...brownNormalIds, ...brownHardIds], brownReqTotal, brownNormalIds)


      break

    case 'very-high':
      deck = {}
      createStartDeck('green', greenHardIds, greenReqTotal, greenNormalIds)
      createStartDeck('blue', blueHardIds, blueReqTotal, blueNormalIds)
      createStartDeck('brown', brownHardIds, brownReqTotal, brownNormalIds)
      break

    default: //normal
      deck = {}
      createStartDeck('green', [...greenEasyIds, ...greenNormalIds, ...greenHardIds], greenReqTotal, greenNormalIds)
      createStartDeck('blue', [...blueEasyIds, ...blueNormalIds, ...blueHardIds], blueReqTotal, blueNormalIds)
      createStartDeck('brown', [...brownEasyIds, ...brownNormalIds, ...brownHardIds], brownReqTotal, brownNormalIds)
      break
  }

  //console.log('deck bef', deck)

  let stage1Deck = []
  let stage2Deck = []
  let stage3Deck = []

  getColorStageDeck('green', greenReqStage1, stage1Deck)
  getColorStageDeck('brown', brownReqStage1, stage1Deck)
  getColorStageDeck('blue', blueReqStage1, stage1Deck)
  /*
    for (let i = 0; i < greenReqStage1; i++) {
      stage1Deck.push(deck.green.pop())
    }
    for (let i = 0; i < brownReqStage1; i++) {
      stage1Deck.push(deck.brown.pop())
    }
    for (let i = 0; i < blueReqStage1; i++) {
      stage1Deck.push(deck.blue.pop())
    }
  */
  getColorStageDeck('green', greenReqStage2, stage2Deck)
  getColorStageDeck('brown', brownReqStage2, stage2Deck)
  getColorStageDeck('blue', blueReqStage2, stage2Deck)

  getColorStageDeck('green', greenReqStage3, stage3Deck)
  getColorStageDeck('brown', brownReqStage3, stage3Deck)
  getColorStageDeck('blue', blueReqStage3, stage3Deck)

  console.log('s1 deck', stage1Deck)
  console.log('s2 deck', stage2Deck)
  console.log('s3 deck', stage3Deck)

  //console.log('deck aft', deck)
  finalDeck = [...stage3Deck, ...stage2Deck, ...stage1Deck]
  console.log('fin', finalDeck)
  currentCard.style.backgroundImage = 'unset'
  //currentCard.style.border = 'none'
  counter = stageITotal[0]

  currentStage = 1
})





cardsDeck.addEventListener('click', () => {

  const curCard = finalDeck.pop()
  console.log(curCard)
  console.log(finalDeck)
  let currentColor = 'green'
  switch (curCard.substring(0, 2)) {
    case 'bl':
      currentColor = 'blue'
      break

    case 'gr':
      currentColor = 'green'
      break
    case 'br':
      currentColor = 'brown'
      break

    default:
      currentColor = 'brown'
      break
  }
  console.log(currentStage, 'currentStage')
  console.log(currentColor, 'currentColor')
  if (currentStage === 1) {
    switch (currentColor) {
      case 'blue': blueStage1CounterEl.textContent -= 1
        break
      case 'green': greenStage1CounterEl.textContent -= 1
        break
      default: brownStage1CounterEl.textContent -= 1
        break
    }
  }
  else if (currentStage === 2) {
    switch (currentColor) {
      case 'blue': blueStage2CounterEl.textContent -= 1
        break
      case 'green': greenStage2CounterEl.textContent -= 1
        break
      default: brownStage2CounterEl.textContent -= 1
        break
    }
  } else if (currentStage === 3) {
    switch (currentColor) {
      case 'blue': blueStage3CounterEl.textContent -= 1
        break
      case 'green': greenStage3CounterEl.textContent -= 1
        break
      default: brownStage3CounterEl.textContent -= 1
        break
    }
  }

  counter -= 1
  console.log('counter', counter)
  if (counter === 0) {
    counter = stageITotal[currentStage]
    currentStage += 1
    if (currentStage === 4) {
      currentStage = 1
      cardsDeck.classList.add('hidden-block')
    }

  }
  //console.log('stage', currentStage)




  //greenStage2CounterEl.textContent

  //console.log(currentColor)
  currentCard.style.backgroundImage = `url(../assets/MythicCards/${currentColor}/${curCard}.png)`
  //currentCard.style.borderColor = 'wheat;'
})


const changeAncientBtn = document.querySelector('.change-ancient-btn')
const ancientContainer = document.querySelector('.ancient-container')

changeAncientBtn.addEventListener('click', () => {
  ancientContainer.classList.add('ancient-container-active')
})

const veryEasyLevelBtn = document.querySelector('.very-easy-level')
const easyLevelBtn = document.querySelector('.easy-level')
const normalLevelBtn = document.querySelector('.normal-level')
const hardLevelBtn = document.querySelector('.high-level')
const veryHardLevelBtn = document.querySelector('.very-high-level')
const levelsDesc = document.querySelector('.levels-desc')

function mouseoutLevelBtn() {
  levelsDesc.style.backgroundImage = `url(./assets/levels/change-dif-level.png)`
}

veryEasyLevelBtn.addEventListener('mouseover', () => {
  levelsDesc.style.backgroundImage = `url(./assets/levels/card-very-easy.jpg)`
})

easyLevelBtn.addEventListener('mouseover', () => {
  levelsDesc.style.backgroundImage = `url(./assets/levels/card-easy.jpg)`
})
normalLevelBtn.addEventListener('mouseover', () => {
  levelsDesc.style.backgroundImage = `url(./assets/levels/normal.jpg)`
})
hardLevelBtn.addEventListener('mouseover', () => {
  levelsDesc.style.backgroundImage = `url(./assets/levels/card-hard.jpg)`
})
veryHardLevelBtn.addEventListener('mouseover', () => {
  levelsDesc.style.backgroundImage = `url(./assets/levels/card-very-hard.jpg)`
})
veryEasyLevelBtn.addEventListener('mouseout', mouseoutLevelBtn)
easyLevelBtn.addEventListener('mouseout', mouseoutLevelBtn)
normalLevelBtn.addEventListener('mouseout', mouseoutLevelBtn)
hardLevelBtn.addEventListener('mouseout', mouseoutLevelBtn)
veryHardLevelBtn.addEventListener('mouseout', mouseoutLevelBtn)


const rulesButton = document.querySelector('.rules-btn')
const rulesContainer = document.querySelector('.rules-container')

rulesButton.addEventListener('click', () => {
  rulesContainer.classList.remove('non-active')
})

rulesContainer.addEventListener('click', () => {
  rulesContainer.classList.add('non-active')
})