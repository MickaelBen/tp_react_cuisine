
export default function SearchBar(props) {
    
    return (
            <div className="searchBar">
                <input type="search" placeholder="Rechercher une recette, un ingrédient, ..." value={props.valInp} onChange={(event) => props.setValInp()} />
                <div><img src='../public/loupe.svg'/></div>
            </div>
)
}


