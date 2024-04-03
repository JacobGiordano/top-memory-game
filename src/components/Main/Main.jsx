import "./Main.css";

function Main({ children }) {
  return (
    <section className='main expand'>
      <div className='inner-main-container'>{children}</div>
    </section>
  );
}
export default Main;
