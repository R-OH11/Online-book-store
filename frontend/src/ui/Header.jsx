import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import Swal from "sweetalert2";

const Header = ({ isAdmin }) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    Swal.fire({
      text: "Are you sure, you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clearAll();
        navigate("/", { replace: true });
      }
    });
  };

  return (
    <nav className="sticky top-0 bg-[#535353] text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div
              className="flex justify-start items-center gap-3 cursor-pointer"
              onClick={() => navigate("/user/home")}
            >
              <img
                src="/images/logo_waterstones.png"
                className="w-12 h-12 object-cover"
              />
              <span className="font-bold text-xl">Waterstones</span>
            </div>
          </div>
          <div className="w-full flex justify-end items-center gap-12">
            {!isAdmin && (
              <div>
                <IoCartOutline
                  className="w-8 h-8 hover:text-blue-700 cursor-pointer"
                  onClick={() => navigate("/user/cart")}
                />
              </div>
            )}
            {isAdmin && (
              <div
                className="hover:bg-blue-700 px-3 py-2 rounded-md text-md font-medium cursor-pointer"
                onClick={() => navigate("/admin/payment_history")}
              >
                Checkout list
              </div>
            )}
            <div
              className="hover:bg-blue-700 px-3 py-2 rounded-md text-md font-medium cursor-pointer"
              onClick={() => logoutHandler()}
            >
              Logout
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;