


import Vue from 'vue'
import VeeValidate from 'vee-validate';
import fr from 'vee-validate/dist/locale/zh_CN';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'fr'
});

Vue.use(VeeValidate, {
  i18n,
  fieldsBagName: 'field',
  dictionary: {
    fr
  }
});


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