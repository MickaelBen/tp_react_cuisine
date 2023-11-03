import { useState } from "react";

export default function SelectUstensiles(props) {
    const handleChange = (e) => {
        props.setSelectedOption(e.target.value);
        console.log(e.target.value)
    }

    return (
        
        <div>
            <select id="SelectUstensiles" onChange={handleChange}>
                <option value="" selected={(props.setSelectedOption=="")?true:false}> Selectionner un ustensile </option>
                <option value="bol"selected={(props.setSelectedOption=="bol")?true:false}>bol</option>
                <option value="casserole"selected={(props.setSelectedOption=="casserole")?true:false}>casserole</option>
                <option value="cocotte minute"selected={(props.setSelectedOption=="cocotte minute")?true:false}>cocotte minute</option>
                <option value="couteau"selected={(props.setSelectedOption=="couteau")?true:false}>couteau</option>
                <option value="Couteau"selected={(props.setSelectedOption=="Couteau")?true:false}>Couteau</option>
                <option value="cuillère à melon"selected={(props.setSelectedOption=="cuillère à melon")?true:false}>cuillère à melon</option>
                <option value="cuillère à Soupe"selected={(props.setSelectedOption=="cuillère à Soupe")?true:false}>cuillère à Soupe</option>
                <option value="Cuillère à Soupe"selected={(props.setSelectedOption=="Cuillère à Soupe")?true:false}>Cuillère à Soupe</option>
                <option value="cuillère en bois"selected={(props.setSelectedOption=="cuillère en bois")?true:false}>cuillère en bois</option>
                <option value="Cuillère en bois"selected={(props.setSelectedOption=="Cuillère en bois")?true:false}>Cuillère en bois</option>
                <option value="économe"selected={(props.setSelectedOption=="économe")?true:false}>économe</option>
                <option value="Économe"selected={(props.setSelectedOption=="Économe")?true:false}>Économe</option>
                <option value="fouet"selected={(props.setSelectedOption=="fouet")?true:false}>fouet</option>
                <option value="fourchette"selected={(props.setSelectedOption=="fourchette")?true:false}>fourchette</option>
                <option value="louche"selected={(props.setSelectedOption=="louche")?true:false}>louche</option>
                <option value="moule"selected={(props.setSelectedOption=="moule")?true:false}>moule</option>
                <option value="moule à gateaux"selected={(props.setSelectedOption=="moule à gateaux")?true:false}>moule à gateaux</option>
                <option value="moule à tarte"selected={(props.setSelectedOption=="moule à tarte")?true:false}>moule à tarte</option>
                <option value="moule à tartelettes (6)"selected={(props.setSelectedOption=="moule à tartelettes (6)")?true:false}>moule à tartelettes (6)</option>
                <option value="passoire"selected={(props.setSelectedOption=="passoire")?true:false}>passoire</option>
                <option value="plaque de cuisson"selected={(props.setSelectedOption=="plaque de cuisson")?true:false}>plaque de cuisson</option>
                <option value="plat à gratin"selected={(props.setSelectedOption=="plat à gratin")?true:false}>plat à gratin</option>
                <option value="poêle à frire"selected={(props.setSelectedOption=="poêle à frire")?true:false}>poêle à frire</option>
                <option value="Poêle à frire"selected={(props.setSelectedOption=="Poêle à frire")?true:false}>Poêle à frire</option>
                <option value="presse citron"selected={(props.setSelectedOption=="presse citron")?true:false}>presse citron</option>
                <option value="râpe à fromage"selected={(props.setSelectedOption=="rouleau à patisserie")?true:false}>râpe à fromage</option>
                <option value="rouleau à patisserie"selected={(props.setSelectedOption=="rouleau à patisserie")?true:false}>rouleau à patisserie</option>
                <option value="saladier"selected={(props.setSelectedOption=="saladier")?true:false}>saladier</option>
                <option value="spatule"selected={(props.setSelectedOption=="spatule")?true:false}>spatule</option>
                <option value="verres"selected={(props.setSelectedOption=="verres")?true:false}>verres</option>
                </select>
        </div>
    )
}