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

const defaultOption = {
  formData: formData,
  select: select,
  addselect: addselect,
  tableData: tableData,
  placeholders: placeholders
}
export default defaultOption
