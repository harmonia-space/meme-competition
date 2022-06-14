function submitted() {
    document.getElementById("part2").style.display = "inline";
    document.getElementById("part1").style.display = "none";
}

function tryAgain() {
    document.getElementById("part2").style.display = "inline";
    document.getElementById("error").style.display = "none";
}

function go_back() {
    document.getElementById("part2").style.display = "none";
    document.getElementById("part1").style.display = "inline";
}

function checkbox_changed() {
    var quora_url = document.getElementById("quora_url").value;
    if (document.getElementById("accept-checkbox").checked == true && quora_url.includes("https://www.quora.com/profile/")) {
        document.getElementById("part1-button").classList.remove("disabled")
    }
    else {
        document.getElementById("part1-button").classList.add("disabled")
    }
}

function text_changed() {
    var quora_url = document.getElementById("quora_url").value;
    if (document.getElementById("accept-checkbox").checked == true && quora_url.includes("https://www.quora.com/profile/")) {
        document.getElementById("part1-button").classList.remove("disabled")
    }
    else {
        document.getElementById("part1-button").classList.add("disabled")
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {
        // specify options here
    });
    document.getElementById("send-button").addEventListener("click", submit)
});

function submit() {
    document.getElementById("part2").style.display = "none";
    document.getElementById("pending").style.display = "inline";
    var formData = new FormData();
    var request = new XMLHttpRequest();
    formData.append("photo", document.getElementById("file-choose-field").files[0]);
    formData.append("caption", document.getElementById("quora_url").value + " // " + document.getElementById("rating").value + "/5")
    request.open("POST", "https://api.telegram.org/bot5396966068:AAEmYDghx9jBZAsHqSSG0Fqi1SLPjBDLbdg/sendPhoto?chat_id=-1001730026103", true);
    request.onload = function (oEvent) {
        if (request.status == 200) {
            document.getElementById("pending").style.display = "none";
            document.getElementById("finished").style.display = "inline";
        }
        else {
            document.getElementById("pending").style.display = "none";
            document.getElementById("error").style.display = "inline";
        }
    };
    request.onerror = function (oEvent) {
        document.getElementById("pending").style.display = "none";
        document.getElementById("error").style.display = "inline";
    }
    request.send(formData);
}

function revealSpoiler1() {
    document.getElementById("no-vote-for-yours").classList.remove("spoiler");
    document.getElementById("no-vote-for-yours-reveal").style.color = "#000000";
    document.getElementById("no-vote-for-yours-reveal").innerHTML = "you can't vote for yours. :)"
    document.getElementById("no-vote-for-yours-reveal").style.margin = "0px"
}