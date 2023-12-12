import { createContext,useState } from "react";
export const Context = createContext();
const AppContext = ({children}) => {
    const [wishlist, setWishlist] = useState([])

    function addToWishlist(data){
        let flag = false;
        wishlist?.forEach((item)=>{
            if(item?.id===data?.id){
                flag = true;
            }
        });

        if(!flag){
        const alldata = [...wishlist,data]
        setWishlist(alldata);
        }
        
    }
        return (
            <Context.Provider 
            value = {{
                wishlist,
                setWishlist,
                addToWishlist,
            }}>

                {children}
            </Context.Provider>
        )
};
export default AppContext;