<template>
  <div>
    <titleField>
      <h1 slot='title' class="leg-text">开户</h1>
      <el-form ref="form" :inline="true" :model="form" label-position="right" label-width="80px" slot='con'>

        <el-form-item label="资方编码" for="email" :class="{ 'vee-control': true }">
          <el-input v-model="form.name" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Email"></el-input>
          <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </titleField>
  </div>
</template>
<style lang="scss">
@import "./lender.scss"

</style>
<script>
import titleField from '~/components/common/title-field/title-field'
// import {Validator} from 'vee-validate';

export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        email: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  },
  components: {
    titleField
  }
}

</script>
