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

document.getElementById('add-to-calendar-f').addEventListener('click', function() {
    // Cambia los detalles del evento según tu necesidad
    var event = {
        title: 'Matrimonio Juan & MAría',
        location: 'Expo Borderío, Av. Costanera Sur 6420, Vitacura.',
        description: 'DJ Jazzy Nupitals guitar acoustic bass embarrassing first aisle guitar acoustic bass cheers glitter . Macarena fish aisle aisle wedding, forever happy salad  drunk groomsman overpriced florist embarrassing coworkers tuxedo aisle guitar acoustic bass champagne bouquet. Ring wedding beautiful tuxedo fish toast, veil Bryna aisle centerpieces. Cheers embarrassing bouquet bouquet Bryna overpriced florist DJ Jazzy Nupitals Bryna macarena. DJ Jazzy Nupitals prime rib centerpieces centerpieces cake dessert, cake dessert tuxedo aisle seat covers aisle.Church Will chicken unity sparkles Bryna cake dessert, centerpieces aisle Will debt guitar acoustic bass glitter . Magic sparkles father bridesmaid  champagne bouquet wedding mother. Magic first dancing fish chicken champagne debt mother guitar acoustic bass.',
        start: new Date('2024-03-10T20:00:00'), // Cambia la fecha y hora de inicio
        end: new Date('2024-03-10T04:00:00') // Cambia la fecha y hora de fin
    };

    var calendarEvent = 'BEGIN:VCALENDAR\n' +
        'VERSION:2.0\n' +
        'BEGIN:VEVENT\n' +
        'SUMMARY:' + event.title + '\n' +
        'LOCATION:' + event.location + '\n' +
        'DESCRIPTION:' + event.description + '\n' +
        'DTSTART:' + event.start.toISOString().replace(/-|:|\.\d+/g, '') + '\n' +
        'DTEND:' + event.end.toISOString().replace(/-|:|\.\d+/g, '') + '\n' +
        'END:VEVENT\n' +
        'END:VCALENDAR';

    // Crear un enlace y simular un clic para descargar el archivo .ics
    var blob = new Blob([calendarEvent], { type: 'text/calendar' });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'evento.ics';
    link.click();
});

document.getElementById('add-to-calendar-m').addEventListener('click', function() {
    // Cambia los detalles del evento según tu necesidad
    var event = {
        title: 'Matrimonio Juan & MAría',
        location:'Catedral de Santiago, Plaza de Armas 498, Santiago.',
        description: 'DJ Jazzy Nupitals guitar acoustic bass embarrassing first aisle guitar acoustic bass cheers glitter . Macarena fish aisle aisle wedding, forever happy salad  drunk groomsman overpriced florist embarrassing coworkers tuxedo aisle guitar acoustic bass champagne bouquet. Ring wedding beautiful tuxedo fish toast, veil Bryna aisle centerpieces. Cheers embarrassing bouquet bouquet Bryna overpriced florist DJ Jazzy Nupitals Bryna macarena. DJ Jazzy Nupitals prime rib centerpieces centerpieces cake dessert, cake dessert tuxedo aisle seat covers aisle.Church Will chicken unity sparkles Bryna cake dessert, centerpieces aisle Will debt guitar acoustic bass glitter . Magic sparkles father bridesmaid  champagne bouquet wedding mother. Magic first dancing fish chicken champagne debt mother guitar acoustic bass.',
        start: new Date('2024-03-10T18:00:00'), // Cambia la fecha y hora de inicio
        end: new Date('2024-03-10T19:30:00') // Cambia la fecha y hora de fin
    };

    var calendarEvent = 'BEGIN:VCALENDAR\n' +
        'VERSION:2.0\n' +
        'BEGIN:VEVENT\n' +
        'SUMMARY:' + event.title + '\n' +
        'LOCATION:' + event.location + '\n' +
        'DESCRIPTION:' + event.description + '\n' +
        'DTSTART:' + event.start.toISOString().replace(/-|:|\.\d+/g, '') + '\n' +
        'DTEND:' + event.end.toISOString().replace(/-|:|\.\d+/g, '') + '\n' +
        'END:VEVENT\n' +
        'END:VCALENDAR';

    // Crear un enlace y simular un clic para descargar el archivo .ics
    var blob = new Blob([calendarEvent], { type: 'text/calendar' });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'evento.ics';
    link.click();
});