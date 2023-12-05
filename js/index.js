$(document).ready(function () {

    // навигация: открытие и закрытие нав.панели по клику на меню
    let links_show = true;

    $('.menu img').click(function () {

        if (links_show) {
            $('.head_one .links').show(600);
        }
        else {
            $('.head_one .links').hide(600);
        }

        links_show = !links_show;
    });


    // МО покупка тура

    $('.se1 .start').click(function () {
        $('.overlay').show();
    });

    $('.overlay .close-popup').click(function () {
        $('.overlay').hide();
    });

    // МО заполнение формы на покупку тура


    $('.overlay button').click(function () {
        $('.shop').show();
    });

    $('.shop .close-popup_shop').click(function () {
        $('.shop').hide();
    });

    // проверка заполнения формы 

    // $('.send').click(function (e) {
    //     e.preventDefault();
    //     // первый вариант
    //     if ($('.name_1').val() != '' && $('.email_1').val() != '' && $('.phone_1').val() != '' && $('textarea').val() != '') {
    //         alert('поля формы успещно заполнены');
    //         $('.name_1').attr('disabled', 'disabled');
    //         $('.email_1').attr('disabled', 'disabled');
    //         $('.phone_1').attr('disabled', 'disabled');
    //         $('textarea').attr('disabled', 'disabled');
    //     }
    //     else {
    //         alert('не все поля формы  заполнены');
    //     }
    // });


    $(':submit').click(function (e) {
        e.preventDefault();
        if ($('.name_1').val() != '' && $('.email_1').val() != '' && $('.phone_1').val() != '' && $('textarea').val() != '') {
            alert('поля формы успещно заполнены');
            $('.name_1').attr('disabled', 'disabled');
            $('.email_1').attr('disabled', 'disabled');
            $('.phone_1').attr('disabled', 'disabled');
            $('textarea').attr('disabled', 'disabled');
        }
        else {
            alert('не все поля формы  заполнены');
        }
        // });

        // if ($('.name_1').val() == '' || $('.email_1').val() == '' || $('.phone_1').val() == '' || $('textarea').val() == '') {
        //     alert('не все поля формы  заполнены');
        // }
        // else {

        //     alert('поля формы успещно заполнены');
        //     $('.name_1').attr('disabled', 'disabled');
        //     $('.email_1').attr('disabled', 'disabled');
        //     $('.phone_1').attr('disabled', 'disabled');
        //     $('textarea').attr('disabled', 'disabled');
        // }

        $('.block2 input').each(function () {

            let flag = true;

            if (flag) {

                if ($(this).is(':checked')) {
                    $('.block2 input').each(function () {
                        $(this).attr('disabled', 'disabled');
                    })
                }

            }

            else {
                alert('Выберите способ связи');
            }

            flag = !flag;
        });

    });


    // настройка галереии 

    $('.point a').click(function (e) {

        e.preventDefault();

        if ($('.gal_big img').attr('src') != $(this).attr('href')) {
            $('.gal_big img').hide().attr('src', $(this).attr('href')).fadeIn(1000).css({
                width: '100%',
                height: '100%',
            })
        }
    });

    $('.point a img').mouseup(function () { // Выделение выбранной картинки (css - св-ва)
        $(this).fadeTo(2000, 0.6);
    });

    $(document).mouseup(function () {
        $('.point a img').fadeTo(0, 1);
    });


    // slider 

    const slider = {
        slides: ['Изображения/галерея1.jpg', 'Изображения/галерея2.jpg', 'Изображения/галеря4.jpg'],
        slider: $('.slider'),
        slide: $('.slider img'),
        currentSlide: 0,
        set: null,
        setAccess: false,

        toLeft: () => {
            slider.currentSlide == 0 ? slider.currentSlide = slider.slides.length - 1 : slider.currentSlide--;
            slider.slide.attr('src', slider.slides[slider.currentSlide]);
            slider.clearSet();
        },

        toRight: () => {
            slider.currentSlide == slider.slides.length - 1 ? slider.currentSlide = 0 : slider.currentSlide++;
            slider.slide.attr('src', slider.slides[slider.currentSlide]);
            clearInterval(slider.setAuto);
            slider.clearSet();
        },

        toAuto: () => {
            console.log(slider.setAccess)
            if(!slider.setAccess) {
                slider.setAccess = true;
                this.set = setInterval(() => {
                    slider.currentSlide == slider.slides.length - 1 ? slider.currentSlide = 0 : slider.currentSlide++;
                    slider.slide.attr('src', slider.slides[slider.currentSlide]);
                }, 2000);
            }
        },

        clearSet: () => {
            clearInterval(this.set);
            slider.setAccess = false;
        }
    }

    $('.to-left').click(slider.toLeft);
    $('.to-right').click(slider.toRight);
    $('.to-auto').click(slider.toAuto);

});





















