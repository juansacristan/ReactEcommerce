import './App.css';
import ItemContainer from './componentes/ItemContainer/ItemContainer';

function App() {
  const styleApp ={padding: '10px 20px', margintop: 10}
  return (

    //JSX

    <div className="container" style={styleApp}>
      <div className="main-container">
          <ItemContainer section="Motos en oferta"/>
          <ItemContainer section="Motos más comprados"/>
      </div>
    </div>
  );
}

export default App;
