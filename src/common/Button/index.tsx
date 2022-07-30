import { ButtonHTMLAttributes, FC } from 'react'
import styles from './Button.module.scss'
import cls from 'classnames'
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isDark?: boolean;
  className?: string
}

const Button: FC<IButtonProps> = ({ title, isDark = false, className, ...props }) => {
  return (
    <button {...props} className={cls(styles.button, className, {
      [styles.button_dark]: isDark
    })}>
      <span>{title}</span>
    </button>
  )
}

export default Button