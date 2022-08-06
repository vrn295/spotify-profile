import React, { FC, ReactNode } from 'react'
import styles from "./Loader.module.scss"
interface ILoader {
  isLoading: boolean
  children: ReactNode
}

const Loader: FC<ILoader> = ({ isLoading, children }) => {
  return (
    <div className={styles.container}>
      {children}
      {
        isLoading &&
        <div className={styles.loader}>
          {/* <span>Loading</span> */}
        </div>
      }
    </div>
  )
}

export default Loader