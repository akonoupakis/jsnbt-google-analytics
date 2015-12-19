var app = null;

module.exports = {

    domain: 'gAnalytics',

    init: function (application) {
        app = application;
    },

    getName: function () {
        return require('../../package.json').name;
    },

    getVersion: function () {
        return require('../../package.json').version;
    },

    getConfig: function () {
        return require('../cfg/config.js');
    },
    
    view: {

        preparse: function (server, ctx, preparsingContext, next) {
            
            ctx.db.settings.getCached({
                domain: 'gAnalytics'
            }, function (err, results) {
                if (err) {
                    next(preparsingContext);
                }
                else {
                    var settings = results.length > 0 ? results[0] : undefined;
                    if (settings && settings.data && settings.data.code && settings.data.code !== '' && settings.data.enabled === true) {

                        preparsingContext.model.gAnalyticsCode = settings.data.code;
                        preparsingContext.tmpl = preparsingContext.tmpl.replace('</body>', "\
                        <script type=\"text/javascript\">\n\
                            var _gaq = _gaq || [];\n\n\
                            _gaq.push(['_setAccount', '<%= gAnalyticsCode %>']);\n\
                            _gaq.push(['_trackPageview']);\n\
                    \n\
                            (function() {\n\
                                var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;\n\
                                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';\n\
                                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);\n\
                            })();\n\
                        </script>\n\
                    </body>");

                        next(preparsingContext);
                    }
                    else {
                        next(preparsingContext);
                    }
                }
            });

         
        },

        postparse: function (server, ctx, postparsingContext, next) {
            next(postparsingContext);
        }

    }

};