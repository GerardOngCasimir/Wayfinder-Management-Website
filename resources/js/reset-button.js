function resetselection() 
{
    document.getElementById("facility").value = "";
    document.getElementById("level").value = "";
    document.getElementById("POI").value = "";
    
    var leveldropdown = document.getElementById("level");
    leveldropdown.disabled = true;

    var poidropdown = document.getElementById("POI");
    poidropdown.disabled = true;

    var loadbutton = document.getElementById("load");
    loadbutton.disabled = true;
    loadbutton.className = "secondary-btn";

    var resetbutton = document.getElementById("reset");
    resetbutton.disabled = true;
    resetbutton.className = "secondary-btn";

    var uploadbutton = document.getElementById('upload');
    uploadbutton.disabled = true;
    uploadbutton.className = "secondary-btn";

    var thumbnailcontainer = document.getElementById("thumbnail container");
    thumbnailcontainer.style.opacity = 0.0;
    thumbnailcontainer.style.display = "none";

    var editicon = document.getElementById("edit icon");
    editicon.disabled = true;
    editicon.src = "resources/images/Image-Edit-disabled.png";

    var deleteicon = document.getElementById("delete icon");
    deleteicon.disabled = true;
    deleteicon.src = "resources/images/Image-Delete-disabled.png";

    var level = document.getElementById('level');
    var POI = document.getElementById('POI');
    
    alert("Options reset");
    
    var image = document.getElementById('preview-container');

    image.src = "resources/images/Image-no-preview.png";

    // Fetch data when the page loads
    window.onload = fetchData;
}

var button = document.getElementById("reset");

button.addEventListener('click', resetselection);