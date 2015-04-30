define("api:widget/detail/comment.js",function(t,e){function a(){r.ajaxGet("/astore/servicelabelstat",{serviceId:$("#js-service-detail").attr("data")},function(t){for(var e=[],a=0,s=t.positiveLabels,n=s.length;n>a;a++)e.push('<li class="comment-tag-item comment-good text-overflow-fix fl js-tag" data="'+s[a].id+'">'+s[a].name+"&nbsp;("+s[a].count+')<i class="icon-select"></i></li>');$("#js-comment-tag-good").html(e.join("")),e=[];for(var a=0,s=t.negativeLabels,n=s.length;n>a;a++)e.push('<li class="comment-tag-item comment-bad text-overflow-fix fl js-tag" data="'+s[a].id+'">'+s[a].name+"&nbsp;("+s[a].count+')<i class="icon-select"></i></li>');$("#js-comment-tag-bad").html(e.join(""))},function(t){r.error(t)},function(){r.error("请求服务评论标签失败")})}function s(){$("#js-add-comment-block").on("click",".js-tag",function(){var t=$(this).hasClass("selected"),e=$(this).index();t?$(this).removeClass("selected"):($(this).addClass("selected"),$(this).closest(".comment-tag-list").siblings(".comment-tag-list").find(".comment-tag-item").eq(e).removeClass("selected"))})}function n(){function t(){return r.empty_check(s,n,"评论内容不能为空")}function e(){return t()}var s=$("#js-user-comment"),n=$("#js-add-comment-error"),i=$("#js-add-comment-btn");s.on("blur",function(){t()}),i.on("click",function(){var t=$(this),n=$("#js-add-comment-block .js-tag.selected"),i=[];if(!t.hasClass("disabled")&&e()){for(var c=0,o=n.length;o>c;c++)i.push(n.eq(c).attr("data")-0);t.addClass("disabled btn-gray").text("提交中..."),r.ajaxPost("/astore/servicecommentadd",{serviceId:$("#js-service-detail").attr("data"),labels:i,commentContent:$.trim(s.val())},function(){r.succ("提交成功",function(){l(),a(),s.val("")})},function(t){r.error(t)},function(){r.error("提交失败")},function(){t.removeClass("disabled btn-gray").text("发表评论")})}})}function i(t){return'<li class="reply-item clearfix" data="'+t.id+'" data-u="'+t.uid+'" data-box><div class="reply-avator fl"><img src="'+t.headImg+'" alt="'+t.nickName+'" width="50" height="50"></div><div class="reply-info fl"><div class="reply-overview"><span>'+t.nickName+"&nbsp;回复&nbsp;"+t.pnickName+'</span><span class="ml20 c_999">'+r.dateFormat(t.ctime)+'</span><span class="comment-icon reply-icon mr10"></span><a class="comment-reply js-reply" href="javascript: void 0" data-type="sub-reply">回复</a></div><p class="reply-cont mt5">'+t.commentContent+'</p><div class="js-reply-block reply-block"></div></div></li>'}function l(t){r.ajaxGet("/astore/servicecommentlist",{serviceId:$("#js-service-detail").attr("data"),pageNum:t||1},function(t){var e=[];if(t&&t.listInfo&&t.listInfo.length&&t.pageInfo){for(var a=0,s=t.listInfo,n=s.length;n>a;a++){if(e.push('<li class="comment-item clearfix" data="'+s[a].id+'" data-u="'+s[a].uid+'"><div class="user-avator fl"><img src="'+s[a].headImg+'" alt="'+s[a].nickName+'" width="80" height="80"></div><div class="comment-detail fl"><div class="comment-topic" data-box><div class="comment-topic-main clearfix"><div class="comment-intro fl"><span class="user-name">'+s[a].nickName+'</span><span class="c_999 ml20">'+r.dateFormat(s[a].ctime)+'</span></div><div class="comment-statis fr js-opt '+(s[a].isUp?"greated":"")+'"><span class="comment-icon great-icon mr10 js-great"></span><span class="comment-great-count">('+s[a].upTimes+')</span><span class="comment-icon reply-icon mr10"></span><a class="comment-reply js-reply" href="javascript: void 0" data-type="reply">回复</a></div></div><p class="comment-desc word-break">'+s[a].commentContent+"</p>"),s[a].labels){if(e.push('<ul class="comment-tag-list clearfix">'),s[a].labels.positiveLabels)for(var l=0,c=s[a].labels.positiveLabels,o=c.length;o>l;l++)e.push('<li class="comment-tag-item comment-good fl">'+c[l].name+"</li>");if(s[a].labels.negativeLabels)for(var m=0,d=s[a].labels.negativeLabels,p=d.length;p>m;m++)e.push('<li class="comment-tag-item comment-bad fl">'+d[m].name+"</li>");e.push("</ul>")}if(e.push('<div class="js-reply-block reply-block"></div>'),e.push("</div>"),e.push('<ul class="reply-list js-reply-list">'),s[a].subCommentList)for(var f=0,u=s[a].subCommentList,v=u.length;v>f;f++)e.push(i(u[f]));e.push("</ul>"),e.push("</div></li>")}$("#js-comment-count, #js-basic-comment-count").text(t.pageInfo.totalRecord),$("#js-comment-list").html(e.join("")),t.pageInfo.totalPage>1?$("#js-pager").html(r.pager(t.pageInfo.currentPage,t.pageInfo.totalPage)).show():$("#js-pager").hide()}else $("#js-comment-list").empty(),$("#js-pager").hide()},function(t){r.error(t)},function(){r.error("请求评论列表失败")})}function c(){$("#js-comment-list").on("click",".js-great",function(){var t=$(this),e=t.closest(".comment-item").attr("data"),a=t.closest(".js-opt");a.hasClass("greated")||a.hasClass("disabled")||(a.addClass("disabled"),r.ajaxPost("/astore/servicecommentup",{commentId:e,serviceId:$("#js-service-detail").attr("data")},function(e){a.addClass("greated"),t.siblings(".comment-great-count").text("("+e.uptimes+")")},function(t){r.error(t)},function(){r.error("赞操作失败")},function(){a.removeClass("disabled")}))}).on("click",".js-reply",function(t){t.preventDefault();var e=$(this).closest("[data-box]").find(".js-reply-block");e.data("replyTarget",$(this)),e.find("textarea").length||e.html('<textarea class="js-reply-content reply-content mt20" data-validate-params="required" maxlength="300"></textarea><div class="reply-opt mt20 clearfix"><span class="js-reply-btn opt-btn btn-blue add-reply-btn fr">回复</span><a href="javascript:void 0" class="reply-cancel fr c_999" data-cancel-reply>取消</a><span class="error fl js-reply-error"></span></div>')}).on("click","[data-cancel-reply]",function(t){t.preventDefault();var e=$(this).closest(".js-reply-block"),a=e.find(".js-reply-content"),s=$.trim(a.val());s.length?r.confirm('<p class="modal_alert_desc">确定要放弃当前输入的内容吗？</p>',{yes_callback:function(){e.empty()}}):e.empty()}).on("click",".js-reply-btn",function(){var t=$(this);if(!t.hasClass("disabled")){var e=t.closest(".js-reply-block"),a=e.find(".js-reply-content"),s=e.data("replyTarget"),n=e.find(".js-reply-error"),i=s.closest(".comment-item"),c=(i.find(".js-reply-list"),"sub-reply"===s.attr("data-type")),o=c?s.closest(".reply-item"):null,m=$("#js-pager").length?+$("#js-pager .active").text():1,d=r.basicValidateEvent(a,n);d()&&(t.addClass("disabled").text("提交中..."),r.ajaxPost("/astore/servicecommentadd",{serviceId:$("#js-service-detail").attr("data"),pid:c?o.attr("data"):i.attr("data"),commentContent:$.trim(a.val())},function(){r.succ("提交成功",function(){l(m)})},function(t){r.error(t),"主贴已经被删除"===t&&l(m)},function(){r.error("提交失败")},function(){t.removeClass("disabled").text("回复")}))}})}function o(){$("#js-pager").on("click",".js-pager-link",function(t){t.preventDefault(),l($(this).attr("data"))})}var r=t("common:static/js/modules/util.js");e.init=function(){a(),s(),n(),l(),c(),o()}});