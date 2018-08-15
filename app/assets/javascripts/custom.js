(function() {
  $(document).on("turbolinks:load", function() {
    return FontAwesome.dom.i2svg()
  })
}).call(this)

$(document).ready(function() {
  Promise.all([])
  .then(initNavbarBurgar)
  .then(removeNotification)
  .then(showNotificationTooltip)
  .then(checkMaxUploadImageSize)
})

function initNavbarBurgar() {
  var nuvbarBtn = $('.navbar-burger')
  var navbarMenu = $('.navbar-menu')
  $(nuvbarBtn).on('click', function() {
    nuvbarBtn.toggleClass('is-active')
    navbarMenu.toggleClass('is-active')
  })
}

function removeNotification() {
  var deleteBtn = $('.notification .delete')
  $(deleteBtn).on('click', function(){
    $(this).parent('.notification').fadeOut(200, function(){
      $(this).parent('.notification').remove()
    })
  })
}

function showNotificationTooltip() {
  var notificationTooltip = $('.notification-tooltip')
  if (notificationTooltip.length && ($(window).width() > 767)) {
    $(notificationTooltip).delay(700).animate({
      opacity: 1,
      right: '3rem'
    }, 200, 'swing')
  }
}

function checkMaxUploadImageSize() {
  $('#micropost_picture').bind('change', function() {
    var size_in_megabytes = this.files[0].size/1024/1024;
    if (size_in_megabytes > 5) {
      alert('Maximum file size is 5MB. Please choose a smaller file.');
    }
  })
}
