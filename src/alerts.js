(function($){
    $.fn.extend({
        bs_success: function(message, title){
            var cls='alert-success';
            var html='<div class="alert '+cls+' alert-dismissable alert-success fade show"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>';
            if(typeof title!=='undefined' &&  title!==''){
                 html+='<strong>'+title+'</strong>';
            }
             html+='<span>'+' '+message+'</span></div>';
            $(this).html(html);
        },
        bs_warning: function(message, title){
            var cls='alert-warning';
            var html='<div class="alert '+cls+' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>';
            if(typeof title!=='undefined' &&  title!==''){
                html+='<h4>'+title+'</h4>';
            }
            html+='<span>'+message+'</span></div>';
            $(this).html(html);
        },
        bs_fail: function(message, title){
            var cls='alert-danger';
            var html='<div class="alert '+cls+' alert-dismissable fade show"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>';
            if(typeof title!=='undefined' &&  title!==''){
                html+='<strong>'+title+'</strong>';
            }
            html+='<span>'+' '+message+'</span></div>';
            $(this).html(html);
        }
    });
})(jQuery);

// To be refactored to use template strings and not concations 