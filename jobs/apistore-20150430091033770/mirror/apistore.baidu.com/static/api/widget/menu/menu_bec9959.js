define("api:widget/menu/menu.js",function(i,s){var e=i("common:static/js/modules/util.js");s.init=function(){e.mobileCheck()&&$("#js-aside").on("click",".js-navi-title",function(){var i=$(this),s=i.siblings(".js-second-list");i.hasClass("active")?(i.removeClass("active"),s.hide()):($("#js-aside .js-navi-title.active").removeClass("active"),$("#js-aside .js-second-list:visible").hide(),i.addClass("active"),s.show())})}});