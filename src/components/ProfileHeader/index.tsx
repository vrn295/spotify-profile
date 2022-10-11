import Image from "next/image";
import { FC, useContext, useEffect, useState } from "react";
import { AppStateContext } from "../../context/AppStateContext";
import styles from "./ProfileHeader.module.scss";
import { ColorExtractor } from "react-color-extractor";
import { motion, useTransform, useViewportScroll } from "framer-motion";

interface IProfileHeader {
  isLoading: boolean;
  setdominatorColor: React.Dispatch<React.SetStateAction<string>>;
}

const ProfileHeader: FC<IProfileHeader> = ({
  isLoading,
  setdominatorColor,
}) => {
  const { userData } = useContext(AppStateContext);
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className={styles.profile_img}>
      <motion.div
        className={styles.profile_container}
        style={{
          scale,
        }}
      >
        {userData?.images.length && (
          <div>
            <div className={styles.profile_img_container}>
              <Image
                src={userData?.images[0]?.url}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={userData?.images[0]?.url}
              />
            </div>
            <ColorExtractor getColors={(color) => setdominatorColor(color[0])}>
              <img src={userData?.images[0]?.url} width="0" height="0" />
            </ColorExtractor>
          </div>
        )}
      </motion.div>
      <div className={styles.profile_name}>
        <h1>{userData?.display_name}</h1>
      </div>
    </section>
  );
};

export default ProfileHeader;
