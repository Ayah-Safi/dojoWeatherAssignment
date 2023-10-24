var cookies = document.querySelector("#cookiesbox");
var dayTemp = Array.from(document.querySelectorAll(".day-temp"));
var nightTemp = Array.from(document.querySelectorAll(".night-temp"));



function displayAlert(element) {
    alert("Loading weather report...");
}

function hideCookiesBox() {
    cookies.remove();
}

function convrtFtoC(element) {
    var tempValue = element.innerText;
    var tempValueReplaced = tempValue.replace("°", "");
    var tempToNumber = Number(tempValueReplaced);
    var FTemp = Math.round((tempToNumber - 32) * (5 / 9));
    element.innerHTML = `${FTemp}°`;
}

function convrtCtoF(element) {
    var tempValue = element.innerText;
    var tempValueReplaced = tempValue.replace("°", "");
    var tempToNumber = Number(tempValueReplaced);
    var FTemp = Math.round(tempToNumber * (9 / 5) + 32);
    element.innerHTML = `${FTemp}°`;
}


function convertTemp(e) {
    if (e.value === 'C') {
        for (i = 0; i <= dayTemp.length - 1; i++) {
            convrtFtoC(dayTemp[i]);
        }
        for (i = 0; i <= nightTemp.length - 1; i++) {
            convrtFtoC(nightTemp[i]);
        }
    } else {
        for (i = 0; i <= dayTemp.length - 1; i++) {
            convrtCtoF(dayTemp[i]);
        }
        for (i = 0; i <= nightTemp.length - 1; i++) {
            convrtCtoF(nightTemp[i]);
        }

    }
}