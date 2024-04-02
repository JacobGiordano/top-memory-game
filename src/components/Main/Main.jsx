import "./Main.css";

function Main({ children }) {
  return (
    <section className='main initial'>
      <div className='inner-main-container'>{children}</div>
    </section>
  );
}
export default Main;
