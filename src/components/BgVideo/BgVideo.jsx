import "./BgVideo.css";
import video from "/videos/nebula-video.mp4";

function BgVideo() {
  return (
    <div className='bg-video-container'>
      <video
        src={video}
        className='bg-video'
        autoPlay
        loop
        muted
        disableRemotePlayback
      ></video>
    </div>
  );
}
export default BgVideo;
