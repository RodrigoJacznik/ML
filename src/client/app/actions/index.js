import itemsServices from '../api/itemsServices';

export function searchItemsRequest(term) {
    return (dispatch) => {
        dispatch({
            type: 'SEARCH_ITEMS_REQUEST',
            term,
        });

        itemsServices.search(term)
            .then((resp) => resp.json(), (err) => dispatch(searchItemsFail(err)))
            .then((data) => dispatch(searchItemsSuccess(data.items)));
    };
}

export const searchItemsFail = (err) => ({
    type: 'SEARCH_ITEMS_FAIL',
    err: err
});

export const searchItemsSuccess = (items) => ({
    type: 'SEARCH_ITEMS_SUCCESS',
    items
});

export function itemDetailRequest(id) {
    return (dispatch) => {
        dispatch({
            type: 'ITEM_DETAIL_REQUEST',
            itemId: id,
        });

        itemsServices.get(id)
            .then((resp) => resp.json(), (err) => dispatch(itemDetailFail(err)))
            .then((data) => dispatch(itemDetailSuccess(data.item, data.categories)));
    };
}

export const itemDetailFail = (err) => ({
    type: 'ITEM_DETAIL_FAIL',
    err: err
});

export const itemDetailSuccess = (itemDetail, categories) => ({
    type: 'ITEM_DETAIL_SUCCESS',
    itemDetail,
    categories
});

export default {
    searchItemsRequest,
    searchItemsFail,
    searchItemsSuccess,
    itemDetailRequest,
    itemDetailFail,
    itemDetailSuccess
};
