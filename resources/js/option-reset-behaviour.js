function enableQuestion2() {
     var question1Value = document.getElementById('facility').value
     var question2Select = document.getElementById('level')
     var question2Div = document.getElementById('question2-div')
     var question3Select = document.getElementById('POI')
     var question3Div = document.getElementById('question3-div')

     var loadButton = document.getElementById('load')
     var resetButton = document.getElementById('reset')
     var thumbnailContainer = document.getElementById('thumbnail container')
     var editIcon = document.getElementById('edit icon')
     var deleteIcon = document.getElementById('delete icon')
     var image = document.getElementById('preview-container')
     var uploadButton = document.getElementById('upload')
     var routeTable = document.getElementById('routeTable')
     var totalSuccessFailedTable = document.getElementById(
          'totalSuccessFailedTable'
     )
     var longestShortestTable = document.getElementById('longestShortestTable')
     var refreshIcon = document.getElementById('refresh icon')
     var topRoutesDisplayOptions = document.getElementById('table2Options')

     if (question1Value) {
          question2Select.disabled = false
          question2Div.style.opacity = 1 // Make the second question visible

          loadButton.disabled = false
          loadButton.className = 'primary-btn'

          resetButton.disabled = false
          resetButton.className = 'primary-btn'
     } else {
          question2Select.disabled = true
          question2Div.style.opacity = 0.5 // Dim the second question
          document.getElementById('level').value = ''

          question3Select.disabled = true
          question3Div.style.opacity = 0.5 // Dim the second question
          document.getElementById('POI').value = ''

          loadButton.disabled = true
          loadButton.className = 'secondary-btn'

          resetButton.disabled = true
          resetButton.className = 'secondary-btn'

          thumbnailContainer.style.opacity = 0.0
          thumbnailContainer.style.display = 'none'

          editIcon.disabled = true
          editIcon.src = 'resources/images/Image-Edit-disabled.png'

          deleteIcon.disabled = true
          deleteIcon.src = 'resources/images/Image-Delete-disabled.png'

          refreshIcon.disabled = true
          refreshIcon.src = 'resources/images/Image-Refresh-disabled.png'

          uploadButton.disabled = true
          uploadButton.className = 'secondary-btn'

          topRoutesDisplayOptions.disabled = true
          topRoutesDisplayOptions.value = ''

          routeTable.textContent = ''

          totalSuccessFailedTable.textContent = ''

          longestShortestTable.textContent = ''

          removePreview()
     }

     // Reset question 3 if question 2 is disabled
     if (question2Select.disabled) {
          disableQuestion3()
     }
}

function enableQuestion3() {
     var question2Value = document.getElementById('level').value
     var question3Select = document.getElementById('POI')
     var question3Div = document.getElementById('question3-div')

     if (question2Value) {
          question3Select.disabled = false
          question3Div.style.opacity = 1 // Make the second question visible
     } else {
          question3Select.disabled = true
          question3Div.style.opacity = 0.5 // Dim the second question
          document.getElementById('POI').value = ''
     }
}

function disableQuestion3() {
     var question3Select = document.getElementById('POI')
     var question3Div = document.getElementById('question3-div')

     question3Select.disabled = true
     question3Div.style.opacity = 0.5 // Dim the third question
     document.getElementById('POI').value = ''
}
