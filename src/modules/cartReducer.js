// action
// type & action creator
const ADD = 'cartReducer/ADD';
const DELETE = 'cartReducer/DELETE';
const INCREASE = 'cartReducer/INCREASE';
const DECREASE = 'cartReducer/DECREASE';

export const addCart = (item) => ({
    type: ADD,
    payload: item
});

export const deleteCart = (item) => ({
    type: DELETE,
    payload: item
})

export const increaseItem = (item) => ({
    type: INCREASE,
    payload: item
})

export const decreaseItem = (item) => ({
    type: DECREASE,
    payload: item
})

// init
const initialState = {
    cart: [],
    totalPrice: 0
};

// reducer
export default function cartReducer(state = initialState, action) {
    switch(action.type) {
        case ADD : // 장바구니에 상품 추가
            const cartItem = state.cart.find(item => item.id === action.payload.id);

            if(cartItem) {
                cartItem.quantity++;
            } else {
                state.cart.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                    url: action.payload.url,
                    quantity: 1
                })
            }

            return {
                ...state,
                cart: [...state.cart],
                totalPrice: state.totalPrice + action.payload.price
            };

        case DELETE : // 장바구니에서 상품 삭제
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id),
                totalPrice: state.totalPrice - (action.payload.price * action.payload.quantity)
            };

        case INCREASE : // 수량 증가
            const increaseItem = state.cart.find(item => item.id === action.payload.id);

            increaseItem && increaseItem.quantity++;

            return {
                ...state,
                cart: [...state.cart],
                totalPrice: state.totalPrice + action.payload.price
            };

        case DECREASE : // 수량 감소
            const decreaseItem = state.cart.find(item => item.id === action.payload.id);

            if (decreaseItem && decreaseItem.quantity > 1) {
                decreaseItem.quantity--;
                return {
                    ...state,
                    cart: [...state.cart],
                    totalPrice: state.totalPrice - action.payload.price
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart],
                    totalPrice: state.totalPrice
                };
            }

        default :
            return state;
    }
}