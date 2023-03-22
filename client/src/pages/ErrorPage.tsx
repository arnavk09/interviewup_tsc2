import React from "react";
import { useNavigate } from "react-router-dom";

export const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-600">404</h1>
        <h2 className="text-6xl font-medium py-8">Oops! Page not found</h2>
        <p className="text-2xl pb-8 px-12 font-medium">
          Somehow you got here. The page you are looking for might have been
          removed, doesn't exist or is temporarily unavailable. That's all I
          know.
        </p>
        <button
          onClick={handleGoBack}
          className="bg-rose-400 p-2 rounded-lg text-sm hover:bg-rose-600 text-white w-48">
          Click to return to previous page
        </button>
      </div>
    </div>
  );
};
