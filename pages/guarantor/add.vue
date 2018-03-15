<template>
  <div>
    <el-form class='pch-form' ref="form" :inline="true" label-position="right" label-width='130px'>
      <!-- <el-form ref="form" :inline="true" :model="form" label-position="right" @submit.prevent="validateBeforeSubmit"> -->
      <titleField>
        <h1 slot='title' class="leg-text">开户</h1>
        <div slot='con'>
          <el-row :gutter="24">
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="担保方编码" for="code">
                <el-input :disabled="true" v-model="code" name="code" type="text" placeholder="担保方编码"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="担保方名称" for="name" :class="{ 'vee-control': true }">
                <el-input v-model="form.name" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('name') }" name="name" type="text" placeholder="担保方名称"></el-input>
                <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="类型" for="type" :class="{ 'vee-control': true }">
                <el-select clearable v-model="form.type" placeholder="请选择" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('type') }" name="type">
                  <el-option v-for="item in typeOption" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
                <span v-show="errors.has('type')" class="help is-danger">{{ errors.first('type') }}</span>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="证件类型" for="cardType" :class="{ 'vee-control': true }">
                <el-select clearable v-model="form.cardType" placeholder="请选择" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('cardType') }" name="cardType">
                  <el-option v-for="item in typeOption" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
                <span v-show="errors.has('cardType')" class="help is-danger">{{ errors.first('cardType') }}</span>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="证件号码" for="cardNo" :class="{ 'vee-control': true }">
                <el-input v-model="form.cardNo" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('cardNo') }" name="cardNo" type="text" placeholder="证件号码"></el-input>
                <span v-show="errors.has('cardNo')" class="help is-danger">{{ errors.first('cardNo') }}</span>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="营业起始日" for="businessStartDate" :class="{ 'vee-control': true }">
                <el-date-picker @change='changedate' v-model="form.businessStartDate" type="date" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('businessStartDate') }" name="businessStartDate" placeholder="营业起始日"></el-date-picker>
                <span v-show="errors.has('businessStartDate')" class="help is-danger">{{ errors.first('businessStartDate') }}</span>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="营业到期日" for="businessEndDate" :class="{ 'vee-control': true }">
                <el-date-picker v-model="form.businessEndDate" type="date" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('businessEndDate') }" name="businessEndDate" placeholder="营业到期日"></el-date-picker>
                <span v-show="errors.has('businessEndDate')" class="help is-danger">{{ errors.first('businessEndDate') }}</span>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="合作开始日" for="cooperativeStartDate" :class="{ 'vee-control': true }">
                <el-date-picker v-model="form.cooperativeStartDate" type="date" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('cooperativeStartDate') }" name="cooperativeStartDate" placeholder="合作开始日"></el-date-picker>
                <span v-show="errors.has('cooperativeStartDate')" class="help is-danger">{{ errors.first('cooperativeStartDate') }}</span>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="合作到期日" for="cooperativeEndDate" :class="{ 'vee-control': true }">
                <el-date-picker v-model="form.cooperativeEndDate" type="date" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('cooperativeEndDate') }" name="cooperativeEndDate" placeholder="合作到期日"></el-date-picker>
                <span v-show="errors.has('cooperativeEndDate')" class="help is-danger">{{ errors.first('cooperativeEndDate') }}</span>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="电子邮件" for="email" :class="{ 'vee-control': true }">
                <el-input v-model="form.email" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="电子邮件"></el-input>
                <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="注册资本(万美金)" for="regCapital" :class="{ 'vee-control': true }">
                <el-input v-model="form.regCapital" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('regCapital') }" name="regCapital" type="text" placeholder="注册资本(万美金)"></el-input>
                <span v-show="errors.has('regCapital')" class="help is-danger">{{ errors.first('regCapital') }}</span>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8" class='pch-area'>
              <el-form-item label="注册地址" for="addressValidate" :class="{ 'vee-control': true }">
                <no-ssr>
                  <v-distpicker :placeholders="placeholders" :province="form.province" :city="form.city" :area="form.area" @selected="changeSelect"></v-distpicker>
                </no-ssr>
                <input type="hidden" v-model="addressValidate" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('addressValidate') }" name="addressValidate">
                <span v-show="errors.has('addressValidate')" class="help is-danger">{{ errors.first('addressValidate') }}</span>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6" class='pch-address'>
              <el-form-item for="address">
                <el-input v-model="form.address" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('address') }" name="address" type="text" placeholder="详细注册地址"></el-input>
                <span v-show="errors.has('address')" class="help is-danger">详细注册地址不能为空</span>
              </el-form-item>
            </el-col>
            <!--    <input placeholder="请输入手机号" v-validate="'required'" :name="`lender.contactsList${form.ccc}.utype`" v-model="form.address">
            <span v-show="errors.has(`lender.contactsList${form.ccc}.utype`)" class="errors-tip is-danger">不能为空</span> -->
          </el-row>
        </div>
      </titleField>
      <titleField>
        <h1 slot='title' class="leg-text">联系人信息</h1>
        <div slot='con'>
          <el-table :data="form.contactsList" style="width: 100%" class='pch-table' stripe>
            <el-table-column prop="realName" label="姓名" width="250">
              <template slot-scope="scope">
                <div :class="{ 'vee-control': true }">
                  <el-input v-model="scope.row.realName" placeholder="请输入内容" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has(`form.contactsList${scope.row.index}.realName`) }" :name="`form.contactsList${scope.row.index}.realName`"></el-input>
                  <span class="help is-danger" v-show="errors.has(`form.contactsList${scope.row.index}.realName`)">请输入姓名</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="mobile" label="联系电话" width="250">
              <template slot-scope="scope">
                <el-input v-model="scope.row.mobile" placeholder="请输入内容" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has(`form.contactsList${scope.row.index}.mobile`) }" :name="`form.contactsList${scope.row.index}.mobile`"></el-input>
                <span class="help is-danger" v-show="errors.has(`form.contactsList${scope.row.index}.mobile`)">请输入联系电话</span>
              </template>
            </el-table-column>
            <el-table-column prop="email" label="电子邮箱" width="250">
              <template slot-scope="scope">
                <el-input v-model="scope.row.email" placeholder="请输入内容" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has(`form.contactsList${scope.row.index}.email`) }" :name="`form.contactsList${scope.row.index}.email`"></el-input>
                <span class="help is-danger" v-show="errors.has(`form.contactsList${scope.row.index}.email`)">请输入电子邮箱</span>
              </template>
            </el-table-column>
            <el-table-column prop="remark" label="备注" width="250">
              <template slot-scope="scope">
                <el-input v-model="scope.row.remark" placeholder="请输入内容" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has(`form.contactsList${scope.row.index}.remark`) }" :name="`form.contactsList${scope.row.index}.remark`"></el-input>
                <span class="help is-danger" v-show="errors.has(`form.contactsList${scope.row.index}.remark`)">请输入备注</span>
              </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="150">
              <template slot-scope="scope">
                <el-button @click="removeRow(scope)" type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class='pch-wrap-btns pull-right'>
            <el-button class='blue-md-btn ' type="text" size="small" @click="addRow">新增一行</el-button>
          </div>
        </div>
      </titleField>
      <titleField>
        <h1 slot='title' class="leg-text">管理员信息</h1>
        <div slot='con'>
          <el-row :gutter="24">
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="手机号码" for="phone" :class="{ 'vee-control': true }">
                <el-input placeholder="请输入内容" v-model="user.phone" class="input-with-select" v-validate="'required|mobile'" :class="{'input': true, 'is-danger': errors.has('phone') }" name='phone'>
                  <el-button slot="append" icon="el-icon-search" @click='searchAdmin'></el-button>
                </el-input>
                <span v-show="errors.has('phone')" class="help is-danger">{{ errors.first('phone') }}</span>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="姓名" for="adname" :class="{ 'vee-control': true }">
                <el-input v-model="user.adname" disabled v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('adname') }" name="adname" type="text" placeholder="姓名"></el-input>
                <span v-show="errors.has('adname')" class="help is-danger">请输入姓名</span>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
      </titleField>
      <titleField>
        <h1 slot='title' class="leg-text">上传营业执照</h1>
        <div slot='con'>
          <div class='pch-upload-sign' :class="{ 'vee-control': true }">
            <el-upload :action="uploadImgurl" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :show-file-list='true' :multiple='true' :auto-upload='true' :on-success='uploadSuccess' :file-list='attachments'>
              <i class="el-icon-plus"></i>
            </el-upload>
            <input type="hidden" v-model="uploadimgs" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('uploadimgs') }" name="uploadimgs">
            <span v-show="errors.has('uploadimgs')" class="help is-danger">至少上传一张营业执照</span>
          </div>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
          <div class='pch-bottom-btns'>
            <el-button class='default-big-btn' type="primary" @click="onSubmit">完成</el-button>
          </div>
        </div>
      </titleField>
    </el-form>
    <!-- 新增管理员modal -->
    <no-ssr>
      <modal name="hello-world" width="800px" height="auto" class='pch-form-modal' :clickToClose="false">
        <h3 class="pch-modal-title">新增管理员</h3>
        <formGenerators :formData="formData">
          <div slot="pch-modal-footer">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
              <div class="pch-modal-btns">
                <el-button class='default-sm-btn ' type="text" size="small" @click="qr">提交</el-button>
                <el-button class='blue-sm-btn ' type="text" size="small" @click="hideModal">取消</el-button>
              </div>
            </el-col>
          </div>
        </formGenerators>
      </modal>
    </no-ssr>
  </div>
</template>
<style lang="scss">
@import "./guarantor.scss"

</style>
<script>
import Vue from 'vue'
import titleField from '~/components/common/title-field/title-field'
import formGenerators from '~/components/common/vue-generators/vue-generators'
import { Validator } from 'vee-validate'
import { API_SERVER, UPLOAD_SERVER } from '~/config/config'
import { mapState } from 'vuex'
import defaultOption from '~/config/options'

let vm = new Vue()

if (process.browser) {
  var Distpicker = require('v-distpicker')
  Vue.use(Distpicker)
  Vue.component('v-distpicker', Distpicker)
}
const obj = { "province": 130000, "city": 130300, "area": 130304, "address": "12312", "regCapital": "1231", "email": "12323", "businessStartDate": "2018-03-12", "businessEndDate": "2018-03-19", "cooperativeStartDate": "2018-02-24", "cooperativeEndDate": "2018-03-22", "cardType": 20, "cardNo": "123", "type": 30, "name": "3123313123", "code": "", "fileIds": [5636] }

const zcobj = { "province": 130000, "city": 130300, "area": 130304, "address": "12312", "regCapital": "1231", "email": "12323", "businessStartDate": "2018-03-12T16:00:00.000Z", "businessEndDate": "2018-03-19T16:00:00.000Z", "cooperativeStartDate": "2018-02-24T16:00:00.000Z", "cooperativeEndDate": "2018-03-22T16:00:00.000Z", "cardType": 20, "cardNo": "123", "type": 30, "name": "额 sad sad", "code": "", "contactsList": [{ "realName": "123", "mobile": "1231", "email": "123", "remark": "123", "index": 0 }], "fileIds": [5636] }
const dictionary = {
  zh_CN: {
    custom: {
      type: {
        required: () => '请选择类型'
      },
      cardType: {
        required: () => '请选择证件类型'
      },
      businessStartDate: {
        required: () => '请选择营业起始日'
      },
      businessEndDate: {
        required: () => '请选择营业到期日',
      },
      cooperativeStartDate: {
        required: () => '请选择合作开始日'
      },
      cooperativeEndDate: {
        required: () => '请选择合作到期日'
      },
      addressValidate: {
        required: () => '请选择注册地址'
      }
    },
    messages: {
      lender: {
        // type: () => '请选择类型',
      }
    },
    attributes: {
      name: '担保方名称',
      type: '类型',
      cardType: '证件类型',
      cardNo: '证件类型号码',
      email: '电子邮件',
      regCapital: '注册资本(万美金)',
      address: '详细注册地址',
      phone: '手机号'
    }
  }
};

Validator.localize(dictionary);

export default {
  data() {
    return {
      typeOption: defaultOption.select,
      placeholders: defaultOption.placeholders,
      formData: defaultOption.formData,
      addressValidate: '',
      user: {
        phone: '',
        adname: ''
      },
      uploadImgurl: UPLOAD_SERVER,
      uploadimgs: '',
      dialogImageUrl: '',
      dialogVisible: false,
      page: '',
      pageCode: '',
      onlyCheck: false,
      code: '',
      form: {
        province: '',
        city: '',
        area: '',
        address: '',
        regCapital: '',
        email: '',
        businessStartDate: '',
        businessEndDate: '',
        cooperativeStartDate: '',
        cooperativeEndDate: '',
        cardType: '',
        cardNo: '',
        type: '',
        name: '',
        contactsList: [{
          realName: '',
          mobile: '',
          email: '',
          remark: '',
        }],
        fileIds: []
      },
      attachments: [],
    }
  },
  created() {
    this.page = this.$route.query.page
    this.addIndex()
  },
  mounted() {},
  methods: {
    changedate() {
      //日期变化
    },
    changeSelect(data) {
      //三级联动校验赋值
      console.log(data)
      this.addressValidate = [parseInt(data.province.code), parseInt(data.city.code), parseInt(data.area.code)]
    },
    addIndex() {
      //添加index用作name动态
      if (!this.form.contactsList) return false
      this.form.contactsList.map(function(el, ind) {
        if (el.index) delete el.index;
        return el.index = ind
      })
    },
    addRow() {
      //新增一行
      this.form.contactsList.push({
        realName: '',
        mobile: '',
        email: '',
        remark: '',
      })
      this.addIndex()
    },
    removeRow(data) {
      //删除行
      let index = data.$index,
        row = data.row;
      this.form.contactsList.splice(index, 1)
    },
    addAdmin(data) {
      //设置管理员
      let index = data.$index,
        row = data.row;
      this.onlyCheck = row.admin
    },
    searchAdmin() {
      if (defaultOption.phonevalidate.test(this.user.phone)) {
        this.$modal.show('hello-world');
        return false;
      }
      this.$message({
        message: '请输入正确的手机号',
        type: 'warning'
      });
    },
    handleRemove(file, fileList) {
      let id = file.response.data.id
      this.form.fileIds.remove(id)
      this.uploadimgs = this.form.fileIds
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    uploadSuccess(response, file, fileList) {
      //上传成功
      let self = this,
        id = response.data.id;
      !(id in this.form.fileIds) ? this.form.fileIds.push(id): ''
      this.uploadimgs = this.form.fileIds
      return false
      fileList.map(function(i, e) {
        self.attachments.push({
          location: response.fileUrl,
          name: response.filename,
          type: response.fileType,
          size: i.size,
          fileName: '营业执照'
        })
      })
    },
    onSubmit() {
      // zcobj
      this.$validator.validateAll().then((result) => {
        if (result) {
          [this.form.province, this.form.city, this.form.area] = this.addressValidate
          this.$store.dispatch('postGuarantorAdd', this.form);
          let url = '/guarantor/list'
          this.$router.push(url)
          return;
        }
      });
    },
    showModal() {
      this.$modal.show('hello-world');
    },
    qr() {
      this.$validator.validateAll('sss').then((result) => {
        console.log(result)
      })
    },
    hideModal() {
      this.$modal.hide('hello-world');
    },
    open5() {
      this.$alert(`<b>111</b>`, '这是标题？', {
        dangerouslyUseHTMLString: true
      });
    }
  },
  beforeCreate() {},
  components: {
    titleField,
    formGenerators
  }
}

</script>
