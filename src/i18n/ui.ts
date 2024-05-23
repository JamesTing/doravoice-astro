export const languages = {
    'zh-cn': '简体中文',
    'en': 'English',
};

export const defaultLang = 'en';

// URL 中是否显示默认语言
export const showDefaultLang = false;

export const ui = {
    'en': {
        'nav.mindmap': 'Mindmap',
        'nav.whiteboard': 'Whiteboard',
        'nav.pricing': 'Pricing',
        'nav.user-guide': 'User Guide',
        'nav.login': 'Log In',
        'nav.signup': 'Sign Up',
        'nav.logout': 'Log Out',
        'footer.privacy-policy': 'Privacy Policy',
        'footer.terms-of-service': 'Terms of Service',
        'footer.refund-policy': 'Refund Policy',
    },
    'zh-cn': {
        'nav.mindmap': '思维导图',
        'nav.whiteboard': '白板',
        'nav.pricing': '定价',
        'nav.user-guide': '用户指南',
        'nav.login': '登录',
        'nav.signup': '注册',
        'nav.logout': '退出',
        'footer.privacy-policy': '隐私政策',
        'footer.terms-of-service': '服务条款',
        'footer.refund-policy': '退款政策',
    },
} as const;