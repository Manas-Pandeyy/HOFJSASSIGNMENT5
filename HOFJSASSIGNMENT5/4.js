const books = [
    {
        title : "The Namesake",
        author: "Jhumpa Lahiri",
        year : 2010,
    },

    {
        title : "The god of Small Things",
        author : "Arundhati Roy",
        Year : 1997,
    },

    {
       title : "A Suitable Boy",
       author : "Vikram Seth",
       Year : 1993,
    },

    {
        title : "The White Tiger",
        author : "Aravind Adiga",
        Year : 2018,
    },

    {
        title : "Midnight's Children",
        author : "Salman Rushdie",
        Year : 1981,
    },
];

const filteredBooks = books.filter((book) =>{
    return book.Year >= 2010;
})

const result = filteredBooks.map((book) => {
    return{
        ...book,
        author: book.author.toUpperCase()
    };
});

console.log(result)