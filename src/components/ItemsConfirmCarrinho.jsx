import { useContext } from "react"
import ItemsContext from "../context/ItemsContext"

export default function ItemsConfirmCarrinho() {
    const { carrinho,valorTotal } = useContext(ItemsContext)

    return (
        <div className="Items__Carrinho">
            {carrinho.map(item => (
                <div key={item.id} className="Item__Carrinho">
                    <img src={item.image.thumbnail} alt={item.name} />
                    <div>
                        <p>{item.name}</p>
                        <p>
                            <span>{item.quantidade}x </span>
                            <span>@ ${item.price.toFixed(2)} </span>
                        </p>
                    </div>
                    <span>${item.valorTotal.toFixed(2)}</span>
                </div>
            ))}
            <div id="Soma__Total">
                <p>Order Total</p>
                <p>${valorTotal.toFixed(2)}</p>
            </div>
        </div>
    )
}