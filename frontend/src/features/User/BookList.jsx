// src/components/BookList.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Book from "./Book";
import { Typography } from "@material-tailwind/react";
import { useBooksList } from "../../Hooks/useUser";

// const books = [
//   {
//     id: 1,
//     name: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     price: 12.99,
//     category: "Classic Literature",
//     description:
//       "A powerful story of racial injustice and loss of innocence in the American South.",
//     photoUrl: "https://example.com/to-kill-a-mockingbird.jpg",
//   },
//   {
//     id: 2,
//     name: "1984",
//     author: "George Orwell",
//     price: 10.99,
//     category: "Science Fiction",
//     description:
//       "A dystopian novel set in a totalitarian society, exploring themes of mass surveillance and censorship.",
//     photoUrl: "https://example.com/1984.jpg",
//   },
//   {
//     id: 3,
//     name: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     price: 11.99,
//     category: "Classic Literature",
//     description:
//       "A tale of decadence and excess in America's Jazz Age, exploring themes of wealth and the American Dream.",
//     photoUrl: "https://example.com/the-great-gatsby.jpg",
//   },
//   {
//     id: 4,
//     name: "Pride and Prejudice",
//     author: "Jane Austen",
//     price: 9.99,
//     category: "Romance",
//     description:
//       "A classic romance novel dealing with issues of manners, upbringing, morality, and marriage in early 19th-century England.",
//     photoUrl: "https://example.com/pride-and-prejudice.jpg",
//   },
//   {
//     id: 5,
//     name: "The Hobbit",
//     author: "J.R.R. Tolkien",
//     price: 14.99,
//     category: "Fantasy",
//     description:
//       "A fantasy novel about the adventures of hobbit Bilbo Baggins, serving as a prelude to The Lord of the Rings.",
//     photoUrl: "/images/romance.jpg",
//   },
//   {
//     id: 6,
//     name: "The Catcher in the Rye",
//     author: "J.D. Salinger",
//     price: 11.99,
//     category: "Coming-of-age Fiction",
//     description:
//       "A controversial novel that explores themes of teenage angst and alienation.",
//     photoUrl: "https://example.com/the-catcher-in-the-rye.jpg",
//   },
//   {
//     id: 7,
//     name: "The Da Vinci Code",
//     author: "Dan Brown",
//     price: 13.99,
//     category: "Thriller",
//     description:
//       "A mystery thriller involving a Harvard professor and a series of clues left in famous artwork.",
//     photoUrl: "https://example.com/the-da-vinci-code.jpg",
//   },
//   {
//     id: 8,
//     name: "The Hunger Games",
//     author: "Suzanne Collins",
//     price: 12.99,
//     category: "Young Adult",
//     description:
//       "A dystopian novel set in a world where young people are forced to compete in a televised battle to the death.",
//     photoUrl: "https://example.com/the-hunger-games.jpg",
//   },
//   {
//     id: 9,
//     name: "The Alchemist",
//     author: "Paulo Coelho",
//     price: 10.99,
//     category: "Philosophical Fiction",
//     description:
//       "A philosophical novel about a young Andalusian shepherd on a journey to find his destiny.",
//     photoUrl: "https://example.com/the-alchemist.jpg",
//   },
//   {
//     id: 10,
//     name: "The Girl with the Dragon Tattoo",
//     author: "Stieg Larsson",
//     price: 14.99,
//     category: "Crime Fiction",
//     description:
//       "A crime novel that follows a journalist and a young computer hacker as they investigate a decades-old disappearance.",
//     photoUrl: "https://example.com/the-girl-with-the-dragon-tattoo.jpg",
//   },
// ];

const BookList = ({ isAdmin }) => {
  const navigate = useNavigate();
  const { books, isLoading, error } = useBooksList(
    token,
    searchValue,
    category
  );

  return (
    <div className="flex flex-col justify-start items-center gap-5 p-8">
      <h2 className="text-3xl font-bold text-center">
        {isAdmin ? "Welcome Admin!" : "Our Book Collection"}
      </h2>
      <Typography variant="lead" color="black" className="opacity-80">
        {isAdmin
          ? "Manage books, users, and oversee library operations!"
          : "Explore our diverse collection of books. Find your next great read!"}
      </Typography>
      {isAdmin && (
        <div className="w-full flex justify-end items-center p-4">
          <button
            onClick={(e) => navigate("/admin/add_books")}
            className="mt-4 bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-300"
          >
            Add new book
          </button>
        </div>
      )}
      <div className="flex w-full justify-start items-start flex-wrap gap-16 px-12">
        {books?.map((book) => (
          <Book key={book.id} book={book} isAdmin={isAdmin} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
