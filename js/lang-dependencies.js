
(function ($) {
    documentDownload = function(){
        let doc = $('.page-node-18 .region-content .block-system .node-contacts .field-name-field-bank-details-contacts .field-items .field-item a');
        /*
        doc.text('Скачать реквизиты');
        */
        doc.text('Download company details');


    };

    phoneInputs = function(){
                /* RU
        $('.form-item-submitted-phone input').each(function(){
            $(this).addClass('phone');
        });
        $('.phone').mask('+7 (000) 000 00 00');
        */

        $('.form-item-submitted-phone input').bind("change keyup input click", function() {
            if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
            };
        });



    };
    
    telephoneInputs = function(){

                /* RU
        $('.form-item-submitted-telefon input').each(function(){
            $(this).addClass('phone');
        });
        $('.phone').mask('+7 (000) 000 00 00');
        */

        $('.form-item-submitted-telefon input').bind("change keyup input click", function() {
            if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
            };
        });


    };

    descriptionOpener = function(){
    let description = $('.node-type-product .block-system .node-product .group-right .field-name-body');

        description.each(function(){
            let descriptionText = $(this).find('.field-items .field-item p');

            if(descriptionText.text().trim().length){
                /*
                $(this).prepend('<div class="js-description-opener"><span>Описание</span></div>');
                */
                $(this).prepend('<div class="js-description-opener"><span>Description</span></div>');
            }

        });

        $('.js-description-opener').on('click', function(){
            $(this).toggleClass('opener--clicked');
            $(this).next().slideToggle();
        });
    };


    $(document).ready(function() {
        documentDownload();
        descriptionOpener();

        phoneInputs();
        telephoneInputs();
    });

    $(document).ajaxComplete(function(){
        phoneInputs();
        telephoneInputs();
    });

})(jQuery);