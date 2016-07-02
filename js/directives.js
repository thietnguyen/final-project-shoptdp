(function(){
    var app = angular.module('revolution-directive', []);

    app.directive('headerRevolution', function(){
        return {
            restrict: 'E',
            templateUrl: 'template/header-revolution.html'
        };
    });

    app.directive('categoriesRevolution', function(){
        return {
            restrict: 'E',
            templateUrl: 'template/categories-revolution.html',
            controller: function(){
                <!--initiate accordion-->
                var menu_ul = $('.menu > li > ul'),
                    menu_a  = $('.menu > li > a');
                menu_ul.hide();
                menu_a.click(function(e) {
                    e.preventDefault();
                    if(!$(this).hasClass('active')) {
                        menu_a.removeClass('active');
                        menu_ul.filter(':visible').slideUp('normal');
                        $(this).addClass('active').next().stop(true,true).slideDown('normal');
                    } else {
                        $(this).removeClass('active');
                        $(this).next().stop(true,true).slideUp('normal');
                    }
                });
            }
        };
    });

    app.directive('footerRevolution', function(){
        return {
            restrict: 'E',
            templateUrl: 'template/footer-revolution.html'
        };
    });
})();