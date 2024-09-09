import { useContext } from "react"
import Carrinho from "./pages/Carrinho"
import Items from "./pages/Items"
import Confirm from "./pages/Items/Confirm"
import ItemsProvider from "./provider/ItemsProvider"
import ItemsContext from "./context/ItemsContext"

export default function App() {
  

  return (
    <ItemsProvider>
      <main>
        <Items />
        <Carrinho />
        <Confirm />
      </main>
      <footer>
        Feito pelo programador <span>David Beckham</span>
      </footer>
    </ItemsProvider>
  )
}