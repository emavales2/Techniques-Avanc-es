import React, { useState } from 'react';
import ManyProduits from './ManyProduits';
import AddProduit from './AddProduit';
import Button from './Button';


const ProductPage = ({ produits, deleteProduit, addProduit }) => {

    const [showAddProduit, setShowAddProduit] = useState(false)

    const toggleForm = () => {
        setShowAddProduit(!showAddProduit);
    };

    return (
        <section>
            <header>
                <h1>Product List</h1>
            </header>
        
            <section className='ajouter'>
                <Button className="button" text={showAddProduit ? 'CLOSE' : 'ADD PRODUCT'} onClick={toggleForm} />            
                {showAddProduit && <AddProduit onAdd={addProduit} />}    
            </section> 
            
            <div className='prod_container'>           
                <ManyProduits produits={produits} onDelete={deleteProduit}/>
            </div>
            
        </section>
    );
};

export default ProductPage;