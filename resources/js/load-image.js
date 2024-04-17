function loadimage()
{
    var uploadbutton = document.getElementById('upload');
    uploadbutton.disabled = false;
    uploadbutton.className = "primary-btn";
    
    var thumbnailcontainer = document.getElementById("thumbnail container");
    thumbnailcontainer.style.opacity = 1.0;
}

var button = document.getElementById("load");

button.addEventListener('click', loadimage);