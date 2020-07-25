import { GET_PROFILE, PROFILE_ERROR, UPDATE_PROFILE, CLEAR_PROFILE, ACCOUNT_DELETED, GET_PROFILES, GET_REPOS, NO_REPOS } from './actionTypes'
import { Dispatch } from 'redux'
import { History } from 'history'
import { setAlert } from './alert'
import { formDataType, educationType, experienceType } from './types'

export const getCurrentProfile = () => async (dispatch: Dispatch<any>) => {
    try {
        const res = await fetch('/api/profile/me')
        const data = await res.json();
        
        if (!res.ok) {
            let error: any = new Error();
            error = { ...error, errors: data }
            throw error
        }
        dispatch({
            type: GET_PROFILE,
            payload: data
        });
    } catch (err) {
        
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.errors.msg }
        });
    }
};

export const getProfiles = () => async (dispatch: Dispatch<any>) => {

    dispatch({ type: CLEAR_PROFILE })

    try {
        const res = await fetch('/api/profile')
        const data = await res.json();
        
        if (!res.ok) {
            let error: any = new Error();
            error = { ...error, errors: data }
            throw error
        }
        dispatch({
            type: GET_PROFILES,
            payload: data
        });
    } catch (err) {
        
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.errors.msg }
        });
    }
};

export const getProfileById = (userId: string) => async (dispatch: Dispatch<any>) => {

    try {
        const res = await fetch(`/api/profile/user/${userId}`)
        const data = await res.json();
        
        if (!res.ok) {
            let error: any = new Error();
            error = { ...error, errors: data }
            throw error
        }
        dispatch({
            type: GET_PROFILE,
            payload: data
        });
    } catch (err) {
        
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.errors.msg }
        });
    }
};

export const getGithubRepos = (username: string) => async (dispatch: Dispatch<any>) => {
    try {
        const res = await fetch(`/api/profile/github/${username}`);
        const data = await res.json();
        
        if (!res.ok) {
            let error: any = new Error();
            error = { ...error, errors: data }
            throw error
        }
        dispatch({
            type: GET_REPOS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: NO_REPOS
        });
    }
};

export const createProfile = (formData: formDataType, history: History, edit = false) => async (dispatch: Dispatch<any>) => {
    try {
        const res = await fetch('/api/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        const json = await res.json();
        if (!res.ok) {
            let error: any = new Error();
            error = { ...error, errors: json.errors }
            throw error
        }
        dispatch({
            type: GET_PROFILE,
            payload: json
        })
        if (!edit) {
            history.push('/dashboard')
        }
        dispatch(setAlert(edit ? 'Profile updated' : 'Profile created', 'green'))
    } catch (error) {
        const errors = error.errors

        if (errors) {
            errors.forEach((err: any) => {
                dispatch(setAlert(err.msg, 'red'))
                dispatch({
                    type: PROFILE_ERROR,
                    payload: { msg: error.msg }
                })
            })
        }
    }
}

export const addEducation = (formData: educationType, history: History) => async (dispatch: Dispatch<any>) => {
    try {
        const res = await fetch('/api/profile/education', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        const json = await res.json();
        if (!res.ok) {
            let error: any = new Error();
            error = { ...error, errors: json.errors }
            throw error
        }

        dispatch(setAlert('Education Added', 'green'));

        history.push('/dashboard');

    } catch (error) {
        const errors = error.errors
        if (errors) {
            errors.forEach((err: any) => {
                dispatch(setAlert(err.msg, 'red'))
            })
        }
    }
}

export const deleteEducation = (id: string | undefined) => async (dispatch: Dispatch<any>) => {
    try {
        const res = await fetch(`api/profile/education/${id}`, {
            method: 'DELETE'
        });
        const json = await res.json();
        
        if (!res.ok) {
            let error: any = new Error();
            error = { ...error, errors: json.errors }
            throw error
        }
        dispatch({
            type: UPDATE_PROFILE,
            payload: json
        });

        dispatch(setAlert('Education Removed', 'green'));
    } catch (error) {
        
        const errors = error.errors
        if (errors) {
            errors.forEach((err: any) => {
                dispatch(setAlert(err.msg, 'red'))
            })
        }
    }
};

export const addExperience = (formData: experienceType, history: History) => async (dispatch: Dispatch<any>) => {
    try {
        const res = await fetch('api/profile/experience', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const json = await res.json();
        
        if (!res.ok) {
            let error: any = new Error();
            error = { ...error, errors: json.errors }
            throw error
        }
        dispatch({
            type: UPDATE_PROFILE,
            payload: json
        });

        dispatch(setAlert('Experience Added', 'green'));

        history.push('/dashboard');
    } catch (error) {
        
        const errors = error.errors
        if (errors) {
            errors.forEach((err: any) => {
                dispatch(setAlert(err.msg, 'red'))
            })
        }
    }
};

export const deleteExperience = (id: string | undefined) => async (dispatch: Dispatch<any>) => {
    try {
        const res = await fetch(`/api/profile/experience/${id}`, {
            method: 'DELETE'
        });
        const json = await res.json();
        
        if (!res.ok) {
            let error: any = new Error();
            error = { ...error, errors: json.errors }
            throw error
        }
        dispatch({
            type: UPDATE_PROFILE,
            payload: json
        });

        dispatch(setAlert('Experience Removed', 'green'));
    } catch (error) {
        
        const errors = error.errors
        if (errors) {
            errors.forEach((err: any) => {
                dispatch(setAlert(err.msg, 'red'))
            })
        }
    }
};

export const deleteAccount = () => async (dispatch: Dispatch<any>) => {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
        try {
            const res = await fetch('api/profile', {
                method: 'DELETE'
            });
            const json = await res.json();
            
            if (!res.ok) {
                let error: any = new Error();
                error = { ...error, errors: json.errors }
                throw error
            }
            dispatch({ type: CLEAR_PROFILE });
            dispatch({ type: ACCOUNT_DELETED });

            dispatch(setAlert('Your account has been permanently deleted', 'green'));
        } catch (error) {
            
            const errors = error.errors
            if (errors) {
                errors.forEach((err: any) => {
                    dispatch(setAlert(err.msg, 'red'))
                })
            }
        }
    }
};