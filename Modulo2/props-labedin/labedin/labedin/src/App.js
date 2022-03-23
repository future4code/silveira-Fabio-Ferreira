import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://lh3.googleusercontent.com/_4F7qgMeTz7qWnrtILhjQh912fndeppWWPWeoIaoXUh-xRiefZ9qxoYLcEjViW6y9hqUdDYgLAhavWEB9MK5lmQPabE0hh6lyi8ZFW2nTkIPA9m8bcpXN_LSHP1iQHO-slFlsL0UoQ4UWxiVvFwgoYTk4hbcNtYsF-AtFBfcBaW1DklLpb0WkIx8lRwpjiLjv2A5ywICq5c_K5dbllkIUJEGKNtTjxQC2HgT7A_nt9TtIuZnxyX7RX8GblU61chPb5XRN0iRHCSpQt32ZtC_8D432oDevLJ9-dzz71iz_TaFjT3dvDhmeTO39dmEQjU7MdvrzPxa7BBTlwUhSjhY-CnTmaFr520UAfNp6ANLsl9WolovsLRSTpo2bwfMrPLbSmX8CK3tdAW2A3mlkt0-veXtjXpNQTaZvYrdyVqfRGYiU3jkpNevGbQMac2P29SPBvcmilHoLU3NlfNmokD2_0_uVPmpAvTDOf70eUOjSNSjsmgmXHiRMy8b4z24ITCauOqFdqXfTnxoXMdDwSWj_i9x23oSg1bbNYiFuccfWaDyCSFNqqCz0FHmCYV-gKBeoCadQ9dvLPEA4j5L8gvRk-MLe9qGp2cb90CvidZOXPwqaMb2Sp2exHg7Xv1pNs8QJKbm8Y5OXT9bupBqyaCw5HZDCuzfk4uX5WR3aqFLRvw_B5NGvj2Ec3c8mMHzbkQfGduFNG8Ke9MGOlkJra9BIjzuWpCD5m3FVaYnzOAYhFn92nzLy36HEadEmXeZIsn_PjfuGyiMuZRW_AgkS4YsP4HEzQxyFdny_zOmtJ_i--3J08sBckZaAVv_hGKk1NIlQE8I3HyDXsuvm6kh6Nx_NombnYLjbHkFtZiBwUrUINCzEcZfNQ4Gxua4BQDgfcCEav7R-dAUtmag=w732-h976-no?authuser=2" 
          nome="Fabio" 
          descricao="Oi, eu sou o Fabio. Sou estudante na Labenu, onde curso programação web full stack. Adoro estudar e aprender sobre tudo que envolve tecnologia."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />
      </div>
      <div>
        <CardPequeno
        icon="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-email-512.png"
        name="E-mail:"
        endereco="ElBarto@simpsons.com"
        />

        <CardPequeno
        icon="https://w7.pngwing.com/pngs/348/786/png-transparent-location-computer-icons-space-location-photography-black-shape-thumbnail.png"
        name="Endereço:" 
        endereco="Castelo de Hogwarts/casa: lufa lufa"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://cdn-icons-png.flaticon.com/512/314/314306.png" 
          nome="AeC" 
          descricao="Resolvendo o pepino das pessoas com resiliência e MUITA paciência." 
        />
        
        <CardGrande 
          imagem="https://img.freepik.com/vetores-gratis/pedreiro-icone-de-personagem-de-alvenaria_106788-365.jpg" 
          nome="Zé construções" 
          descricao="construindo casas tortas, chamo de 'arte moderna." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
