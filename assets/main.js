/* Share buttuns*/


/* Links 
    https://api.whatsapp.com/send?text=[post-title] [post-url]
    https://www.facebook.com/sharer.php?u=[post-url]
    https://twitter.com/share?url=[post-url]&text=[post-title]

*/

const facebookButton = document.querySelector('.face-btn')
const twiBtn = document.querySelector(".twi-btn")
const pinterestButton = document.querySelector(".pin-btn")
const wppBtn = document.querySelector(".wpp-btn")





const postUrl = encodeURI(document.location.href)
const postTitle = encodeURI('Oi, da só uma olhada nisso: ')
const postDesc = encodeURI('Dá uma olhada nisso')



function init(){

    pinterestButton.setAttribute('href', `https://www.tumblr.com/share/link?url=${postUrl}&name=${postTitle}&description=${postDesc}`)
    twiBtn.setAttribute('href', `https://twitter.com/share?url=${postUrl}&text=${postTitle}`);
    wppBtn.setAttribute('href', `https://api.whatsapp.com/send?text=${postTitle} ${postUrl}`);
}

init()

facebookButton.addEventListener('click', () => {
    facebookButton.setAttribute('href', `https://www.facebook.com/sharer.php?u=${postUrl}`)
})










