import cities from '../cities';

export function setCities() {
  debugger
  return {
    type: 'SET_CITIES',
    payload: cities
  };
}
