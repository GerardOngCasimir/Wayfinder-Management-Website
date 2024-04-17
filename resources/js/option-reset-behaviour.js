function enableQuestion2() {
    var question1Value = document.getElementById("facility").value;
    var question2Select = document.getElementById("level");
    var question2Div = document.getElementById("question2-div");

    if (question1Value) {
        question2Select.disabled = false;
        question2Div.style.opacity = 1; // Make the second question visible
        
        var loadbutton = document.getElementById("load");
        loadbutton.disabled = false;
        loadbutton.className = "primary-btn";

        var resetbutton = document.getElementById("reset");
        resetbutton.disabled = false;
        resetbutton.className = "primary-btn";
        
    } else {
        question2Select.disabled = true;
        question2Div.style.opacity = 0.5; // Dim the second question
        document.getElementById("level").value = "";
        
        loadbutton.disabled = true;
        loadbutton.className = "secondary-btn";

        resetbutton.disabled = true;
        resetbutton.className = "secondary-btn";
    }

    // Reset question 3 if question 2 is disabled
    if (question2Select.disabled) {
        disableQuestion3();
    }
}

function enableQuestion3() {
    var question2Value = document.getElementById("level").value;
    var question3Select = document.getElementById("POI");
    var question3Div = document.getElementById("question3-div");

    if (question2Value) {
        question3Select.disabled = false;
        question3Div.style.opacity = 1; // Make the second question visible
    } else {
        question3Select.disabled = true;
        question3Div.style.opacity = 0.5; // Dim the second question
        document.getElementById("POI").value = "";
    }
}

function disableQuestion3() {
    var question3Select = document.getElementById("POI");
    var question3Div = document.getElementById("question3-div");

    question3Select.disabled = true;
    question3Div.style.opacity = 0.5; // Dim the third question
    document.getElementById("POI").value = "";
}