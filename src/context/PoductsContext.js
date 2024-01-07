import { createContext, useContext, useReducer } from "react";
const productsContext = createContext();
const initialValues = {
    basketCount: 0,
    count: [0, 0, 0],
    products:[
        {
            name: "Guba Apples",
            img: "https://th.bing.com/th/id/OIP.XprgHSCfPgHBpfQBBfAWqwHaFb?rs=1&pid=ImgDetMain",
            price: 1.49,
            count: 0,
            id: 0,
        },
        {
            name: "Shamakhi Grapes",
            img: "https://th.bing.com/th/id/OIP.W87Qe1xAoJDyPnOC4A5z8wAAAA?w=400&h=428&rs=1&pid=ImgDetMain",
            price: 2.99, 
            id: 1,
            count: 0,
        },
        {
            name: "Pears",
            img: "https://expressbazar.in/images/product-images/1601539321275034347.png",
            price: 2.69, 
            id: 2,
            count: 0,
        }
      
      ],
}

const reducer = (state, action) => {
    const index = action.payload.index;
    // console.log(index);
    console.log(state.products[index]);
    console.log(state.count);
    // const id = state.products[index].id;
    console.log(action.value);
switch (action.type) {
    case "INCREASE_COUNT":
        state.count = action.payload.value;
        return {...state, 
            count: state.count, 
        }
             
    case "DECREASE_COUNT":
        return {...state, 
            count: state.count = action.payload.value,
            }
    case "ADD_BASKET":
        console.log(state.basket);
        console.log(state.products[index])
        console.log(state.count[index]);
        state.products[index].count = state.count[index];
        console.log(state.products[index]);
        state.basketCount = state.products[0].count +state.products[1].count+ state.products[2].count;
       
     
        return{...state,
            //  count: state.count,
            products: state.products,
            //   basket: state.basket,
               basketCount: state.basketCount
        }
    case "INCREASE_BASKET":
        state.count = action.payload.value;
        state.products[index].count = state.count[index];
        state.basketCount = state.products[0].count +state.products[1].count+ state.products[2].count;
        return {...state, 
            count: state.count, 
            products: state.products,
            basketCount: state.basketCount
        }  
    case "DECREASE_BASKET":
        state.count = action.payload.value;
        state.products[index].count = state.count[index];
        state.basketCount = state.products[0].count +state.products[1].count+ state.products[2].count;

        return {...state, 
            count: state.count,
            products: state.products,
            basketCount: state.basketCount
            }
    case "DELETE_PRODUCT":
        state.count = action.payload.value;
        state.products[index].count = state.count[index];
        state.basketCount = state.products[0].count +state.products[1].count+ state.products[2].count;
        return {...state, 
            count: state.count,
            products: state.products,
            basketCount: state.basketCount
            }
    default:
        return state;
}
}




export const ProductsProvider = ({children}) => {
const [state, dispatch] = useReducer(reducer, initialValues);
// const increaseCount =  () => {
//     dispatch({type:"INCREASE_COUNT", payload: "id"})
// }
// const decreaseCount = () => {
//     dispatch({type:"DECREASE_COUNT", payload: "id"})
// }
// const addBasket = () => {
//     dispatch({type:"ADD_BASKET"})
// }

return (
<productsContext.Provider value={{state, dispatch}}>
    {children}
    </productsContext.Provider>
)
}
export const useProducts = () => useContext(productsContext);

