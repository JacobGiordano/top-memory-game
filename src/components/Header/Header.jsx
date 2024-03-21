import "./Header.css";

function Header({ children }) {
  return (
    <header className='header'>
      <div>Header</div>
      {children}
    </header>
  );
}
export default Header;
