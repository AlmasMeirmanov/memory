// $("#card1").flip()
// $("#card2").flip()
// $("#card3").flip()
// $("#card4").flip()
// $("#card5").flip()
// $("#card6").flip()
// $("#card7").flip()
// $("#card8").flip()
// $("#card9").flip()
// $("#card10").flip()
// $("#card11").flip()
// $("#card12").flip()
// $("#card13").flip()
// $("#card14").flip()
// $("#card15").flip()
// $("#card16").flip()
// $("#card17").flip()
// $("#card18").flip()
// var cards = document.querySelectorAll(".card")
var cards = $(".card").toArray()
//console.log(cards)
// var cards = [
//   "#card1",
//   "#card2",
//   "#card3",
//   "#card4",
//   "#card5",
//   "#card6",
//   "#card7",
//   "#card8",
//   "#card9",
//   "#card10",
//   "#card11",
//   "#card12",
//   "#card13",
//   "#card14",
//   "#card15",
//   "#card16",
//   "#card17",
//   "#card18"
// ]

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

shuffle(cards)

//console.log(cards)

$("#memory").html(cards)

$("#memory")
  .find(".card")
  .flip()
const state = {
  card1: "",
  card2: ""
}

$("#memory").on("click", ".card", function(e) {
  var value = $(this).data("value")
  console.log(value)

  if (state.card1 === "") {
    state.card1 = $(this).data("value")
  } else if (state.card1 != "") {
    state.card2 = $(this).data("value")
    console.log(state.card1, state.card2)
  } else
    state.card1 != state.card2,
      setTimeout(() => {
        state.card1.flip(false)
        state.card2.flip(false)
      }, 1000)
  if (state.card1 === state.card2) {
    alert("match")
  }

  // }
  //console.log()
  // else state.card1 === state.card2
  // console.log()
  //this.disabled = true
  //console.log("goodjob")

  //console.log()

  //this.disabled = true
  //var value = $(this).attr("class")
  //if (value === "") {
  //  state.card1 += value
  //} else if (state.card1 != "") {
  //  state.card2 += value
  //}
  //if (state.card1 === state.card2) {
  //this.disabled = true
  //} else if (state.card1 != state.card2) {
  //  setTimeout(() => {
  //   state.card1.flip(false)
  // state.card2.flip(false)
  //  }, 1000)
  // console.log()
  //}

  //if (card1.find(".back1").html() === card2.find("#card2").html())
  //this.matched = true
  //console.log()
})
