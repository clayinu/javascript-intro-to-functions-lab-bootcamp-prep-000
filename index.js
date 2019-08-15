function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    string = "I can't hear you!"  
    return string
  }
  else if (string.toUpperCase() === string ) {
    string = "YES INDEED!"
    return string
  }
  else {
    string === "I love you, Grandma."  
    string = "I love you, too."
  }
}
