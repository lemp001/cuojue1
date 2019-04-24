const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  if(action.type === 'input_change_value') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.inputValue;
    return newState;
  }else if(action.type === 'button_click_change') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(action.value)
    newState.inputValue = ''
    return newState
  }else if(action.type === 'delete_div') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1)
    return newState
  }
  return state;
}