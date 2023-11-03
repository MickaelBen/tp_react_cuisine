
import { useEffect, useState } from 'react';
import './App.css'

import Header from './components/header';
import SelectIngredients from './components/selectIngredients';
import SelectAppareils from './components/selectAppareils';
import SelectUstensiles from './components/selectUstensiles';
import ReceipeCard from './components/receipes';

function App() {
  // const [valInp, setValInp] = useState("test")

  const [selectedIngredients, setSelectedIngredients] = useState("");
  const [selectedAppareils, setSelectedAppareils] = useState("");
  const [SelectedUsentiles, setSelectedUsentiles] = useState("");

  // useEffect(() => {
  //   const prodFiltreInp = produits.filter(produit => produit.name.match(new RegExp(valInp), 'i'))
  // }, [valInp])

  // console.log(selectedIngredients)
  // console.log(selectedAppareils)
  // console.log(SelectedUsentiles)

  return (
    <>
      {/* <Header  valInp={valInp} setValInp={setValInp} /> */}
      <Header/>
      <SelectIngredients selectedOption={selectedIngredients} setSelectedOption={setSelectedIngredients}/>
      <SelectAppareils selectedOption={selectedAppareils} setSelectedOption={setSelectedAppareils}/>
      <SelectUstensiles selectedOption={setSelectedUsentiles} setSelectedOption={setSelectedUsentiles}/>

      <ReceipeCard/>
    </>
  )
}


export default App
