import { ButtonHTMLAttributes, FC } from 'react'
import styles from './Button.module.scss'
import cls from 'classnames'
import { motion } from 'framer-motion'
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isDark?: boolean;
  className?: string;
  variant?: 'small' | 'medium' | 'large'
}

const Button: FC<IButtonProps> = ({ title, isDark = false, className, variant, ...props }) => {
  return (
    <button
      {...props}
      className={cls(styles.button, className, {
        [styles.button_dark]: isDark,
        [styles.button_small]: variant === 'small',
        [styles.button_large]: variant === 'large'
      })}
    >
      <span>{title}</span>
    </button>
  )
}

export default Button