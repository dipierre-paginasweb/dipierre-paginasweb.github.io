(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });

})(jQuery);

document.getElementById('add-to-calendar-m').addEventListener('click', function() {
    var event = {
        title: 'Matrimonio Juan & María',
        location: 'Catedral de Santiago, Plaza de Armas 498, Santiago',
        description: 'DJ Jazzy Nuptials and more details...',
        start: new Date('2024-03-10T18:00:00-03:00'), // Cambia la fecha y hora de inicio
        end: new Date('2024-03-10T19:30:00-03:00') // Cambia la fecha y hora de fin
    };

    createCalendarEvent(event);
});

function createCalendarEvent(event) {
    var calendarEvent = 'BEGIN:VCALENDAR\n' +
        'VERSION:2.0\n' +
        'BEGIN:VEVENT\n' +
        'SUMMARY:' + event.title + '\n' +
        'LOCATION:' + event.location + '\n' +
        'DESCRIPTION:' + event.description + '\n' +
        'DTSTART:' + event.start.toISOString().replace(/-|:|\.\d+/g, '').replace(/(\d{2})(\d{2})$/, '$1:$2') + '\n' +
        'DTEND:' + event.end.toISOString().replace(/-|:|\.\d+/g, '').replace(/(\d{2})(\d{2})$/, '$1:$2') + '\n' +
        'END:VEVENT\n' +
        'END:VCALENDAR';

    var blob = new Blob([calendarEvent], { type: 'text/calendar' });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'evento.ics';
    link.click();
} 

document.getElementById('add-to-calendar-f').addEventListener('click', function() {
    var event = {
        title: 'Matrimonio Juan & María - Fiesta',
        location: 'Expo Borderío, Av. Costanera Sur 6420, Vitacura',
        description: 'DJ Jazzy Nuptials and more details...',
        start: new Date('2024-03-10T20:30:00-03:00'), // Cambia la fecha y hora de inicio
        end: new Date('2024-03-11T04:00:00-03:00') // Cambia la fecha y hora de fin
    };

    createCalendarEvent(event);
});

function createCalendarEvent(event) {
    var calendarEvent = 'BEGIN:VCALENDAR\n' +
        'VERSION:2.0\n' +
        'BEGIN:VEVENT\n' +
        'SUMMARY:' + event.title + '\n' +
        'LOCATION:' + event.location + '\n' +
        'DESCRIPTION:' + event.description + '\n' +
        'DTSTART:' + event.start.toISOString().replace(/-|:|\.\d+/g, '').replace(/(\d{2})(\d{2})$/, '$1:$2') + '\n' +
        'DTEND:' + event.end.toISOString().replace(/-|:|\.\d+/g, '').replace(/(\d{2})(\d{2})$/, '$1:$2') + '\n' +
        'END:VEVENT\n' +
        'END:VCALENDAR';

    var blob = new Blob([calendarEvent], { type: 'text/calendar' });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'evento.ics';
    link.click();
}    

const scriptURL = 'https://script.google.com/macros/s/AKfycbxwsoUtsYUKYBCofsbflP8Z4JN_N3zt9IPksJx5nEZp_hVjFXxdeGfsoeYdORfxXmj2VQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => alert("Muchas gracias por tu confirmación!" ))
.then(() => { window.location.reload(); })
.catch(error => console.error('Error!', error.message))
})
