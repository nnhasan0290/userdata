const { createContext } = require("react");
const UserContext = createContext()

const ContextProvider = ({children}) => {
    return(
       <UserContext.Provider value={"data"}>
        {children}
       </UserContext.Provider>
    )
}
export default ContextProvider;