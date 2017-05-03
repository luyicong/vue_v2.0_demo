require('assets/css/common.css');

import Vue from 'vue';

//------ VUX UI 注册，如果不需要  VUX UI 请删除以下注册 -------
//Vue.use(AlertPlugin); //全局注册alert事件，注册之后，不需要每个页面都import alert
//Vue.use(LoadingPlugin ); //全局注册alert事件，注册之后，不需要每个页面都import alert
//--- VUX UI 注册 END --

// Vue.use(ElementUI);

// import C from './conf';
// import M from './common';
import Api from '../../api/api'
import tools from './tools/tools'

// import vueFilter from './vueFilter';

//解决click点击300毫秒延时问题
// import FastClick from 'fastclick';
// FastClick.attach(document.body);	

export default{
	Api,tools
}