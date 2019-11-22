window.onload = function() {
    this.document.getElementById("bigger_button").onclick = bigger;
    this.document.getElementById("checkbox").onchange = check;
    this.document.getElementById("snoopify").onclick = snoopify;
    this.document.getElementById("Igpay_Atinlay").onclick = pigLatin;
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
    console.log("start");
    var words = $("text").value;
    var vowls = ['a','e','i','o','u'];
    var word = $("text").value.split("");
    for ( var i=0; i<words.length; i++){
        console.log("for start");
        if(vowls.includes(word[i])){
            console.log(word);
            word.push("ay");
            break;
        } else {
            console.log(word);
            word.push(word.shift());
        }
        
    }
    words = word.join("");
    $("text").value=words;


    // for (i = 0 ; i < $("text").value.length ; i++) {
    //     if ($("text").value[i] == /[aeiou]/) {
    //         $("text").value += "ay";
    //     } else {
    //         $("text").value -= $("text").value[i]
    //     }

    // $("text").value.split(/[aeiou]/)
}