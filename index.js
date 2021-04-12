/* Using the innerText (Links to an external site.) property to modify DOM element content will not work for this lab. Use textContent (Links to an external site.) or innerHTML (Links to an external site.) instead. */ 
document.addEventListener(`DOMContentLoaded`, function() {
    const p = document.getElementById(`text`)
    p.innerText = `This is really cool!`
})