


const skillRate = () => {
    while (document.querySelector(".skillRateFunction")) {
    var element = document.querySelector(".skillRateFunction");
    element.style.width = element.textContent + "0%"
    element.classList.remove("skillRateFunction");}
}

skillRate ();

// const link = (adress) => {
//     window.location.href = adress;
// }

export default {
    
}