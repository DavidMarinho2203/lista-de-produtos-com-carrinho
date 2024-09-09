export default function ButtonConfirms  ({frase,onclick}) {

    return (
        <button className="button" onClick={onclick}>{frase}</button>
    )
}