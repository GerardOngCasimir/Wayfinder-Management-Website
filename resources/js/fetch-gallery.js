function loadGallery() {
     // Specify the local file path to your images folder
     const imagesFolderPath = 'resources/images/AStarImages/'

     // List of image filenames
     const imageFilenames = []

     for (let i = 1; i < 130; i++) {
          imageFilenames.push(`${i}.jpg`)
     }

     // Generate HTML for the image gallery
     const galleryHTML = imageFilenames
          .map(
               (filename) =>
                    `<img src="${imagesFolderPath}${filename}" alt="Image" onclick = "showPreview(this)">`
          )
          .join('')

     // Insert the generated HTML into the gallery container
     document.getElementById('thumbnail container').innerHTML = galleryHTML
}

document.getElementById('load').addEventListener('click', function () {
     loadGallery()
})
