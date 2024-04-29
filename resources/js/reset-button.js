function resetSelection() {
     document.getElementById('facility').value = ''
     document.getElementById('level').value = ''
     document.getElementById('POI').value = ''

     var levelDropdown = document.getElementById('level')
     levelDropdown.disabled = true

     var poiDropdown = document.getElementById('POI')
     poiDropdown.disabled = true

     var loadButton = document.getElementById('load')
     loadButton.disabled = true
     loadButton.className = 'secondary-btn'

     var resetButton = document.getElementById('reset')
     resetButton.disabled = true
     resetButton.className = 'secondary-btn'

     var uploadButton = document.getElementById('upload')
     uploadButton.disabled = true
     uploadButton.className = 'secondary-btn'

     var thumbnailContainer = document.getElementById('thumbnail container')
     thumbnailContainer.style.opacity = 0.0
     thumbnailContainer.style.display = 'none'

     var editIcon = document.getElementById('edit icon')
     editIcon.disabled = true
     editIcon.src = 'resources/images/Image-Edit-disabled.png'

     var deleteIcon = document.getElementById('delete icon')
     deleteIcon.disabled = true
     deleteIcon.src = 'resources/images/Image-Delete-disabled.png'

     var refreshIcon = document.getElementById('refresh icon')
     refreshIcon.disabled = true
     refreshIcon.src = 'resources/images/Image-Refresh-disabled.png'

     var topRoutesDisplayOptions = document.getElementById('table2Options')
     topRoutesDisplayOptions.disabled = true
     topRoutesDisplayOptions.value = ''

     var routeTable = document.getElementById('routeTable')
     routeTable.textContent = ''

     var totalSuccessFailedTable = document.getElementById(
          'TotalSuccessFailedTable'
     )
     totalSuccessFailedTable.textContent = ''

     var longestShortestTable = document.getElementById('LongestShortestTable')
     longestShortestTable.textContent = ''

     alert('Options reset')

     var image = document.getElementById('preview-container')

     image.src = 'resources/images/Image-no-preview.png'
}

var button = document.getElementById('reset')

button.addEventListener('click', resetSelection)
