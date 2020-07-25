import { initialStatePostType, postActionType } from '../actions/types'
import { GET_POSTS, POST_ERROR, UPDATE_LIKES, DELETE_POST, ADD_POST, GET_POST } from '../actions/actionTypes'

const initialState: initialStatePostType = {
    posts: [],
    post: null,
    loading: true,
    error: {}
};


export default function (state = initialState, action: postActionType) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                loading: false,
                posts: action.payload
            }
        case GET_POST:
            return {
                ...state,
                post: action.payload,
                loading: false
            };
        case POST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts],
                loading: false
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((post: any) => post._id !== action.payload),
                loading: false
            };
        case UPDATE_LIKES:
            return {
                ...state,
                posts: state.posts.map(post => {

                    return post._id === action.payload.id ? { ...post, likes: action.payload.likes } : post
                }
                ),
                loading: false
            };
        default:
            return state;
    }
}