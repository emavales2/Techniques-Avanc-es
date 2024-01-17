import { FaTimes } from 'react-icons/fa';
import React, { useState } from 'react';
import ModifyProduit from './ModifyProduit';
import BasicModal from './Modal';


const SingleProduit = ({ produit, onDelete }) => {

    const [currentProduit, setCurrentProduit] = useState(produit);

    const updateProduit = (modProdInfo) => {
        setCurrentProduit({ ...currentProduit, ...modProdInfo });
    };
    
    return (
        <div className='prod_card'>
            <header>
                <h3>{currentProduit.nom}</h3>
                <FaTimes className="red_x" onClick = {() => onDelete(currentProduit.id)}/> 
            </header>

            <p>{currentProduit.description}</p>
            <h4>{currentProduit.prix}</h4>
            <small>{currentProduit.categorie}</small> 

            <BasicModal buttonText="MODIFY">
                <ModifyProduit onModify={(modProdInfo) => {
                    // ----- CHECK -----
                    console.log('Mis à jour: SUCCESS!!', modProdInfo);

                    updateProduit(modProdInfo);
                }}
                    currentProdInfo={currentProduit}
                />
            </BasicModal>        
        </div> 
    )
}

export default SingleProduit