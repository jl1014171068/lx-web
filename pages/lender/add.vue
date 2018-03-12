<template>
  <div>
    <el-form class='pch-form' ref="form" :inline="true" :model="form" label-position="right" label-width='130px'>
      <!-- <el-form ref="form" :inline="true" :model="form" label-position="right" @submit.prevent="validateBeforeSubmit"> -->
      <titleField>
        <h1 slot='title' class="leg-text">开户</h1>
        <div slot='con'>
          <el-row :gutter="24">
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="资方编码" for="lender.code">
                <el-input :disabled="true" v-model="form.code" name="lender.code" type="text" placeholder="资方编码"></el-input>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="资方名称" for="name" :class="{ 'vee-control': true }">
                <el-input v-model="form.name" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('name') }" name="name" type="text" placeholder="资方名称"></el-input>
                <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
              </el-form-item>
            </el-col>

            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="简称" for="shortName" :class="{ 'vee-control': true }">
                <el-input v-model="form.shortName" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('shortName') }" name="shortName" type="text" placeholder="简称"></el-input>
                <span v-show="errors.has('shortName')" class="help is-danger">{{ errors.first('shortName') }}</span>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="类型" for="type" :class="{ 'vee-control': true }">
                <el-select clearable v-model="form.type" placeholder="请选择" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('type') }" name="type">
                  <el-option v-for="item in form.typeOption" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
                <span v-show="errors.has('type')" class="help is-danger">{{ errors.first('type') }}</span>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="证件类型" for="cardType" :class="{ 'vee-control': true }">
                <el-select clearable v-model="form.cardType" placeholder="请选择" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('cardType') }" name="cardType">
                  <el-option v-for="item in form.typeOption" :key="item.value" :label="item.label" :value="item.value"></el-option>
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
              <el-form-item label="营业起始日" for="bussBegin" :class="{ 'vee-control': true }">
                <el-date-picker v-model="form.bussBegin" type="date" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('bussBegin') }" name="bussBegin" placeholder="营业起始日"></el-date-picker>
                <span v-show="errors.has('bussBegin')" class="help is-danger">{{ errors.first('bussBegin') }}</span>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="营业起始日" for="bussEnd" :class="{ 'vee-control': true }">
                <el-date-picker v-model="form.bussEnd" type="date" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('bussEnd') }" name="bussEnd" placeholder="营业起始日"></el-date-picker>
                <span v-show="errors.has('bussEnd')" class="help is-danger">{{ errors.first('bussEnd') }}</span>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="合作开始日" for="togeBegin" :class="{ 'vee-control': true }">
                <el-date-picker v-model="form.togeBegin" type="date" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('togeBegin') }" name="togeBegin" placeholder="合作开始日"></el-date-picker>
                <span v-show="errors.has('togeBegin')" class="help is-danger">{{ errors.first('togeBegin') }}</span>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="合作到期日" for="togeEnd" :class="{ 'vee-control': true }">
                <el-date-picker v-model="form.togeEnd" type="date" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('togeEnd') }" name="togeEnd" placeholder="合作到期日"></el-date-picker>
                <span v-show="errors.has('togeEnd')" class="help is-danger">{{ errors.first('togeEnd') }}</span>
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
              <el-form-item label="注册地址" for="area" :class="{ 'vee-control': true }">
                <no-ssr>
                  <v-distpicker :placeholders="form.placeholders" :province="form.lender.provinceId" :city="form.lender.cityId" :area="form.lender.areaId" @selected="changeSelect"></v-distpicker>
                </no-ssr>
                <input type="hidden" v-model="form.area" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('lender.area') }" name="lender.area">
                <span v-show="errors.has('area')" class="help is-danger">{{ errors.first('area') }}</span>
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
            <el-table-column prop="utype" label="联系人类型" width="250">
              <template slot-scope="scope">
                <div :class="{ 'vee-control': true }">
                  <el-select clearable v-model="scope.row.utype" placeholder="请选择" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has(`form.contactsList${scope.row.index}.utype`) }" :name="`form.contactsList${scope.row.index}.utype`">
                    <el-option v-for="list in form.typeOption" :key="list.value" :label="list.label" :value="list.value"></el-option>
                  </el-select>
                  <span class="help is-danger" v-show="errors.has(`form.contactsList${scope.row.index}.utype`)">请选择联系人类型</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="uname" label="姓名" width="250">
              <template slot-scope="scope">
                <div :class="{ 'vee-control': true }">
                  <el-input v-model="scope.row.uname" placeholder="请输入内容" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has(`form.contactsList${scope.row.index}.uname`) }" :name="`form.contactsList${scope.row.index}.uname`"></el-input>
                  <span class="help is-danger" v-show="errors.has(`form.contactsList${scope.row.index}.uname`)">请输入姓名</span>
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
            <el-table-column prop="bak" label="备注" width="250">
              <template slot-scope="scope">
                <el-input v-model="scope.row.bak" placeholder="请输入内容" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has(`form.contactsList${scope.row.index}.bak`) }" :name="`form.contactsList${scope.row.index}.bak`"></el-input>
                  <span class="help is-danger" v-show="errors.has(`form.contactsList${scope.row.index}.bak`)">请输入备注</span>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="是否设置管理员" width="250">
              <template slot-scope="scope">
                <el-checkbox-group v-model="scope.row.admin">
                  <el-checkbox></el-checkbox>
                </el-checkbox-group>
              </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="150">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div>
        <el-button class='default-md-btn' type="text" size="small">删除</el-button>
          </div>
        </div>
      </titleField>
      <titleField>
        <h1 slot='title' class="leg-text">上传营业执照</h1>
        <div slot='con'>
          <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :show-file-list='true' :multiple='true' :auto-upload='false'>
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="form.dialogVisible">
            <img width="100%" :src="form.dialogImageUrl" alt="">
          </el-dialog>
          <el-form-item class='pch-bottom-btns'>
            <el-button class='default-md-btn' type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </div>
      </titleField>
    </el-form>
  </div>
</template>
<style lang="scss">
@import "./lender.scss"

</style>
<script>
import Vue from 'vue'
import titleField from '~/components/common/title-field/title-field'
import { Validator } from 'vee-validate'
// 
if (process.browser) {
  var Distpicker = require('v-distpicker')
  Vue.use(Distpicker)
  Vue.component('v-distpicker', Distpicker)
}

const dictionary = {
  zh_CN: {
    custom: {
      lender: {
        type: {
          required: () => '请选择类型'
        },
        cardType: {
          required: () => '请选择证件类型'
        },
        bussBegin: {
          required: () => '请选择营业起始日'
        },
        bussEnd: {
          required: () => '请选择营业到期日'
        },
        togeBegin: {
          required: () => '请选择合作开始日'
        },
        togeEnd: {
          required: () => '请选择合作到期日'
        },
        area: {
          required: () => '请选择注册地址'
        },
        utype: {
          required: () => '请选择联系人类型'
        }
      }
    },
    messages: {
      lender: {
        // type: () => '请选择类型',
      }
    },
    attributes: {
      name: '资方名称',
      shortName: '简称',
      type: '类型',
      cardType: '证件类型',
      cardNo: '证件类型号码',
      email: '电子邮件',
      regCapital: '注册资本(万美金)',
      address: '详细注册地址'
    }
  }
};

Validator.localize(dictionary);

const tableDefault = {
  index: 0,
  utype: '11',
  uname: '',
  mobile: '',
  email: '',
  bak: '',
  admin: ''
}

export default {
  data() {
    return {
      form: {
        ccc: 1,
        code: '',
        name: '',
        shortName: '',
        typeOption: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        type: '',
        cardType: '',
        cardNo: '',
        bussBegin: '',
        bussEnd: '',
        togeBegin: '',
        togeEnd: '',
        email: '',
        regCapital: '',
        options2: [{
          label: '江苏',
          cities: []
        }, {
          label: '浙江',
          cities: []
        }],
        props: {
          value: 'label',
          children: 'cities'
        },
        address: '',
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }],
        dialogImageUrl: '',
        dialogVisible: false,
        area: '',
        lender: {
          provinceId: '',
          cityId: '',
          areaId: ''
        },
        placeholders: {
          province: '请选择省',
          city: '请选择城市',
          area: '请选择区',
        },
        contactsList: [{
          utype: '',
          uname: '',
          mobile: '',
          email: '',
          bak: '',
          admin: ''
        }]
      }
    }
  },
  created() {
    this.addIndex()
  },
  mounted() {},
  methods: {
    onSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          console.log('ok?')
          return;
        }
        console.log('咋啦');
      });
    },
    handleClick(row) {
      console.log(row);
      console.log(this.form);
    },
    changeSelect(row) {
      console.log(row);
      console.log(this.form)
    },
    indexMethod(index) {
      console.log(index)
      return index;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.form.dialogImageUrl = file.url;
      this.form.dialogVisible = true;
    },
    addIndex() {
      this.form.contactsList.map(function(el, ind) {
        if (el.index) delete el.index;
        return el.index = ind
      })
    },
    addRow() {

    }
  },
  components: {
    titleField,
    // Distpicker:'v-distpicker'
    // areaSelect:'area-select'
  },
  watch: {
    'form.contactsList' (news, old) {
      console.log(news, old)
    }
  }
}

</script>
