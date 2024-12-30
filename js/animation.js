const boxImage = document.querySelector('#box_animation_img') 

const tl = document.querySelector('#grid_tl') 
const tr = document.querySelector('#grid_tr')
// const bl = document.querySelector('#grid_bl')
// const br = document.querySelector('#grid_br')

const tlBtn = document.querySelector('#grid_tl_btn')
const trBtn = document.querySelector('#grid_tr_btn')
// const blBtn = document.querySelector('#grid_bl_btn')
// const brBtn = document.querySelector('#grid_br_btn')

const tlContent = document.querySelector('#grid_tl_content')
const trContent = document.querySelector('#grid_tr_content')
// const blContent = document.querySelector('#grid_bl_content')
// const brContent = document.querySelector('#grid_br_content')

const projectOne = document.querySelector('.p-1')
const projectTwo = document.querySelector('.p-2')
const projectThree = document.querySelector('.p-3')

const bgColor = "var(--bg)"
const bgColorAlt = "var(--bg-alt)"
const textColor = "var(--text)"
const textColorAlt = "var(--text-alt)"

let tlActive = "translateX(5vw) translateY(0)"
let tlHidden = "translateX(-100vw) translateY(-100vh)"

let trActive = "translateX(-5vw) translateY(0)"
let trHidden = "translateX(100vw) translateY(-100vh)"

// let blActive = "translateX(10vw) translateY(7vh)"
// let blHidden = "translateX(-100vw) translateY(100vh)"

// let brActive = "translateX(-5vw) translateY(0)"
// let brHidden = "translateX(100vw) translateY(100vh)"


let activeCorner = "" ;

window.addEventListener('resize', handleWindowResize) ;
function handleWindowResize() {
    switch (activeCorner) {
        case "top-left" :
            if(window.innerWidth <= 1100) {
                tlActive = "translateX(0) translateY(0)" ;
                tlContent.style.transform = "translateX(0vw) translateY(0)" ;
                tlContent.style.height = "100vh" ;
                tlContent.style.width = "100vw" ;
                tlContent.style.top = "0" ;
                tlContent.style.display = "flex" ;
                tlContent.style.alignItems = "center" ;
                tlContent.style.background = "var(--bg-transparent)" ;
                tlContent.style.zIndex = "200" ;
                tlBtn.style.zIndex = "300" ;
                trBtn.style.zIndex = "100" ;
                // blBtn.style.zIndex = "100" ;
                // brBtn.style.zIndex = "100" ;
            } else{
                tlActive = "translateX(5vw) translateY(0)" ;
                tlContent.style.transform = "translateX(5vw) translateY(0)" ;
                tlContent.style.height = "0" ;
                tlContent.style.width = "30vw" ;
                tlContent.style.top = "10vh" ;
                tlContent.style.display = "block" ;
            }
            break ;
        case "top-right" :
            if(window.innerWidth <= 1100) {
                trActive = "translateX(0) translateY(0)" ;
                trContent.style.transform = "translateX(0vw) translateY(0)" ;
                trContent.style.height = "100vh" ;
                trContent.style.width = "100vw" ;
                trContent.style.top = "0" ;
                trContent.style.display = "flex" ;
                trContent.style.alignItems = "center" ;
                let val = document.getElementsByClassName('experience') ;
                for(let i=0; i<val.length; i++)  {
                    val[i].style.margin = "0.5rem"
                }
                trContent.style.background = "var(--bg-transparent)" ;
                trContent.style.zIndex = "200" ;
                trBtn.style.zIndex = "300" ;
                tlBtn.style.zIndex = "100" ;
                // blBtn.style.zIndex = "100" ;
                // brBtn.style.zIndex = "100" ;
            } else{
                trActive = "translateX(-5vw) translateY(0)" ;
                trContent.style.transform = "translateX(-5vw) translateY(0)" ;
                trContent.style.height = "0" ;
                trContent.style.width = "30vw" ;
                trContent.style.top = "10vh" ;
                trContent.style.display = "block" ;
            }
            break ;
        case "bottom-left" :
            break ;
        case "bottom-right" :
            break ;
        default :
    }
}

let lastReverseAnimation = "" ;

function playAnimation(animation, reverseAnimation) {
    boxImage.className = "" ;
    if(lastReverseAnimation !== "") {
        boxImage.classList.add(lastReverseAnimation) ;
        setTimeout(function() {
            boxImage.classList.remove(lastReverseAnimation) ;
            boxImage.classList.add(animation) ;
            lastReverseAnimation = reverseAnimation ;
        }, 200)
    } else {
        boxImage.classList.add(animation) ;
        lastReverseAnimation = reverseAnimation ;
    }
}

function playClosingAnimation(reverseAnimation) {
    tlBtn.innerHTML = "About" ;
    trBtn.innerHTML = "Experience"
    // blBtn.innerHTML = "Contact"
    // brBtn.innerHTML = "Projects"

    switch (activeCorner) {
        case "top-left" :
            tlBtn.style.background = bgColor ;
            tlBtn.style.color = textColor ;
            tlContent.style.transform = tlHidden ;
            break ;
        case "top-right" :
            trBtn.style.background = bgColor ;
            trBtn.style.color = textColor ;
            trContent.style.transform = trHidden ;
            break ;
        case "bottom-left" :
            break ;
        case "bottom-right" :
            break ;
        default :
    }

    boxImage.className = "" ;
    lastReverseAnimation = "" ;
    activeCorner = "" ;
    boxImage.classList.add(reverseAnimation) ;
    setTimeout(function(){
        boxImage.classList.remove(reverseAnimation) ;
    }, 200)
}

tlBtn.onclick = function() {
    if(activeCorner === "top-left") {
        playClosingAnimation("reverse-animate-top-left") 
    } else {
        trBtn.innerHTML = "Experience"
        // blBtn.innerHTML = "Contact"
        // brBtn.innerHTML = "Projects"

        activeCorner = "top-left" ;
        tlBtn.innerHTML = "&uarr;<br/>About" ;

        handleWindowResize() ;
        playAnimation("animate-top-left", "reverse-animate-top-left") ;

        tlBtn.style.background = bgColorAlt ;
        trBtn.style.background = bgColor ;
        // blBtn.style.background = bgColor ;
        // brBtn.style.background = bgColor ;

        tlBtn.style.color = textColorAlt ;
        trBtn.style.color = textColor ;
        // blBtn.style.color = textColor ;
        // brBtn.style.color = textColor ;

        tlContent.style.transform = tlActive ;
        trContent.style.transform = trHidden ;
        // blContent.style.transform = blHidden ;
        // brContent.style.transform = brHidden ;
    }
}


trBtn.onclick = function() {
    if(activeCorner === "top-right") {
        playClosingAnimation("reverse-animate-top-right")
    } else {
        tlBtn.innerHTML = "About"
        // blBtn.innerHTML = "Contact"
        // brBtn.innerHTML = "Projects"

        activeCorner = "top-right" ;
        trBtn.innerHTML = "&uarr;<br/>Experience" ;

        handleWindowResize() ;
        playAnimation("animate-top-right", "reverse-animate-top-right") ;

        tlBtn.style.background = bgColor ;
        trBtn.style.background = bgColorAlt ;
        // blBtn.style.background = bgColor ;
        // brBtn.style.background = bgColor ;

        tlBtn.style.color = textColor ;
        trBtn.style.color = textColorAlt ;
        // blBtn.style.color = textColor ;
        // brBtn.style.color = textColor ;

        tlContent.style.transform = tlHidden ;
        trContent.style.transform = trActive ;
        // blContent.style.transform = blHidden ;
        // brContent.style.transform = brHidden ;
    }
}


// blBtn.onclick = function() {
//     if(activeCorner === "bottom-left") {
//         playClosingAnimation("reverse-animate-bottom-left")
//     } else {
//         trBtn.innerHTML = "Experience"
//         tlBtn.innerHTML = "About"
//         brBtn.innerHTML = "Contact"

//         activeCorner = "bottom-left" ;
//         blBtn.innerHTML = "&uarr;<br/>Projects" ;

//         handleWindowResize() ;
//         playAnimation("animate-bottom-left", "reverse-animate-bottom-left") ;

//         tlBtn.style.background = bgColor ;
//         trBtn.style.background = bgColor ;
//         blBtn.style.background = bgColorAlt ;
//         brBtn.style.background = bgColor ;

//         tlBtn.style.color = textColor ;
//         trBtn.style.color = textColor ;
//         blBtn.style.color = textColorAlt ;
//         brBtn.style.color = textColor ;

//         tlContent.style.transform = tlHidden ;
//         trContent.style.transform = trHidden ;
//         blContent.style.transform = blActive ;
//         brContent.style.transform = brHidden ;
//     }
// }


// brBtn.onclick = function() {
//     if(activeCorner === "bottom-right") {
//         playClosingAnimation("reverse-animate-bottom-right")
//     } else {
//         trBtn.innerHTML = "Experience"
//         tlBtn.innerHTML = "About"
//         blBtn.innerHTML = "Projects"

//         activeCorner = "bottom-right" ;
//         brBtn.innerHTML = "&uarr;<br/>Contact" ;

//         handleWindowResize() ;
//         playAnimation("animate-bottom-right", "reverse-animate-bottom-right") ;

//         tlBtn.style.background = bgColor ;
//         trBtn.style.background = bgColor ;
//         blBtn.style.background = bgColor ;
//         brBtn.style.background = bgColorAlt ;

//         tlBtn.style.color = textColor ;
//         trBtn.style.color = textColor ;
//         blBtn.style.color = textColor ;
//         brBtn.style.color = textColorAlt ;

//         tlContent.style.transform = tlHidden ;
//         trContent.style.transform = trHidden ;
//         blContent.style.transform = blHidden ;
//         brContent.style.transform = brActive ;
//     }
// }