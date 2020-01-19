const languages = process.env.LANGUAGES

const getLanguage = (slug) => {
    let obj = languages.filter(i => i.slug === slug)[0]
    return obj
}

const getDefaultLanguage = () => {
    let obj = languages.filter(i => i.default === true)[0]
    return obj
}

export {getLanguage, getDefaultLanguage}