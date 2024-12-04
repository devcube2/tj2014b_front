function getDayOfWeek(year, month, day) {
    const dayOfWeek = new Date(year, month - 1, day);
    //0:일, 1:월, 2:화, 3:수, 4:목, 5:금, 6:토
    return dayOfWeek.getDay();
}

function printCalenderDays(date, newYear, newMonth) {
    let html = ''
    let week = Math.ceil(date.getDate() / 7)
    const days = date.getDate()

    console.log(`week: ${week}`)

    let day = 1
    for (let i = 0; i < week; i++) {
        html += "<tr>"
        for (let j = 0; j < 7; j++) {
            if (i == 0 && j < getDayOfWeek(newYear, newMonth, 1)) {
                html += `<td class="empty"></td>`
            }
            else {
                html += `<td>${day++}</td>`
            }

            if (day > days) {
                break
            }
        }
        html += "</tr>"
        if (day > days) {
            break
        }
    }

    const tbody = document.querySelector('#calBottom > table > tbody')
    tbody.innerHTML = html
}

function monthChange(changeValue) {
    const yearDomObj = document.getElementById('year')
    const monthDomObj = document.getElementById('month')
    const currYear = Number(yearDomObj.innerHTML)
    const currMonth = Number(monthDomObj.innerHTML)

    let newYear = currYear
    let newMonth = currMonth + changeValue
    if (newMonth == 0) {
        newYear--
        newMonth = 12
    }
    else if (newMonth > 12) {
        newYear++
        newMonth = 1
    }

    const date = new Date(newYear, newMonth, 0)

    // console.log(getDayOfWeek(newYear, newMonth, 1))

    yearDomObj.innerHTML = newYear
    monthDomObj.innerHTML = newMonth

    printCalenderDays(date, newYear, newMonth)
}