<template>
	<div class="indexPage">
    <vhead :child-msg="msg"></vhead>
    <vindex></vindex>
    <vfoot></vfoot>
  </div>
</template>
<script>
import vhead from 'components/common/Head'
import vfoot from 'components/common/Foot'
import vindex from 'components/index/Index'
export default {
	components: {
      // 可以以key-value的形式注册组件, 此时挂载点的名字就是key
      // 否则挂载点和组件名字一致, 即vhead
      vhead,
      vfoot,
      vindex
    },
    data () {
      return {
        msg :'Top'
      }
    }
}
</script>
<style>
*{padding:0;margin:0;}
</style>
