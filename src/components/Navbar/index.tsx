import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { FC, useRef, useState } from "react";
import Button from "../../common/Button";
import Modal from "../../common/Modal";
import { ERoutes } from "../../constants/Routes";
import useScroll from "../../hooks/useScroll";
import useNavbarView from "../../hooks/view/useNavbarView";
import { handleLogOut } from "../../services/services";
import ModalLogout from "../ModalLogout";
import styles from "./Navbar.module.scss";

interface INavbarProps {}

const Navbar: FC<INavbarProps> = () => {
  const { isScrolledBeyound } = useScroll(100);

  const {
    logoutRef,
    isLogoutConfimationOpen,
    handleLogoutModalOpen,
    handleLogoutModalClose,
  } = useNavbarView();

  return (
    <div>
      <nav
        className={classNames(styles.container, {
          [styles.container_sticky]: isScrolledBeyound,
        })}
      >
        <header className={classNames("w_container", styles.nav)}>
          <Link passHref href={ERoutes.PROFILE}>
            <a className={styles.nav_logo}>
              <div className={styles.nav_logo_img}>
                <Image
                  layout="fill"
                  objectFit="contain"
                  src="/images/logo_white.png"
                />
              </div>
              <div className={styles.nav_logo_title}>
                <p>Spotify</p>
              </div>
            </a>
          </Link>
          <section ref={logoutRef}>
            <Button
              title="Logout"
              isDark={!isScrolledBeyound}
              variant="small"
              onClick={handleLogoutModalOpen}
            />
          </section>
        </header>
      </nav>
      {logoutRef?.current && (
        <Modal
          isOpen={isLogoutConfimationOpen}
          handleClose={handleLogoutModalClose}
          postion={{
            top: logoutRef?.current?.offsetTop + 30,
            left: logoutRef?.current?.offsetLeft + 60,
          }}
        >
          <ModalLogout handleClose={handleLogoutModalClose} />
        </Modal>
      )}
    </div>
  );
};

export default Navbar;
