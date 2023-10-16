const element = document.querySelector('#selectCustom');
            const choices = new Choices(element, {
                searchEnabled: false,
                placeholder: false,
                placeholderValue: 'Материал',

            });
            document.querySelector('.choices__item--selectable').textContent = "Материал";

            ymaps.ready(init);
            function init() {
                var myMap = new ymaps.Map("map", {
                    center: [48.8, 2.4],
                    zoom: 12
                });

                var myPlacemark = new ymaps.Placemark([48.8, 2.4], {}, {
                    iconLayout: 'default#image',
                    iconImageHref: 'img/location.svg',
                    iconImageSize: [30, 42],

                });

                myMap.geoObjects.add(myPlacemark);
            }


            var selector = document.querySelector("input[type='tel']");
            var im = new Inputmask("+7 (999) 999-99-99");

            im.mask(selector);

            // const validation = new JustValidate('.form');

            // validation
            //     .addField('#name', [
            //         {
            //             rule: 'required',
            //             ErrorMessage: "Как вас зовут?"
            //         },
            //         {
            //             rule: 'minLength',
            //             value: 3,
            //             ErrorMessage: "Имя не может быть короче 3 символов"
            //         },
            //         {
            //             rule: 'maxLength',
            //             value: 30,
            //             ErrorMessage: "Имя не может быть длиннее 30 символов"
            //         },
            //     ])

            //     .addField('#tel', [
            //         {
            //             rule: 'required',
            //             ErrorMessage: "Вы не ввели телефон",
            //         },
            //         {
            //             function: (name, value) => {
            //                 const phone = selector.inputmask.unmaskedvalue()
            //                 return Number(phone) && phone.length === 10;
            //             },
            //             ErrorMessage: "Телефон должен содержать 10 цифр"
            //         },

            //     ])

            //     .addField('#mail', [
            //         {
            //             rule: 'required',
            //             ErrorMessage: 'Вы не ввели e-mail',
            //         },
            //         {
            //             rule: 'email',
            //             ErrorMessage: 'Вы неккоретно ввели e-mail',
            //         },
            //     ]);

            new JustValidate('.form', {
                rules: {
                    name: {
                        required: true,
                        minLength: 2,
                        maxLength: 30
                    },

                    tel: {
                        required: true,
                        function: (name, value) => {
                                            const phone = selector.inputmask.unmaskedvalue()
                                            return Number(phone) && phone.length === 10;
                                        }
                    },
                    email: {
                        required: true,
                        email: true
                    },

                },

                messages: {
                    name: {
                        required: 'Как вас зовут?',
                        minLength: 'Имя не может быть короче 3 символов"',
                        maxLength: 'Имя не может быть длиннее 30 символов'
                    },

                    tel: {
                        required: 'Вы не ввели телефон',
                        function: 'Телефон должен содержать 10 цифр'
                    },

                    email: {
                        required: 'Вы не ввели e-mail',
                        email: 'Вы неккоретно ввели e-mail'
                    },
                },
            });


                tippy('#myButton', {
                    content: 'Глава 2, страница 176',
                });