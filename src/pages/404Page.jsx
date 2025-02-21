// 404Page.js
import React from "react";
import { useLocation } from "react-router-dom";

function NotFoundPage() {
  const location = useLocation(); // Get the current location object

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">404</h1>
        <p className="text-xl mt-4">
          Oops! The page you are looking for does not exist.
        </p>
        <p className="mt-2 text-sm text-gray-500">URL: {location.pathname}</p>
      </div>
    </div>
  );
}

export default NotFoundPage;
