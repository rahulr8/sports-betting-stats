import React from "react";

function ErrorFallback() {
  return (
    <div className="bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Something went wrong</h2>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        onClick={() => window.location.reload()}
        type="button"
      >
        Try again
      </button>
    </div>
  );
}

export default ErrorFallback;
