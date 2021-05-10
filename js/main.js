(function ($) {

  oneHeight = function(element) {
    if(screen.width > 601 && screen.width < 1025){
      var maxheight = 0;
      element.height('auto');
      element.each(function () {
      var height = $(this).height();
        if (height > maxheight) {
          maxheight = height;
        }
      });
      element.height(maxheight);
    };
  };

  oneHeightAllRes = function(element) {
    var maxheight = 0;
    element.height('auto');
    element.each(function () {
    var height = $(this).height();
      if (height > maxheight) {
        maxheight = height;
      }
      });
    element.height(maxheight);
  };

  clickableBlock = function(element){
    if(element.length > 0){
      element.on('click', function(){
        let link = $(this).find('a');
        $(link)[0].click();
      });
    }
  };

  clickableSpecial = function(element){
    if(element.length > 0){
      element.on('click', function(){
        let link = $(this).find('.views-field-field-link-action .field-content a');
        $(link)[0].click();
      });
    }
  };

  htmlClear = function(element){
    element.html('');
  };

  elementWrapper = function(element, markup){
    element.each(function(){
      $(this).wrap(markup);
    });
  };

  parentStyling = function(element, className){
    element.parent().addClass(className);
  };

  lineBreakerFixer = function(element){
    element.each(function(){
      $(this).find('br').remove();
    });
  };

  preloader = function(){
    $('body').append('<div class="js-loader-overlay"></div>');
    $('body').append('<div class="js-loader"><div class="js-loader__bar"></div><div class="js-loader__bar"></div><div class="js-loader__bar"></div><div class="js-loader__bar"></div><div class="js-loader__bar"></div><div class="js-loader__ball"></div></div>');

    $(window).on('load', function(){
      $('body').addClass('loaded_hiding');
      window.setTimeout(function () {
        $('body').addClass('loaded');
        $('body').removeClass('loaded_hiding');
      }, 500);
    });
  };

  getscrollbarWidth = function(){
    const item = document.createElement('div');

    item.style.position = 'absolute';
    item.style.top = '-9999999px';
    item.style.width = '50px';
    item.style.height = '50px';
    item.style.overflow = 'scroll';
    item.style.visibility = 'hidden';

    document.body.appendChild(item);
    const scrollBarWidth = item.offsetWidth - item.clientWidth;
    document.body.removeChild(item);

    return scrollBarWidth;
  };

  textBlockCrop = function(element){

    element.each(function(){
      $(this).text(function(i, text) {

          if (text.length > 0 && text.length >= 70) {
            text = text.substring(0, 70);
            var lastIndex = text.lastIndexOf(" ");      
            text = text.substring(0, lastIndex) + ' [...]';
          }
          
          $(this).text(text);
      }); 
    });
  };

  langSwitcher = function(){
    let ru = $('#RUru');
    let eng = $('#ENen');

    if (window.location.href.indexOf("en.") > -1) {
      eng.closest('li').addClass('js-current-language');
      ru.closest('li').removeClass('js-current-language');
    } else {
      ru.closest('li').addClass('js-current-language');
      eng.closest('li').removeClass('js-current-language');
    };
  };

  deviceRotate = function(){
    $( window ).on( "orientationchange", function( event ) {
      location.reload();
    });    
  };

  lettersLimiter = function(element, limit){
    element.each(function(){

        $(this).text(function(i, text) {

          if (text.length > 0 && text.length >= limit) {
            text = text.substring(0, limit);
            var lastIndex = text.lastIndexOf(" ");      
            text = text.substring(0, lastIndex) + ' [...]';
          }
          
          $(this).text(text);
      }); 
      
    });
  };

  jsHover = function(element){
    if("ontouchstart" in document.documentElement) {
      console.debug('a toucn device');
    } else {
      element.on('mouseover', function(){
        $(this).addClass('js-hover');
      });
      element.on('mouseleave', function(){
        $(this).removeClass('js-hover');
      });
    };
  };

  menuCatalog = function(elementDesktop, elementMobile){
    let trigger;
    if(screen.width >= 1100){
      trigger = elementDesktop;
    } else {
      trigger = elementMobile;
    };

    let element = $('header.header .region-header');

    let body = $('body');
    let html = $('html');
    body.append('<div class="js-menu-overlay"></div>');
    let menuOverlay = $('.js-menu-overlay');

    if(element.length > 0){

      toggleCatalog = function(){
        element.toggleClass('js-catalog--opened');
        trigger.toggleClass('js-catalog--visible');
        body.toggleClass('js-menu--visible');
        html.toggleClass('js-noscroll');
      };

      trigger.on('click', function(e){
        e.preventDefault();
        toggleCatalog();
      });

      closeCatalog = function(){
        element.removeClass('js-catalog--opened');
        trigger.removeClass('js-catalog--visible');
        body.removeClass('js-menu--visible');
        html.removeClass('js-noscroll');
      };

      menuOverlay.on('click', function(){
        closeCatalog();
      });

      menuCloser = function(elem){
        let buttonMArkup = '<div class="js-menu-closer"><span class="closer-line"></span><span class="closer-line"></span></div>';
        elem.append(buttonMArkup);
        let closer = $('.js-menu-closer');
    
        closer.on('click', function(){
          closeCatalog()
        });
      };
  
      menuCloser(element);
    };
  };

  mobileMenu = function(){
    let element = $('header.header .header-container .navbar-collapse nav .region-navigation');
    let body = $('body');
    let html = $('html');

    let menuTrigger = $('.js-mobile-trigger');
    let menuOverlay = $('.js-menu-overlay');

    toggleMenu = function(){
      element.toggleClass('js-mobile-header--opened');
      menuTrigger.toggleClass('js-mobile-header--visible');
      body.toggleClass('js-menu--visible');
      html.toggleClass('js-noscroll');
    };

    menuTrigger.on('click', function(e){
      e.preventDefault();
      toggleMenu();
    });

    closeMenu = function(){
      element.removeClass('js-mobile-header--opened');
      menuTrigger.removeClass('js-mobile-header--visible');
      body.removeClass('js-menu--visible');
      html.removeClass('js-noscroll');
    };

    menuOverlay.on('click', function(){
      closeMenu();
    });

    menuCloser = function(elem){
      let buttonMArkup = '<div class="js-menu-closer"><span class="closer-line"></span><span class="closer-line"></span></div>';
      elem.append(buttonMArkup);
      let closer = $('.js-menu-closer');
  
      closer.on('click', function(){
        closeMenu()
      });
    };

    menuCloser(element);
  };

  twoElemsWrap = function(element, markup){
    element.each(function(){
      $(this).next().andSelf().wrapAll(markup);
    });
  };

  owlItemClass = function(){
    let owlDiv = $('.owl-item > div');

    owlDiv.each(function(){
      $(this).addClass('js-owl-inner');
    });
  };

  checkContent = function(element){
    element.each(function(){
      if (!$(this).text().trim().length && $(this).children().length < 1 ) {
        $(this).hide();
      };
    });
  };

  checkContentDiscount = function(element){
    element.each(function(){
      if (!$(this).text().trim().length && $(this).children().length < 1 ) {
        $(this).closest('.views-field-field-discount').hide();
        $(this).closest('.views-row').find('.views-field-field-new').addClass('js-single-notice');
      };
    });
  };

  prependElement = function(element, container){
    element.prependTo(container);
  };

  moveAccordeon = function(){
    let elems = $('.page-useful-properties .region-content .block-system .view .view-content .views-row');
    elems.each(function(){
      let heading = $(this).find('.views-field-name-1');
      let container = $(this).find('.views-field-field-composition-pic');

      heading.appendTo(container);

      container.on('click', function(){
        let thisField = $(this).closest('.views-row');
        $(this).next().slideToggle();
        $(this).toggleClass('expander--active');
        $(this).closest('.views-row').toggleClass('js-accordeon-expanded');

        thisField.siblings('.js-accordeon-expanded').each(function(){
          let anotherElementTrigger = $(this).find('.views-field-field-composition-pic');
          anotherElementTrigger.next().slideToggle();
          anotherElementTrigger.toggleClass('expander--active');
          anotherElementTrigger.closest('.views-row').toggleClass('js-accordeon-expanded');
        });
      });

    });
  };

  bgFlowers = function(){
    let bgItem = $('body > .col-sm-9 .region-content');
    bgItem.append('<div class="js-bg-flower poppy"></class>');
    bgItem.append('<div class="js-bg-flower lavender"></class>');
    bgItem.append('<div class="js-bg-flower rosemary"></class>');
    bgItem.append('<div class="js-bg-flower rose"></class>');
    bgItem.append('<div class="js-bg-flower sage"></class>');
  };

  catalogFlowers = function(){
    let bgItem = $('.header.header .header-container .navbar-collapse nav .region-header');
    bgItem.append('<div class="js-bg-flower poppy"></class>');
    bgItem.append('<div class="js-bg-flower lavender"></class>');
    bgItem.append('<div class="js-bg-flower rosemary"></class>');
    bgItem.append('<div class="js-bg-flower sage"></class>');
  };

  slickInit = function(element){
    element.slick({
      infinite: true,
      fade: false,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true,
      useCSS: false,
      speed: 250
    });
  };

  sliderAnimate = function(element){
    $('.slick-current').addClass('js-slide-animation-active');
    var slickSlides = $('.slick-slide');
    element.on('swipe', function(event, slick, currentSlide, nextSlide){
      currentSlide.removeClass('js-slide-animation-active');
      nextSlide.addClass('js-slide-animation-active');
    });
  };

  aboutPageImgCounter = function(){
    let imgField = $('.node-type-about-company .block-system .node-about-company .field-type-image .field-items');

    imgField.each(function(){
      let imgs = $(this).find('img').length;
      if(imgs > 1){
        $(this).addClass('js-about-slick');
      }
    });
  };

  owlFix = function(emptySlider){     
    emptySlider.each(function(){
      $(this).wrap('<div class="owl-item"></div>');
    });

  };

  specialsBlockHide = function(){
    let block = $('.index-specials');
    let cards = block.find('.owl-item');
    let length = cards.length;

    if(length < 1){
      block.hide();
    };
  };

  setPrice = function(){
    let pricesBlock = $('.node-type-product .block-system .node-product .group-right .field-collection-container');
    pricesBlock.append('<div class="js-price-value-folder"><span></span></div>');

    let valueFolder = $('.js-price-value-folder span');

    let blockContent = pricesBlock.find('.field-name-field-price .field-items .field-item .field-collection-view .content');

    let mass = blockContent.find('.field-name-field-volume-size');
    let price = blockContent.find('.field-name-field-price-value');

    mass.on('click', function(){
      let thisVal = $(this).closest('.content').find('.field-name-field-price-value .field-items .field-item').text()
      valueFolder.text(thisVal);

      let nameVal = $('.node-type-product .block-system .node-product .group-right .field-name-title .field-items .field-item h2').text();

      let nameHiddenInput = $('.webform-component--pole-dlya-nazvaniya-tovara input');
      let massHiddenInput = $('.webform-component--pole-dlya-obema input');

      nameHiddenInput.val(nameVal);
      massHiddenInput.val(thisVal);
    });

    $(window).on('load', function(){
      if(mass.length > 0){
        mass[0].click();
      };
    });
  };

  mapMove = function(){
    let map = $('#map');
    let body = $('body');

    if(!body.hasClass('page-node-18')){
      map.remove();
    };
    if(map.length > 0){
      map.insertBefore('.page-node-18 footer.footer');
    };
  };

  partnersForm = function(){
    let form = $('.node-type-for-partners .region-form .block-webform form');
    let agreement = $('.node-type-for-partners .region-form .block-webform form .form-item-submitted-agree');
    let name = $('.node-type-for-partners .region-form .block-webform form .form-item-submitted-name');

    agreement.nextAll('div').andSelf().wrapAll('<section class="js-partners-form-bottom"></section>');
    name.nextAll('div').andSelf().wrapAll('<section class="js-partners-form-top"></section>');
  };

  productForm = function(){
    let form = $('.node-type-product .modal form');
    let agreement = $('.node-type-product .modal form .form-item-submitted-agree');
    let name = $('.node-type-product .modal form .form-item-submitted-imya');

    agreement.nextAll('div').andSelf().wrapAll('<section class="js-partners-form-bottom"></section>');
    name.nextAll('div').andSelf().wrapAll('<section class="js-partners-form-top"></section>');
  };

  catalogCardMass = function(){
    let card = $('.page-taxonomy-term .region-content .block-views .view .view-content .views-row');

    card.each(function(){
      let $this = $(this);
      let massValue = $this.find('.field-name-field-volume-size .field-items .field-item').text();
      let title = $this.find('.views-field-title .field-content a');
      let titleText = title.text();

      if(massValue.length > 0){
        title.text(titleText + ', ' + massValue);
      }
    });
  };

  catalogListLengthChecker = function(){
    let list = $('header.header .header-container .navbar-collapse nav .region-header .block-taxonomy-menu-block > ul > li');
    
    list.each(function(){
      let items = $(this).children();
      if(items.length < 2){
        $(this).hide();
      }
    });
  };  

  filterUse = function(element){
    element.on('click', function(){
      $(this).find('input').click();
    });
  };

  aboutButton = function(){
    let section = $('.index-about');
    let button = section.find('.field-name-field-more a');
    let textBlock = section.find('.field-type-text-long .field-items');

    if(section.length > 0){
      button.appendTo(textBlock);
    };
  };

  spaceFix = function(element){
    element.each(function(){
      if (!$(this).text().trim().length && $(this).children().length < 1 ) {
        $(this).hide();
      };
    });
  };

  specialsFix = function(){
    let items = $('.index-specials .view .view-content .disabled .owl-item');
    let length = items.length

    if(length < 2){
      items.addClass('js-special-single');
    };
  };

  $(document).ready(function(){
    //preloader();
    mapMove();
    deviceRotate();
    owlFix($('.index-specials .view .view-content .disabled > div'));
    owlFix($('.node-type-product .region .block-views .disabled > div'));
    aboutPageImgCounter();
    jsHover($('a'));
    langSwitcher();
    owlItemClass();
    menuCatalog($('.block-menu-left ul li.first'), $('.js-catalog-trigger'));
    mobileMenu();
    clickableBlock($('.index-categories .view-composition-view .view-content .views-row'));
    twoElemsWrap($('.footer__logo'), '<div class="js-footer-col-1"></div>');
    twoElemsWrap($('footer.footer .footer__wrapper .region-footer .footer__socials p:first-child'), '<div class="js-footer-social-row"></div>');
    oneHeightAllRes($('.index-specials .view .view-content .owl-item'));
    jsHover($('.index-specials .view .view-content .owl-item'));
    clickableSpecial($('.index-specials .view .view-content .owl-item'));
    clickableSpecial($('header.header .header-container .navbar-collapse nav .region-header .block-views .view-content .views-row'));
    checkContentDiscount($('.index-catalog .view .view-content .owl-item .js-owl-inner .views-field-field-discount .field-content'));
    checkContent($('.index-catalog .view .view-content .owl-item .js-owl-inner .views-field-field-new .field-content'));
    oneHeightAllRes($('.index-catalog .view .view-content .owl-item'));
    jsHover($('.index-catalog .view .view-content .owl-item'));
    clickableBlock($('.index-catalog .view .view-content .owl-item'));
    twoElemsWrap($('.index-catalog .owl-item .views-field-field-price'), '<div class="js-price-row"></div>');
    checkContent($('.index-catalog .view .view-content .owl-item .js-owl-inner .views-field-field-comment .field-content'));
    prependElement($('.index-specials .view .view-header'), $('.index-specials'));
    bgFlowers();
    catalogFlowers();
    aboutButton();
    slickInit($('.index-about .node .content .field-type-image .field-items'));
    slickInit($('.node-type-about-company .js-about-slick'));
    jsHover($('.slick-arrow'));
    prependElement($('.index-about .block-title'), $('.index-about .node .content .field-type-text-long .field-items .field-item'));
    twoElemsWrap($('.node-type-for-partners .block-system .node-for-partners .field-name-field-subtitle'), '<div class="js-for-partners-top-block"></div>');
    moveAccordeon();
    jsHover($('.page-useful-properties .region-content .block-system .view .view-content .views-row'));
    jsHover($('header.header .header-container .navbar-collapse nav .region-header .block-views .view-content .views-row'));
    jsHover($('.node-type-product .block-system .node-product .group-right .field-collection-container .field-name-field-price .field-items .field-item .field-collection-view .content .field-name-field-volume-size .field-items .field-item'));

    checkContentDiscount($('.node-type-product .owl-item .js-owl-inner .views-field-field-discount .field-content'));
    checkContent($('.node-type-product .owl-item .js-owl-inner .views-field-field-new .field-content'));
    oneHeightAllRes($('.node-type-product .owl-item'));
    jsHover($('.node-type-product .owl-item'));
    clickableBlock($('.node-type-product .owl-item'));
    twoElemsWrap($('.node-type-product .owl-item .views-field-field-price'), '<div class="js-price-row"></div>');
    checkContent($('.node-type-product .owl-item .js-owl-inner .views-field-field-comment .field-content'));
    jsHover($('.page-taxonomy-term .region-content .block-views .view .view-content .views-row'));
    oneHeightAllRes($('.page-taxonomy-term .region-content .block-views .view .view-content .views-row'));
    twoElemsWrap($('.page-taxonomy-term .region-content .block-views .view .view-content .views-field-field-price'), '<div class="js-price-row"></div>');
    jsHover($('.page-taxonomy-term .region-content .block-views .view .view-content .views-row'));
    checkContent($('.page-taxonomy-term .region-content .block-views .view .view-content .views-row .views-field-field-comment .field-content'));
    checkContentDiscount($('.page-taxonomy-term .region-content .block-views .view .view-content .views-row .views-field-field-discount .field-content'));
    checkContent($('.page-taxonomy-term .region-content .block-views .view .view-content .views-row .views-field-field-new .field-content'));
    clickableBlock($('.page-taxonomy-term .region-content .block-views .view .view-content .views-row'));
    lineBreakerFixer($('.header-top-right'));

    slickInit($('.node-type-product .block-system .node-product .group-left .field .field-items'));
    specialsBlockHide();
    setPrice();
    catalogCardMass();
    jsHover($('.node-type-product .block-system .node-product .group-right .field-name-buy-btn button'));

    jsHover($('.page-taxonomy-term .region-content .block-views .view .view-filters form > div .views-exposed-form .views-exposed-widgets .views-exposed-widget .views-widget .form-radios .form-item'));

    productForm();
    partnersForm();
    
    jsHover($('.modal .modal-dialog .modal-content .modal-header button.close'));
    jsHover($('.form-actions button'));

    spaceFix($('.node-type-about-company .block-system .node-about-company .group-text-photo .panel-body .field-name-body .field-items .field-item div:not([class])'));

    specialsFix();
  });

  $(document).ajaxComplete(function(){
    partnersForm();
    productForm();

    jsHover($('.form-actions button'));
    jsHover($('.modal .modal-dialog .modal-content .modal-header button.close'));
    jsHover($('.page-taxonomy-term .region-content .block-views .view .view-filters form > div .views-exposed-form .views-exposed-widgets .views-exposed-widget .views-widget .form-radios .form-item'));
    jsHover($('.page-taxonomy-term .region-content .block-views .view .view-content .views-row'));
    oneHeightAllRes($('.page-taxonomy-term .region-content .block-views .view .view-content .views-row'));
    twoElemsWrap($('.page-taxonomy-term .region-content .block-views .view .view-content .views-field-field-price'), '<div class="js-price-row"></div>');
    jsHover($('.page-taxonomy-term .region-content .block-views .view .view-content .views-row'));
    checkContent($('.page-taxonomy-term .region-content .block-views .view .view-content .views-row .views-field-field-comment .field-content'));
    checkContentDiscount($('.page-taxonomy-term .region-content .block-views .view .view-content .views-row .views-field-field-discount .field-content'));
    checkContent($('.page-taxonomy-term .region-content .block-views .view .view-content .views-row .views-label'));
    checkContent($('.page-taxonomy-term .region-content .block-views .view .view-content .views-row .views-field-field-new .field-content'));
    clickableBlock($('.page-taxonomy-term .region-content .block-views .view .view-content .views-row'));
  });

})(jQuery);
