import { useState } from 'react';


const AddProduit = ({onAdd}) => {
    
    const [nom, setNom] = useState('')
    const [description, setDescription] = useState('')
    const [prix, setPrix] = useState('')
    const [categorie, setCategorie] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!nom) {
            alert('Écrivez le nom du produit SVP')
            return
        }

        onAdd({nom, description, prix, categorie})
        setNom('')
        setDescription('')
        setPrix('')
        setCategorie('')
    }


    return (
        <form onSubmit={onSubmit}>
            <article>
                <label><h4>Produit</h4></label>
                <input
                    type='text'
                    placeholder="Nom du produit"
                    value={nom}
                    onChange = {(e) => setNom(e.target.value)}
                />
            </article>

            <article>
                <label><h4>Description</h4></label>
                <input
                    type='text'
                    placeholder="Description du produit"
                    value={description}
                    onChange = {(e) => setDescription(e.target.value)}
                />
            </article>

            <article>
                <label><h4>Prix</h4></label>
                <input type='float' placeholder="Prix du produit en CAD" value={prix}
                onChange = {(e) => setPrix(e.target.value)} />
            </article>

            <article className="deroulant">
                <label><h4>Catégorie</h4></label>

                <select value={categorie} onChange = {(e) => setCategorie(e.target.value)}>
                    <option value="">Selectionnez une catégorie</option>
                    <option value="Catégorie A">Catégorie A</option>
                    <option value="Catégorie B">Catégorie B</option>
                    <option value="Catégorie C">Catégorie C</option>
                </select>
            </article>

            <button className="button">SAVE</button>
        </form>
    )
}

export default AddProduit