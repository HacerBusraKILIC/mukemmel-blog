export const getPosts = () => {
    return [
        {
            title: "En güncel yazı",
            slug: "en-güncel-yazi",
            detail: require(`./posts/en-güncel-yazi.md`).default,
            date: "13 Aralık 2019"
        },
        {
            title: "Bir React Uygulamasında En Ala SQL Veritabanını Kullanmak",
            slug: "Bir-React-Uygulamasinda-En-Ala-SQL-Veritabanini-Kullanmak",
            detail: require(`./posts/Bir-React-Uygulamasinda-En-Ala-SQL-Veritabanini-Kullanmak.md`).default,
            date: "11 Aralık 2019"
        },
        {
            title: "Merhaba Dünya",
            slug: "merhaba",
            detail: require(`./posts/merhaba.md`).default,
            date: "date 2"
        }
    ];
}