import "./Main.css";

function Main({ children }) {
  return (
    <main className='main expand'>
      <div className='inner-main-container'>{children}</div>
    </main>
  );
}
export default Main;
