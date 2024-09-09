import { useContext } from "react"
import ItemsContext from "../context/ItemsContext"
import ItemsCarrinho from "./ItemsCarrinho"

export default function ContainerCarrinho() {
    const {carrinho, valorTotal} = useContext(ItemsContext)

    return (
        <>
            {carrinho.length > 0
                ? (
                    <>
                        <div className="Items__Carrinho">
                            <ItemsCarrinho />
                        </div>
                        <div id="Soma__Total">
                            <p>Order Total</p>
                            <p>${valorTotal.toFixed(2)}</p>
                        </div>
                    </>
                )
                : (
                    <>
                        <div id="container__CarrinhoVazio">
                            <img src="/assets/images/illustration-empty-cart.svg" alt="Imagem do bolo" />
                            <p>Your added items will appear here</p>
                        </div>

                    </>
                )}
        </>
    )
}