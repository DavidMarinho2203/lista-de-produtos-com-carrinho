import { useEffect, useRef, useState } from 'react'
import dadosJson from '../data.json'

export default function useItems() {
    const dados = dadosJson
    const [carrinho, setCarrinho] = useState([]) // Estado dos items no carrinho
    const [valorTotal, setValorTotal] = useState(0) // Estado para somar valoresTotais
    const [confirmacao, setConfirmacao] = useState(false) // Estado para confirmar resetar o site
    

    const renderizando = (item) => { // Estado das redenrizações das imagens da tela
        const screen = window.innerWidth
        if (screen > 650) { // tablet
            return item.image.tablet
        } else if (screen > 768) { // desktop
            return item.image.desktop
        } else { // mobile
            return item.image.mobile
        }
    }

    const addItemNoCarrinho = (id) => { // Adicionar item no Carrinho
        setCarrinho(state => {
            let novoCarrinho
            const itemExistente = state.find(objeto => objeto.id == id);
            if (itemExistente) {
                const removeItem = state.filter(objeto => objeto.id != id);
                const quantidadeAtualizada = itemExistente.quantidade + 1
                const itemAtualizado = {
                    ...itemExistente,
                    quantidade: quantidadeAtualizada,
                    valorTotal: quantidadeAtualizada * itemExistente.price
                };
                novoCarrinho = [...removeItem, itemAtualizado];
            } else {
                const novoItem = dados.find(objeto => objeto.id == id);
                novoCarrinho = [...state, { ...novoItem, quantidade: 1, valorTotal: (novoItem.price * 1) }];
            }

            setValorTotal(() => {
                return novoCarrinho.reduce((acc, item) => acc + item.valorTotal, 0)
            })
            return novoCarrinho
        })
    }

    const removerItemNoCarrinho = (id) => { // Remover 1 item do Carrinho
        setCarrinho(state => {
            let novoCarrinho
            const itemExistente = state.find(objeto => objeto.id == id);

            if (itemExistente.quantidade > 1) {
                const removeItem = state.filter(objeto => objeto.id != id);
                const quantidadeAtualizada = itemExistente.quantidade - 1
                const itemAtualizado = {
                    ...itemExistente,
                    quantidade: quantidadeAtualizada,
                    valorTotal: quantidadeAtualizada * itemExistente.price
                };

                novoCarrinho = [...removeItem, itemAtualizado];
            } else {
                const removeItem = state.filter(objeto => objeto.id != id);
                novoCarrinho = [...removeItem];
            }

            setValorTotal(() => {
                return novoCarrinho.reduce((acc, item) => acc + item.valorTotal, 0)
            })
            return novoCarrinho
        })
    }

    const excluirItemDoCarrinho = (id) => { // Remover todos os items do Carrinho
        setCarrinho(state => {
            const novoCarrinho = state.filter(objeto => objeto.id != id);
            setValorTotal(() => {
                return novoCarrinho.reduce((acc, item) => acc + item.valorTotal, 0)
            })
            return [...novoCarrinho];
        })
    }


    const resetar = (quantidade) => { // Resetar todos os valores
        setCarrinho([])
        setConfirmacao(state => !state)
        setValorTotal(0)
        if (quantidade == 0) {
            alert(`Volte Sempre!\nObrigado por interagir com meu site! !)`)
        } else {
            alert(`Ótima Compra!\nObrigado por interagir com meu site! !)`)
        }
    }

    const validadeCarrinho = (carrinho) =>  // Validação caso queira confirma algo com carrinho vazio
    {
        if (carrinho.length == 0) {
            alert("Adicione um item no carrinho")
        } else {
            setConfirmacao(state => !state)
        }
    }
    // buscar uma referência
    const confirmRef = useRef(null);

    useEffect(() => { // cria um efeito para quando a confirmacao == true e o confirmRef for renderizado.
        if (confirmacao && confirmRef.current) {
            confirmRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [confirmacao]);

    return { dados, renderizando, carrinho, setCarrinho, addItemNoCarrinho, removerItemNoCarrinho, excluirItemDoCarrinho, valorTotal, confirmacao, setConfirmacao, resetar, validadeCarrinho, confirmRef }
}