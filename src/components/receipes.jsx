import receipes from '../../public/json/receipes.json'



export default function ReceipeCard() {
    return (
        <>
            <section id="recettes">
                {receipes.map(receipe=> (
                    <>
                        <article>
                            <img src={"public/recettes/"+receipe.image} alt={receipe.name}/>
                            <div className='content'>
                                <h3>{receipe.name}</h3>
                                <h4>RECETTE</h4>
                                <p>{receipe.description}</p>

                                <h4>INGRÉDIENTS</h4>
                                <div class="ingredients">
                                    {receipe.ingredients.map(ing=> (
                                        <>
                                            <div class="ingredient">
                                                    <p>{ing.ingredient}</p>
                                                    <p>{ing.quantity} {ing.unit}</p>
                                            </div>
                                        </>
                                    ) )}
                                </div>
                            </div>
                        </article>
                    </>
                ) )}
               
            </section>
        </>
    )
}