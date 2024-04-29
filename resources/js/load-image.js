function loadimage() {
     var uploadButton = document.getElementById('upload')
     uploadButton.disabled = false
     uploadButton.className = 'primary-btn'

     var thumbnailContainer = document.getElementById('thumbnail container')
     thumbnailContainer.style.opacity = 1.0
     thumbnailContainer.style.display = 'block'
}

var button = document.getElementById('load')

button.addEventListener('click', loadimage)
