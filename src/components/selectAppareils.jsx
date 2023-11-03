import { useState } from "react";

export default function SelectAppareils(props) {
    const handleChange = (e) => {
        props.setSelectedOption(e.target.value);
        console.log(e.target.value)
    }

    return (
        
        <div>
            <select id="SelectAppareils" onChange={handleChange}>
                <option value="" selected={(props.setSelectedOption=="")?true:false}> Selectionner un appareil </option>
                <option value="Blender"selected={(props.setSelectedOption=="Blender")?true:false}>Blender</option>
                <option value="Casserole"selected={(props.setSelectedOption=="Casserole")?true:false}>Casserole</option>
                <option value="Cocotte"selected={(props.setSelectedOption=="Cocotte")?true:false}>Cocotte</option>
                <option value="Cuiseur de riz"selected={(props.setSelectedOption=="Cuiseur de riz")?true:false}>Cuiseur de riz</option>
                <option value="Four"selected={(props.setSelectedOption=="Four")?true:false}>Four</option>
                <option value="Mixer"selected={(props.setSelectedOption=="Mixer")?true:false}>Mixer</option>
                <option value="Moule à charlotte"selected={(props.setSelectedOption=="Moule à charlotte")?true:false}>Moule à charlotte</option>
                <option value="Poêle"selected={(props.setSelectedOption=="Poêle")?true:false}>Poêle</option>
                <option value="Poêle à crêpe"selected={(props.setSelectedOption=="Poêle à crêpe")?true:false}>Poêle à crêpe</option>
                <option value="Saladier"selected={(props.setSelectedOption=="Saladier")?true:false}>Saladier</option>
                <option value="Sauteuse"selected={(props.setSelectedOption=="Sauteuse")?true:false}>Sauteuse</option>
                </select>
        </div>
    )
}