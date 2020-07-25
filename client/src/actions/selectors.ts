import { rootState } from './types'

export const alertSelector = (state: rootState) => state.alert;
export const authSelector = (state: rootState) => state.auth;
export const profileSelector = (state: rootState) => state.profile;
export const getIsAuthenticated = (state: rootState) => state.auth.isAuthenticated
export const getCurrentUser = (state: rootState) => state.auth.user;
export const getCurrentProfileSelector = (state: rootState) => state.profile.profile
export const getProfileRepos = (state: rootState) => state.profile.repos
export const getPostState = (state: rootState) => state.post;
export const getProfileSelector = (state: rootState) => ({
    profiles: state.profile.profiles,
    loading: state.profile.loading
})
