interface ISetShouldReloadAction {
    readonly type: 'SET_SHOULD_RELOAD',
    payload: boolean,
}

export type UIAction = 
| ISetShouldReloadAction
