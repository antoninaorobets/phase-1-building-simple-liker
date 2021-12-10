// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hearts = document.querySelectorAll("span.like-glyph")

hearts.forEach(element => {
  element.addEventListener('click', handleListener)
});

function handleListener(listenerEvent) {
  mimicServerCall()
    .then(() => {
      console.log("succssess from server");
      handleSuccess(listenerEvent);
    })
    .catch((error) => {
      showError(error)
    });
}

function handleSuccess(listenerEvent) {
  let heartState = listenerEvent.target
  switch (heartState.className) {
    case "activated-heart":
      heartState.className = "like-glyph";
      break;
    case "like-glyph":
      heartState.className = "activated-heart";
      break;
  }
}


function showError(er) {
  const error = document.querySelector("div.hidden")
  error.className = ""
  error.querySelector("p").textContent = er;
  setTimeout(() => { error.className = "hidden" }, 3000);
}








//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
