import { FC } from "react";
import useProfileView from "../../hooks/view/useProfileView";
import CurrentUserPlaylist from "../CurrentUserPlaylist";
import ProfileHeader from "../ProfileHeader";
import ProfileMostPlayed from "../ProfileMostPlayed";
import TopArtists from "../TopArtists";
import styles from "./Profile.module.scss";

interface IProfileProps {}

const Profile: FC<IProfileProps> = () => {
  const { isLoading, dominatorColor, setdominatorColor } = useProfileView();
  return (
    <>
      <main
        className={styles.container_main}
        style={{ backgroundColor: dominatorColor || "#121212" }}
      >
        <ProfileHeader
          isLoading={isLoading}
          setdominatorColor={setdominatorColor}
        />
      </main>
      <div className={styles.profile_songs}>
        <TopArtists />
        <ProfileMostPlayed />
        <CurrentUserPlaylist />
      </div>
    </>
  );
};

export default Profile;
