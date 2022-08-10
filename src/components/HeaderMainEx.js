import React from "react";
import { useAuth } from "../contexts/auth-contextEx";

const HeaderMainEx = () => {
  const { user, setUser } = useAuth();

  return (
    <div className="p-4 bg-white shadow-md flex items-center justify-center">
      {user ? (
        <div className="flex items-center gap-x-3">
          <img
            src="https://images.unsplash.com/photo-1657214059493-986710bc4788?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-sm pl-2 ">{user.fullname}</span>
        </div>
      ) : (
        <span>Welcome</span>
      )}
      <button
        className="p-2 rounded-md bg-gray-300 text-black ml-auto "
        onClick={() => setUser(null)}
      >
        Sign out
      </button>
    </div>
  );
};

export default HeaderMainEx;
