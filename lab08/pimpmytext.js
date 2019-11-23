window.onload = function() {
    this.document.getElementById("bigger_button").onclick = bigger;
    this.document.getElementById("checkbox").onchange = check;
    this.document.getElementById("snoopify").onclick = snoopify;
    this.document.getElementById("Igpay_Atinlay").onclick = pigLatin;
    this.document.getElementById("Malkovitch").onclick = Malkovitch;
};

var bigger_count = 0;

function bigger() {
    // alert("Hello, world!");
    if (bigger_count == 0) {
        $("text").style.fontSize = "12pt";
    }
    else {
        setInterval(function() {
            $("text").style.fontSize = (parseInt($("text").style.fontSize) + 2) + "pt";
        }, 500);
        // $("text").style.fontSize = (parseInt($("text").style.fontSize) + 2) + "pt";
    }
    bigger_count += 1;
}

function check() {
    if ($("checkbox").checked) {
        $("text").style.fontWeight = "bold";
        $("text").style.textDecoration = "underline";
        $("text").style.color = "green";
        document.body.style.backgroundImage = "url('https://selab.hanyang.ac.kr/courses/cse326/2019/labs/images/8/hundred.jpg')";
    } else {
        $("text").style.fontWeight = "normal";
        $("text").style.textDecoration = "none";
        $("text").style.color = "";
        document.body.style.backgroundImage = "none";
    }
}

function snoopify() {
    $("text").value = $("text").value.toUpperCase();
    $("text").value = $("text").value.split(".").join("-izzle.");
}

function pigLatin() {
    var vowls = ['a','e','i','o','u'];

    for (i = 0 ; i < $("text").value.length ; i++) {
        console.log("start");
        if (vowls.includes($("text").value[0])) {
            $("text").value += "ay";
            break;
        } else {
            console.log($("text").value);
            $("text").value = $("text").value.substr(1) + $("text").value.charAt(0);
        }
    }
}

function Malkovitch() {
    if ($("text").value.length >= 5) {
        $("text").value = "Malkovitch";
    }
}