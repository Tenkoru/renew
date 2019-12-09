"use strict";

$(document).ready(function() {
    (function initSlider() {
        $(".certificate-list__list").slick({
            infinite: true,
            slidesToShow: 3,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: false
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        arrows: false
                    }
                },
                {
                    breakpoint: 501,
                    settings: {
                        slidesToShow: 1,
                        arrows: false
                    }
                }
            ]
        });
    })();
    (function smoothScroll() {
        $('a[href*="#"]').on("click", function(e) {
            e.preventDefault();

            $("html, body").animate(
                {
                    scrollTop: $($(this).attr("href")).offset().top
                },
                1000,
            );
        });
    })();

    function toggleMeny() {
        $("header").toggleClass("menu--opened");
    }
    function closeMenu(event) {
        if (!$(event.target).closest(".header__button,.main-nav").length) {
            $("header").removeClass("menu--opened");
        }
    }

    $(".header__button").on("click", toggleMeny);
    $("body").on("click", closeMenu);
});
