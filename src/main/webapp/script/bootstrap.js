/**
 * Created by yuanlin.su on 14-3-8.
 * 当dom加载完后 此文件将会命令angularjs启动起来并且继续执行
 */

define(['angular','doReady'],function(angular,doReady){
    angular.bootstrap(document,['MyApp']);
});