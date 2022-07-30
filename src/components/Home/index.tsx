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
            <h1>
              Have a
              Glance At
              Your Profile.
            </h1>
            <div className={styles.container_btns}>
              <Link href={ERoutes.LOGIN}>
                <Button className={styles.container_btn_login} title="Login" />
              </Link>
              <Link href={spotify_link} target="_blank" passHref>
                <a target='_blank'>
                  <Button className={styles.container_btns_spotify} title="Open Spotify" isDark />
                </a>
              </Link>
            </div>
          </section>
          <p className={styles.container_developer}>Developed by &nbsp;
            <a href={portfolio_link} target='_blank'>Varun Kumar</a>
          </p>
        </div>
      </main>
      <aside>
        <div className={styles.aside_container}>
          <div className={styles.part_one}>
            <section className={styles.adele_cover}>
              <Image layout="fill" src="/images/home/adele_cover.jpg" objectFit="cover" placeholder="blur" blurDataURL="/images/home/adele_cover.jpg" />
            </section>
            <section className={styles.country_cover}>
              <Image layout="fill" src="/images/home/country_cover.jpg" objectFit="cover" placeholder="blur" blurDataURL="/images/home/adele_cover.jpg" />
            </section>
          </div>
          <section className={styles.nf_cover}>
            <Image layout="fill" src="/images/home/nf_cover.jpg" objectFit="cover" placeholder="blur" blurDataURL="/images/home/adele_cover.jpg" />
            <span className={styles.nf_cover_text}>Hip Hop Mix</span>
          </section>
        </div>
      </aside>
    </div>
  )
}

export default Home