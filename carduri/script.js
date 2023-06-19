$(document).ready(function() {
  // Open modal on click
  $('.gallery-trigger').on('click', function() {
    var index = $(this).data('index');
    var images = $(this)
      .closest('.card-gallery')
      .find('.gallery-image');
    openModal(index, images);
  });

  // Close modal on click
  $('.close').on('click', function() {
    closeModal();
  });

  // Open modal with specific index and images
  function openModal(index, images) {
    var modal = $('#myModal');
    var modalImages = $('#modal-images');
    modal.show();
    modalImages.empty();
    images.each(function() {
      var src = $(this).attr('src');
      var alt = $(this).attr('alt');
      modalImages.append('<img src="' + src + '" alt="' + alt + '">');
    });
    modalImages.find('img').eq(index - 1).show();
  }

  // Close modal
  function closeModal() {
    $('#myModal').hide();
    $('#modal-images').empty();
  }
});


