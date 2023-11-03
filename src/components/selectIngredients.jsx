import { useState } from "react";

export default function SelectIngredients(props) {
   
    const handleChange = (e) => {
        props.setSelectedOption(e.target.value);
        console.log(e.target.value)
    }

    return (
   
        <div>
            <select id="SelectIngredients" onChange={handleChange}>
                <option value="" selected={(props.setSelectedOption=="")?true:false}> Selectionenz un ingredient </option>
                <option value="ail" selected={(props.setSelectedOption=="ail")?true:false}>Ail</option>
                <option value="ananas" selected={(props.setSelectedOption=="ananas")?true:false}>Ananas</option>
                <option value="Banane"selected={(props.setSelectedOption=="Banane")?true:false}>Banane</option>
                <option value="Bananes"selected={(props.setSelectedOption=="Bananes")?true:false}>Bananes</option>
                <option value="Basilic"selected={(props.setSelectedOption=="Basilic")?true:false}>Basilic</option>
                <option value="Beurre"selected={(props.setSelectedOption=="Beurre")?true:false}>Beurre</option>
                <option value="Beurre fondu"selected={(props.setSelectedOption=="Beurre fondu")?true:false}>Beurre fondue</option>
                <option value="Beurre salé"selected={(props.setSelectedOption=="Beurre salé")?true:false}>Beurre salé</option>
                <option value="Bicarbonate"selected={(props.setSelectedOption=="Bicarbonate")?true:false}>Bicarbonate</option>
                <option value="Blanc de dinde"selected={(props.setSelectedOption=="Blanc de dinde")?true:false}>Blanc de dinde</option>
                <option value="Boudoirs"selected={(props.setSelectedOption=="Boudoirs")?true:false}>Boudoirs</option>
                <option value="Carotte"selected={(props.setSelectedOption=="Carotte")?true:false}>Carotte</option>
                <option value="Champignons de paris"selected={(props.setSelectedOption=="Champignons de paris")?true:false}>Champignons de paris</option>
                <option value="Chocolat"selected={(props.setSelectedOption=="Chocolat")?true:false}>Chocolat</option>
                <option value="Chocolat au lait"selected={(props.setSelectedOption=="Chocolat au lait")?true:false}>Chocolat au lait</option>
                <option value="Chocolat noir"selected={(props.setSelectedOption=="Chocolat noir")?true:false}>Chocolat noir</option>
                <option value="Chocolat noir en pépites"selected={(props.setSelectedOption=="Chocolat noir en pépites")?true:false}>Chocolat noir en pépites</option>
                <option value="Citron"selected={(props.setSelectedOption=="Citron")?true:false}>Citron</option>
                <option value="Citron Vert"selected={(props.setSelectedOption=="Citron Vert")?true:false}>Citron Vert</option>
                <option value="Concombre"selected={(props.setSelectedOption=="Concombre")?true:false}>Concombre</option>
                <option value="Coulis de tomate"selected={(props.setSelectedOption=="Coulis de tomate")?true:false}>Coulis de tomate</option>
                <option value="Coulis de tomates"selected={(props.setSelectedOption=="Coulis de tomates")?true:false}>Coulis de tomates</option>
                <option value="Courgette"selected={(props.setSelectedOption=="Courgette")?true:false}>Courgette</option>
                <option value="Crème de coco"selected={(props.setSelectedOption=="Crème de coco")?true:false}>Crème de coco</option>
                <option value="Crème fraîche"selected={(props.setSelectedOption=="Crème fraîche")?true:false}>Crème fraîche</option>
                <option value="Crème Fraîche"selected={(props.setSelectedOption=="Crème Fraîche")?true:false}>Crème Fraîche</option>
                <option value="Crème liquide"selected={(props.setSelectedOption=="Crème liquide")?true:false}>Crème liquide</option>
                <option value="Cumin"selected={(props.setSelectedOption=="Cumin")?true:false}>Cumin</option>
                <option value="Eau"selected={(props.setSelectedOption=="Eau")?true:false}>Eau</option>
                <option value="Échalote"selected={(props.setSelectedOption=="Échalote")?true:false}>Échalote</option>
                <option value="Emmental"selected={(props.setSelectedOption=="Emmental")?true:false}>Emmental</option>
                <option value="farine"selected={(props.setSelectedOption=="farine")?true:false}>farine</option>
                <option value="Farine"selected={(props.setSelectedOption=="Farine")?true:false}>Farine</option>
                <option value="Farine de blé noir"selected={(props.setSelectedOption=="Farine de blé noir")?true:false}>Farine de blé noir</option>
                <option value="Feuilles de laitue"selected={(props.setSelectedOption=="Feuilles de laitue")?true:false}>Feuilles de laitue</option>
                <option value="Fraise"selected={(props.setSelectedOption=="Fraise")?true:false}>Fraise</option>
                <option value="Fromage à raclette"selected={(props.setSelectedOption=="Fromage à raclette")?true:false}>Fromage à raclette</option>
                <option value="Fromage blanc"selected={(props.setSelectedOption=="Fromage blanc")?true:false}>Fromage blanc</option>
                <option value="Fromage de chèvre"selected={(props.setSelectedOption=="Fromage de chèvre")?true:false}>Fromage de chèvre</option>
                <option value="Glace à la vanille"selected={(props.setSelectedOption=="Glace à la vanille")?true:false}>Glace à la vanille</option>
                <option value="Glaçons"selected={(props.setSelectedOption=="Glaçons")?true:false}>Glaçons</option>
                <option value="Gruyère"selected={(props.setSelectedOption=="Gruyère")?true:false}>Gruyère</option>
                <option value="gruyère râpé"selected={(props.setSelectedOption=="gruyère râpé")?true:false}>gruyère râpé</option>
                <option value="Haricots verts"selected={(props.setSelectedOption=="Haricots verts")?true:false}>Haricots verts</option>
                <option value="huile d'olive"selected={(props.setSelectedOption=="huile d'olive")?true:false}>huile d'olive</option>
                <option value="Huile d'olive"selected={(props.setSelectedOption=="Huile d'olive")?true:false}>Huile d'olive</option>
                <option value="huile d'olives"selected={(props.setSelectedOption=="huile d'olives")?true:false}>huile d'olives</option>
                <option value="Huile d'olives"selected={(props.setSelectedOption=="Huile d'olives")?true:false}>Huile d'olives</option>
                <option value="Jambon de parme"selected={(props.setSelectedOption=="Jambon de parme")?true:false}>Jambon de parme</option>
                <option value="Jambon fumé"selected={(props.setSelectedOption=="Jambon fumé")?true:false}>Jambon fumé</option>
                <option value="Jus de citron"selected={(props.setSelectedOption=="Jus de citron")?true:false}>Jus de citron</option>
                <option value="Kiwi"selected={(props.setSelectedOption=="Kiwi")?true:false}>Kiwi</option>
                <option value="Kiwis"selected={(props.setSelectedOption=="Kiwis")?true:false}>Kiwis</option>
                <option value="Lait"selected={(props.setSelectedOption=="Lait")?true:false}>Lait</option>
                <option value="Lait de coco"selected={(props.setSelectedOption=="Lait de coco")?true:false}>Lait de coco</option>
                <option value="Lait de Coco"selected={(props.setSelectedOption=="Lait de Coco")?true:false}>Lait de Coco</option>
                <option value="Lardons"selected={(props.setSelectedOption=="Lardons")?true:false}>Lardons</option>
                <option value="Lasagnes"selected={(props.setSelectedOption=="Lasagnes")?true:false}>Lasagnes</option>
                <option value="Macaronis"selected={(props.setSelectedOption=="Macaronis")?true:false}>Macaronis</option>
                <option value="Mâche"selected={(props.setSelectedOption=="Mâche")?true:false}>Mâche</option>
                <option value="Maïs"selected={(props.setSelectedOption=="Maïs")?true:false}>Maïs</option>
                <option value="Maïzena"selected={(props.setSelectedOption=="Maïzena")?true:false}>Maïzena</option>
                <option value="Mangue"selected={(props.setSelectedOption=="Mangue")?true:false}>Mangue</option>
                <option value="Mascarpone"selected={(props.setSelectedOption=="Mascarpone")?true:false}>Mascarpone</option>
                <option value="Mayonnaise"selected={(props.setSelectedOption=="Mayonnaise")?true:false}>Mayonnaise</option>
                <option value="Menthe"selected={(props.setSelectedOption=="Menthe")?true:false}>Menthe</option>
                <option value="Miel"selected={(props.setSelectedOption=="Miel")?true:false}>Miel</option>
                <option value="Moutarde de Dijon"selected={(props.setSelectedOption=="Moutarde de Dijon")?true:false}>Moutarde de Dijon</option>
                <option value="Mozzarella"selected={(props.setSelectedOption=="Mozzarella")?true:false}>Mozzarella</option>
                <option value="Noix"selected={(props.setSelectedOption=="Noix")?true:false}>Noix</option>
                <option value="Noix de muscade"selected={(props.setSelectedOption=="Noix de muscade")?true:false}>Noix de muscade</option>
                <option value="Oeuf"selected={(props.setSelectedOption=="Oeuf")?true:false}>Oeuf</option>
                <option value="Oeuf dur"selected={(props.setSelectedOption=="Oeuf dur")?true:false}>Oeuf dur</option>
                <option value="Oignon"selected={(props.setSelectedOption=="Oignon")?true:false}>Oignon</option>
                <option value="Olives"selected={(props.setSelectedOption=="Olives")?true:false}>Olives</option>
                <option value="Orange"selected={(props.setSelectedOption=="Orange")?true:false}>Orange</option>
                <option value="Oseille"selected={(props.setSelectedOption=="Oseille")?true:false}>Oseille</option>
                <option value="Pain"selected={(props.setSelectedOption=="Pain")?true:false}>Pain</option>
                <option value="Pain de mie"selected={(props.setSelectedOption=="Pain de mie")?true:false}>Pain de mie</option>
                <option value="Paprika"selected={(props.setSelectedOption=="Paprika")?true:false}>Paprika</option>
                <option value="Parmesan"selected={(props.setSelectedOption=="Parmesan")?true:false}>Parmesan</option>
                <option value="Pastèque"selected={(props.setSelectedOption=="Pastèque")?true:false}>Pastèque</option>
                <option value="Patate douce"selected={(props.setSelectedOption=="Patate douce")?true:false}>Patate douce</option>
                <option value="Pâte à pizza"selected={(props.setSelectedOption=="Pâte à pizza")?true:false}>Pâte à pizza</option>
                <option value="Pâte brisée"selected={(props.setSelectedOption=="Pâte brisée")?true:false}>Pâte brisée</option>
                <option value="Pâte feuilletée"selected={(props.setSelectedOption=="Pâte feuilletée")?true:false}>Pâte feuilletée</option>
                <option value="Pâte sablée"selected={(props.setSelectedOption=="Pâte sablée")?true:false}>Pâte sablée</option>
                <option value="Pennes"selected={(props.setSelectedOption=="Pennes")?true:false}>Pennes</option>
                <option value="Petits poids"selected={(props.setSelectedOption=="Petits poids")?true:false}>Petits poids</option>
                <option value="Poireau"selected={(props.setSelectedOption=="Poireau")?true:false}>Poireau</option>
                <option value="Poires au jus"selected={(props.setSelectedOption=="Poires au jus")?true:false}>Poires au jus</option>
                <option value="Pois Cassé"selected={(props.setSelectedOption=="Pois Cassé")?true:false}>Pois Cassé</option>
                <option value="Pois chiches"selected={(props.setSelectedOption=="Pois chiches")?true:false}>Pois chiches</option>
                <option value="Poivron rouge"selected={(props.setSelectedOption=="Poivron rouge")?true:false}>Poivron rouge</option>
                <option value="Pomme"selected={(props.setSelectedOption=="Pomme")?true:false}>Pomme</option>
                <option value="Pommes"selected={(props.setSelectedOption=="Pommes")?true:false}>Pommes</option>
                <option value="Pommes de terre"selected={(props.setSelectedOption=="Pommes de terre")?true:false}>Pommes de terre</option>
                <option value="Poudre d'amendes"selected={(props.setSelectedOption=="Poudre d'amendes")?true:false}>Poudre d'amendes</option>
                <option value="Poulet"selected={(props.setSelectedOption=="Poulet")?true:false}>Poulet</option>
                <option value="Pruneaux"selected={(props.setSelectedOption=="Pruneaux")?true:false}>Pruneaux</option>
                <option value="Reblochon"selected={(props.setSelectedOption=="Reblochon")?true:false}>Reblochon</option>
                <option value="Rhubarbe"selected={(props.setSelectedOption=="Rhubarbe")?true:false}>Rhubarbe</option>
                <option value="Riz blanc"selected={(props.setSelectedOption=="Riz blanc")?true:false}>Riz blanc</option>
                <option value="Salade Verte"selected={(props.setSelectedOption=="Salade Verte")?true:false}>Salade Verte</option>
                <option value="Saucisse bretonne ou de Toulouse"selected={(props.setSelectedOption=="Saucisse bretonne ou de Toulouse")?true:false}>Saucisse bretonne ou de Toulouse</option>
                <option value="Saumon Fumé"selected={(props.setSelectedOption=="Saumon Fumé")?true:false}>Saumon Fumé</option>
                <option value="Spaghettis"selected={(props.setSelectedOption=="Spaghettis")?true:false}>Spaghettis</option>
                <option value="Sucre"selected={(props.setSelectedOption=="Sucre")?true:false}>Sucre</option>
                <option value="Sucre en poudre"selected={(props.setSelectedOption=="Sucre en poudre")?true:false}>Sucre en poudre</option>
                <option value="Sucre en Poudre"selected={(props.setSelectedOption=="Sucre en Poudre")?true:false}>Sucre en Poudre</option>
                <option value="Sucre glace"selected={(props.setSelectedOption=="Sucre glace")?true:false}>Sucre glace</option>
                <option value="Sucre roux"selected={(props.setSelectedOption=="Sucre roux")?true:false}>Sucre roux</option>
                <option value="Sucre vanillé"selected={(props.setSelectedOption=="Sucre vanillé")?true:false}>Sucre vanillé</option>
                <option value="Tagliatelles"selected={(props.setSelectedOption=="Tagliatelles")?true:false}>Tagliatelles</option>
                <option value="Thon en miettes"selected={(props.setSelectedOption=="Thon en miettes")?true:false}>Thon en miettes</option>
                <option value="Thon Rouge (ou blanc)"selected={(props.setSelectedOption=="Thon Rouge (ou blanc)")?true:false}>Thon Rouge (ou blanc)</option>
                <option value="Tomate"selected={(props.setSelectedOption=="Tomate")?true:false}>Tomate</option>
                <option value="Tomates cerises"selected={(props.setSelectedOption=="Tomates cerises")?true:false}>Tomates cerises</option>
                <option value="Tomates pelées"selected={(props.setSelectedOption=="Tomates pelées")?true:false}>Tomates pelées</option>
                <option value="Vermicelles"selected={(props.setSelectedOption=="Vermicelles")?true:false}>Vermicelles</option>
                <option value="Viande hachée"selected={(props.setSelectedOption=="Viande hachée")?true:false}>Viande hachée</option>
                <option value="Viande hachée 1% de matière grasse"selected={(props.setSelectedOption=="Viande hachée 1% de matière grasse")?true:false}>Viande hachée 1% de matière grasse</option>
                <option value="Vin blanc sec"selected={(props.setSelectedOption=="")?true:false}>Vin blanc sec</option>
                <option value="Vin rouge"selected={(props.setSelectedOption=="Vin rouge")?true:false}>Vin rouge</option>
                <option value="Vinaigre Balsamic"selected={(props.setSelectedOption=="Vinaigre Balsamic")?true:false}>Vinaigre Balsamic</option>
                <option value="Vinaigre de cidre"selected={(props.setSelectedOption=="Vinaigre de cidre")?true:false}>Vinaigre de cidre</option>
                <option value="Vinaigrette"selected={(props.setSelectedOption=="Vinaigrette")?true:false}>Vinaigrette</option>
            </select>
        </div>
    )
}