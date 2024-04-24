function enableQuestion2() {
    var question1Value = document.getElementById("facility").value;
    var question2Select = document.getElementById("level");
    var question2Div = document.getElementById("question2-div");
    var question3Select = document.getElementById("POI");
    var question3Div = document.getElementById("question3-div");

    var loadbutton = document.getElementById("load");
    var resetbutton = document.getElementById("reset");
    var thumbnailcontainer = document.getElementById("thumbnail container");
    var editicon = document.getElementById("edit icon");
    var deleteicon = document.getElementById("delete icon");
    var image = document.getElementById('preview-container');
    var uploadbutton = document.getElementById('upload');
    var routeTable = document.getElementById('routeTable');
    var TotalSuccessFailedTable = document.getElementById('TotalSuccessFailedTable');
    var LongestShortestTable = document.getElementById('LongestShortestTable');
    
    if (question1Value) {
        question2Select.disabled = false;
        question2Div.style.opacity = 1; // Make the second question visible
        
        loadbutton.disabled = false;
        loadbutton.className = "primary-btn";
        
        resetbutton.disabled = false;
        resetbutton.className = "primary-btn";
        
    } else {
        question2Select.disabled = true;
        question2Div.style.opacity = 0.5; // Dim the second question
        document.getElementById("level").value = "";

        question3Select.disabled = true;
        question3Div.style.opacity = 0.5; // Dim the second question
        document.getElementById("POI").value = "";
        
        loadbutton.disabled = true;
        loadbutton.className = "secondary-btn";

        resetbutton.disabled = true;
        resetbutton.className = "secondary-btn";
        
        thumbnailcontainer.style.opacity = 0.0;
        thumbnailcontainer.style.display = "none";
        
        editicon.disabled = true;
        editicon.src = "resources/images/Image-Edit-disabled.png";
        
        deleteicon.disabled = true;
        deleteicon.src = "resources/images/Image-Delete-disabled.png";
        
        uploadbutton.disabled = true;
        uploadbutton.className = "secondary-btn";
        
        routeTable.textContent = "";
        
        TotalSuccessFailedTable.textContent = "";
        
        LongestShortestTable.textContent = "";
        
        removePreview();
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