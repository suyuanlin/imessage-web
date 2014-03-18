/**
 * Created by yuanlin.su on 14-3-8.
 * 定义angular应用
 */
define(['angular','angularResource','controllers/controllers','services/services','filters/filters',
    'directives/directives'],function(angular){
    return angular.module('MyApp',['ngResource','controllers','services','filters','directives']);
});
