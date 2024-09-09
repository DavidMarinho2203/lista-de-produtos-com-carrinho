import { useContext } from "react"
import ItemsContext from "../context/ItemsContext"

export default function ItemsCarrinho() {
    const {carrinho, excluirItemDoCarrinho} = useContext(ItemsContext)

    return (
        <>
            {carrinho.map(item => (
                <div key={item.id} className="Item__Carrinho">
                    <div>
                        <p>{item.name}</p>
                        <p>
                            <span>{item.quantidade}x </span>
                            <span>@${item.price.toFixed(2)} </span>
                            <span>${item.valorTotal.toFixed(2)}</span>
                        </p>
                    </div>
                    <i
                        onClick={() => excluirItemDoCarrinho(item.id)}
                        className="ri-close-circle-line">
                    </i>
                </div>
            ))}
        </>
    )
}