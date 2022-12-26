export type Menu = {
    name: string;
    url: string;
    children?: Array<Menu>;
};

export const MENU_LIST: Array<Menu> = [
    {
        name: 'Landing',
        url: '/',
        children: [
            {
                name: 'test',
                url: '/'
            }
        ]
    }
];
