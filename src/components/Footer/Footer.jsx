import "./Footer.css";

function Footer({ children }) {
  return (
    <footer className='footer'>
      <div className='footer-content'>
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
        <div className='personal-info'>Github</div>
      </div>
    </footer>
  );
}
export default Footer;
