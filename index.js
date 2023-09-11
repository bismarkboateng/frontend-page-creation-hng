const date = new Date()

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const currDay = days[date.getDay()]

const currDayHtmlNode = document.querySelector(".card-day")
const time = document.querySelector(".card-time")


setInterval(() => {
    let currentTimeMillis = Date.now();
    // console.log()
    time.innerHTML = currentTimeMillis  + " milli seconds"
}, 2000)



currDayHtmlNode.innerHTML = currDay