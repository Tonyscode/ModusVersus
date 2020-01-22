
 $('.sl').slick({
        dots: true,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-angle-double-right" aria-hidden="true"></i>',
        prevArrow: '<button id="next" type="button" class="btn btn-juliet"><i class="fa fa-angle-double-left" aria-hidden="true"></i>'
        //appendArrows: $('.my-arrow'),
        //prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-angle-double-left" aria-hidden="true"></i></button>',
        //nextArrow: '<button id="next" type="button" class="btn btn-juliet"><i class="fa fa-angle-double-right" aria-hidden="true"></i></button>'
    });

    $('.sl1').slick({
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
        nextArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-angle-right" aria-hidden="true"></i>',
        prevArrow: '<button id="next" type="button" class="btn btn-juliet"><i class="fa fa-angle-left" aria-hidden="true"></i>'
        //appendArrows: $('.my-arrow'),
        //prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><i class="fa fa-angle-double-left" aria-hidden="true"></i></button>',
        //nextArrow: '<button id="next" type="button" class="btn btn-juliet"><i class="fa fa-angle-double-right" aria-hidden="true"></i></button>'
    });