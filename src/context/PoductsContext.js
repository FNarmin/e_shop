import { createContext, useContext, useReducer } from "react";
const productsContext = createContext();
const initialValues = {
    count: 0,
    basket: [],
    basketCount: 0,
    products:
        {
            name: "Guba Apples",
            img: "https://th.bing.com/th/id/OIP.XprgHSCfPgHBpfQBBfAWqwHaFb?rs=1&pid=ImgDetMain",
            price: 1.49,
            count: 0,
            id: 1,
        },
    //     {
    //         name: "Shamakhi Grapes",
    //         img: "https://th.bing.com/th/id/OIP.W87Qe1xAoJDyPnOC4A5z8wAAAA?w=400&h=428&rs=1&pid=ImgDetMain",
    //         price: 2.99, 
    //         id: 2,
    //         count: this.count,
    //     },
    //     {
    //         name: "Pears",
    //         img: "https://expressbazar.in/images/product-images/1601539321275034347.png",
    //         price: 2.69, 
    //         id: 3,
    //         count: this.count,
    //     }
      
    //   ],
}

const reducer = (state, action) => {
    const id = state.products.id;
switch (action.type) {
    case "INCREASE_COUNT":
        return {...state, count: state.count+1}
    case "DECREASE_COUNT":
        return {...state, count: state.count>0 ?state.count-1 :state.count}
    case "ADD_BASKET":
        if(!state.basket[id]) {
            state.products.count = state.count;
            // console.log(state.products.count);
            state.basket.push(state.products);
            state.basket.count = state.count;
            // console.log(state.basket.count);
        } else {
            state.products.count = state.count
            state.basket.count = state.count;
        }
        state.basketCount =state.count;
        // state.count = 0;
        return{...state, count: state.count, basket: state.basket, basketCount: state.basketCount}

    default:
        return state;
}
}


export const ProductsProvider = ({children}) => {
const [state, dispatch] = useReducer(reducer, initialValues);
const increaseCount =  () => {
    dispatch({type:"INCREASE_COUNT"})
}
const decreaseCount = () => {
    dispatch({type:"DECREASE_COUNT"})
}
const addBasket = () => {
    dispatch({type:"ADD_BASKET"})
}

return (
<productsContext.Provider value={{state, increaseCount, decreaseCount, addBasket}}>
    {children}
    </productsContext.Provider>
)
}
export const useProducts = () => useContext(productsContext);

