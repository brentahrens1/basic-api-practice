let request = new XMLHttpRequest()

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function() {
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status< 400) {
        data.forEach(movie => {
            const card =  document.createElement("div")
            card.setAttribute("class", "card")

            const h1 = document.createElement("h1")
            const p = document.createElement("p")
            const container = document.querySelector(".container")
            h1.textContent = movie.title
            p.textContent = movie.description

            container.appendChild(card)
            card.appendChild(h1)
            card.appendChild(p)
        })
    } else {
        console.log(error)
    }
}

request.send()
