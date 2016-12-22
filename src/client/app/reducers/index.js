const initialState = {
    filter: null,
    items: [],

    itemId: null,
    itemDetail: {},
    categories: [],

    loading: false,
    error: null
};

function itemReducer(state = initialState, action) {
    switch (action.type) {
        case 'SEARCH_ITEMS_REQUEST':
            return Object.assign({}, state, {
                items: [],
                filter: action.term,
                loading: true
            });
        case 'SEARCH_ITEMS_SUCCESS':
            return Object.assign({}, state, {
                items: action.items,
                loading: false
            });
        case 'SEARCH_ITEMS_FAIL':
            return Object.assign({}, state, {
                err: action.err,
                loading: false
            });
        case 'ITEM_DETAIL_REQUEST':
            return Object.assign({}, state, {
                itemDetail: {},
                itemId: action.itemId,
                loading: true
            });
        case 'ITEM_DETAIL_SUCCESS':
            return Object.assign({}, state, {
                itemDetail: action.itemDetail,
                categories: action.categories,
                loading: false
            });
        case 'ITEM_DETAIL_FAIL':
            return Object.assign({}, state, {
                err: action.err,
                loading: false
            });
        default:
            return state;
    }
}

export default itemReducer;
