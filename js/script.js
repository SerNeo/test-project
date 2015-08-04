jQuery(document).ready(function($) {
    var screenRes = $(window).width();

    // Remove outline in IE
    $("a, input, textarea").attr("hideFocus", "true").css("outline", "none");

    // prevent links with # jump to top on click
    $('a[href="#"]').click(function(e){
        e.preventDefault();
    });

    // mobile menu
    $('.menu-btn, .bg-overlay').click(function(){
        $('.container-wrap').toggleClass('menu-opened');
    });

    // tabs
    $('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = $(this).attr('href');

        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).show().siblings().hide();

        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });

    // gender select
    if ($(".field-gender").length) {
        $(".field-gender > .gender-select").click(function(){
            var inputValue = $(this).data("input-value");
            $(this).parent().find(".gender-select").removeClass("selected");
            $(this).parent().find(".select-value").val(inputValue);
            $(this).addClass("selected");
        });
    }
    
});