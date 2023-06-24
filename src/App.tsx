import './App.css'

function App() {
  return (
    //div para colocar a cor no background
    <div className="container">
      {/*Container do Usuario*/}
      <div className="usuarioContainer">
        <div className="usuarioHeader">
          <img className="foto" src="src\assets\guga.jpg"/>
          <p>Gustavo Araujo</p>
        </div>
        {/*corpo da div */}
        <div className="sectionUsuario">
          <div className='painel'>
            <p>Painel</p>
          </div>
          <div className="minhasMalas">
            <div className='icon'>
              <img alt='mala' src='src\assets\mala-de-viagem 1.png'/>
            </div>
            <p>Minhas Malas</p>
            <button className='btnMala'>2&gt;</button>
          </div>
          <div className='minhaConta'>
            <p>Minha Conta</p>
            <div className='nome'>
              <p className='itemUm'>Nome de Usuario</p>
              <button className='editar'>Editar</button>
              <p className='itemDois'>Gustavo Araujo</p>
            </div>
            <div className='email'>
              <p className='itemUm'>E-MAIL</p>
              <button className='editar'>Editar</button>
              <p className='itemDois'>gus********@oulook.com</p>
            </div>
            <div className='senha'>
              <p className='itemUm'>Senha</p>
              <button className='editar'>Editar</button>
              <p className='itemDois'>*********</p>
            </div>
            <div className='sair'>
              <button>Sair</button>
            </div>
          </div>
        </div>
      </div>

      <div className="banner">
        <img alt='bannerConfig' src='src\assets\banner.png'/>
      </div>
    </div>
  )
}

export default App
