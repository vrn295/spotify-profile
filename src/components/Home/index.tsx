import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../../common/Button'
import Seo from '../../common/Seo'
import { portfolio_link, spotify_link } from '../../constants'
import { ERoutes } from '../../constants/Routes'
import styles from './Home.module.scss'

const Home = () => {

  return (
    <div className={styles.container}>
      <Seo />
      <main>
        <div className={styles.main_container}>
          <p></p>
          <section>
            <motion.h1
              initial={{ x: "-100%" }}
              animate={{ x: '0' }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.5,
                duration: 0.5
              }}
            >
              Have a
              Glance At
              Your Profile.
            </motion.h1>
            <motion.div
              className={styles.container_btns}
              initial={{ x: "-100%" }}
              animate={{ x: '0' }}
              transition={{
                type: "spring",
                stiffness: 80,
                delay: 0.8,
                duration: 0.8
              }}
            >
              <Link href={ERoutes.LOGIN}>
                <Button className={styles.container_btn_login} title="Login" />
              </Link>
              <Link href={spotify_link} target="_blank" passHref>
                <a target='_blank'>
                  <Button className={styles.container_btns_spotify} title="Open Spotify" isDark />
                </a>
              </Link>
            </motion.div>
          </section>
          <motion.p
            initial={{ x: "-200%" }}
            animate={{ x: '0' }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.75,
              duration: 0.5
            }}
            className={styles.container_developer}>Developed by &nbsp;
            <a href={portfolio_link} target='_blank'>Varun Kumar</a>
          </motion.p>
        </div>
      </main>
      <aside>
        <div className={styles.aside_container}>
          <motion.div drag className={styles.part_one}>
            <motion.section drag className={styles.adele_cover}>
              <Image layout="fill" src="/images/home/adele_cover.jpg" objectFit="cover" placeholder="blur" blurDataURL="/images/home/adele_cover.jpg" />
            </motion.section>
            <section className={styles.country_cover}>
              <Image layout="fill" src="/images/home/country_cover.jpg" objectFit="cover" placeholder="blur" blurDataURL="/images/home/country_cover.jpg" />
            </section>
          </motion.div>
          <section className={styles.nf_cover}>
            <Image layout="fill" src="/images/home/nf_cover.jpg" objectFit="cover" placeholder="blur" blurDataURL="/images/home/nf_cover.jpg" />
            <span className={styles.nf_cover_text}>Hip Hop Mix</span>
          </section>
        </div>
      </aside>
    </div>
  )
}

export default Home