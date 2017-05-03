/**
 * 功能 : 封装js工具函数
 * 作者 : 卢以聪（980469887@qq.com）
 * 日期 : 2017-4-26
 * 版本 : version 1.0
 */
import $ from 'jquery'
import axios from 'axios';
var tools = (function(){
    //对外接口存储对象
    var Fn = window.Fn || {};
    //接口内部私有常量
    var httpIp = 'http://172.16.3.82:8077/api/Business';
    //封装GET请求
    Fn.HttpGet = function(opt){
        // var param = $.isPlainObject(data)?Fn.SplitJointUrlString(data):'/'+data;
        // $.ajax({url:httpIp+url+($.isPlainObject(data)?Fn.SplitJointUrlString(data):'/'+data),type:'GET',dataType:'json',success:succFn,error:errFn});
        var opts = opt || {}
        if(!opts.url) return false
        axios({
			method: opts.type || 'get',
			url: opts.url,
			params: opts.data || {},
			// headers: opts.headers || {
			//   	'Content-Type':'application/x-www-form-urlencoded'
			// },
			// `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  			// 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
			baseURL:httpIp,
			time: opts.time || 10*1000,
			responseType: opts.dataType || 'json'
		}).then(opts.succFn).catch(opts.errFn);
    }
    //封装Post请求
    Fn.HttpPost = function(url,data,succFn,errFn){
        $.ajax({url:httpIp+url,type:'POST', data : data,dataType:'json',success:succFn,error:errFn});
    }
    //封装get的请求地址栏参数拼接
    Fn.SplitJointUrlString = function(obj){
        var result = '';
        for(var key in obj){
            result = result + '&' + key + '=' + obj[key] + '';
        }
        return result.replace('&','?');
    }
    //获取地址栏参数
    Fn.GetQueryKey = function(paras){
        var url = location.href;
        var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
        var paraObj = {};
        var i,j;
        for(i = 0;j = paraString[i]; i++) {
            paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
        }
        var returnValue = paraObj[paras.toLowerCase()];
        if(typeof(returnValue) == "undefined") {
            return "";
        } else {
            if(returnValue.indexOf("#") > 0) {
                return returnValue.replace(returnValue.substring(returnValue.indexOf("#"), returnValue.length), "");
            } else {
                return returnValue;
            }
        }
    }
    //html5 localstorage写入本地储存
    Fn.SetStorageData = function(key,value){
        localStorage.setItem(key,JSON.stringify(value))
    }
    //html5 localstorage获取本地储存
    Fn.GetStorageData = function(key){
        return JSON.parse(localStorage.getItem(key))
    }
    //html5 localstorage删除本地储存
    Fn.DelStorageData = function(key){
        localStorage.removeItem(key)
    }
    //html5 localstorage清空本地储存
    Fn.ClearStorageData = function(){
        localStorage.clear()
    }
    return {
        Fn : Fn
    };
})();
//暴露接口
export default tools