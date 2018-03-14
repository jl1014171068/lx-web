<template>
  <div class="vue-generators">
    
  </div>
</template>
<style lang="scss">
@import "./vue-generators.scss"

</style>
<script>
import Vue from 'vue'
import { Validator } from 'vee-validate'
let vm = new Vue()
const dictionary = {
  zh_CN: {
    custom: {
      name: {
        // required: () => '请选择注册地址'
      }
    },
    messages: {
      lender: {
        test: () => '请选择类型',
      }
    },
    attributes: {
      test: '资方名称'
    }
  }
};
Validator.localize(dictionary);
// validator.detach('test');

export default {
  props: {
    formData: {
      type: Array,
      default: () => [{
        type: 'input',
        label: '',
        name: '',
        className: '',
        data: '111',
        model: '',
        scope: '',
        disabel: false,
        defaultTip: ''
      }]
    }
  },
  data(){
    return {
      input:'1'
    }
  },
  methods: {
    onValidate() {
      this.$validator.validateAll();
      console.log(1)
    },
    onClear() {
      this.errors.clear();
    },
    openModal(){
      this.$alert('<el-input v-model="input" placeholder="请输入内容"></el-input>', '这是标题？', {
        dangerouslyUseHTMLString: true
      });
    }
  },
  created() {
      // this.openModal()
  },
  // methods: {
  //   validateChild() {
  //     Vue.$emit('validate');
  //   },
  //   clearChild() {
  //     Vue.$emit('clear');
  //   }
  // },
  // created() {
  //   Vue.$on('errors-changed', (errors) => {
  //     this.errors.clear();
  //     errors.forEach((e) => {
  //       this.errors.add(e.field, e.msg, e.rule, e.scope);
  //     });
  //   });
  // },
  watch: {
    "errors.errors" (news, old) {}
  }

}

</script>
