import React from 'react';

export default function Footer() {
  return (
       <footer className="flex items-center justify-center w-full h-24 border-t my-16">
            <a
              className="flex items-center justify-center"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{" "}
              <img
                src="https://platformable.com/static/5319a443d00bd1eee2efee3fa63ac32c/bc86d/logo.webp"
                alt="Vercel Logo"
                className="h-4 ml-2"
              />
            </a>
          </footer>
  )
}
