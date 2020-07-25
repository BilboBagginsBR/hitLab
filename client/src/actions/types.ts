import {
    LOGOUT,
    GET_POST,
    ADD_POST,
    GET_REPOS,
    SET_ALERT,
    GET_POSTS,
    LOGIN_FAIL,
    POST_ERROR,
    AUTH_ERROR,
    DELETE_POST,
    GET_PROFILE,
    USER_LOADED,
    UPDATE_LIKES,
    REMOVE_ALERT,
    GET_PROFILES,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    PROFILE_ERROR,
    CLEAR_PROFILE,
    UPDATE_PROFILE,
    ACCOUNT_DELETED,
    REGISTER_SUCCESS,
} from './actionTypes'


export type alertStatus = "green" | "yellow" | "red" | undefined

export type alertState = Readonly<{
    id: string,
    msg: string,
    alertType: alertStatus
}>

export type alertAction = {
    type: typeof SET_ALERT | typeof REMOVE_ALERT,
    payload: alertState | string

}


// register and auth

export type formDataType = {
    company: string,
    website: string,
    location: string,
    status: string,
    skills: string,
    githubusername: string,
    bio: string,
    twitter: string,
    facebook: string,
    linkedin: string,
    youtube: string,
    instagram: string,
}

export type registerDataType = Readonly<{
    name: string,
    email: string,
    password: string
}>

type userInfo = {
    _id: string,
    name: string,
    email: string,
    avatar: string,
    date: string
}


export type authRegStateType = {
    isAuthenticated: boolean,
    loading: boolean,
    user: userInfo | null
}

type userToken = {
    token: string
}

export type authRegAction = {
    type: typeof REGISTER_SUCCESS | typeof REGISTER_FAIL | typeof USER_LOADED | typeof AUTH_ERROR | typeof LOGIN_SUCCESS | typeof LOGIN_FAIL | typeof LOGOUT | typeof ACCOUNT_DELETED,
    payload: userToken | userToken
}

// Root Redux State
export type profile = {
    skills: string[],
    _id: string,
    user: {
        _id: string,
        name: string,
        avatar: string
    },
    company: string,
    website: string,
    location: string,
    bio: string,
    status: string,
    githubusername: string,
    experience: experienceType[],
    education: educationType[],
    date: string,
    social?: any
}

export type rootState = {
    alert: alertState[],
    auth: {
        token: string,
        isAuthenticated: boolean,
        loading: boolean,
        user: userInfo
    },
    profile: {
        profile: profile,
        profiles: profile[],
        repos: [],
        loading: true,
        error: any
    },
    post: initialStatePostType
}

// Profile

export type profileAction = {
    type: typeof GET_PROFILE | typeof PROFILE_ERROR | typeof CLEAR_PROFILE | typeof UPDATE_PROFILE | typeof GET_PROFILES | typeof GET_REPOS,
    payload: profile | profile[]
}

export type educationType = {
    school: string,
    degree: string,
    fieldofstudy: string,
    from: string,
    to: string,
    current: boolean,
    description: string,
    _id?: string | undefined
}

export type experienceType = {
    company: string,
    title: string,
    location: string,
    from: string,
    to: string,
    current: boolean,
    description: string,
    _id?: string | undefined

}

// post

export type postType = {
    _id: string,
    text: string,
    name: string,
    avatar: string,
    user: string,
    likes: any,
    comments: postCommentType[],
    date: string,
    id: string
}

export type postCommentType = {
    date: string,
    _id: string,
    text: string,
    name: string,
    avatar: string,
    user: string
}

export type initialStatePostType = {
    posts: postType[],
    post: postType | null,
    loading: true,
    error: {}
}

export type postErrorType = {
    msg: string,
    status: number
}

export type postActionType = {
    type: typeof GET_POSTS | typeof POST_ERROR | typeof UPDATE_LIKES | typeof DELETE_POST | typeof ADD_POST | typeof GET_POST,
    payload: postType & postType[] & postErrorType
}