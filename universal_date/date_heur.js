const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function test() {
    while (true) {
        let today = new Date(Date.now())
        let test = today.getDay() + " " + monthNames[today.getMonth()] + " " + (today.getYear() + 1900) + " | heure : " + today.getHours() + " h " + today.getMinutes() + " m " + today.getSeconds() + " s";
        let usa = new Date(new Date().toLocaleString("en-US", { timeZone: 'America/Los_Angeles' }));
        let jap = new Date(new Date().toLocaleString("en-US", { timeZone: 'Asia/Tokyo' }));
        let testusa = usa.getDay() + " " + monthNames[usa.getMonth()] + " " + (usa.getYear() + 1900) + " | heure : " + usa.getHours() + " h " + usa.getMinutes() + " m " + today.getSeconds() + " s";
        let testjap = jap.getDay() + " " + monthNames[jap.getMonth()] + " " + (jap.getYear() + 1900) + " | heure : " + jap.getHours() + " h " + jap.getMinutes() + " m " + today.getSeconds() + " s";
        document.getElementById("date_FR").innerHTML = test
        document.getElementById("date_USA").innerHTML = testusa
        document.getElementById("date_JAP").innerHTML = testjap
        await sleep(100)
    }
}

window.onload = async function start() {
    await test()
}



