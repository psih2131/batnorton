//отслеживание изменение размера браузера для тех слайдеров которыъ в пк версии не существует 
$(document).ready(function () {
    let sliderFront = [];
    let sliderRow = [];

    // Сохраняем исходный HTML-код для всех блоков 

    $('.card-front-sec__img-container').map(function () {
        sliderFront.push($(this).html());
    });

    $('.store-body__img-row').map(function () {
        sliderRow.push($(this).html());
    });


    // Восстанавливаем исходный HTML-код для всех блоков .product-mob-slider
    function resetSliders() {
        $('.card-front-sec__img-container').each(function (index) {
            $(this).removeClass('slick-initialized slick-slider slick-dotted');
            $(this).html(sliderFront[index]);
        });

        $('.store-body__img-row').each(function (index) {
            $(this).removeClass('slick-initialized slick-slider slick-dotted');
            $(this).html(sliderRow[index]);
        });
    }

    function initSlick() {
        //card slider image mobile
        $('.card-front-sec__img-container').slick({
            infinite: true,
            speed: 1000,
            adaptiveHeight: true,
            slidesToScroll: 1,
            dots: true,
            slidesToShow: 2,
            arrows: false,
            responsive: [
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });

        //store mob slider
        $('.store-body__img-row').slick({
            infinite: true,
            speed: 1000,
            adaptiveHeight: true,
            slidesToScroll: 1,
            dots: true,
            slidesToShow: 1,
            arrows: false,
        });
    }

    function destroySlick() {
        $('.card-front-sec__img-container').slick('unslick');
        $('.store-body__img-row').slick('unslick');
        resetSliders()
    }

    $(window).on('resize', function () {
        clearTimeout(resizeTimer);
        var resizeTimer = setTimeout(function () {
            loadSliders()
        }, 250);
    });


    function loadSliders() {
        if (window.matchMedia('(max-width: 700px)').matches) {
            initSlick();
        }
        else {
            destroySlick();
        }
    }
    loadSliders()

});





$(function () {



    //header slider
    $('.header__bottom-nav ul').slick({
        infinite: true,
        speed: 1000,
        adaptiveHeight: true,
        slidesToScroll: 1,
        dots: false,
        slidesToShow: 8,
        variableWidth: true,
        prevArrow: '<div class="ar_slier prev-ar_slide"><div class="ar-ic-slider"></div></div>',
        nextArrow: '<div class="ar_slier next-ar_slide"><div class="ar-ic-slider"></div></div>',
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 900,
                settings: {

                }
            },
        ]
    });

    // product slider
    $('.product-mob-slider').slick({
        infinite: true,
        speed: 1000,
        adaptiveHeight: true,
        slidesToScroll: 1,
        dots: true,
        slidesToShow: 5,
        arrows: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '107px',
                }
            },
        ]
    });

    //single product slider
    $('.single-product-sec__slider').slick({
        infinite: true,
        speed: 1000,
        adaptiveHeight: true,
        slidesToScroll: 1,
        dots: false,
        slidesToShow: 1,
        prevArrow: '<div class="ar_slierV2 prev-ar_slide"><div class="ar-ic-slider"></div></div>',
        nextArrow: '<div class="ar_slierV2 next-ar_slide"><div class="ar-ic-slider"></div></div>',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    dots: true,
                    arrows: false,
                }
            },
        ]
    });

    //collection slider
    $('.collection-slider-sec__slider').slick({
        infinite: true,
        speed: 1000,
        adaptiveHeight: true,
        slidesToScroll: 1,
        dots: true,
        slidesToShow: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '107px',
                }
            },
        ]
    });

    //catalog ipad mob slider
    $('.catalog-slider').slick({
        infinite: true,
        speed: 1000,
        adaptiveHeight: true,
        slidesToScroll: 1,
        dots: true,
        slidesToShow: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                }
            },

        ]
    });



    function tabMobile() {
        //card page tabs
        if (window.matchMedia('(max-width: 700px)').matches) {
            $('.card-dop-sec__tab-header').on('click', function () {
                $(this).closest('.card-dop-sec__tab').find('.card-dop-sec__hide-element').slideToggle(500, function () {
                    if ($(this).is(':visible')) {
                        $(this).closest('.card-dop-sec__tab').find('.card-dop-sec__tab-header').addClass('svg-active')
                    }
                    else {
                        $(this).closest('.card-dop-sec__tab').find('.card-dop-sec__tab-header').removeClass('svg-active')
                    }
                })
            })
        }
    }
    tabMobile()


    //add like for products
    $('.add-like').on('click', function () {
        $(this).toggleClass('active-like')
    })

    //card select size open
    $('.select-size__header').on('click', function () {
        $(this).closest('.select-size').find('.select-size__body').slideToggle(300, function () {
            if ($(this).is(':visible')) {
                $(this).closest('.select-size').find('.select-size__header').addClass('select-active')
            }
            else {
                $(this).closest('.select-size').find('.select-size__header').removeClass('select-active')
            }
        })
    })

    //select size click
    $('.select-size__body ul li ').on('click', function () {
        $('.select-size__body ul li ').removeClass('select-size__active')
        $(this).addClass('select-size__active')
    })

    //read more card
    $('.about-card__more-text-btn').on('click', function () {
        $('.about-card__more-text-box').toggleClass('about-card__more-text-box_active')
    })

    //map select open
    $('.location-select__location-header').on('click', function () {
        $('.location-select__element').find('.location-select__location-body').slideUp(300)
        $(this).closest('.location-select__element').find('.location-select__location-body').slideToggle(300)
    })

    $('.location-select__location-body ul li').on('click', function () {
        $('.location-select__location-body ul li').removeClass('active-location')
        $(this).addClass('active-location')
        $('.location-select__element').find('.location-select__location-body').slideUp(300)
    })

    //mobile nav open close
    $('.header__burger').on('click', function () {
        $('.mob-meny').addClass('mob-meny_active')
        $('.app').addClass('hide-page')
    })
    $('.mob-meny__close').on('click', function () {
        $('.mob-meny').removeClass('mob-meny_active')
        $('.app').removeClass('hide-page')
    })

    // open mob search
    $('.mob-meny__search-btn').on('click', function () {
        openMobSearch()
    })

    //close mob search
    $('.search-mob__close').on('click', function () {
        closeMobSearch()
    })
    function openMobSearch() {
        $('.mob-meny__search-btn').hide(300)
        $('.mob-meny__body').hide(300)
        setTimeout(function () {
            $('.search-mob').show(300)
            $('.mob-meny__hide-logo').show(300)
        }, 300)
    }

    function closeMobSearch() {
        $('.search-mob').hide(300)
        $('.mob-meny__hide-logo').hide(300)
        setTimeout(function () {
            $('.mob-meny__search-btn').show(300)
            $('.mob-meny__body').show(300)
        }, 300)
    }

});


window.addEventListener('load', function () {
    //popups start
    // <div class="popup-air galery-conteiner" data-air="test">
    // 		<div class="galery-popup">
    // 		</div>
    // 	</div>
    // 	<button class="air-open-btn" data-popup-current="galery">galery</button>
    // 	<button class="air-open-btn" data-popup-current="test">test</button>
    function popupAir() {
        const footerElement = document.querySelector('footer');
        if (!footerElement) {
            alert('dont find teg footer')
        }
        else {
            let airElements = document.querySelectorAll('.popup-air');
            if (airElements.length > 0) {
                let airBtnOpen = document.querySelectorAll('.air-open-btn');
                createAirPopups()

                for (let i = 0; i < airBtnOpen.length; i++) {
                    airBtnOpen[i].onclick = openAirPopup
                }
            }
            else {
                return
            }

            function createAirPopups() {
                let airConteiner = document.createElement("div");
                airConteiner.classList.add('air-conteiner');

                for (let i = 0; i < airElements.length; i++) {
                    let airCloseIcon = document.createElement("div");
                    airCloseIcon.classList.add('air-close');
                    airElements[i].appendChild(airCloseIcon)
                    airConteiner.appendChild(airElements[i])

                }
                footerElement.after(airConteiner)
            }

            function openAirPopup() {
                let currentAirPopupBtn = this.getAttribute('data-popup-current');
                let allPopups = document.querySelectorAll('.popup-air');
                let currentAirPopup = document.querySelector(`.popup-air[data-air="${currentAirPopupBtn}"]`);
                let closeAirIcon = currentAirPopup.querySelector('.air-close');
                closeAllAirPopups(allPopups);
                openAirConteiner();
                currentAirPopup.classList.add('air-popup_active');

                window.addEventListener('click', e => { // при клике в любом месте окна браузера
                    const target = e.target // находим элемент, на котором был клик
                    if (!target.closest('.popup-air') && !target.closest('.air-open-btn')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
                        currentAirPopup.classList.remove('air-popup_active');
                        closeAirConteiner()
                    }
                })

                closeAirIcon.addEventListener('click', function () {
                    currentAirPopup.classList.remove('air-popup_active');
                    closeAirConteiner()
                })

            }

            function openAirConteiner() {
                let airConteier = document.querySelector('.air-conteiner');
                airConteier.classList.add('air-conteiner_active');
            }

            function closeAllAirPopups(allPopups) {
                for (let i = 0; i < allPopups.length; i++) {
                    allPopups[i].classList.remove('air-popup_active');
                }
            }
            function closeAirConteiner() {
                let airConteier = document.querySelector('.air-conteiner');
                airConteier.classList.remove('air-conteiner_active');
            }
        }

    }
    popupAir()
    //popups end

    //video onload
    function videoLoad() {
        let videoBtn = document.querySelectorAll('.video-btn');
        for (let i = 0; i < videoBtn.length; i++) {
            videoBtn[i].addEventListener('click', function () {
                let videoUrl = this.getAttribute('data-video-src');
                let closeVideoBtn = document.querySelector('.video-popup').closest('.popup-air').querySelector('.air-close');
                document.querySelector('.video-popup iframe').setAttribute('src', videoUrl)
                closeVideoBtn.addEventListener('click', function () {
                    setTimeout(function () {
                        document.querySelector('.video-popup iframe').setAttribute('src', '')
                    }, 800)
                });
                window.addEventListener('click', e => { // при клике в любом месте окна браузера
                    const target = e.target // находим элемент, на котором был клик
                    if (!target.closest('.popup-air') && !target.closest('.air-open-btn')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
                        document.querySelector('.video-popup iframe').setAttribute('src', '')
                    }
                })
            })
        }
    }
    videoLoad()


    //tab card select
    function tabChange() {
        let nav = document.querySelectorAll('.card-dop-sec__nav-line li')
        let ements = document.querySelectorAll('.card-dop-sec__tab')

        for (let i = 0; i < nav.length; i++) {
            nav[i].addEventListener('click', function () {
                for (let x = 0; x < nav.length; x++) {
                    nav[x].classList.remove('card-dop-sec__nav-line_active')
                    ements[x].classList.remove('card-dop-sec__tab_active')
                }
                nav[i].classList.add('card-dop-sec__nav-line_active')
                ements[i].classList.add('card-dop-sec__tab_active')
            })

        }
    }
    tabChange()


    //catalog change vieved
    function changeVievedCatalog() {
        let allBtn = document.querySelectorAll('.catalog-sec__control-btn')
        let catalog = document.querySelector('.catalog-sec')
        if (catalog != null) {
            allBtn[0].addEventListener('click', function () {
                allBtn[0].classList.add('catalog-sec__control-btn_active')
                allBtn[1].classList.remove('catalog-sec__control-btn_active')
                catalog.classList.add('element-3-line')
            })
            allBtn[1].addEventListener('click', function () {
                allBtn[1].classList.add('catalog-sec__control-btn_active')
                allBtn[0].classList.remove('catalog-sec__control-btn_active')
                catalog.classList.remove('element-3-line')
            })
        }
    }
    changeVievedCatalog()


}, false);



function selectLocationLoad() {
    let allLocation = document.querySelectorAll('.location-select__location-body ul li')
    if (allLocation.length > 0) {

        for (let x = 0; x < allLocation.length; x++) {
            //ценьрируем карту при клике по выбраному сервису
            allLocation[x].addEventListener('click', function () {
                let currentMapData = {
                    latServ: allLocation[x].getAttribute('data-lat'),
                    lngServ: allLocation[x].getAttribute('data-lng'),
                }
                let statusElement = true;

                initMap(currentMapData, statusElement)
            })
        }
    }

}
selectLocationLoad()

//gogle map init
function initMap(currentMapData, statusElement) {
    if (document.getElementById('map1') != null) {

        let mainLat = 59.92759903686107;
        let mainLng = 30.36016410248643;

        if (statusElement != false) {
            if (currentMapData != undefined) {
                mainLat = +currentMapData.latServ;
                mainLng = +currentMapData.lngServ
            }
            else {
                mainLat = 59.92759903686107;
                mainLng = 30.36016410248643;
            }
        }
        else {
            mainLat = 59.92759903686107;
            mainLng = 30.36016410248643;
        }


        let locationSelet = document.querySelector('.location-select')
        let allLocation = locationSelet.querySelectorAll('.location-select__location-body ul li')
        let allLocationData = []
        for (let i = 0; i < allLocation.length; i++) {
            let dataLat = allLocation[i].getAttribute('data-lat')
            let dataLng = allLocation[i].getAttribute('data-lng')
            let nameLocation = allLocation[i].innerHTML
            let nevLocation = { lat: dataLat, lng: dataLng, titleLocation: nameLocation }
            allLocationData.push(nevLocation)
        }
        console.log(allLocationData)

        var map = new google.maps.Map(document.getElementById('map1'), {
            center: { lat: mainLat, lng: mainLng },
            zoom: 13,
            panControl: false,
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            overviewMapControl: false,
            rotateControl: false,
            styles: [
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "saturation": 36
                        },
                        {
                            "color": "#333333"
                        },
                        {
                            "lightness": 40
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
                        }
                    ]
                },
                {
                    "featureType": "administrative.locality",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "color": "#bd081c"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dedede"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e9e9e9"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                }
            ]
        });

        for (let i = 0; i < allLocationData.length; i++) {
            // создаем макреры
            let marker = new google.maps.Marker({
                map: map,
                position: { lat: +allLocationData[i].lat, lng: +allLocationData[i].lng },
                title: allLocationData[i].titleLocation,
                icon: {
                    url: "img/_src/map-logo.svg",
                    //scaledSize: new google.maps.Size(127, 127)
                }
            });
            let info = new google.maps.InfoWindow({
                content: '<h2 class="map_title">' + allLocationData[i].titleLocation + '</h2>'
            });


            marker.addListener('click', function () {
                info.open(map, marker);
            });
        }

    }

    // map.setOptions({ styles: styles });
}
initMap()




//yandex map init
function initYandexMap() {
    let mapBox = document.querySelector('#map')
    if (mapBox != null) {
        function init() {
            let map = new ymaps.Map('map', {
                center: [55.71781924074202, 49.57131739236357],
                zoom: 10,
            });
            let placemark = new ymaps.Placemark([55.71781924074202, 49.57131739236357], {
                iconCaption: 'Астрахань',
                balloonContentHeader: 'Центр продаж для косметологов “Expert Beauty”',
                balloonContentBody: 'Адрес: 414000, Астраханская обл, г Астрахань, пл Джона Рида, 7 к 1, 1 этаж.',
                balloonContentFooter: 'Тел./Востап:+79171775247',
            }, {

            });
            let placemark_1 = new ymaps.Placemark([56.0144385687162, 92.85332649999998], {
                iconCaption: 'Красноярск',
                balloonContentHeader: 'Институт научной красоты “Армира”',
                balloonContentBody: 'Адрес: 660017, Красноярский край, г Красноярск, ул Обороны, 3',
                balloonContentFooter: 'Тел./Востап: +79535870092',
            }, {

            });
            let placemark_2 = new ymaps.Placemark([55.79331306895398, 37.59127849999993], {
                iconCaption: 'Москва',
                balloonContentHeader: '«Московский центр дополнительного образования»',
                balloonContentBody: ' Адрес: 127018, г Москва, ул Сущёвский Вал, 5 стр 3',
                balloonContentFooter: 'Тел./Востап: +74951907990',
            }, {

            });
            let placemark_3 = new ymaps.Placemark([55.6442365690773, 37.52651899999998], {
                iconCaption: 'Москва',
                balloonContentHeader: '«Клиника аппаратной косметологии Laser Love»',
                balloonContentBody: ' Адрес: 117485, г Москва, ул Профсоюзная, 102А',
                balloonContentFooter: 'Тел./Востап: +79858200013',
            }, {

            });
            let placemark_4 = new ymaps.Placemark([53.20012307121565, 50.19365399999998], {
                iconCaption: 'Самара',
                balloonContentHeader: 'ООО " Проф Универсал"',
                balloonContentBody: 'Адрес: 443067, Самарская обл, г Самара, ул Гагарина, 85',
            }, {

            });
            let placemark_5 = new ymaps.Placemark([43.57288157454244, 39.732601499999916], {
                iconCaption: 'Сочи',
                balloonContentHeader: 'ООО "БьютиПрофЛайт"',
                balloonContentBody: 'Адрес: 354002, Россия, Краснодарский край, г Сочи, ул Комсомольская, 1',
                balloonContentFooter: 'Тел./Востап: 89193292953',
            }, {

            });
            let placemark_6 = new ymaps.Placemark([45.254957574570795, 38.127177499999995], {
                iconCaption: 'Славянск-на-Кубани',
                balloonContentHeader: 'Центр эстетики и косметологии «Красивые люди»',
                balloonContentBody: '353560, Россия, Краснодарский край, Славянский р-н, г Славянск-на-Кубани, ул Победы, 265',
                balloonContentFooter: 'Тел./Востап:+79184484020',
            }, {

            });
            let placemark_7 = new ymaps.Placemark([54.73365006996408, 55.98667349999987], {
                iconCaption: 'Уфа',
                balloonContentHeader: 'ООО "Камви"',
                balloonContentBody: 'Адрес: 450078, Россия, Респ Башкортостан, г Уфа, ул Владивостокская, 12',
                balloonContentFooter: 'Тел./Востап: 89872549698',
            }, {

            });
            map.geoObjects.add(placemark);
            map.geoObjects.add(placemark_1);
            map.geoObjects.add(placemark_2);
            map.geoObjects.add(placemark_3);
            map.geoObjects.add(placemark_4);
            map.geoObjects.add(placemark_5);
            map.geoObjects.add(placemark_6);
            map.geoObjects.add(placemark_7);
        }

        ymaps.ready(init);
    }

}

initYandexMap()





