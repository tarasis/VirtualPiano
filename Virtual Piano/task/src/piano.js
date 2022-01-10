let keys = document.querySelectorAll("kbd")

for (const key of keys) {
    key.addEventListener('click', mouseClickEventHandler);
}

function mouseClickEventHandler(event) {
    playAudioFor(event.target.textContent)
}

/*
Could have done case "KeyA", "KeyS", "KeyD" .... and so on rather than above.

Also could have had an array of "correct" keys and checked if the pressed key was included

for instance:
["a", "s", "d", "f", "g", "h", "j"].includes(e.key.toLowerCase())
["KeyA", ....].includes(event.code)
 */
document.addEventListener('keydown', keyPressedEventHandler);

function keyPressedEventHandler(event) {
    // could add defensive coding check here to see that key is only
    // one of the allowed keys
    const keyPressed = event.key.toUpperCase();
    if (["A", "S", "D", "F", "G", "H", "J", "W", "E", "T", "Y", "U"].includes(keyPressed)) {
        playAudioFor(keyPressed)
    }
}

function playAudioFor(theKey) {
    console.log(`The '${theKey}' key is pressed.`)
    const audio = new Audio(`./${theKey}.mp3`)
    audio.play();
}


