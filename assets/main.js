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


// Emails

const limparInputs = () => {
    
    alert('dados salvos')
    document.querySelector('input[name=name]').value = '';
    document.querySelector('input[name=email]').value = '';

}

const handleSubmit = (e) => {
    
    let nomeInput = document.querySelector('input[name=name]').value;
    let emailInput = document.querySelector('input[name=email]').value;
    e.preventDefault();

    fetch('https://api.sheetmonkey.io/form/oowgvgZCi5Tz9mxXjsELqN', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( {name: nomeInput, email: emailInput} )
    }).then( () => limparInputs())


}

document.querySelector('form').addEventListener('submit', handleSubmit);


function init(){

    pinterestButton.setAttribute('href', `https://www.tumblr.com/share/link?url=${postUrl}&name=${postTitle}&description=${postDesc}`)
    twiBtn.setAttribute('href', `https://twitter.com/share?url=${postUrl}&text=${postTitle}`);
    wppBtn.setAttribute('href', `https://api.whatsapp.com/send?text=${postTitle} ${postUrl}`);
}

init()

facebookButton.addEventListener('click', () => {
    facebookButton.setAttribute('href', `https://www.facebook.com/sharer.php?u=${postUrl}`)
})










