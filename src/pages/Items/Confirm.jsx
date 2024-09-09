import { useContext } from "react"
import ItemsContext from "../../context/ItemsContext"
import ItemsConfirmCarrinho from "../../components/ItemsConfirmCarrinho"
import ButtonConfirms from "../../components/ButtonConfirms"

export default function Confirm() {
    const { carrinho, confirmacao, resetar, valorTotal } = useContext(ItemsContext)

    return (
        <>
            {confirmacao && (
                <section id="confirm">
                    <div className="container__Carrinho">
                        <img src="/src/assets/images/icon-order-confirmed.svg" alt="" />
                        <h2>Order Confirmed</h2>
                        <p>We hope you enjoy you food!</p>

                        <ItemsConfirmCarrinho />
                        
                        <ButtonConfirms
                            frase={"Start New Order"}
                            onclick={() => resetar(carrinho.length)} />
                    </div>

                </section>
            )}
        </>
    )
}