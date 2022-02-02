export default function Footer() {
  return (
    <footer className="pb-14 flex justify-center items-center bg-gray-100 dark:bg-gray-900">
      <div className="mt-20 mx-auto container md:w-full flex justify-center items-center">
        <div className="flex xl:flex-row flex-col lg:gap-x-24 px-6 md:px-0">
          <div className="flex flex-col flex justify-start items-start lg:w-80">
            <div className="xl:flex-col flex justify-start items-center xl:items-start">
              <div className="flex justify-center mr-6 xl:mr-0 dark:text-white text-gray-800">
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
              </div>
              <div className="flex justify-center flex-col">
                <div className="xl:mt-8">
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-normal">
                    Copyright &copy; 2022 Booku.
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-normal">
                    All rights reserved
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-start items-start flex-row lg:space-x-4 space-x-2">
              <button
                aria-label="twitter"
                role="button"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 hover:opacity-75 text-gray-800 dark:text-white"
              >
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.5208 13.0051L15.5544 13.5587L14.9948 13.4909C12.9579 13.2311 11.1784 12.3498 9.66756 10.8696L8.92891 10.1352L8.73865 10.6776C8.33575 11.8865 8.59316 13.1633 9.43253 14.022C9.8802 14.4965 9.77948 14.5643 9.00725 14.2819C8.73865 14.1915 8.50363 14.1237 8.48124 14.1576C8.4029 14.2367 8.6715 15.2648 8.88414 15.6716C9.17513 16.2365 9.76828 16.7902 10.4174 17.1178L10.9658 17.3777L10.3167 17.389C9.68994 17.389 9.66756 17.4003 9.73471 17.6376C9.95854 18.372 10.8427 19.1516 11.8276 19.4906L12.5214 19.7278L11.9171 20.0894C11.0218 20.6091 9.96973 20.9029 8.91772 20.9255C8.41409 20.9368 8 20.982 8 21.0159C8 21.1289 9.36538 21.7616 10.16 22.0102C12.5438 22.7446 15.3753 22.4282 17.5017 21.1741C19.0126 20.2815 20.5235 18.5076 21.2286 16.7902C21.6091 15.875 21.9896 14.2028 21.9896 13.4006C21.9896 12.8808 22.0232 12.813 22.6499 12.1916C23.0192 11.83 23.3662 11.4346 23.4333 11.3216C23.5452 11.1069 23.534 11.1069 22.9633 11.299C22.012 11.638 21.8777 11.5928 22.3477 11.0843C22.6947 10.7228 23.1088 10.0674 23.1088 9.87536C23.1088 9.84146 22.9409 9.89796 22.7506 9.99964C22.5492 10.1126 22.1015 10.2821 21.7658 10.3838L21.1614 10.5759L20.613 10.203C20.3108 9.99964 19.8856 9.77367 19.6617 9.70588C19.0909 9.5477 18.218 9.57029 17.7032 9.75107C16.3042 10.2595 15.4201 11.5702 15.5208 13.0051Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <button
                aria-label="youtube"
                role="button"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 hover:opacity-75 text-gray-800 dark:text-white"
              >
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.6679 10.4995C23.4022 10.701 23.9805 11.2948 24.1768 12.0488C24.5335 13.4153 24.5335 16.2666 24.5335 16.2666C24.5335 16.2666 24.5335 19.1178 24.1768 20.4845C23.9805 21.2385 23.4022 21.8322 22.6679 22.0338C21.3371 22.4 16.0001 22.4 16.0001 22.4C16.0001 22.4 10.6632 22.4 9.3323 22.0338C8.59795 21.8322 8.01962 21.2385 7.82335 20.4845C7.4668 19.1178 7.4668 16.2666 7.4668 16.2666C7.4668 16.2666 7.4668 13.4153 7.82335 12.0488C8.01962 11.2948 8.59795 10.701 9.3323 10.4995C10.6632 10.1333 16.0001 10.1333 16.0001 10.1333C16.0001 10.1333 21.3371 10.1333 22.6679 10.4995ZM14.4001 13.8666V19.1999L18.6668 16.5333L14.4001 13.8666Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-row mt-6 mt-8 xl:mt-0 lg:gap-x-14 gap-x-10">
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-y-10 lg:gap-y-0 gap-x-0 lg:gap-x-0">
              <div className="lg:w-40">
                <h2 className="text-gray-800 dark:text-white text-lg md:text-xl font-medium leading-loose">
                  Booku
                </h2>
                <div className="mt-6 flex flex justify-start items-start flex-col space-y-2">
                  <div>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 text-sm md:text-base leading-relaxed"
                    >
                      About Us
                    </a>
                  </div>
                  <div>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 text-sm md:text-base leading-relaxed"
                    >
                      Blog
                    </a>
                  </div>
                  <div>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 text-sm md:text-base leading-relaxed"
                    >
                      Contact us
                    </a>
                  </div>
                  <div>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 text-sm md:text-base leading-relaxed"
                    >
                      Pricing
                    </a>
                  </div>
                  <div>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 text-sm md:text-base leading-relaxed"
                    >
                      Testimonials
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:w-40">
                <h2 className="text-gray-800 dark:text-white text-lg md:text-xl font-medium leading-loose">
                  Support
                </h2>
                <div className="mt-6 flex flex justify-start items-start flex-col space-y-2">
                  <div>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 text-sm md:text-base leading-relaxed"
                    >
                      Help center
                    </a>
                  </div>
                  <div>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 text-sm md:text-base leading-relaxed"
                    >
                      Terms of service
                    </a>
                  </div>
                  <div>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 text-sm md:text-base leading-relaxed"
                    >
                      Legal
                    </a>
                  </div>
                  <div>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 text-sm md:text-base leading-relaxed"
                    >
                      Privacy policy
                    </a>
                  </div>
                  <div>
                    <a
                      href="javascript:void(0)"
                      className="text-gray-800 dark:text-white focus:outline-none focus:opacity-75 hover:opacity-75 text-sm md:text-base leading-relaxed"
                    >
                      Status
                    </a>
                  </div>
                </div>
              </div>
              <div className="sm:block hidden">
                <h2 className="w-60 text-lg md:text-xl font-medium leading-loose text-gray-800 dark:text-white">
                  Get Updates and more
                </h2>
                <div className="dark:bg-gray-800 bg-white rounded-lg mt-6 flex flex justify-start items-start flex-col space-y-2">
                  <div className="w-full flex justify-between items-center space-x-2 sm:space-x-0">
                    <div className="relative w-full">
                      <input
                        className="bg-transparent focus:outline-none focus:ring-2 w-full focus:ring-gray-400 h-10 p-2 dark:placeholder-gray-300 placeholder-gray-600 text-xs md:text-base"
                        type="text"
                        placeholder="Your email address"
                      />
                      <button
                        aria-label="send email"
                        role="button"
                        className="absolute right-0 top-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:opacity-75 p-2 sm:p-0 sm:w-12 h-10 flex justify-center items-center bg-gradient-to-l from-indigo-600 to-indigo-700 rounded-sm"
                      >
                        <svg
                          width={26}
                          height={26}
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M24.0845 12.9998C24.0845 13.2879 23.9194 13.5506 23.6599 13.6755L9.34094 20.5698C9.06387 20.7032 8.73344 20.654 8.50731 20.4456C8.28118 20.2372 8.20518 19.9119 8.31557 19.6249L10.8637 12.9998L8.31557 6.37474C8.20518 6.08772 8.28118 5.7624 8.50731 5.554C8.73344 5.3456 9.06387 5.29635 9.34094 5.42976L23.6599 12.324C23.9194 12.449 24.0845 12.7117 24.0845 12.9998ZM12.1823 13.7498L10.3947 18.3977L20.048 13.7498H12.1823ZM20.048 12.2498L10.3947 7.60193L12.1823 12.2498H20.048Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0">
                              <rect
                                width={18}
                                height={18}
                                fill="white"
                                transform="translate(12.7279 0.271973) rotate(45)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:hidden sm:mt-0 mt-4">
            <h2 className="w-60 text-lg md:text-xl font-medium leading-loose text-gray-800 dark:text-white">
              Get Updates and more
            </h2>
            <div className="dark:bg-gray-800 bg-white rounded-lg mt-6 flex flex justify-start items-start flex-col space-y-2">
              <div className="w-full flex justify-between items-center space-x-2 sm:space-x-0">
                <div className="relative w-full">
                  <input
                    className="bg-transparent focus:outline-none focus:ring-2 w-full focus:ring-gray-400 h-10 p-2 dark:placeholder-gray-300 placeholder-gray-600 text-xs md:text-base"
                    type="text"
                    placeholder="Your email address"
                  />
                  <button className="absolute right-0 top-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:opacity-75 p-2 sm:p-0 sm:w-12 h-10 flex justify-center items-center bg-gradient-to-l from-indigo-600 to-indigo-700 rounded-sm">
                    <svg
                      width={26}
                      height={26}
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M24.0845 12.9998C24.0845 13.2879 23.9194 13.5506 23.6599 13.6755L9.34094 20.5698C9.06387 20.7032 8.73344 20.654 8.50731 20.4456C8.28118 20.2372 8.20518 19.9119 8.31557 19.6249L10.8637 12.9998L8.31557 6.37474C8.20518 6.08772 8.28118 5.7624 8.50731 5.554C8.73344 5.3456 9.06387 5.29635 9.34094 5.42976L23.6599 12.324C23.9194 12.449 24.0845 12.7117 24.0845 12.9998ZM12.1823 13.7498L10.3947 18.3977L20.048 13.7498H12.1823ZM20.048 12.2498L10.3947 7.60193L12.1823 12.2498H20.048Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect
                            width={18}
                            height={18}
                            fill="white"
                            transform="translate(12.7279 0.271973) rotate(45)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
