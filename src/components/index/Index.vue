<template>
    <div class="g-content">
        <div class="u-page">
            <a href="javascript:;" v-for="item in pageCount" @click="ChangePage(item)" v-text="item" v-bind:class="{ z_sel: item===nowPage }"></a>
        </div>
        <h1 v-text="msg"></h1>
        <div v-for="item in proList.data" v-text="item.name"></div>
        <img src="../../assets/img/1.png" alt="">
    </div>
</template>
<script>
    import $ from 'jquery'
    import Lib from 'assets/js/Lib';
    export default {
        //获取从父组件传过来的数据
		//props: {
			//proList: {
				//type: Object,
				//default: {} //这样可以指定默认的值
			//}
		//},
        data () {
            return {
                msg:'This is Index Content Component!',
                proList:{},
                pageCount:0,
                nowPage:0
            }
        },
        methods:{
            //产品列表
            GetProduct:function(data){
                Lib.Api.Fn.product.GetProduct(data,(ret)=>{
                    if(ret.status == 200 && ret.data.data){
                        this.proList = ret.data;
                        this.pageCount = ret.data.paging.totalSize;
                        this.nowPage = ret.data.paging.page;
                        console.log(this.proList);
                    }
                },(error)=>{
                    console.log(error);
                });
            },
            //分页方法
            ChangePage:function(pageNum){
                this.GetProduct({
                   data:{
                        categoryId : Lib.tools.Fn.GetQueryKey('c'),
                        brandId : Lib.tools.Fn.GetQueryKey('b'),
                        page:pageNum
                   }
                });
            },
            GetCategory : function(data){
                Lib.Api.Fn.product.GetCategory(data,(ret)=>{
                    console.log(ret)
                },function(error){
                    console.log(error)
                });
            }
        },
        created:function() {
            this.GetCategory(1043);
            this.GetProduct({
                // categoryId : tools.Fn.GetQueryKey('c'),
                // brandId : tools.Fn.GetQueryKey('b'),
                // page : tools.Fn.GetQueryKey('page')
                data : {
                     categoryId : 1045,
                    brandId : 0,
                    page : 1
                    }
                });
            Lib.tools.Fn.SetStorageData('user',{username:'xiaoming',id:'1'});
            Lib.tools.Fn.SetStorageData('user1',{username:'xiaoming',id:'1'});

            // tools.Fn.DelStorageData('user');
            // tools.Fn.ClearStorageData();
            var userData = Lib.tools.Fn.GetStorageData('user');

            console.log(userData);
        }
    }
    $('body').css('background','green');
</script>
<style scoped>
	h1{
		color: rgb(5, 110, 235);
        margin:50px 0;
	}
    .u-page{
        width:600px;
        height:30px;
        margin:10px auto;
        overflow:hidden;
        padding-left:1px;
    }
     .u-page a{
         display:block;
         width:60px;
         height:28px;
         line-height:28px;
         border:1px solid #fff;
         float:left;
         margin-left:-1px;
     }
     .u-page .z_sel{
         background:#eee;
         color:#999;
     }
</style>