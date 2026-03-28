import ToggleSwitch from '../atoms/ToggleSwitch'
import { useTheme } from '../../contexts/ThemeContext'

const Header = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <header
      className={`px-4 py-5 flex justify-between border-b ${isDark ? 'border-white/40' : 'border-black/20'} shadow-sm  ${isDark ? 'shadow-white/20': ''}`}
    >
      <h1 className="text-4xl font-bold">Ron</h1>
      <ToggleSwitch />
    </header>
  )
}

export default Header

