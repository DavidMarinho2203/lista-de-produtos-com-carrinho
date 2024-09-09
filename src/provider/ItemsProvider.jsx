import { ItemsContext } from "../context/ItemsContext";
import useItems from '../hooks/useItems'

export default function ItemsProvider({children}) {



return(
        <ItemsContext.Provider value={useItems()}>
            {children}
        </ItemsContext.Provider>
    )
}