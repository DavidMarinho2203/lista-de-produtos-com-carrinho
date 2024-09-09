export default function ButtonConfirms  ({frase,onclick,href}) {

    return (
        <a className="button" onClick={onclick} href={href}>{frase}</a>
    )
}