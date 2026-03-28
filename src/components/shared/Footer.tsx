import { useTheme } from '../../contexts/ThemeContext'
import { FaGithub, FaLinkedinIn, FaFacebook } from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path: 'https://github.com/eringz', label: 'Github'},
    {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/john-ronald-santos/', label: 'LinkedIn'},
    {icon: <FaFacebook />, path: 'https://www.facebook.com/ron.santos307594', label: 'Facebook'},

]

const Footer = () => {
    const { theme } = useTheme()
    const isDark = theme === 'dark'
    return (
        <footer className={`p-8 text-center border-t ${isDark ? 'border-white/40' : 'border-black/20'} shadow-sm  ${isDark ? 'shadow-white/20': ''}`}>
          <div
            className="flex justify-center space-x-8"
          >
            {socials.map((item, index) => (
                <a
                    key={index}
                    href={item.path}
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    target="_blank"
                >
                    {item.icon}
                </a>
            ))}
          </div>
        </footer>
    )
}

export default Footer

