function showPreview(clickedImage)
{
    var img = new Image();
    img.src = clickedImage.src; // Set the variable img source as the clicked imaged
    img.onload = function()
    {
        document.getElementById('preview-container').innerHTML = ''; // Clear the box first
        document.getElementById('preview-container').appendChild(img); // Append the new image to the box
    };
    img.onerror = function()
    {
        alert('Failed to load image.');
    };

    var editicon = document.getElementById("edit icon");
    editicon.disabled = false;
    editicon.src = "resources/images/Image-Edit-enabled.png";

    var deleteicon = document.getElementById("delete icon");
    deleteicon.disabled = false;
    deleteicon.src = "resources/images/Image-Delete-enabled.png";
}

function removePreview()
{
    var img = new Image();
    img.src = 'resources/images/Image-no-preview.png'; // Path to the default image
    img.onload = function()
    {
        document.getElementById('preview-container').innerHTML = ''; // Clears the current image
        document.getElementById('preview-container').appendChild(img); // Appends the default image
    };
    img.onerror = function()
    {
        alert('Failed to reset to default image.');
    };
}