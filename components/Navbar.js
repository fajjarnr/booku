import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { Store } from '../context/Store';

export default function Navbar() {
  const [sideBar, setsideBar] = useState();
  const [profile, setProfile] = useState(false);

  const { state, dispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const router = useRouter();

  const logoutClickHandler = () => {
    dispatch({ type: 'USER_LOGOUT' });
    Cookies.remove('userInfo');
    Cookies.remove('cartItems');
    Cookies.remove('shippingAddress');
    Cookies.remove('paymentMethod');
    router.push('/');
  };

  return (
    <header className="h-full w-full">
      <nav
        role="navigation"
        className="md:px-6 lg:px-4 w-full mx-auto hidden md:block bg-white shadow-md"
      >
        <div className="container justify-between h-20 flex items-center bg-white md:items-stretch mx-auto border-b border-gray-200">
          <div className="h-full flex items-center">
            <button
              role="img"
              aria-label="logo"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 mr-10 flex items-center"
            >
              <Link href="/">
                <svg
                  width={34}
                  height={34}
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 17H0H1ZM7 17H6H7ZM17 27L17 28L17 27ZM27 17L28 17L27 17ZM17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918L6.3934 6.3934C9.20644 3.58035 13.0218 2 17 2V0ZM4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17H2C2 13.0218 3.58035 9.20644 6.3934 6.3934L4.97918 4.97918ZM0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208L6.3934 27.6066C3.58035 24.7936 2 20.9782 2 17H0ZM4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34V32C13.0218 32 9.20644 30.4196 6.3934 27.6066L4.97918 29.0208ZM17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208L27.6066 27.6066C24.7936 30.4196 20.9782 32 17 32V34ZM29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17H32C32 20.9782 30.4196 24.7936 27.6066 27.6066L29.0208 29.0208ZM34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918L27.6066 6.3934C30.4196 9.20644 32 13.0218 32 17H34ZM29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0V2C20.9782 2 24.7936 3.58035 27.6066 6.3934L29.0208 4.97918ZM17 6C14.0826 6 11.2847 7.15893 9.22183 9.22183L10.636 10.636C12.3239 8.94821 14.6131 8 17 8V6ZM9.22183 9.22183C7.15893 11.2847 6 14.0826 6 17H8C8 14.6131 8.94821 12.3239 10.636 10.636L9.22183 9.22183ZM6 17C6 19.9174 7.15893 22.7153 9.22183 24.7782L10.636 23.364C8.94821 21.6761 8 19.3869 8 17H6ZM9.22183 24.7782C11.2847 26.8411 14.0826 28 17 28L17 26C14.6131 26 12.3239 25.0518 10.636 23.364L9.22183 24.7782ZM17 28C19.9174 28 22.7153 26.8411 24.7782 24.7782L23.364 23.364C21.6761 25.0518 19.3869 26 17 26L17 28ZM24.7782 24.7782C26.8411 22.7153 28 19.9174 28 17L26 17C26 19.3869 25.0518 21.6761 23.364 23.364L24.7782 24.7782ZM28 17C28 14.0826 26.8411 11.2847 24.7782 9.22183L23.364 10.636C25.0518 12.3239 26 14.6131 26 17L28 17ZM24.7782 9.22183C22.7153 7.15893 19.9174 6 17 6V8C19.3869 8 21.6761 8.94821 23.364 10.636L24.7782 9.22183ZM10.3753 8.21913C6.86634 11.0263 4.86605 14.4281 4.50411 18.4095C4.14549 22.3543 5.40799 26.7295 8.13176 31.4961L9.86824 30.5039C7.25868 25.9371 6.18785 21.9791 6.49589 18.5905C6.80061 15.2386 8.46699 12.307 11.6247 9.78087L10.3753 8.21913ZM23.6247 25.7809C27.1294 22.9771 29.1332 19.6127 29.4958 15.6632C29.8549 11.7516 28.5904 7.41119 25.8682 2.64741L24.1318 3.63969C26.7429 8.20923 27.8117 12.1304 27.5042 15.4803C27.2001 18.7924 25.5372 21.6896 22.3753 24.2191L23.6247 25.7809Z"
                    fill="#1F2937"
                  />
                </svg>
              </Link>
            </button>
            <ul className="pr-12 md:flex items-center h-full hidden">
              <li>
                <Link href="/">
                  <a className="focus:outline-none border-b-2 border-transparent font-medium cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-gray-800 tracking-normal border-white">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/books">
                  <a className="focus:outline-none border-b-2 border-transparent font-medium cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-gray-800 mx-6 tracking-normal">
                    Books
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="focus:outline-none border-b-2 border-transparent font-medium cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-gray-800 mr-6 tracking-normal">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="focus:outline-none border-b-2 border-transparent font-medium cursor-pointer h-full flex items-center hover:text-indigo-700 text-sm text-gray-800 mr-6 tracking-normal">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:flex items-center justify-end hidden">
            <div className="flex items-center">
              <div className="md:pr-10 lg:pr-0 h-full flex items-center">
                <div className="relative">
                  <div className="text-gray-600 absolute ml-3 inset-0 m-auto lg:w-4 lg:h-4 md:w-6 md:h-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-600 stroke-current icon icon-tabler icon-tabler-search"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={10} cy={10} r={7} />
                      <line x1={21} y1={21} x2={15} y2={15} />
                    </svg>
                  </div>
                  <input
                    className="hidden lg:block border border-gray-200 focus:outline-none focus:border-indigo-700 w-64 rounded text-sm text-gray-800 pl-8 py-2"
                    type="text"
                    placeholder="Search here"
                  />
                </div>
              </div>
              <div className="h-full flex items-center">
                <Link href="/cart" passHref>
                  <a
                    aria-label="show cart"
                    className="relative focus:outline-none focus:text-indigo-700 hover:text-indigo-700 focus:border-indigo-700 hover:border-indigo-700 mx-5 h-full flex items-center justify-center text-gray-600 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-user"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    {cart.cartItems.length > 0 ? (
                      <div className="absolute top-0 left-7 -mt-2 mr-4 pr-1 pt-1 font-bold">
                        {cart.cartItems.length}
                      </div>
                    ) : (
                      <div className="absolute top-0 left-4 mt-0 mr-4 pr-1 pt-1">
                        <div className="animate-ping w-2 h-2 rounded-full bg-blue-400" />
                      </div>
                    )}
                  </a>
                </Link>
              </div>
              <div className="h-full flex items-center">
                {!userInfo ? (
                  <Link href="/signin">
                    <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                      Masuk
                    </a>
                  </Link>
                ) : (
                  <button
                    aria-label="dropdown"
                    className="focus:outline-none focus:text-gray-900 text-gray-800 border-b-2 border-transparent focus:border-gray-800 hover:text-gray-900 w-full flex items-center justify-end relative cursor-pointer"
                    onClick={() => setProfile(!profile)}
                  >
                    {profile && (
                      <ul className="z-50 p-2 w-40 border-r bg-white absolute rounded shadow mt-16 top-0 ">
                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-user"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <circle cx={12} cy={7} r={4} />
                              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </svg>
                            <span className="ml-2">My Profile</span>
                          </div>
                        </li>
                        <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-user"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            />
                          </svg>
                          <span className="ml-2">Order History</span>
                        </li>
                        {userInfo.isAdmin && (
                          <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                            <Link href="/admin/dashboard">
                              <a className="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon icon-tabler icon-tabler-settings"
                                  width={20}
                                  height={20}
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                                <span className="ml-2">Admin Dashboard</span>
                              </a>
                            </Link>
                          </li>
                        )}
                        <li
                          onClick={logoutClickHandler}
                          className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-settings"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                          </svg>
                          <span className="ml-2">Sign Out</span>
                        </li>
                      </ul>
                    )}
                    <img
                      className="rounded-full h-10 w-10 object-cover"
                      src="https://i.ibb.co/GTLTzZY/Unsplash-Avatars-0000s-0035-azamat-zhanisov-a5s-RFie-A3-BY-unsplash-1.png"
                      alt="Unsplash-Avatars-0000s-0035-azamat-zhanisov-a5s-RFie-A3-BY-unsplash-1"
                    />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Navbar */}
      <nav className="md:hidden">
        <div className="w-full shadow-md bg-white fixed top-0 z-40">
          <div className="flex md:hidden mx-auto container">
            <div className="border-b py-4 border-gray-200 flex items-stretch justify-between mx-4 w-full">
              <div
                aria-label="logo"
                role="img"
                tabIndex={0}
                className="focus:outline-none"
              >
                <Link href="/">
                  <svg
                    width={34}
                    height={34}
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 17H0H1ZM7 17H6H7ZM17 27L17 28L17 27ZM27 17L28 17L27 17ZM17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918L6.3934 6.3934C9.20644 3.58035 13.0218 2 17 2V0ZM4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17H2C2 13.0218 3.58035 9.20644 6.3934 6.3934L4.97918 4.97918ZM0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208L6.3934 27.6066C3.58035 24.7936 2 20.9782 2 17H0ZM4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34V32C13.0218 32 9.20644 30.4196 6.3934 27.6066L4.97918 29.0208ZM17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208L27.6066 27.6066C24.7936 30.4196 20.9782 32 17 32V34ZM29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17H32C32 20.9782 30.4196 24.7936 27.6066 27.6066L29.0208 29.0208ZM34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918L27.6066 6.3934C30.4196 9.20644 32 13.0218 32 17H34ZM29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0V2C20.9782 2 24.7936 3.58035 27.6066 6.3934L29.0208 4.97918ZM17 6C14.0826 6 11.2847 7.15893 9.22183 9.22183L10.636 10.636C12.3239 8.94821 14.6131 8 17 8V6ZM9.22183 9.22183C7.15893 11.2847 6 14.0826 6 17H8C8 14.6131 8.94821 12.3239 10.636 10.636L9.22183 9.22183ZM6 17C6 19.9174 7.15893 22.7153 9.22183 24.7782L10.636 23.364C8.94821 21.6761 8 19.3869 8 17H6ZM9.22183 24.7782C11.2847 26.8411 14.0826 28 17 28L17 26C14.6131 26 12.3239 25.0518 10.636 23.364L9.22183 24.7782ZM17 28C19.9174 28 22.7153 26.8411 24.7782 24.7782L23.364 23.364C21.6761 25.0518 19.3869 26 17 26L17 28ZM24.7782 24.7782C26.8411 22.7153 28 19.9174 28 17L26 17C26 19.3869 25.0518 21.6761 23.364 23.364L24.7782 24.7782ZM28 17C28 14.0826 26.8411 11.2847 24.7782 9.22183L23.364 10.636C25.0518 12.3239 26 14.6131 26 17L28 17ZM24.7782 9.22183C22.7153 7.15893 19.9174 6 17 6V8C19.3869 8 21.6761 8.94821 23.364 10.636L24.7782 9.22183ZM10.3753 8.21913C6.86634 11.0263 4.86605 14.4281 4.50411 18.4095C4.14549 22.3543 5.40799 26.7295 8.13176 31.4961L9.86824 30.5039C7.25868 25.9371 6.18785 21.9791 6.49589 18.5905C6.80061 15.2386 8.46699 12.307 11.6247 9.78087L10.3753 8.21913ZM23.6247 25.7809C27.1294 22.9771 29.1332 19.6127 29.4958 15.6632C29.8549 11.7516 28.5904 7.41119 25.8682 2.64741L24.1318 3.63969C26.7429 8.20923 27.8117 12.1304 27.5042 15.4803C27.2001 18.7924 25.5372 21.6896 22.3753 24.2191L23.6247 25.7809Z"
                      fill="#1F2937"
                    />
                  </svg>
                </Link>
              </div>
              <div className="flex md:hidden items-center justify-end">
                <div className="flex items-center">
                  <div className="h-full flex items-center">
                    <Link href="/cart" passHref>
                      <a
                        aria-label="show cart"
                        className="relative focus:outline-none focus:text-indigo-700 hover:text-indigo-700 focus:border-indigo-700 hover:border-indigo-700 mx-5 h-full flex items-center justify-center text-gray-600 cursor-pointer"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-user"
                          width={28}
                          height={28}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                        {cart.cartItems.length > 0 ? (
                          <div className="absolute top-0 left-7 -mt-2 mr-4 pr-1 pt-1 font-bold">
                            {cart.cartItems.length}
                          </div>
                        ) : (
                          <div className="absolute top-0 left-4 mt-0 mr-4 pr-1 pt-1">
                            <div className="animate-ping w-2 h-2 rounded-full bg-blue-400" />
                          </div>
                        )}
                      </a>
                    </Link>
                  </div>
                  <div className="h-full flex items-center">
                    {!userInfo ? (
                      <Link href="/signin">
                        <a className="inline-flex items-center justify-center px-5 py-3 mx-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                          Masuk
                        </a>
                      </Link>
                    ) : (
                      <button
                        aria-label="dropdown"
                        className="mx-2 focus:outline-none focus:text-gray-900 text-gray-800 border-b-2 border-transparent focus:border-gray-800 hover:text-gray-900 w-full flex items-center justify-end relative cursor-pointer"
                        onClick={() => setProfile(!profile)}
                      >
                        {profile && (
                          <ul className="z-50 p-2 w-40 border-r bg-white absolute rounded shadow mt-16 top-0 ">
                            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                              <div className="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon icon-tabler icon-tabler-user"
                                  width={20}
                                  height={20}
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <circle cx={12} cy={7} r={4} />
                                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                </svg>
                                <span className="ml-2">My Profile</span>
                              </div>
                            </li>
                            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-user"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                />
                              </svg>
                              <span className="ml-2">Order History</span>
                            </li>
                            {userInfo.isAdmin && (
                              <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon icon-tabler icon-tabler-settings"
                                  width={20}
                                  height={20}
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                  <circle cx={12} cy={12} r={3} />
                                </svg>
                                <span className="ml-2">Admin Dashboard</span>
                              </li>
                            )}
                            <li
                              onClick={logoutClickHandler}
                              className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-settings"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                />
                              </svg>
                              <span className="ml-2">Sign Out</span>
                            </li>
                          </ul>
                        )}
                        <img
                          className="rounded-full h-10 w-10 object-cover"
                          src="https://i.ibb.co/GTLTzZY/Unsplash-Avatars-0000s-0035-azamat-zhanisov-a5s-RFie-A3-BY-unsplash-1.png"
                          alt="Unsplash-Avatars-0000s-0035-azamat-zhanisov-a5s-RFie-A3-BY-unsplash-1"
                        />
                      </button>
                    )}
                  </div>
                  <div className="h-full flex items-center">
                    <button
                      id="menu"
                      aria-label="open menu"
                      className="focus:outline-none focus:ring-2 focus:ring-gray-700 rounded-md text-gray-800"
                      onClick={() => setsideBar(!sideBar)}
                    >
                      <svg
                        width={30}
                        height={30}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 10H3"
                          stroke="#4B5563"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 6H3"
                          stroke="#4B5563"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 14H3"
                          stroke="#4B5563"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 18H3"
                          stroke="#4B5563"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Mobile responsive sidebar*/}
        <div
          className={
            sideBar
              ? 'absolute w-full h-full transform translate-x-0 z-40 transition duration-700 sm:hidden'
              : 'absolute w-full h-full transform -translate-x-full z-40 transition duration-700 sm:hidden'
          }
          id="mobile-nav"
        >
          <div className="w-full h-full shadow-lg z-40 fixed overflow-y-auto  top-0 bg-white flex-col justify-between xl:hidden pb-4 transition duration-500 ease-in-out">
            <div className="px-5 h-full">
              <div className="flex flex-col justify-between h-full w-full">
                <div>
                  <div className="mt-6 flex w-full items-center justify-between">
                    <div className="border-b border-gray-200 pb-8 flex items-center justify-between w-full">
                      <div className="md:pr-10 lg:pr-0 h-full flex items-center w-full">
                        <div className="relative w-full">
                          <div className="text-gray-800 absolute ml-3 inset-0 m-auto w-4 h-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-search"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <circle cx={10} cy={10} r={7} />
                              <line x1={21} y1={21} x2={15} y2={15} />
                            </svg>
                          </div>
                          <input
                            className="md:hidden border border-gray-300 focus:outline-none focus:border-indigo-700 w-full rounded text-sm text-gray-800 pl-8 py-2"
                            type="text"
                            placeholder="Search here"
                          />
                        </div>
                      </div>
                      <button
                        aria-label="close menu"
                        className="focus:outline-none focus:ring-2 rounded-md text-gray-800 pl-8"
                        onClick={() => setsideBar(!sideBar)}
                      >
                        <svg
                          width={14}
                          height={14}
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 1L1 13"
                            stroke="#1F2937"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1 1L13 13"
                            stroke="#1F2937"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <ul className>
                    <li>
                      <Link href="/">
                        <a className="cursor-pointer">
                          <div className="text-gray-800 pt-10">
                            <div className="flex items-center">
                              <p
                                tabIndex={0}
                                className="focus:outline-none text-gray-800 text-sm font-medium"
                              >
                                Home
                              </p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/books">
                        <a className="cursor-pointer">
                          <div className="text-gray-800 pt-8">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <p
                                  tabIndex={0}
                                  className="focus:outline-none text-gray-800 text-sm font-medium"
                                >
                                  Books
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about">
                        <a className="cursor-pointer">
                          <div className="text-gray-800 pt-8">
                            <div className="flex items-center">
                              <p
                                tabIndex={0}
                                className="focus:outline-none text-gray-800 text-sm font-medium"
                              >
                                About Us
                              </p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className="text-gray-800 pt-8 cursor-pointer">
                      <Link href="/contact">
                        <div className="flex items-center justify-between">
                          <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                            <p
                              tabIndex={0}
                              className="focus:outline-none text-gray-800 text-sm font-medium"
                            >
                              Contact
                            </p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Sidebar ends */}
      {/* Code block ends */}
    </header>
  );
}
