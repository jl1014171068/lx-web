const formData = [{
    type: 'input',
    label: '登录名',
    name: 'mmobile',
    data: '111',
    model: '4',
    scope: '5',
    disabled: true,
    defaultTip: '7'
  },
  {
    type: 'input',
    label: '姓名',
    name: 'mname',
    data: '111',
    model: '4',
    scope: '5',
    disabled: true,
    defaultTip: '7'
  }, {
    type: 'input',
    label: '身份证号',
    name: 'mcardno',
    data: '111',
    model: '4',
    scope: '5',
    disabled: true,
    defaultTip: '7'
  }, {
    type: 'input',
    label: '性别',
    name: 'msex',
    data: '111',
    model: '4',
    scope: '5',
    disabled: true,
    defaultTip: '7'
  }, {
    type: 'date',
    label: '邮箱',
    name: 'memail',
    className: '3',
    data: '111',
    model: '4',
    scope: '5',
    defaultTip: '7'
  }, {
    type: 'input',
    label: '部门',
    name: 'mbumen',
    data: '111',
    model: '4',
    scope: '5',
    disabled: true,
    defaultTip: '7'
  }, {
    type: 'input',
    label: '角色',
    name: 'muser',
    data: '111',
    model: '4',
    scope: '5',
    disabled: true,
    defaultTip: '7'
  }
];

const select = [{
  value: 10,
  label: '银行'
}, {
  value: 20,
  label: '双皮奶'
}, {
  value: 30,
  label: '蚵仔煎'
}, {
  value: 40,
  label: '龙须面'
}, {
  value: 50,
  label: '北京烤鸭'
}]

const addselect = [{
  label: '江苏',
  cities: []
}, {
  label: '浙江',
  cities: []
}];

const tableData = [{
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
}];

const placeholders = {
  province: '请选择省',
  city: '请选择城市',
  area: '请选择区',
}

const phonevalidate = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/



const defaultOption = {
  formData: formData,
  select: select,
  addselect: addselect,
  tableData: tableData,
  placeholders: placeholders,
  phonevalidate: phonevalidate,
}
export default defaultOption
