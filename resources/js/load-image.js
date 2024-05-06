function loadImage() {
     // Show loading spinner
     document.querySelector('.spinner-container').style.display = 'block'

     // Enable upload button
     let uploadButton = document.getElementById('upload')

     // Enable Thumbnail container
     let thumbnailContainer = document.getElementById('thumbnail container')

     // Simulate loading delay
     setTimeout(function () {
          // Hide loading spinner
          document.querySelector('.spinner-container').style.display = 'none'

          uploadButton.disabled = false
          uploadButton.className = 'primary-btn'

          thumbnailContainer.style.opacity = '1'
          thumbnailContainer.style.display = 'block'
     }, 2000) // Simulated delay of 2 seconds
}

let button = document.getElementById('load')

button.addEventListener('click', function () {
     // Load gallery images
     loadImage()
})
