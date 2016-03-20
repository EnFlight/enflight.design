$(document).ready(function(){
  $('#message_btn').click(function(){
    showOverlay();
  });
  $('.nav-item-contact').click(function(){
    showOverlay();
  });
  $('.alert-close form span').click(function(){
    hideOverlay();
  });
  $('.alert-close').click(function(){
    hideOverlay();
  });
  $('.overlay form').click(function(){
    event.stopPropagation();
  });
  $('#submit').click(function(){
    formSubmit();
  });
});

function showOverlay(){
  $('.overlay').css('visibility','visible');
  $('.overlay').css('opacity','1');
}


function hideOverlay(){
  $('.overlay').css('opacity','0');
  $('.overlay').css('visibility','hidden');
}

function formSubmit(){
  $raw = $('contactform').html();
  $('#submit').html('<p>Thank you for your message!</p>');
}

$('#message_btn').popup('toggle');