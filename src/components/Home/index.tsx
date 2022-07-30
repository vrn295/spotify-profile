import React from 'react'
import Button from '../../common/Button'
import Seo from '../../common/Seo'
import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={styles.container}>
      <Seo />
      <main>
        <h1>
          Have a
          Glance At
          Your Profile
        </h1>
        <div className={styles.container_btns}>
          <Button className={styles.container_btn_login} title="Login" />
          <Button className={styles.container_btns_spotify} title="Open Spotify" isDark />
        </div>
      </main>
    </div>
  )
}

export default Home