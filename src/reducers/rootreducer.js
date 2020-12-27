const initialState = {
  nightmode:true,
}
export default function rootreducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_MODE':
      return {nightmode: !state.nightmode}
    case 'LIGHT_MODE':
      return {nightmode: false}
    case 'DARK_MODE':
      return {nightmode: true}
    default:
      return state;
  }
};
