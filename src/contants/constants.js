import Book1 from "../assets/List/book1.svg"
import Book2 from "../assets/List/book2.svg"
import Book3 from "../assets/List/book3.svg"
import Book4 from "../assets/List/book4.svg"
import Book5 from "../assets/List/book5.svg"
import Home from "../assets/Footer/Home.svg"
import Search from "../assets/Footer/Search.svg"
import Library from "../assets/Footer/Document.svg"

const bookListMapping = [
    {
        id: 1,
        name: "The Black Witch",
        author: "Laurie Forest",
        cover: Book5
    },
    {
        id: 2,
        name: "A Promised Land",
        author: "Barrack Obama",
        cover: Book4
    },
    {
        id: 3,
        name: "Harry Potter and The Prisoner of Azkaban",
        author: "J.K. Rowling",
        cover: Book2
    },
    {
        id: 4,
        name: "The Kidnapper’s Accomplice",
        author: "new author",
        cover: Book1
    },
    {
        id: 5,
        name: "Light Mage",
        author: "author name",
        cover: Book3
    },

]

const bookPageTexts = {
    heading: "My Books",
}

const footerMapping = [
    {
        path : Home,
        name: "Home",
        id: 1
    },
    {
        path : Search,
        name: "Search",
        id: 2
    },
    {
        path : Library,
        name: "Library",
        id: 3
    },
]

export {
    bookListMapping,
    bookPageTexts,
    footerMapping
}
