define("help:widget/detail/feedback.js",function(e,n){function t(){function e(){return a.empty_check(n,t,"反馈内容不能为空")}var n=$("#js-feedback"),t=$("#js-feedback-error"),c=$("#js-add-feedback-btn");n.on("blur",function(){e()}),c.on("click",function(){var t=$(this);!t.hasClass("disabled")&&e()&&(t.addClass("disabled btn-gray").text("提交中..."),a.ajaxPost("/astore/feedbackadd",{feedbackContent:$.trim(n.val())},function(){n.val(""),a.succ("提交成功")},function(e){a.error(e)},function(){a.error("提交失败")},function(){t.removeClass("disabled btn-gray").text("提交")}))})}var a=e("common:static/js/modules/util.js");n.init=function(){t()}});