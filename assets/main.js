/* Share buttuns*/


/* Links 
    https://api.whatsapp.com/send?text=[post-title] [post-url]
    https://www.facebook.com/sharer.php?u=[post-url]
    https://twitter.com/share?url=[post-url]&text=[post-title]

*/

const faceBtn = document.querySelector(".face-btn")
const twiBtn = document.querySelector(".twi-btn")
const insBtn = document.querySelector(".ins-btn")
const wppBtn = document.querySelector(".wpp-btn")

function init(){
    let postUrl = encodeURI(document.location.href)
    let postTitle = encodeURI('Oi, da só uma olhada nisso: ')

    faceBtn.setAttribute('href', `https://www.facebook.com/sharer.php?u=${postUrl}`)
    twiBtn.setAttribute('href', `https://twitter.com/share?url=${postUrl}&text=${postTitle}`)
    wppBtn.setAttribute('href', `https://api.whatsapp.com/send?text=${postTitle} ${postUrl}`)
}

init()

/* */