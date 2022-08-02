import './App.css';
import ItemContainer from './componentes/ItemContainer/ItemContainer';

function App() {
  return (

    //JSX

    <div className="container">
      <section className="main-container">
          <ItemContainer section="Motos en oferta"/>
          {/* <ItemContainer section="Motos más comprados"/> */}
      </section>
    </div>
  );
}

export default App;
