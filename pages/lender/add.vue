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
              <el-form-item label="资方名称" for="lender.name" :class="{ 'vee-control': true }">
                <el-input v-model="form.name" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('lender.name') }" name="lender.name" type="text" placeholder="资方名称"></el-input>
                <span v-show="errors.has('lender.name')" class="help is-danger">{{ errors.first('lender.name') }}</span>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="简称" for="lender.shortName" :class="{ 'vee-control': true }">
                <el-input v-model="form.shortName" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('lender.shortName') }" name="lender.shortName" type="text" placeholder="简称"></el-input>
                <span v-show="errors.has('lender.shortName')" class="help is-danger">{{ errors.first('lender.shortName') }}</span>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="类型" for="lender.type" :class="{ 'vee-control': true }">
                <el-select clearable v-model="form.type" placeholder="请选择" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('lender.type') }" name="lender.type">
                  <el-option v-for="item in form.typeOption" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
                <span v-show="errors.has('lender.type')" class="help is-danger">{{ errors.first('lender.type') }}</span>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="证件类型" for="lender.cardType" :class="{ 'vee-control': true }">
                <el-select clearable v-model="form.cardType" placeholder="请选择" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('lender.cardType') }" name="lender.cardType">
                  <el-option v-for="item in form.typeOption" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
                <span v-show="errors.has('lender.cardType')" class="help is-danger">{{ errors.first('lender.cardType') }}</span>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="证件号码" for="lender.cardNo" :class="{ 'vee-control': true }">
                <el-input v-model="form.cardNo" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('lender.cardNo') }" name="lender.cardNo" type="text" placeholder="证件号码"></el-input>
                <span v-show="errors.has('lender.cardNo')" class="help is-danger">{{ errors.first('lender.cardNo') }}</span>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="营业起始日" for="lender.bussBegin" :class="{ 'vee-control': true }">
                <el-date-picker v-model="form.bussBegin" type="date" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('lender.bussBegin') }" name="lender.bussBegin" placeholder="营业起始日"></el-date-picker>
                <span v-show="errors.has('lender.bussBegin')" class="help is-danger">{{ errors.first('lender.bussBegin') }}</span>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="营业起始日" for="lender.bussEnd" :class="{ 'vee-control': true }">
                <el-date-picker v-model="form.bussEnd" type="date" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('lender.bussEnd') }" name="lender.bussEnd" placeholder="营业起始日"></el-date-picker>
                <span v-show="errors.has('lender.bussEnd')" class="help is-danger">{{ errors.first('lender.bussEnd') }}</span>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="合作开始日" for="lender.togeBegin" :class="{ 'vee-control': true }">
                <el-date-picker v-model="form.togeBegin" type="date" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('lender.togeBegin') }" name="lender.togeBegin" placeholder="合作开始日"></el-date-picker>
                <span v-show="errors.has('lender.togeBegin')" class="help is-danger">{{ errors.first('lender.togeBegin') }}</span>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="合作到期日" for="lender.togeEnd" :class="{ 'vee-control': true }">
                <el-date-picker v-model="form.togeEnd" type="date" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('lender.togeEnd') }" name="lender.togeEnd" placeholder="合作到期日"></el-date-picker>
                <span v-show="errors.has('lender.togeEnd')" class="help is-danger">{{ errors.first('lender.togeEnd') }}</span>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="电子邮件" for="lender.email" :class="{ 'vee-control': true }">
                <el-input v-model="form.email" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('lender.email') }" name="lender.email" type="text" placeholder="电子邮件"></el-input>
                <span v-show="errors.has('lender.email')" class="help is-danger">{{ errors.first('lender.email') }}</span>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="注册资本(万美金)" for="lender.regCapital" :class="{ 'vee-control': true }">
                <el-input v-model="form.regCapital" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('lender.regCapital') }" name="lender.regCapital" type="text" placeholder="注册资本(万美金)"></el-input>
                <span v-show="errors.has('lender.regCapital')" class="help is-danger">{{ errors.first('lender.regCapital') }}</span>
              </el-form-item>
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <!-- <el-form-item label="注册地址" for="lender.provinceId" :class="{ 'vee-control': true }">
                <el-cascader v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('lender.provinceId') }" name="lender.provinceId" :options="form.options2" @active-item-change="handleItemChange" :props="form.props"></el-cascader>
                <span v-show="errors.has('lender.provinceId')" class="help is-danger">{{ errors.first('lender.provinceId') }}</span>
              </el-form-item> -->
              <no-ssr>
              <v-distpicker :placeholders="form.placeholders"></v-distpicker>
              </no-ssr>
              <!-- <v-distpicker :province="form.select.province" :city="form.select.city" :area="form.select.area"></v-distpicker> -->
              <!-- <area-select :level="2" v-model="form.placeholders"></area-select> -->
            </el-col>
            <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="6">
              <el-form-item label="详细注册地址" for="lender.code">
                <el-input v-model="form.address" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('lender.address') }" name="lender.address" type="text" placeholder="详细注册地址"></el-input>
                <span v-show="errors.has('lender.address')" class="help is-danger">{{ errors.first('lender.address') }}</span>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
      </titleField>
      <titleField>
        <h1 slot='title' class="leg-text">联系人信息</h1>
        <div slot='con'>
          <el-table :data="form.tableData" style="width: 100%" class='pch-table' stripe>
            <el-table-column label="日期" width="250">
              <template slot-scope="scope">
                <el-select clearable v-model="form.type" placeholder="请选择" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('lender.type') }" name="lender.type">
                  <el-option v-for="item in form.typeOption" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
                <!--  <el-popover trigger="hover" placement="top">
                  <p>姓名: {{ scope.row.name }}</p>
                  <p>住址: {{ scope.row.address }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                  </div>
                </el-popover> -->
              </template>
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="220">
            </el-table-column>
            <el-table-column prop="province" label="省份" width="220">
            </el-table-column>
            <el-table-column prop="city" label="市区" width="220">
            </el-table-column>
            <el-table-column prop="address" label="地址" width="300">
            </el-table-column>
            <el-table-column prop="zip" label="邮编" width="250">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="150">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
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
// import VueAreaLinkage from 'vue-area-linkage'
// import VueAreaLinkage from 'vue-area-linkage'
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
        provinceId: {
          required: () => '请选择注册地址'
        }
      }
    },
    messages: {
      lender: {
        // type: () => '请选择类型',
      }
    },
    attributes: {
      lender: {
        name: '资方名称',
        shortName: '简称',
        type: '类型',
        cardType: '证件类型',
        cardNo: '证件类型号码',
        email: '电子邮件',
        regCapital: '注册资本(万美金)',
        address: '详细注册地址',
      }
    }
  }
};

Validator.localize(dictionary);


export default {
  data() {
    return {
      form: {
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
        select: { province: '广东省', city: '广州市', area: '海珠区' },
        placeholders: {
              province: '------- 省 --------',
              city: '--- 市 ---',
              area: '--- 区 ---',
          }
      }
    }
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          console.log('ok?')
          return;
        }
        console.log('咋啦');
      });
      // this.validator.validateAll({
      //   email: this.email,
      //   name: this.name
      // }).then((result) => {
      //   if (result) {
      //     // eslint-disable-next-line
      //     console.log('All is well');
      //     return;
      //   }
      //   // eslint-disable-next-line
      //   console.log('Oops!');
      // });
    },
    handleItemChange(val) {
      console.log('active item:', val);
      setTimeout(_ => {
        if (val.indexOf('江苏') > -1 && !this.form.options2[0].cities.length) {
          this.form.options2[0].cities = [{
            label: '南京'
          }];
        } else if (val.indexOf('浙江') > -1 && !this.form.options2[1].cities.length) {
          this.form.options2[1].cities = [{
            label: '杭州'
          }];
        }
      }, 300);
    },
    handleClick(row) {
      console.log(row);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.form.dialogImageUrl = file.url;
      this.form.dialogVisible = true;
    }
  },
  components: {
    titleField,
    // Distpicker:'v-distpicker'
    // areaSelect:'area-select'
  }
}

</script>
