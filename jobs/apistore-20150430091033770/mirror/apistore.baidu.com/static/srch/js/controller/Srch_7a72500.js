define("srch:static/js/controller/Srch.js",function(e,s){function t(){this.model=c.init(),this.init()}var c=e("srch:static/js/models/Srch.js"),i=e("common:static/js/modules/util.js");t.prototype={init:function(){var e=this;e.initEvents()},initEvents:function(){var e=this;$(".header-srch").show(),$("#js-srch-feedback").on("blur",function(){e.checkFeecback()}),$("#js-send-feedback").on("click",function(){var s=$(this);return $feedback=$("#js-srch-feedback"),s.hasClass("disabled")||!e.checkFeecback()?!1:(s.addClass("disabled btn-gray").text("提交中..."),void e.model.sendFdb(s,$feedback))}),$("#wrapper").on("change","[data-sort]",function(){var e={word:$("#header-srch").val(),isfree:$('[data-sort="is-free"]').val(),isauth:$('[data-sort="is-auth"]').val()};window.location.href="?word="+e.word+"&isFree="+e.isfree+"&isAuth="+e.isauth})},checkFeecback:function(){return i.empty_check($("#js-srch-feedback"),$("#js-feedback-error"),"请填写反馈信息")}},s.init=function(){new t}});