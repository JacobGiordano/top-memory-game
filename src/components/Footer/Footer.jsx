import "./Footer.css";

function Footer({ children }) {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='top-row'>
          <a
            href='https://pixabay.com/videos/nebula-gas-galaxy-space-25047/'
            target='_blank'
          >
            Background video by Mikkehouse
          </a>
          <span className='personal-info'>
            View this project on{" "}
            <a
              href='https://github.com/JacobGiordano/top-memory-game'
              target='_blank'
            >
              Github
            </a>
          </span>
        </div>
        <div className='bottom-row'>
          <span className='attribution'>
            Data provided by{" "}
            <a href='http://marvel.com' target='_blank'>
              Marvel
            </a>
            . © 2014{" "}
            <a href='http://marvel.com' target='_blank'>
              Marvel
            </a>
            {". "}
            All images, logos, and characters belong to and are copywritten by{" "}
            <a href='http://marvel.com' target='_blank'>
              Marvel
            </a>
            {". "}
          </span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
