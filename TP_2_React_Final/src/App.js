// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import { useState } from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  // --------------------- * * DONNÉS JSON * * ---------------------

  const [produits, setProduits] = useState ([
    {
        "id": 1,
        "nom": "Produit No. UN",
        "description": "Description courte du Produit No. 1",
        "prix": "100.00 CAD",
        "categorie": "Catégorie A"
    },
    {
        "id": 2,
        "nom": "Produit No. DEUX",
        "description": "Description courte du Produit No. 2",
        "prix": "102.50 CAD",
        "categorie": "Catégorie B"
    },
    {
        "id": 3,
        "nom": "Produit No. TROIS",
        "description": "Description courte du Produit No. 3",
        "prix": "30.00 CAD",
        "categorie": "Catégorie C"
    }
  ])


  // --------------------- * * MÉTHODES CRUD * * ---------------------

  // --------------------- * * Éffacer * * ---------------------

  const deleteProduit = async (idCible) => {

    setProduits(produits.filter((produit) => produit.id !==idCible))
  }


  // --------------------- * * Ajouter * * ---------------------

  const addProduit = (prodAjoute) => {
    
    const lastId = produits.length > 0 ? produits[produits.length - 1].id : 0
    const id = lastId + 1
    const newProduit = {id, ...prodAjoute}
    setProduits([...produits, newProduit])
  }


  // --------------------- * * Modifier * * ---------------------

  const modifierProduit = (prodModifie) => {

    setProduits(produits.map(prodCible => 
      prodCible.id === prodModifie.id ? { ...prodCible, ...prodModifie } : prodCible
    ));
};


  //  ------- * RENDER * -------

  return (

    // --- ** NOTE: What we use as basename is what will come after "localhost:8000" (or whatever port) even when running locally for development ** ---

    // <BrowserRouter basename={"/tp2react"}>  
    <BrowserRouter>      
        <main>
          <Nav/>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductPage addProduit={addProduit} produits={produits} deleteProduit={deleteProduit} modifierProduit={modifierProduit} />} />
          </Routes>
          
        </main>     
    </BrowserRouter>
  );
}

export default App;
