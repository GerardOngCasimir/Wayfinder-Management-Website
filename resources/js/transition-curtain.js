$(document).ready(function() {
     $('.institute-button').click(function(e) {
          e.preventDefault();
          selectInstitute($(this).find('span').text());
     });
});

$(document).ready(function() {
     $('.back-button').click(function(e) {
          e.preventDefault();
          goBack();
     });
});