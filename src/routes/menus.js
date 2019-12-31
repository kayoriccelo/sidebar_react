
export default [
    {
        title: 'Início',
        path: '/',
        icon: '|^|',
        roles: ['guest', 'admin']
    },
    {
        title: 'Cadastros',
        icon: '///',
        roles: ['admin'],
        menus: [
            {
                title: 'Empresa',
                path: '/registration/company',
                icon: '-',
            },
        ]
    }
]