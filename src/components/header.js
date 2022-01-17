import me from "../images/me.jpg"

export default function Header(props) {
    const contents = {
        "name": {
            "fr": "Wenyi Lu",
            "en": "Wenyi Lu",
            "cn": "吕闻怡",
        },
        "about": {
            "fr": "Sur Moi",
            "en": "About Me",
            "cn": "关于我",
        },
        "history": {
            "fr": "Histoire",
            "en": "History",
            "cn": "经 历",
        },
        "abilities": {
            "fr": "Compétences",
            "en": "Skills",
            "cn": "才 能",
        },
        "hobbies": {
            "fr": "Passions",
            "en": "Hobbies",
            "cn": "爱 好",
        },
        "contact": {
            "fr": "Contact",
            "en": "Contact",
            "cn": "联系方式",
        },
    }

    function handleLangChange (lang) {
        props.onSelectLanguage(lang);
    }

    return (
        <header id="top" className="navbar fixed w-full shadow-lg bg-primary-focus text-neutral-content rounded-b-box">
            <div className="navbar-start px-2 mx-2 flex">
                <span className="text-lg font-bold">
                    {contents.name[props.lang]}
                </span>
            </div>
            <div className="navbar-center hidden px-2 mx-2 md:flex">
                <div className="flex md:space-x-6 lg:space-x-12 items-stretch">
                    <a href="#me" className="btn btn-ghost btn-sm rounded-btn border-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                        </svg>
                        {contents.about[props.lang]}
                    </a>
                    <a href="#history" className="btn btn-ghost btn-sm rounded-btn border-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                        </svg>
                        {contents.history[props.lang]}
                    </a>
                    <a href="#me" className="btn btn-ghost btn-sm rounded-btn border-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                        </svg>
                        {contents.abilities[props.lang]}
                    </a>
                    <a href="#me" className="btn btn-ghost btn-sm rounded-btn border-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/>
                        </svg>
                        {contents.hobbies[props.lang]}
                    </a>
                    <a href="#me" className="btn btn-ghost btn-sm rounded-btn border-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                        </svg>
                        {contents.contact[props.lang]}
                    </a>
                </div>
            </div>

            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <button tabIndex="0" className="btn btn-square btn-primary btn-sm mx-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
                        </svg>
                    </button>
                    <ul tabIndex="0" className="shadow menu dropdown-content bg-base-100 rounded-box w-12">
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
                    <div tabIndex="0" className="btn rounded-full w-12 h-12 m-1 px-0 bg-primary border-secondary">
                        <img className="h-full w-full" src={me} alt="me"/>
                    </div>
                    <div tabIndex="0" className="shadow menu dropdown-content rounded-box w-50">
                        <div className="artboard artboard-demo">
                            <ul className="menu shadow-lg bg-white rounded-box">
                                <li className="hover-bordered">
                                    <a href="#me">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                        </svg>
                                        {contents.about[props.lang]}
                                    </a>
                                </li>
                                <li className="hover-bordered">
                                    <a href="#history">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                                        </svg>
                                        {contents.history[props.lang]}
                                    </a>
                                </li>
                                <li className="hover-bordered">
                                    <a href="#me">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                                        </svg>
                                        {contents.abilities[props.lang]}
                                    </a>
                                </li>
                                <li className="hover-bordered">
                                    <a href="#me" pl-8>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/>
                                        </svg>
                                        {contents.hobbies[props.lang]}
                                    </a>
                                </li>
                                <li className="hover-bordered">
                                    <a href="#me">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                                        </svg>
                                        {contents.contact[props.lang]}
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