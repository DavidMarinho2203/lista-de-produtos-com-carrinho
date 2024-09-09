import { useContext } from "react"
import ItemsContext from "../context/ItemsContext"
import ButtonConfirms from "../components/ButtonConfirms"
import ContainerCarrinho from "../components/ContainerCarrinho"

export default function Carrinho() {
    const {
        carrinho,
        validadeCarrinho
    } = useContext(ItemsContext)

    return (
        <section className="container__Carrinho">
            <h2>You Cart({carrinho.reduce((acc, item) => acc + item.quantidade, 0)})</h2>
            <ContainerCarrinho />

            <ButtonConfirms
                frase={"Confirm Order"}
                onclick={() => validadeCarrinho(carrinho)}
                href={"#confirm"}
            />
        </section>
    )
}