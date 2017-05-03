/**
 * 功能 : 封装数据交互api接口。
 * 作者 : 卢以聪（980469887@qq.com）
 * 日期 : 2017-4-26
 * 版本 : version 1.0
 */
import tools from '../assets/js/tools/tools.js'
//数据交互api接口
var Api = (function(){
    //对外接口存储对象
    let Fn = window.Fn || {};
    //product模块接口封装
    Fn.product = {
        //获取产品
        GetProduct : function(opt,succFn,errFn){
            tools.Fn.HttpGet({url:'/Product/simpleList',data:opt.data,succFn:succFn,errFn:errFn});
            // console.log(tools.Fn.SplitJointUrlString({id:100,pid:50}));
        },
        //获取分类
        GetCategory : function(opt){
            tools.Fn.HttpGet('/Category/GetChildsOrSblings',opt.data,opt.succFn,opt.errFn);
        },
        //获取品牌
        GetBrand : function(data,succFn,errFn){
             tools.Fn.HttpGet('/Brand/GetForCategory',data,succFn,errFn);
        },
        //获取产品详情
        GetProductDetail : function(){

        }
    }
    //user用户模块
    Fn.user = {
        //注册
        Regist : function(param,succFn,errFn){
            tools.Fn.HttpPost('/Business/Account/login',data,succFn,errFn);
        },
        //登录
        Login : function(){

        }
    }
    //返回接口对象
    return {
        Fn : Fn
    }
})();
//暴露接口
export default Api