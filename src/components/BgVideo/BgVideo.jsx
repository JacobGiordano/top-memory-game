import "./BgVideo.css";
import smallVideo from "/videos/nebula_25047_640×360.mp4";
import mediumVideo from "/videos/nebula_25047_960×540.mp4";
import largeVideo from "/videos/nebula_25047_1280×720.mp4";
import extraLargeVideo from "/videos/nebula_25047_1920×1080.mp4";
import { useEffect } from "react";

function BgVideo() {
  useEffect(() => {
    const videoEl = document.querySelector(".bg-video");
    videoEl ? (document.querySelector(".bg-video").defaultMuted = true) : null;
  }, []);
  return (
    <div className='bg-video-container'>
      <video
        className='bg-video'
        autoPlay={true}
        loop={true}
        controls={false}
        playsInline={true}
        disableRemotePlayback={true}
        muted={true}
      >
        <source src={smallVideo} media='(max-width: 639px)'></source>
        <source src={mediumVideo} media='(max-width: 959px)'></source>
        <source src={largeVideo} media='(max-width: 1279px)'></source>
        <source src={extraLargeVideo}></source>
      </video>
    </div>
  );
}
export default BgVideo;
