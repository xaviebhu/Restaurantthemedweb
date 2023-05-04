// Smooth scrolling

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
    scrollTop: target.offset().top
    }, 1000);
    }
    });
    
    // Menu items filter
    
    $('.menu-filter li').on('click', function() {
    var category = $(this).data('category');
    $('.menu-item').fadeOut(500);
    setTimeout(function() {
        if (category === 'all') {
            $('.menu-item').fadeIn(500);
        } else {
            $('.menu-item[data-category="' + category + '"]').fadeIn(500);
        }
    }, 500);
});

// Reservation form validation

$('.reservation-section form').on('submit', function(event) {
event.preventDefault();
var name = $('#name').val();
var email = $('#email').val();
var date = $('#date').val();
var time = $('#time').val();
var guests = $('#guests').val();

if (name !== '' && email !== '' && date !== '' && time !== '' && guests !== '') {
	alert('Reservation confirmed!');
} else {
	alert('Please fill out all fields.');
}
});

// Contact form validation

$('.contact-section form').on('submit', function(event) {
event.preventDefault();
var name = $('#name').val();
var email = $('#email').val();
var message = $('#message').val();

if (name !== '' && email !== '' && message !== '') {
	alert('Message sent!');
	$('#name').val('');
	$('#email').val('');
	$('#message').val('');
} else {
	alert('Please fill out all fields.');
}
});