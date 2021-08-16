export const formatCurrency = (num?: number, lang: string = 'en-US', currency: string = 'USD') => {
    if (!num  && num !== 0) return ''
    return num.toLocaleString(lang, {style:"currency", currency})
}