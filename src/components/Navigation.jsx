import React, { useState } from "react";

export default function Navigation() {
  const [show, setShow] = useState(null);

  return (
    <>
      <div className="bg-gray-200 h-full w-full">
        {/* Code block starts */}
        <nav className="bg-white shadow xl:block hidden">
          <div className="mx-auto container px-6 py-2 xl:py-0">
            <div className="flex items-center justify-between">
              <div className="flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
                <div className="flex items-center">
                  <img
                    src="https://img.icons8.com/external-anggara-flat-anggara-putra/32/null/external-home-ui-basic-anggara-flat-anggara-putra.png"
                    alt="home icon"
                  />
                  <h2 className="hidden sm:block text-base text-gray-700 font-bold leading-normal pl-3">
                    Estatery
                  </h2>
                </div>
              </div>
              <div className="flex">
                <div className="hidden xl:flex md:mr-6 xl:mr-96">
                  <a
                    href="/"
                    className="flex px-5 items-center py-6 text-sm leading-5 hover:bg-blue-100 text-blue-600 focus:outline-none transition duration-150 ease-in-out"
                  >
                    Rent
                  </a>
                  <a
                    href="/"
                    className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                  >
                    Buy
                  </a>
                  <a
                    href="/"
                    className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                  >
                    Sell
                  </a>
                  <a
                    href="/"
                    className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                  >
                    Manage Property
                  </a>
                  <a
                    href="/"
                    className="flex px-5 items-center py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                  >
                    Resources
                  </a>
                </div>
                <div className="hidden xl:flex items-center">
                  <div className="relative md:mr-6 my-2">
                    <button className="focus:outline-none bg-white border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-100 rounded text-blue-600 px-5 py-2 text-xs">
                      Login
                    </button>
                  </div>
                  <div className="relative md:mr-6 my-2">
                    <button className="focus:outline-none bg-blue-600 border-gray-300 border transition duration-150 ease-in-out hover:bg-blue-500 rounded text-white px-5 py-2 text-xs">
                      Signup
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav>
          <div className="py-4 px-6 w-full flex xl:hidden justify-between items-center bg-white fixed top-0 z-40">
            <div className="w-24">
              <img
                src="https://img.icons8.com/external-anggara-flat-anggara-putra/32/null/external-home-ui-basic-anggara-flat-anggara-putra.png"
                alt="home icon"
              />
            </div>
            <div className="flex items-center">
              <div className="relative mr-6 ">
                <button className="focus:outline-none bg-white border-gray-300 border transition duration-150 ease-in-out hover:bg-gray-100 rounded text-blue-600 px-5 py-2 text-xs">
                  Login
                </button>
              </div>
              <div className="relative mr-6 ">
                <button className="focus:outline-none bg-blue-600 border-gray-300 border transition duration-150 ease-in-out hover:bg-blue-500 rounded text-white px-5 py-2 text-xs">
                  Signup
                </button>
              </div>
              <div
                id="menu"
                className="text-gray-800"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  ""
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-menu-2"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1={4} y1={6} x2={20} y2={6} />
                    <line x1={4} y1={12} x2={20} y2={12} />
                    <line x1={4} y1={18} x2={20} y2={18} />
                  </svg>
                )}
              </div>
            </div>
          </div>
          {/*Mobile responsive sidebar*/}
          <div
            className={
              show
                ? "w-full xl:hidden h-full absolute z-40  transform  translate-x-0 "
                : "   w-full xl:hidden h-full absolute z-40  transform -translate-x-full"
            }
          >
            <div
              className="bg-gray-800 opacity-50 w-full h-full"
              onClick={() => setShow(!show)}
            />
            <div className="w-64 fixed overflow-y-auto z-40 top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
              <div className="px-6 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="mt-6 flex w-full items-center justify-between">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <img
                            src="https://img.icons8.com/external-anggara-flat-anggara-putra/32/null/external-home-ui-basic-anggara-flat-anggara-putra.png"
                            alt="home icon"
                          />

                          <p className="text-base md:text-2xl text-gray-800 ml-3">
                            Estatery
                          </p>
                        </div>
                        <div
                          id="cross"
                          className="text-gray-800"
                          onClick={() => setShow(!show)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-x"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <ul className="f-m-m">
                      <a className="cursor-pointer" href="/">
                        <li className="text-gray-800 pt-10">
                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 text-indigo-700"></div>
                            <p className="text-indigo-700 xl:text-base text-base ml-3">
                              Rent
                            </p>
                          </div>
                        </li>
                      </a>
                      <a className="cursor-pointer" href="/">
                        <li className="text-gray-800 pt-8">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800"></div>
                              <p className="text-gray-800 xl:text-base  text-base ml-3">
                                Buy
                              </p>
                            </div>
                          </div>
                        </li>
                      </a>
                      <a className="cursor-pointer" href="/">
                        <li className="text-gray-800 pt-8">
                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800"></div>
                            <p className="text-gray-800 xl:text-base  text-base ml-3">
                              Sell
                            </p>
                          </div>
                        </li>
                      </a>
                      <a className="cursor-pointer" href="/">
                        <li className="text-gray-800 pt-8">
                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800"></div>
                            <p className="text-gray-800 xl:text-base  text-base ml-3">
                              Manage Property
                            </p>
                          </div>
                        </li>
                      </a>
                      <a className="cursor-pointer" href="/">
                        <li className="text-gray-800 pt-8">
                          <div className="flex items-center">
                            <div className="w-6 h-6 md:w-8 md:h-8 text-gray-800"></div>
                            <p className="text-gray-800 xl:text-base  text-base ml-3">
                              Resources
                            </p>
                          </div>
                        </li>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Code block ends */}
      </div>
    </>
  );
}
