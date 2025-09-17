'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [selected, setSelected] = useState<number>(0);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const icons = [
    {
      name: "Home",
      jsx: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-4 h-4 ${selected === 0 ? '' : 'text-[var(--color-foreground)]'}`}
        >
          <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
          <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
        </svg>
      ),
    },
    {
      name: "Image",
      jsx: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-4 h-4 ${selected === 1 ? '' : 'text-[var(--color-foreground)]'}`}
        >
          <path
            fillRule="evenodd"
            d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Video",
      jsx: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-4 h-4 ${selected === 2 ? '' : 'text-[var(--color-foreground)]'}`}
        >
          <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
        </svg>
      ),
    },
    {
      name: "Enhance",
      jsx: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-4 h-4 ${selected === 3 ? '' : 'text-[var(--color-foreground)]'}`}
        >
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Realtime",
      jsx: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-4 h-4 ${selected === 4 ? '' : 'text-[var(--color-foreground)]'}`}
        >
          <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
        </svg>
      ),
    },
    {
      name: "Edit",
      jsx: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-4 h-4 ${selected === 5 ? '' : 'text-[var(--color-foreground)]'}`}
        >
          <path
            fillRule="evenodd"
            d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z"
          />
        </svg>
      ),
    },
    {
      name: "Asset",
      jsx: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-4 h-4 ${selected === 6 ? '' : 'text-[var(--color-foreground)]'}`}
        >
          <path
            fillRule="evenodd"
            d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <nav className="bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-[52px]">
          {/* Left side */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center gap-3">
              <img
                src={darkMode ? 'kreadark.png' : 'krealight.png'}
                alt="logo"
                className={darkMode ? 'h-9 w-9 object-contain' : 'h-9 w-9 object-contain'}
              />
              <img
                src="userp.jpeg"
                alt="avatar"
                className="h-5 w-5 rounded-lg ml-1"
                style={{ filter: darkMode ? 'invert(1)' : 'none' }}
              />
              <span className="text-[10px] font-semibold text-[var(--color-foreground)] -mx-1">
                benevolentnimblebat
              </span>
            </Link>
            <svg
              className="accordion-arrow w-3 h-3 text-[var(--color-foreground)] cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              style={{ filter: darkMode ? 'invert(1)' : 'none' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25L12 15.75 4.5 8.25" />
            </svg>
          </div>

          {/* Center floating island */}
          <div className="flex justify-center items-center ml-12 mt-2">
            <div
              className={`${
                darkMode ? 'bg-[#262626]' : 'bg-[#f6f6f6]'
              } rounded-[14px] h-[44px] w-[320px] flex items-center justify-between px-1`}
            >
              {icons.map((icon, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelected(idx)}
                  className={`w-[52px] h-[34px] flex items-center justify-center cursor-pointer transition-all ${
                    selected === idx ? 'bg-white rounded-[12px] shadow-sm' : darkMode ? 'bg-[#262626]' : 'bg-[#f6f6f6]'
                  }`}
                >
                  {icon.jsx}
                </div>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-2">
            {/* Gallery */}
            <button
              type="button"
              className={`flex items-center space-x-2 px-1.5 py-1 font-semibold rounded-[8px] ${
                darkMode ? 'bg-[#262626]' : 'bg-[#f6f6f6]'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 text-[var(--color-foreground)] -pr-2"
                style={{ filter: darkMode ? 'invert(1)' : 'none' }}
              >
                <path
                  fillRule="evenodd"
                  d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm10.5 5.707a.5.5 0 0 0-.146-.353l-1-1a.5.5 0 0 0-.708 0L9.354 9.646a.5.5 0 0 1-.708 0L6.354 7.354a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0-.146.353V12a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V9.707ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-[10px] text-[var(--color-foreground)]">Gallery</span>
            </button>
            {/* Support */}
            <button
              type="button"
              className={`flex items-center space-x-2 px-1.5 py-1 font-semibold rounded-[8px] ${
                darkMode ? 'bg-[#262626]' : 'bg-[#f6f6f6]'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 text-[var(--color-foreground)]"
                style={{ filter: darkMode ? 'invert(1)' : 'none' }}
              >
                <path d="M8 1a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0V3a2 2 0 0 0-2-2Z" />
                <path d="M4.5 7A.75.75 0 0 0 3 7a5.001 5.001 0 0 0 4.25 4.944V13.5h-1.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-1.5v-1.556A5.001 5.001 0 0 0 13 7a.75.75 0 0 0-1.5 0 3.5 3.5 0 1 1-7 0Z" />
              </svg>
              <span className="text-[10px] text-[var(--color-foreground)]">Support</span>
            </button>

            {/* Notification */}
            <button
              type="button"
              className={`w-6 h-6 flex items-center justify-center rounded-[6px] ${
                darkMode ? 'bg-[#262626]' : 'bg-[#f6f6f6]'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 text-[var(--color-foreground)]"
                style={{ filter: darkMode ? 'invert(1)' : 'none' }}
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2Zm.104-14.938A5.002 5.002 0 0 0 3 6v3.086l-.707.707A1 1 0 0 0 3 11h10a1 1 0 0 0 .707-1.707L13 9.086V6a5.002 5.002 0 0 0-4.896-4.938Z" />
              </svg>
            </button>

            {/* Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className={`w-6 h-6 flex items-center justify-center rounded-[6px] ${
                darkMode ? 'bg-[#262626]' : 'bg-[#f6f6f6]'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 text-[var(--color-foreground)]"
                style={{ filter: darkMode ? 'invert(1)' : 'none' }}
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM12.95 4.11a.75.75 0 1 0-1.06-1.06l-1.062 1.06a.75.75 0 0 0 1.061 1.062l1.06-1.061ZM15 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 15 8ZM11.89 12.95a.75.75 0 0 0 1.06-1.06l-1.06-1.062a.75.75 0 0 0-1.062 1.061l1.061 1.06ZM8 12a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 12ZM5.172 11.89a.75.75 0 0 0-1.061-1.062L3.05 11.89a.75.75 0 1 0 1.06 1.06l1.06-1.06ZM4 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 4 8ZM4.11 5.172A.75.75 0 0 0 5.173 4.11L4.11 3.05a.75.75 0 1 0-1.06 1.06l1.06 1.06Z" />
              </svg>
            </button>

            <img
              src="userp.jpeg"
              alt="User Avatar"
              className="h-5 w-5 rounded-full object-cover"
              style={{ filter: darkMode ? 'invert(1)' : 'none' }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}