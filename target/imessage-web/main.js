/**
 * Created by yuanlin.su on 14-3-8.
 */
require.config({
    paths:{
        angular:'vendor/angular.min',
        jquery:'vendor/jquery',
        domReady:'vendor/require/domReady',
        twitter:'vendor/bootstrap',
        angularResource:'vendor/angular-resource.min'
    },
    shim:{
        'twitter/js/bootstrap':{
            deps:['jquery/jquery']
        },
        'angular':{
            deps:['jquery/jquery','twitter/js/bootstrap'],
            exports:'angular'
        },
        angularResource:{
            deps:['angular']
        }
    }
});

require([
    'app',
    'bootstrap',//angular的bootstrap
    'controllers/mainControllers',
    'services/searchServices',
    'directives/ngbkFocus'
    //维护区域  所有控制器，指令 过滤器 写到这里
    ],
    function(angular,app){
        'user static';

        app.config(['$routeProvider',function($routeProvider){
            //定义路由
        }]);
    }
);
