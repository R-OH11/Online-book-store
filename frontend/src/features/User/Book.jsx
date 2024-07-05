import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { trimParagraph } from "../../utils/helper";

const Book = ({ book, isAdmin }) => {
  const navigate = useNavigate();
  const addToCart = (e) => {
    e.stopPropagation();
    // Implement add to cart logic here
    toast.success(`${book.name} added to cart!`);
  };

  return (
    <div
      className="bg-white w-[300px] rounded-lg shadow-md cursor-pointer"
      onClick={() =>
        isAdmin
          ? navigate("/admin/book_description", { state: book })
          : navigate("/user/book_description", { state: book })
      }
    >
      <img
        src={book?.photoUrl}
        alt={book.name}
        className="w-full h-48 rounded-t-lg object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{book.name}</h3>
        <p className="text-sm text-gray-600">by {book.author}</p>
        <p className="mt-2 text-gray-700">${book.price.toFixed(2)}</p>
        <p className="mt-2 text-sm text-gray-600">
          {trimParagraph(book.description, 50)}
        </p>
      </div>
      {!isAdmin && (
        <div className="w-full flex justify-start items-center p-4">
          <button
            onClick={(e) => addToCart(e)}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Book;
