import {
    BUSINESS_GROUPS_FETCHING,
    BUSINESS_GROUPS_FAILED,
    BUSINESS_GROUPS_SUCCESS
} from "./types";

import BusinessService from "../services/business.service.js";

export const getAllBusinessGroup = () => async (dispatch) => {
    try {
        dispatch({
            type: BUSINESS_GROUPS_FETCHING
        });
        const res = await BusinessService.getAllBusinessGroup();
        if(res.data){
            dispatch({
                type: BUSINESS_GROUPS_SUCCESS,
                payload: res.data
            })
        }
    } catch (error) {
        dispatch({
            type: BUSINESS_GROUPS_FAILED
        });
    }
};