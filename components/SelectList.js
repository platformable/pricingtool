import React from 'react'

export default function SelectList() {
    return (
        <div className="md:my-5 mt-5 bank-form-list md:px-0 px-5">
        <div className="mt-1 relative">
          <button
            type="button"
            className="relative text-gray-500 w-full border rounded-md shadow-sm pl-3 pr-10 py-4 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
            onClick={() =>
              setPrimeryObjectiveList(!primaryObjectiveList)
            }
          >
            {primaryObjective ? primaryObjective : "select objective"}
            <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                ariaHidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>

          {primaryObjectiveList && (
            <ul
              className="absolute z-10 mt-1 w-full bg-red-orange-dark shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
              tabIndex="-1"
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-option-3"
              onMouseLeave={() =>
                setPrimeryObjectiveList(!primaryObjectiveList)
              }
            >
              <li
                className="select-none relative py-2 pl-3 pr-9 cursor-pointer hover:bg-gray-100"
                id="listbox-option-0"
                role="option"
                onClick={() =>
                  setUser({ ...user, primaryObjective: "Income" })
                }
              >
                <div className="flex items-center">
                  <span className="font-normal ml-3 block truncate">
                    Income
                  </span>
                </div>
              </li>
              <li
                className="select-none relative py-2 pl-3 pr-9 cursor-pointer hover:bg-gray-200"
                id="listbox-option-0"
                role="option"
                onClick={() =>
                  setUser({ ...user, primaryObjective: "Other" })
                }
              >
                <div className="flex items-center">
                  <span className="font-normal ml-3 block truncate">
                    Other
                  </span>
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>
    )
}
