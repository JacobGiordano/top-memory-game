import "./BgVideo.css";
import video from "../../assets/videos/nebula-video.mp4";

function BgVideo() {
  return (
    <div className='bg-video-container'>
      <div className='overlay'>
        <video src={video} className='bg-video' autoPlay loop muted></video>
      </div>
    </div>
  );
}
export default BgVideo;
