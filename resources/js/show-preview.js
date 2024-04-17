function showPreview(clickedImage)
{
    var previewcontainer = document.getElementById('preview container');
    
    var smallImageSrc = clickedImage.src;
    
    previewcontainer.innerHTML = '';
    
    var previewImage = document.createElement('img');
    previewImage.src = smallImageSrc;
    previewImage.alt = 'Preview Image';
    previewImage.classList.add('enlarged');
    
    previewcontainer.appendChild(previewImage);
}

function removePreview()
{
    var previewcontainer = document.getElementById('preview container');
    var previewImage = document.querySelector('.enlarged');
    if (previewImage)
    {
        previewcontainer.removeChild(previewImage);
    }
}