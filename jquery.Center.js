/*
 *@pluginName:JqueryCenter
 *@author :carlos o carvalho
 *@version:0.1
 *@description:center elements in document , ie7 > , webkit , mozila
 */
;
(function($,window, document , undefined){
    
    var pluginName  = 'jcenter',
    defaults = {
        normalize:true
    };
        
    function Plugin(element,options){
        this.element = element;
        this.options = $.extend({},defaults,options);
        this.initialize();
    }
    
    
    Plugin.prototype = {
        initialize:function(){
            var self = this;
            $(window).on('resize',function(){
                self._change_css();
            });
            //load data
            self._change_css();
        },
        _change_css:function(){
            //normaliza element display in blocks ex. div p
            if(this.options.normalize == true){
                $(this.element).css({
                    'float':'left',
                    'padding':'0'
                });
            }
            
            var eleHeight         = $(this.element).height(),
            eleWidth              = $(this.element).width(),
            rHeight               = $(window).height(),
            rWidth                = $(window).width();
          
            
            $(this.element).css({
                'position':'absolute',
                'left'    :(rWidth/ 2) - (eleWidth/2),
                'top'     :(rHeight /2)  - (eleHeight/2)
            
            })
        }
        
    }
    
    $.fn[pluginName] = function(options){
        return this.each(function(){
            if(!$.data(this,'plugin_' + pluginName)){
                $.data(this,'plugin_' + pluginName , new Plugin(this,options));
            }
        });
    }
    
})(jQuery,window,document);
