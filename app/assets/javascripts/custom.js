$(document).on('turbolinks:load', function() {

  Promise.all([])
   .then(initNavbarBurgar)
   .then(removeNotification)
   .then(showSuccessNotification)
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

function showSuccessNotification() {
  var successNotification = $('.notification.success')
  if (successNotification.length) {
    $(successNotification).delay(700).animate({
      opacity: 1,
      right: '3rem'
    }, 200, 'swing')
  }
}
