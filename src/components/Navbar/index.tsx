import classNames from "classnames"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import { BsCaretDownFill } from "react-icons/bs"
import Button from "../../common/Button"
import { ERoutes } from "../../constants/Routes"
import useScroll from "../../hooks/useScroll"
import useWindowSize from "../../hooks/useWidth"
import { handleLogOut } from "../../services/services"
import styles from "./Navbar.module.scss"

interface INavbarProps {

}

const Navbar: FC<INavbarProps> = () => {

  const { isScrolledBeyound } = useScroll(100)

  return (
    <nav className={classNames(styles.container, {
      [styles.container_sticky]: isScrolledBeyound
    })}>
      <div className={classNames('w_container', styles.nav)}>
        <Link passHref href={ERoutes.PROFILE}>
          <a className={styles.nav_logo}>
            <div className={styles.nav_logo_img}>
              <Image
                layout='fill'
                objectFit="contain"
                src="/images/logo_white.png"
              />
            </div>
            <div className={styles.nav_logo_title}>
              <p>Spotify</p>
            </div>
          </a>
        </Link>
        <section>
          <Button
            title="Logout"
            isDark={!isScrolledBeyound}
            variant="small"
            onClick={handleLogOut}
          />
        </section>
      </div>
    </nav>
  )
}

export default Navbar