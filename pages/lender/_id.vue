<template>
  <div class="columns is-multiline">
    123131321
  </div>
</template>
<script>
import Vue from 'vue'
import titleField from '~/components/common/title-field/title-field'
import { mapState } from 'vuex'
export default {
  validate({ params, query }) {
    // return /^\d+$/.test(params.id)
    console.log( params, query)
    return true // 如果参数有效
    // return false // 参数无效，Nuxt.js 停止渲染当前页面并显示错误页面
  },
  fetch({ store, params, error }) {
  
    return store.dispatch('getLenderDetail', params).catch(err => {
        error({ statusCode: 404, message: '众里寻他 我已不再' })
      })
  },
  data() {
    return {

    }
  },
  computed: mapState({
    // 映射 this.count 为 store.state.count
    form: state => state.lender.lists
  }),
  created() {
    console.log(this.$route.query.code)
    // console.log(params)
    // this.$store.dispatch('getLenderDetail', this.$route.query.code)
  },
  components: {
    titleField
  }
}

</script>
