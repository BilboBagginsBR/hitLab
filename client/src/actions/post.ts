import { Dispatch } from 'redux'
import { setAlert } from './alert';

import {
    GET_POSTS,
    POST_ERROR,
    UPDATE_LIKES,
    DELETE_POST,
    ADD_POST
} from './actionTypes';

export const getPosts = () => async (dispatch: Dispatch<any>) => {
    try {
        const res = await fetch('/api/posts');
        const data = await res.json();
        
        if (!res.ok) {
            let error: any = new Error();
            error = { ...error, errors: data }
            throw error
        }
        dispatch({
            type: GET_POSTS,
            payload: data
        });
    } catch (err) {
        
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};


// Add like
export const addLike = (id: string) => async (dispatch: Dispatch<any>) => {
    try {
        const res = await fetch(`/api/posts/like/${id}`, {
            method: 'PUT'
        });
        const data = await res.json();
        
        if (!res.ok) {
            let error: any = new Error();
            error = { ...error, errors: data }
            throw error
        }
        dispatch({
            type: UPDATE_LIKES,
            payload: { id, likes: data }
        });
    } catch (err) {
        
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.errors.msg, status: 400 }
        });
    }
};


// Remove like
export const removeLike = (id: string) => async (dispatch: Dispatch<any>) => {
    try {
        const res = await fetch(`/api/posts/unlike/${id}`, {
            method: 'PUT'
        });
        const data = await res.json();
        
        if (!res.ok) {
            let error: any = new Error();
            error = { ...error, errors: data }
            throw error
        }
        dispatch({
            type: UPDATE_LIKES,
            payload: { id, likes: data }
        });
    } catch (err) {
        
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.errors.msg, status: 400 }
        });
    }
};

// Delete post
export const deletePost = (id: string) => async (dispatch: Dispatch<any>) => {
    try {
        const res = await fetch(`/api/posts/${id}`, {
            method: 'DELETE'
        });
        const data = await res.json();
        
        if (!res.ok) {
            let error: any = new Error();
            error = { ...error, errors: data }
            throw error
        }
        dispatch({
            type: DELETE_POST,
            payload: id
        });

        dispatch(setAlert('Post Removed', 'green'));
    } catch (err) {
        
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.errors.msg, status: 400 }
        });
    }
};

// Add post
export const addPost = (formData: any) => async (dispatch: Dispatch<any>) => {
    try {
        const res = await fetch(`/api/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await res.json();
        
        if (!res.ok) {
            let error: any = new Error();
            error = { ...error, errors: data }
            throw error
        }
        dispatch({
            type: ADD_POST,
            payload: data
        });

        dispatch(setAlert('Post Created', 'green'));
    } catch (err) {
        
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.errors.msg, status: 400 }
        });
    }
};
