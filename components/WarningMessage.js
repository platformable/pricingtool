import React from "react";

export const WarningMessage = () => {
  return (
    <section className="container mx-auto flex justify-center my-5">
      <div class="border rounded-md border-red-400 bg-red-600 text-red-900 px-10 w-1/4 flex py-2">
        <span class="mr-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
        <p className="text-xs mt-1 text-white">
          {" "}
          Please complete all the fields
        </p>
      </div>
    </section>
  );
};
