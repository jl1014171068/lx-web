const SidebarConfig = [{
    name: '资方管理',
    unicode: '&#xe643;',
    path: '/lender',
    menu: [{
      name: '资方查询',
      path: '/lender/list',
      permissions: []
    }, {
      name: '资方开户',
      path: '/lender/add',
      permissions: []
    }]
  }, {
    name: '担保方管理',
    unicode: '&#xe65b;',
    path: '/guarantor',
    menu: [{
        name: '担保方开户',
        path: '/guarantor/add',
        permissions: []
      },
      {
        name: '担保方查询',
        path: '/guarantor/list',
        permissions: []
      }
    ]
  },
  {
    name: 'SP管理',
    unicode: '&#xe643;',
    path: '/sp',
    menu: [{
        name: '新增SP',
        path: '/sp/add',
        permissions: []
      },
      {
        name: 'SP查询',
        path: '/sp/list',
        permissions: []
      }
    ]
  },
  {
    name: '机构管理',
    unicode: '&#xe643;',
    path: '/admin',
    menu: [{
        name: '组织机构管理',
        path: '/admin/organization',
        permissions: []
      },
      {
        name: '员工管理',
        path: '/admin/employee',
        permissions: []
      },
      {
        name: '角色管理',
        path: '/admin/role',
        permissions: []
      },
      {
        name: '员工权限管理',
        path: '/admin/user-privilege',
        permissions: []
      },
      {
        name: '角色权限管理',
        path: '/admin/role-privilege',
        permissions: []
      }
    ]
  },
  {
    name: '合作机构管理',
    unicode: '&#xe643;',
    path: '/cooperation',
    menu: [{
        name: '公司Logo',
        path: '/cooperation/about',
        permissions: []
      },
      {
        name: '组织机构管理',
        path: '/cooperation/organization',
        permissions: []
      },
      {
        name: '员工管理',
        path: '/cooperation/employee',
        permissions: []
      },
      {
        name: '角色管理',
        path: '/cooperation/role',
        permissions: []
      },
      {
        name: '员工权限管理',
        path: '/cooperation/user-privilege',
        permissions: []
      },
      {
        name: '角色权限管理',
        path: '/cooperation/role-privilege',
        permissions: []
      }
    ]
  },
  {
    name: '跨机构管理',
    unicode: '&#xe643;',
    path: '/cors',
    menu: [{
        name: '员工管理',
        path: '/cors/employee',
        permissions: []
      }
    ]
  }
]

export default SidebarConfig
