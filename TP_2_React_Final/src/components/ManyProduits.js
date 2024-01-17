import SingleProduit from './SingleProduit';


const ManyProduits = ({ produits, onDelete, modifierProduit }) => {

    return (
        <>  
            { produits.length > 0 ? (
                
                produits.map((produit) => (
                    <SingleProduit key={produit.id} produit={produit} onDelete={onDelete} modifierProduit={modifierProduit} />
                ))
                ):(
                    <div className="empty">Empty List</div>
            )}
        </>
    )
}
export default ManyProduits