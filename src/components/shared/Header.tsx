import ToggleSwitch from '../atoms/ToggleSwitch'
import { useTheme } from '../../contexts/ThemeContext'

/**
 * 032920260409 - Task
 *  - [ ] 
 */


const Header = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <header
      className={`px-4 py-1 h-16 grid grid-cols-[1fr_auto_1fr] items-center relative  ${isDark ? 'border-white/40' : 'border-black/20'} shadow-sm  ${isDark ? 'shadow-white/20': ''} `}
    >
        <div className="">
          <h1 className="col-span-3 text-4xl font-bold">
            Ron.
          </h1>
        </div>
        
        
        <div className="bg-green-400/40 px-10 h-20 self-start flex justify-center items-center shadow-lg shadow-green-900 [clip-path:polygon(0_0,100%_0,85%_100,15%_100%)]">
          <div className="flex flex-col items-center leading-none ">
              <span className="text-xl ">
                Sunny
              </span>
          </div>
        </div>

        <div className="p-2 flex justify-end">
          <ToggleSwitch />
        </div>
    </header>
  )
}

export default Header

