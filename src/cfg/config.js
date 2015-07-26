module.exports = {
    
    sections: [{
        name: 'gAnalytics',
        roles: ['sa']
    }],

    scripts: [{
        name: 'admin-app',
        items: [
            '/admin/js/gAnalytics/app/main.js',
            '/admin/js/gAnalytics/app/controllers/GAnalyticsController.js'
        ]
    }]

};