import { FC, useEffect, useState } from "react";
import { ELocalStorage } from "../../constants";
import { Playlists } from "../../model";
import { getCurrectUserPlaylists } from "../../services/services";
import PlaylistCard from "../PlaylistCard";
import styles from "./CurrentUserPlaylist.module.scss";
interface ICurrentUserPlaylistProps {}

const CurrentUserPlaylist: FC<ICurrentUserPlaylistProps> = () => {
  const [userPlaylist, setuserPlaylist] = useState<Playlists>();
  // const [player, setPlayer] = useState(undefined);
  useEffect(() => {
    handlePlaylistCall();
  }, []);

  const handlePlaylistCall = async () => {
    const token = localStorage.getItem(ELocalStorage.Token);
    if (token) {
      const playlist_data = await getCurrectUserPlaylists(token);
      setuserPlaylist(playlist_data?.data);
    }
  };

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://sdk.scdn.co/spotify-player.js";
  //   script.async = true;

  //   document.body.appendChild(script);

  //     window.onSpotifyWebPlaybackSDKReady = () => {

  //         const player = new window.Spotify.Player({
  //             name: 'Web Playback SDK',
  //             getOAuthToken: cb => { cb(localStorage.getItem(ELocalStorage.Token)); },
  //             volume: 0.5
  //         });

  //         setPlayer(player);

  //         player.addListener('ready', ({ device_id }) => {
  //             console.log('Ready with Device ID', device_id);
  //         });

  //         player.addListener('not_ready', ({ device_id }) => {
  //             console.log('Device ID has gone offline', device_id);
  //         });

  //         player.connect();

  //     };
  // }, []);

  return (
    <div className={styles.container}>
      <h2>Playlists</h2>
      <div className="container">
        <div className="main-wrapper"></div>
      </div>
      <section className={styles.list_container}>
        {userPlaylist &&
          userPlaylist?.items?.length &&
          userPlaylist?.items?.map((item) => (
            <PlaylistCard name={item.name} imageUrl={item.images[0].url} />
          ))}
      </section>
    </div>
  );
};

export default CurrentUserPlaylist;
