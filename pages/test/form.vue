<template>
  <div>
    <el-form>
      <el-row :gutter="24">
        <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6" v-for='(item, index) in formData' :key='index'>
          <el-form-item label="手机号码" for="phone" v-if="item.type === 'input'">
            <el-input v-model='item.val' name='phone'>
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: [{
        type: 'input',
        val: ''
      }, {
        type: 'radio',
        data: '111',
        process: '',
        val: ''
      }, {
        type: 'checkbox',
        data: 111,
        process: '',
        val: ''
      }]
    }
  }
}

</script>
