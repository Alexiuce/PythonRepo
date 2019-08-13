/** kitadmin-v2.1.8 MIT License By http://kit.zhengjinfan.cn Author Van Zheng */
;"use strict";layui.define(["jquery","utils","axios"],function(i){function e(){this.config={elem:void 0,onClicked:void 0,dynamicRender:!1,data:[],remote:{url:void 0,method:"get"},cached:!1,cacheKey:"KITADMINMENU",isJump:!0,onlyOne:!0},this.version="1.0.2"}var r=layui.jquery,l=layui.utils,s=layui.lodash,n=layui.axios,t=l.localStorage,u=".kit-menu",c=".kit-menu-item";e.prototype.set=function(i){return r.extend(!0,this.config,i),this},e.prototype.render=function(){var e=this,n=e.config;if(n.dynamicRender)if(0<n.data.length)t.setItem(n.cacheKey,a),o.renderHTML(n.elem,n.data,function(){e.bind()});else{var i=!1;if(n.cached){var a=t.getItem(n.cacheKey);null!=a&&(i=!0,o.renderHTML(n.elem,a,function(){e.bind()}))}i||o.loadData(n.remote,function(i){t.setItem(n.cacheKey,i),o.renderHTML(n.elem,i,function(){e.bind()})})}else e.bind();return e},e.prototype.bind=function(){var o=this.config;if(r(u).find(c).each(function(){var e=r(this),n=e.children("a");"kit-menu"===e.parent()[0].className&&e.attr("lay-one",!0);var a=0<e.find("ul.kit-menu-child").length;a&&n.addClass("child");var t=e.attr("lay-id");""!==t&&void 0!==t||(t=l.randomCode(),e.attr("lay-id",t)),n.off("click").on("click",function(i){if(layui.stope(i),a?(e.hasClass("layui-show")?e.removeClass("layui-show"):e.addClass("layui-show"),o.onlyOne&&e.attr("lay-one")&&e.siblings().removeClass("layui-show")):(r(u).find(c).removeClass("layui-this"),e.addClass("layui-this")),l.isFunction(o.onClicked)&&o.onClicked({elem:e,hasChild:a,data:{href:n.attr("href"),layid:t}}),!o.isJump)return!1})}),void 0!==location.hash&&""!==location.hash&&null!==location.hash){var i="#"+layui.router(location.hash).href.split("?")[0],e=r(u).find('a[href="'+i+'"]');0<e.length&&e.parents("li").each(function(){var i=r(this);i.hasClass("layui-show")||i.children("a").click()})}return this},e.prototype.removeCache=function(i){var e=this.config;i=i||e.cacheKey,l.localStorage.removeItem(i)};var o={renderHTML:function(i,e,n){var a=['<ul class="kit-menu">'];if(this.recursion(a,e,0),0<a.length){a.push("</ul>");var t=r(i);if(0===t.length)return void l.error("Menu config error:请配置elem参数.");t.html(a.join("")),l.isFunction(n)&&n()}},recursion:function(t,i,n){var o=this,a=[];s.forEach(i,function(i,e){i.pid===n&&a.push(i)}),0<a.length&&s.forEach(a,function(i){var e=i.open?"layui-show":"";t.push('<li class="kit-menu-item '+e+'">');var n=s.isEmpty(i.path)?"javascript:;":i.path;i.blank?t.push('<a href="'+n+'" target="_blank">'):t.push('<a href="'+n+'">'),t.push('<i class="layui-icon">'+i.icon+"</i> "),t.push("<span>"+i.title+"</span>"),t.push("</a>");var a=i.children;null!=a&&0<a.length&&(t.push('<ul class="kit-menu-child kit-menu-child layui-anim layui-anim-upbit">'),o.recursion(t,a,i.id),t.push("</ul>")),t.push("</li>")})},loadData:function(i,e){n(i).then(function(i){if(500===i.status)throw new Error(i.statusText);return i.data}).then(function(i){e(i)}).catch(function(i){l.error(i)})}};i("menu",new e)});
//# sourceMappingURL=menu.js.map
