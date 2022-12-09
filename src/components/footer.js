import icon_github from "../images/icon_Github.png"
import icon_linkedin from "../images/icon_linkedin.png"
import icon_instagram from "../images/icon_Instagram.png"
import icon_mail from "../images/icon_mail.png"

export default function Footer() {
    return (
        <footer id="footer" className="p-4 font-light footer bg-neutral text-secondary footer-center">
            <div className="grid grid-cols-3 justify-items-center">
                <div >
                    <p className="text-secondary">Hosted by Vercel</p>
                    <p className="text-secondary">Made by React with Tailwind and DaisyUI</p>
                </div>
                <div >
                    <p className="text-secondary">Copyright © 2022 - All right reserved by Wenyi Lu</p>
                </div>
                <div className="flex flex-wrap justify-evenly">
                    <a href="https://github.com/WenyiLULU" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-circle btn-ghost btn-md">
                            <img  src={icon_github} alt="Github" />
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/wenyi-lu-profile/" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-circle btn-ghost btn-md">
                            <img  src={icon_linkedin} alt="Linkedin" />
                        </button>
                    </a>
                    <a href="https://www.instagram.com/wenyi_2018/" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-circle btn-ghost btn-md">
                            <img  src={icon_instagram} alt="Instagram" />
                        </button>
                    </a>
                    <a href="mailto:luwenyi1991@gmail.com" target="_blank" rel="noopener noreferrer">
                        <div className="tooltip" data-tip="Send an email to: luwenyi1991@gmail.com">
                            <button className="btn btn-circle btn-ghost btn-md">
                                <img  src={icon_mail} alt="Instagram" />
                            </button>
                        </div>
                    </a>


                </div>
            </div>
        </footer>
    )
}