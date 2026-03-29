import { motion } from 'framer-motion'
import { useTheme } from '../../contexts/ThemeContext'

export type ThemeMode = 'light' | 'dark'

const ToggleSwitch = () => {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
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
        className={`flex m-1 h-4 w-8 ${isDark ? 'bg-gray-300' : 'bg-black/60'} rounded-full shadow-md`}
      />
    </motion.button>
  )
}

export default ToggleSwitch


