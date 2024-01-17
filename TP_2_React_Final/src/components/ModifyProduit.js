import { useState } from 'react';


const ModifyProduit = ({ onModify, currentProdInfo }) => {

    const [nom, setNom] = useState(currentProdInfo.nom)
    const [description, setDescription] = useState(currentProdInfo.description)
    const [prix, setPrix] = useState(currentProdInfo.prix)
    const [categorie, setCategorie] = useState(currentProdInfo.categorie)

    const [modSuccess, setModSuccess] = useState(false)

    
    const onSubmit = (e) => {
        e.preventDefault()

        console.log('Submitting modification:', { id: currentProdInfo.id, nom, description, prix, categorie });

        if (typeof onModify === 'function') {
            
            // Transmet les données modifiées au component parent (SingleProduit) 
            onModify({ id: currentProdInfo.id, nom, description, prix, categorie });

            setModSuccess(true);
            // ----- CHECK -----
            console.log('Mis à jour: SUCCESS!!');
        }
    }


    return (
        <form onSubmit={onSubmit}>

            {/* Message à apparaître si les mods ont eté faites. */}
            {modSuccess ? (
                <article className='success'>
                    <h3>Le produit à été mis à jour</h3>
                    <small>Cliquez dehors l'avis pour le fermer</small>
                </article>
            ) : (

            <div className='form'>
                <article>
                    <label><h4>Produit</h4></label>
                    <input
                    type='text'
                    value={nom}
                    onChange = {(e) => setNom(e.target.value)}
                    />
                </article>

                <article>
                    <label><h4>Description</h4></label>
                    <input
                    type='text'
                    value={description}
                    onChange = {(e) => setDescription(e.target.value)}
                    />
                </article>

                <article>
                    <label><h4>Prix</h4></label>
                    <input type='float' 
                    value={prix}
                    onChange = {(e) => setPrix(e.target.value)} />
                </article>

                <article className="deroulant">
                    <label><h4>Catégorie</h4></label>

                    <select value={categorie} onChange={(e) => setCategorie(e.target.value)}>
                        <option value="">{currentProdInfo.categorie}</option>
                        <option value="Catégorie A">Catégorie A</option>
                    <option value="Catégorie B">Catégorie B</option>
                    <option value="Catégorie C">Catégorie C</option>
                    </select>
                </article>

                <button className="button">SAVE</button>
            </div>

            )}
        </form>
    )
}

export default ModifyProduit