let tbody = document.querySelector('tbody')

fetch('version.json')
    .then(res => res.json())
    .then(json => {
        json.forEach(el => {
            let tr = document.createElement('tr')
            let tdVersion = document.createElement('td')
            let tdVersionA = document.createElement('a')
            let tdDate = document.createElement('td')
            let tdChange = document.createElement('td')

            tdVersionA.textContent = el.version
            tdVersionA.href = `${el.version}.html`

            tdDate.textContent = el.date

            tdChange.textContent = el.change

            tbody.appendChild(tr)
            tr.appendChild(tdVersion)
            tr.appendChild(tdDate)
            tr.appendChild(tdChange)
            tdVersion.appendChild(tdVersionA)
        });
    })