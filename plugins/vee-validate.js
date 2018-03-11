import Vue from 'vue'
import VeeValidate,{Validator} from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'zh_CN'
});

Vue.use(VeeValidate, {
  i18n,
  fieldsBagName: 'field',
  dictionary: {
    zh_CN: {
      messages: {
        email: () => '请输入正确的邮箱格式，哼哼哼哼哼',
        required: (field) => "请输入" + field
      },
      attributes: {
        // email:'邮箱有毒吗',
        password: '密码',
        name: '账号',
        phone: '手机',
        lender: {
          code: '资方编码'
        }
      }
    }
  }
});



// const sss = {
//   getMessage(field, params, data) {
//       return (data && data.message) || 'Something went wrong';
//   },
//   validate(value) {
//     return new Promise(resolve => {
//       resolve({
//         valid: value === 'trigger' ? false : !! value,
//         data: value !== 'trigger' ? undefined : { message: 'Not this value' }
//       });
//     });
//   }
// };
// Validator.extend('sss', {
//   getMessage: {
//     // zh_CN: field => field + '必须是11位手机号码',
//     return (data && data.message) || 'Something went wrong';
//   },
//   validate(value) {
//     return new Promise(resolve => {
//       resolve({
//         valid: value === 'trigger' ? false : !! value,
//         data: value !== 'trigger' ? undefined : { message: 'Not this value' }
//       });
//     });
//   }
// });

Validator.extend('sss', {
  getMessage: field =>  field + '必须是一个手机号.',
  validate: value =>  {return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)}
});

// let instance = new Validator({ trueField: 'truthy' });


// const config = {
//   errorBagName: 'errors', 
//   fieldsBagName: 'field',
//   delay: 100,   
//   locale: 'zh_CN', 
//   strict: true,  
//   enableAutoClasses: true,
//   events: 'blur', 
//   inject: true
// };
// Vue.use(VeeValidate, config);
