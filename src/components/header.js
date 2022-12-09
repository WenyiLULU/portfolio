import me from "../images/me.jpg"

import { HeaderContents } from "../data/header.data";

export default function Header(props) {
    

    function handleLangChange (lang) {
        props.onSelectLanguage(lang);
    }

    return (
        <header id="top" className="fixed z-50 w-full shadow-lg navbar bg-primary-focus text-neutral-content rounded-b-box">
            <div className="flex px-2 mx-2 navbar-start">
                <span className="text-lg font-bold">
                    {HeaderContents.name[props.lang]}
                </span>
            </div>
            <div className="hidden px-2 mx-2 navbar-center md:flex">
                <div className="flex items-stretch md:space-x-2 lg:space-x-8">
                    <a href="#me" className="border-white btn btn-ghost btn-sm rounded-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>
                        {HeaderContents.about[props.lang]}
                    </a>
                    <a href="#history" className="border-white btn btn-ghost btn-sm rounded-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                        </svg>
                        {HeaderContents.history[props.lang]}
                    </a>
                    <a href="#skills" className="border-white btn btn-ghost btn-sm rounded-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                        </svg>
                        {HeaderContents.abilities[props.lang]}
                    </a>
                    <a href="#me" className="border-white btn btn-ghost btn-sm rounded-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/>
                        </svg>
                        {HeaderContents.hobbies[props.lang]}
                    </a>
                    <a href="#footer" className="border-white btn btn-ghost btn-sm rounded-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                        </svg>
                        {HeaderContents.contact[props.lang]}
                    </a>
                </div>
            </div>

            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <button tabIndex="0" className="mx-4 btn btn-square btn-primary btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
                        </svg>
                    </button>
                    <ul tabIndex="0" className="w-12 shadow menu dropdown-content bg-base-100 rounded-box">
                        <li>
                            <button onClick={() => handleLangChange("fr")} className="btn btn-secondary">FR</button>
                        </li>
                        <li>
                            <button onClick={() => handleLangChange("en")} className="btn btn-secondary">EN</button>
                        </li>
                        <li>
                            <button onClick={() => handleLangChange("cn")} className="btn btn-secondary">CN</button>
                        </li>
                    </ul>
                </div>

                <div className="dropdown dropdown-end dropdown-hover avatar md:hidden">
                    <div tabIndex="0" className="w-12 h-12 px-0 m-1 rounded-full btn bg-primary border-secondary">
                        <img className="w-full h-full" src={me} alt="me"/>
                    </div>
                    <div tabIndex="0" className="shadow menu dropdown-content rounded-box w-[160px]">
                        <div className="artboard artboard-demo">
                            <ul className="bg-white shadow-lg menu rounded-box">
                                <li className="hover-bordered">
                                    <a href="#me">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                        </svg>
                                        {HeaderContents.about[props.lang]}
                                    </a>
                                </li>
                                <li className="hover-bordered">
                                    <a href="#history">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                                        </svg>
                                        {HeaderContents.history[props.lang]}
                                    </a>
                                </li>
                                <li className="hover-bordered">
                                    <a href="#skills">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                                        </svg>
                                        {HeaderContents.abilities[props.lang]}
                                    </a>
                                </li>
                                <li className="hover-bordered">
                                    <a href="#me" pl-8>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/>
                                        </svg>
                                        {HeaderContents.hobbies[props.lang]}
                                    </a>
                                </li>
                                <li className="hover-bordered">
                                    <a href="#footer">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                                        </svg>
                                        {HeaderContents.contact[props.lang]}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        )
    }