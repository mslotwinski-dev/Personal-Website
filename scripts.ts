let age:string | number
age = Math.floor((Date.now() - +(new Date("2004-04-11")))/31557600000);
document.querySelector('#age').innerHTML = age as any




while (document.querySelector(".skillRateFunction")) {
    var element: HTMLElement = document.querySelector(".skillRateFunction");
    element.style.width = element.textContent + "0%"
    element.classList.remove("skillRateFunction");
}

const link = (adress:string) => {
    window.location.href = adress;
}