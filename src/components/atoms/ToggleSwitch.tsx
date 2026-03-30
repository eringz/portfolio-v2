import { motion } from 'framer-motion'
import { useTheme } from '../../contexts/ThemeContext'

// export type ThemeMode = 'light' | 'dark'

const ToggleSwitch = () => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={toggleTheme}
      className={`p-1 w-16 h-6 flex ${isDark ? 'bg-green-900' : 'bg-gray-300'} ${isDark ? 'justify-end' : 'justify-start'} items-center rounded-full cursor-pointer transition-colors duration-600`}
    >
      <motion.div
        layout
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 20,
          mass: 1.2,
        }}
        className={`flex h-4 w-8 text-center ${isDark ? 'bg-gray-300' : 'bg-black/60'} rounded-full shadow-md`}
      >
        {/* {theme === 'light' ? '☀️' : '🌙'} */}
      </motion.div>

    </motion.button>
  )
}

export default ToggleSwitch


