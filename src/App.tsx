import { MikuSpecs } from "./Data/MikuSpecs.ts"
import Mimikyu from "./Components/Mimikyu/Mimikyu.tsx"
import MiniMiku from "./Components/MiniMiku/MiniMiku.tsx"
import './App.css'
import  MikuLover  from "./Data/Miku.ts"

function App() {

// const hei = "hei";
MikuLover.forEach(e => {
  console.log(e)
});
  return (
    <>
    <header></header>
    <main>
      <Mimikyu MikuTSX={"hei"}></Mimikyu>
      <MiniMiku {...MikuSpecs} ></MiniMiku>
      <p></p>
    </main>
    </>
  )
}

export default App
