import './App.css'
import NavBar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import Card from './components/Card';    


function App() {
  
  return (
    <div className='Container'>
    <NavBar/>
      <div style={{display:"flex", alignItems: "Center", justifyContent: "center"}}>
        <ItemListContainer greeting= "Bienvenido a LEX"/>
      </div>
      <div className='container'>
      <h2 style={{paddingBottom:"50px", paddingTop:"40px"}}>Remeras Oversize</h2>
      <div className="row">
        <div className="col-3">
          <Card 
            title="Remera Oversize Blanca"
            description="Blanca lisa | Oversize | Hombre"
            img="https://img.lojasrenner.com.br/item/734467662/large/3.jpg"
          />
        </div>
        <div className="col-3">
          <Card title="Remera Oversize Negra" 
          description="Negra lisa | Oversize | Hombre"
          img="https://img.lojasrenner.com.br/item/734467582/large/3.jpg" />
        </div>
        <div className="col-3">
          <Card title="Remera Oversize Marron" description="Marron lisa | Oversize | Hombre"  img="https://img.lojasrenner.com.br/item/834055614/large/3.jpg"/>
        </div>
        <div className="col-3">
          <Card 
            title="Remera Oversize Violeta"
            description="Violeta Semi Lisa | Oversize | Hombre"
            img="https://img.lojasrenner.com.br/item/660045212/large/3.jpg"
          />
        </div>
      </div>

     
    </div>
    </div>
  )
}

export default App
