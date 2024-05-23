import { ui, defaultLang, showDefaultLang } from './ui';

// 获取 URL 中的语言
export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}
// 将获取当前页面，指定语言的URL路径
export function useTranslatedPath(lang: keyof typeof ui) {
    return function translatePath(path: string, l: string = lang) {
        return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`
    }
}

// 获取当前页面的slug
export function getSlug(url: URL) {
    if (showDefaultLang) {
        const [, lang, ...rest] = url.pathname.split('/');
        return '/' + rest.join('/');
    } else {
        if (getLangFromUrl(url) === defaultLang) {
            const [, ...rest] = url.pathname.split('/');
            return '/' + rest.join('/');
        } else {
            const [, lang, ...rest] = url.pathname.split('/');
            return '/' + rest.join('/');
        }
    }
}

// 获取翻译
export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}