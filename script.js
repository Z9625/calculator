let calSkLeft = document.querySelector('.calSkLeft')
let calSkRight = document.querySelector('.calSkRight')
let calPrsent = document.querySelector('.calPrsent')
let calRemove = document.querySelector('.calRemove')
let calDevide = document.querySelector('.calDevide')
let calMultiply = document.querySelector('.calMultiply')
let calMinus = document.querySelector('.calMinus')
let calPlus = document.querySelector('.calPlus')
let calFloor = document.querySelector('.calFloor')
let calEquals = document.querySelector('.calEquals')
let cal0 = document.querySelector('.cal0')
let cal1 = document.querySelector('.cal1')
let cal2 = document.querySelector('.cal2')
let cal3 = document.querySelector('.cal3')
let cal4 = document.querySelector('.cal4')
let cal5 = document.querySelector('.cal5')
let cal6 = document.querySelector('.cal6')
let cal7 = document.querySelector('.cal7')
let cal8 = document.querySelector('.cal8')
let cal9 = document.querySelector('.cal9')
let input = document.querySelector('#input')

let calBg = document.querySelector('#cal-bg')
let cal = document.querySelector('.cal')
calBg.addEventListener('input', () => {
    cal.style.background = calBg.value
})

let inpBg = document.querySelector('#inp-bg')
inpBg.addEventListener('input', () => {
    input.style.background = inpBg.value
})

let inpColor = document.querySelector('#inp-color')
inpColor.addEventListener('input', () => {
    input.style.color = inpColor.value
})

let calBtn = document.querySelector('#cal-btn')
calBtn.addEventListener('input', () => {
    cal0.style.background = calBtn.value
    cal1.style.background = calBtn.value
    cal2.style.background = calBtn.value
    cal3.style.background = calBtn.value
    cal4.style.background = calBtn.value
    cal5.style.background = calBtn.value
    cal6.style.background = calBtn.value
    cal7.style.background = calBtn.value
    cal8.style.background = calBtn.value
    cal9.style.background = calBtn.value
    calSkLeft.style.background = calBtn.value
    calSkRight.style.background = calBtn.value
    calRemove.style.background = calBtn.value
    calDevide.style.background = calBtn.value
    calMultiply.style.background = calBtn.value
    calMinus.style.background = calBtn.value
    calPlus.style.background = calBtn.value
    calFloor.style.background = calBtn.value
    calEquals.style.background = calBtn.value
    calPrsent.style.background = calBtn.value
})

let calBtnColor = document.querySelector('#cal-btn-color')
calBtnColor.addEventListener('input', () => {
    cal0.style.color = calBtnColor.value
    cal1.style.color = calBtnColor.value
    cal2.style.color = calBtnColor.value
    cal3.style.color = calBtnColor.value
    cal4.style.color = calBtnColor.value
    cal5.style.color = calBtnColor.value
    cal6.style.color = calBtnColor.value
    cal7.style.color = calBtnColor.value
    cal8.style.color = calBtnColor.value
    cal9.style.color = calBtnColor.value
    calSkLeft.style.color = calBtnColor.value
    calSkRight.style.color = calBtnColor.value
    calRemove.style.color = calBtnColor.value
    calDevide.style.color = calBtnColor.value
    calMultiply.style.color = calBtnColor.value
    calMinus.style.color = calBtnColor.value
    calPlus.style.color = calBtnColor.value
    calFloor.style.color = calBtnColor.value
    calEquals.style.color = calBtnColor.value
    calPrsent.style.color = calBtnColor.value
})


cal0.addEventListener('click', () => {
    input.value += 0
})
cal1.addEventListener('click', () => {
    input.value += 1;
})
cal2.addEventListener('click', () => {
    input.value += 2;
})
cal3.addEventListener('click', () => {
    input.value += 3;
})
cal4.addEventListener('click', () => {
    input.value += 4;
})
cal5.addEventListener('click', () => {
    input.value += 5;
})
cal6.addEventListener('click', () => {
    input.value += 6;
})
cal7.addEventListener('click', () => {
    input.value += 7;
})
cal8.addEventListener('click', () => {
    input.value += 8;
})
cal9.addEventListener('click', () => {
    input.value += 9
})
calSkLeft.addEventListener('click', () => {
    input.value += '('
})
calSkRight.addEventListener('click', () => {
    input.value += ')'
})
calPrsent.addEventListener('click', () => {
    input.value = ''
})
calRemove.addEventListener('click', () => {
    input.value = input.value.slice(0, -1)
})
calDevide.addEventListener('click', () => {
    input.value += '/'
})
calMultiply.addEventListener('click', () => {
    input.value += '*'
})
calPlus.addEventListener('click', () => {
    input.value += '+'
})
calMinus.addEventListener('click', () => {
    input.value += '-'
})
calFloor.addEventListener('click', () => {
    input.value += '.'
})
calEquals.addEventListener('click', () => {
    try {
        input.value = eval(input.value);
        saveToHistory(input.value); // <-- Bu yerga qo‘shiladi
    } catch {
        input.value = "Xatolik";
    }
})

function saveToHistory(value) {
    let historyArray = JSON.parse(localStorage.getItem("calc-history")) || [];
    historyArray.push(value);
    localStorage.setItem("calc-history", JSON.stringify(historyArray));
}
window.addEventListener('DOMContentLoaded', () => {
    let historyArray = JSON.parse(localStorage.getItem("calc-history")) || [];
    historyArray.forEach(item => {
        let h2 = document.createElement('h2');
        h2.textContent = item;
        h2.className = 'h2HH';
        history.appendChild(h2);
    });
});



document.addEventListener('keydown', (e) => {
    if (e.key === '0') {
        input.value += 0
        cal0.classList.add('active')
    }
})
document.addEventListener('keyup', () => {
    cal0.classList.remove('active')
})
document.addEventListener('keydown', (e) => {
    if (e.key === '1') {
        input.value += 1
        cal1.classList.add('active')
    }
})
document.addEventListener('keyup', () => {
    cal1.classList.remove('active')
})
document.addEventListener('keydown', (e) => {
    if (e.key === '2') {
        input.value += 2
        cal2.classList.add('active')
    }
})
document.addEventListener('keyup', () => {
    cal2.classList.remove('active')
})
document.addEventListener('keydown', (e) => {
    if (e.key === '3') {
        input.value += 3
        cal3.classList.add('active')
    }
})
document.addEventListener('keyup', () => {
    cal3.classList.remove('active')
})
document.addEventListener('keydown', (e) => {
    if (e.key === '4') {
        input.value += 4
        cal4.classList.add('active')
    }
})
document.addEventListener('keyup', () => {
    cal4.classList.remove('active')
})
document.addEventListener('keydown', (e) => {
    if (e.key === '5') {
        input.value += 5
        cal5.classList.add('active')
    }
})
document.addEventListener('keyup', () => {
    cal5.classList.remove('active')
})
document.addEventListener('keydown', (e) => {
    if (e.key === '6') {
        input.value += 6
        cal6.classList.add('active')
    }
})
document.addEventListener('keyup', () => {
    cal6.classList.remove('active')
})
document.addEventListener('keydown', (e) => {
    if (e.key === '7') {
        input.value += 7
        cal7.classList.add('active')
    }
})
document.addEventListener('keyup', () => {
    cal7.classList.remove('active')
})
document.addEventListener('keydown', (e) => {
    if (e.key === '8') {
        input.value += 8
        cal8.classList.add('active')
    }
})
document.addEventListener('keyup', () => {
    cal8.classList.remove('active')
})
document.addEventListener('keydown', (e) => {
    if (e.key === '9') {
        input.value += 9
        cal9.classList.add('active')
    }
})
document.addEventListener('keyup', () => {
    cal9.classList.remove('active')
})
document.addEventListener('keydown', (e) => {
    if (e.key === '*') {
        input.value += '*'
        calMultiply.classList.add('active')
    }
})
document.addEventListener('keyup', () => {
    calMultiply.classList.remove('active')
})
document.addEventListener('keydown', (e) => {
    if (e.key === '/') {
        input.value += '/'
        calDevide.classList.add('active')
    }
})
document.addEventListener('keyup', () => {
    calDevide.classList.remove('active')
})
document.addEventListener('keydown', (e) => {
    if (e.key === '+') {
        input.value += '+'
        calPlus.classList.add('active')
    }
})
document.addEventListener('keyup', () => {
    calPlus.classList.remove('active')
})
document.addEventListener('keydown', (e) => {
    if (e.key === '-') {
        input.value += '-'
        calMinus.classList.add('active')
    }
})
document.addEventListener('keyup', () => {
    calMinus.classList.remove('active')
})
document.addEventListener('keydown', (e) => {
    if (e.key === '.') {
        input.value += '.'
        calFloor.classList.add('active')
    }
})
document.addEventListener('keyup', () => {
    calFloor.classList.remove('active')
})
document.addEventListener('keydown', (e) => {
    if (e.key === '(') {
        input.value += '('
        calSkLeft.classList.add('active')
    }
})
document.addEventListener('keyup', () => {
    calSkLeft.classList.remove('active')
})
document.addEventListener('keydown', (e) => {
    if (e.key === ')') {
        input.value += ')'
        calSkRight.classList.add('active')
    }
})
document.addEventListener('keyup', () => {
    calSkRight.classList.remove('active')
})
document.addEventListener('keydown', (e) => {
    if (e.key === '=') {
        try {
            input.value = eval(input.value);
        } catch {
            input.value = "Xatolik";
        }
        calEquals.classList.add('active')
    }
})
document.addEventListener('keyup', () => {
    calEquals.classList.remove('active')
})
document.addEventListener('keydown', (e) => {
    if (e.key === 'enter' || e.key === 'Enter') {
        try {
            input.value = eval(input.value);
        } catch {
            input.value = "Xatolik";
        }
        calEquals.classList.add('active')
    }
})
document.addEventListener('keyup', () => {
    calEquals.classList.remove('active')
})
document.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
        calRemove.classList.add('active')
    }
})
document.addEventListener('keyup', () => {
    calRemove.classList.remove('active')
})
document.addEventListener('keydown', (e) => {
    if (e.key === 'delete' || e.key === 'Delete') {
        input.value = ''
        calPrsent.classList.add('active')
    }
})
document.addEventListener('keyup', () => {
    calPrsent.classList.remove('active')
})
let config = document.querySelector('.config')
let castomBtn = document.querySelector('.castom')
castomBtn.addEventListener('click', () => {
    config.classList.toggle('active')
    history.classList.remove('active')
})
document.addEventListener('keydown', (e) => {
    if (e.key === 'Insert') {
        castomBtn.classList.toggle('active')
        config.classList.toggle('active')
        history.classList.remove('active')
    }
})

config.addEventListener('click', () => {
    castomBtn.classList.add('active')
})



let darkMode = document.querySelector('#onOffSwitch')
darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
})

darkMode.addEventListener('click', () => {
    castomBtn.classList.toggle('dark-mode')
})

darkMode.addEventListener('click', () => {
    cal.classList.toggle('dark-mode')
})

darkMode.addEventListener('click', () => {
    input.classList.toggle('dark-mode')
})


let h1 = document.querySelector('.h1')

darkMode.addEventListener('click', () => {
    h1.classList.toggle('dark-mode')
})

document.addEventListener('click', () => {
    input.disabled = false
    if (input.value.startsWith(`Sorry, You cann't type here`)) {
        input.value = ''
    }
})

// input.addEventListener('mousedown', () => {
//     input.disabled = true
//     input.value = `ERROR: You can't type here`
// })
// input.addEventListener('select', () => {
//     document.addEventListener('keydown', (e) => {
//         if (e.key = 'Backspace') {
//             input.value = ''
//             input.disabled = false
//         }
//     })
// })



let copyBtn = document.querySelector(".copy-btn");
document.addEventListener("DOMContentLoaded", () => {
    let toastContainer = document.querySelector(".toast-container");

    copyBtn.addEventListener("click", () => {
        const text = input.value;

        navigator.clipboard.writeText(text)
            .then(() => {
                createToast("Copied", text);
            })
            .catch(err => alert("Xatolik: " + err));
    });

    function createToast(title, message) {
        const toast = document.createElement("div");
        toast.classList.add("toast");

        toast.innerHTML = `
        <span>✅</span>
        <div>
          <div class="toast-title">${title}</div>
          <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close">×</button>
        <div class="progress"></div>
      `;

        toastContainer.appendChild(toast);


        const closeBtn = toast.querySelector(".toast-close");
        closeBtn.addEventListener("click", () => {
            toast.remove();
        });


        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
});

darkMode.addEventListener('click', () => {
    copyBtn.classList.toggle('dark-mode')
})


let historyBtn = document.querySelector('.historic')
let history = document.querySelector('.history')
historyBtn.addEventListener('click', () => {
    history.classList.toggle('active')
    historyBtn.blur()
    config.classList.remove('active')
})

document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.altKey && (e.key === 'H' || e.key === 'h' || e.key === 'р' || e.key === 'Р')) {
        history.classList.toggle('active')
        config.classList.remove('active')
    }
})



let h2History;
let data = 0

document.addEventListener('keydown', (e) => {
    if (e.key === '=') {
        h2History = document.createElement('h2')
        history.appendChild(h2History)
        h2History.textContent = input.value
        h2History.className = 'h2HH'
    }

    console.log(input.value);
})

input.addEventListener('input', () => {
    data = input.value
    console.log(input.value);
} )

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        h2History = document.createElement('h2')
        history.appendChild(h2History)
        h2History.textContent = `${input.value}`
        h2History.className = 'h2HH'
        data = input.value
        console.log(input.value);
    }
})

darkMode.addEventListener('click', () => {
    historyBtn.classList.toggle('dark-mode')
})

calEquals.addEventListener('click', () => {
    h2History = document.createElement('h2')
    history.appendChild(h2History)
    h2History.textContent = input.value
    h2History.className = 'h2HH'
})



let p = null;

// input.addEventListener('input', (e) => {
//     if (!p) {
//         p = document.createElement('p');
//         history.appendChild(p);
//     }
//     p.textContent = e.target.value;
// });

// input.addEventListener('keydown', function (e) {
//     if (/^[a-zA-Z]$/.test(e.key)) {
//         e.preventDefault();
//     }
// });

// input.addEventListener('keydown', function (e) {
//     e.preventDefault();
// });




let deleteHistory = document.querySelector('.delete-btn-h')
let confirmToDelete = document.querySelector('.confirm-to-delete')
let deleteDarkMode = document.querySelector('.delete-dark-mode')

deleteHistory.addEventListener('click', () => {
    confirmToDelete.classList.add('active')
    deleteDarkMode.classList.add('active')
})

let No = document.querySelector('.no')
let Yes = document.querySelector('.yes')

No.addEventListener('click', () => {
    confirmToDelete.classList.remove('active')
    deleteDarkMode.classList.remove('active')
    history.classList.remove('active')
    alert(`History of answers did not delete`)
})


let h2HH = document.querySelector('.h2HH')

Yes.addEventListener('click', () => {
    confirmToDelete.classList.remove('active')
    deleteDarkMode.classList.remove('active')
    history.classList.remove('active')
    alert(`History of answers deleted`)
    localStorage.removeItem("calc-history"); // <-- bu qo‘shiladi
    let h2HHs = document.querySelectorAll('.h2HH');
    if (h2HHs.length > 0) {
        h2HHs.forEach(h2 => h2.remove());
        input.value = ''
    } else {
        alert("No elements found to delete.");
    }
})


let infoBtn = document.querySelector('.infoBtn')
let infoDarkMode = document.querySelector('.info-dark-mode')
let info = document.querySelector('.info')
let closeInfo = document.querySelector('.close')

infoBtn.addEventListener('click', () => {
    infoDarkMode.classList.add('active')
    info.classList.add('active')
})

closeInfo.addEventListener('click', () => {
    infoDarkMode.classList.remove('active')
    info.classList.remove('active')
})

document.addEventListener('keydown', (e) => {
    if ((e.key === 'i' || e.key === 'I' || e.key === 'Ш' || e.key === 'ш') && e.ctrlKey) {
        infoDarkMode.classList.add('active')
        info.classList.add('active')
    }
})


let tooltipCastom = document.querySelector('#tooltipCastom')

castomBtn.addEventListener('click', () => {
    tooltipCastom.style.display = 'none'
})
castomBtn.addEventListener('mouseleave', () => {
    tooltipCastom.style.display = 'block'
})


let tooltipHistory = document.querySelector('#tooltipHistory')

historyBtn.addEventListener('click', () => {
    tooltipHistory.style.display = 'none'
})

historyBtn.addEventListener('mouseleave', () => {
    tooltipHistory.style.display = 'block'
})

historyBtn.addEventListener('mouseover', () => {
    if (history.classList.contains('active')) {
        tooltipHistory.style.display = 'none'
    } else {
        tooltipHistory.style.display = 'block'
    }
})

castomBtn.addEventListener('mouseover', () => {
    if (config.classList.contains('active')) {
        tooltipCastom.style.display = 'none'
    } else {
        tooltipCastom.style.display = 'block'
    }
})


let forContact = document.querySelector('.for-contact')
let contact = document.querySelector('.contact')
darkMode.addEventListener('click', () => {
    contact.classList.toggle('dark-mode')
    forContact.classList.toggle('dark-mode')
    infoBtn.classList.toggle('dark-mode')
})


window.addEventListener("load", () => {
    let loader = document.querySelector(".loader");
    let mainSection = document.querySelector(".main-section");


    setTimeout(() => {
        loader.style.display = "none";
        mainSection.style.display = "block";
    }, 2500);
});