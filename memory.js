// var cards = document.querySelectorAll(".card")
var cards = $(".card").toArray()

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
  card2: "",
  lives: 10,
  matched: []
}
$(".lives").html(state.lives)
//var flipped = 2
$("#memory").on("click", ".card", function(e) {
  var value = $(this).data("value")
  $(this).addClass("flipped")

  if (state.card1 === "") {
    state.card1 = value
  } else if (state.card1 !== "") {
    state.card2 = value
    console.log(state.card1, state.card2)
  }

  setTimeout(() => {
    if (
      state.card1 === state.card2 &&
      state.card1 !== "" &&
      state.card2 !== ""
    ) {
      $(this)
        .removeClass("flipped")
        .addClass("match")
      $(this)
        .siblings()
        .find("+ .flipped")
        .removeClass("flipped")
        .addClass("match")
      state.matched.push(this)
      state.card1 = ""
      state.card2 = ""
    } else if (
      state.card1 !== state.card2 &&
      state.card1 !== "" &&
      state.card2 !== ""
    ) {
      $(".match").off(".flip")
      setTimeout(() => {
        $(".flipped").flip(false)
      }, 500)
      setTimeout(() => {
        $(this).removeClass("flipped")
        $(this)
          .siblings()
          .removeClass("flipped")
      }, 600)
      state.card1 = ""
      state.card2 = ""
      state.lives--
      $(".lives").html(state.lives)
      console.log(state.lives)
    }
    console.log(state.matched, state.lives)
    if (state.matched.length == 9 && state.lives >= 0) {
      window.location.href = "Winner.html"
    } else if (state.matched.length < 9 && state.lives == 0) {
      window.location.href = "loser.html"
    }
  }, 100)
})
