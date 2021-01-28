$(document).ready(function() {
    $('#slides').superslides({
        animation: 'fade',
        play: 3000,
        pagination: false
    });

    const typed = new Typed(".typed", {
        strings: ["Hi, I'm Tika,", "hire me! :)"],
        typeSpeed: 100,
        loop: true,
        startDelay: 1000,
        backSpeed: 40,
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            938: {
                items: 4
            }
        }
    })
    $("[data-fancybox]").fancybox();
    $('items').isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false,
        }
    })

    $("#navigation li a").click(function(e) {
        if ($(this).attr("href") === 'img/portfolio/tika_resume.pdf') {
            return
        } else {
        e.preventDefault();
        let targetElement = $(this).attr("href");
        let targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 140 }, "slow");
        }
    });


    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {
        const body = $("body");
        if ($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + 1 + "px");
            body.addClass("fixedNav");
        } else {
            body.css("padding-top", 0)
            body.removeClass("fixedNav");
        }
    }
});