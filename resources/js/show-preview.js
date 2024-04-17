function showPreview(clickedImage)
{
    var previewcontainer = document.getElementById('preview-container');
    
    var smallImageSrc = clickedImage.src;
    
    previewcontainer.innerHTML = '';
    
    var previewImage = document.createElement('img');
    previewImage.src = smallImageSrc;
    previewImage.alt = 'Preview Image';
    previewcontainer.appendChild(previewImage);
}

function removePreview()
{
    var previewcontainer = document.getElementById('preview-container');
    
    var previewImage = document.createElement('img');
    previewImage.src = 'resources/images/Image-no-preview.png';
    previewImage.alt = 'Default Image';

    previewcontainer.innerHTML = '';
    previewcontainer.appendChild(previewImage);
}