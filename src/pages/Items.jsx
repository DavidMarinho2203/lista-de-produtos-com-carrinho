import { useContext, useState } from "react"
import { ItemsContext } from "../context/ItemsContext"
import ButtonAddCarrinho from "../components/ButtonAddCarrinho"

export default function Items() {
    const { dados, renderizando, carrinho, addItemNoCarrinho, removerItemNoCarrinho } = useContext(ItemsContext)

    function buttonAtivado(item) {
        return (
            <>
                <i
                    onClick={() => removerItemNoCarrinho(item.id)}
                    className="ri-indeterminate-circle-line">
                </i>
                {carrinho.find(objeto => objeto.id == item.id).quantidade}
                <i
                    onClick={() => addItemNoCarrinho(item.id)}
                    className="ri-add-circle-line">
                </i>
            </>
        )
    }

    function buttonDesativado(item) {
        return (
            <>
                <i className="ri-shopping-cart-2-line">
                </i>
                Add to Cart
            </>
        )
    }

    return (
        <section id="container__Items">
            <h1>Desserts</h1>
            <div id="Items">
                {dados.map(item => (
                    <div key={item.id} className="item">
                        <div className="container__img">
                            <img src={renderizando(item)} alt={item.name} />
                            {carrinho.find(objeto => objeto.id == item.id)
                                ? (
                                    <ButtonAddCarrinho
                                        className={"buttonAtivado"}
                                        values={(buttonAtivado(item))}
                                    />
                                )
                                : (
                                    <ButtonAddCarrinho
                                        onClick={() => addItemNoCarrinho(item.id)}
                                        className={"buttonDesativado"}
                                        values={(buttonDesativado(item))}
                                    />
                                )
                            }
                        </div>
                        <div className="container__descricao">
                            <p>{item.category}</p>
                            <p>{item.name}</p>
                            <p>${item.price.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}