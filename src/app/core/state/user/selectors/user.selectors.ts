import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../state/user.state';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUser = createSelector(selectUserState, (state: UserState) => state.user);

export const selectIsAuthenticated = createSelector(selectUser, (user) => !!user);

export const selectLoading = createSelector(selectUserState, (state: UserState) => state.loading);

export const selectError = createSelector(selectUserState, (state: UserState) => state.error);
