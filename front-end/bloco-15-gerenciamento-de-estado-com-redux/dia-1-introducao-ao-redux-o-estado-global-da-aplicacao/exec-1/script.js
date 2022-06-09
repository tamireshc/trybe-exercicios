const INITIAL_STATE = {
  colors: [ 'white', 'black', 'red', 'green', 'blue', 'yellow' ],
  index: 0,
};

function criarCor() {
  const oneChar = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F' ];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
    cor += oneChar[ aleatorio() ];
  }
  return cor;
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      if (state.index < state.colors.length - 1)
        return {
          ...state,
          index: state.index + 1
        }
      else {
        return state
      }

    case 'PREVIOUS_COLOR':
      if (state.index > 0)
        return {
          ...state,
          index: state.index - 1
        }
      else {
        return state
      }
    case 'RANDOM_COLOR':
      return {
        ...state,
        colors: [ ...state.colors, criarCor() ],
        index: state.colors.length - 1
      }

    default:
      return state;
  }
}

const store = Redux.createStore(
  reducer,
  window.__redux_devtools_extension__ && window.__redux_devtools_extension__()
)

store.subscribe(() => {
  // Leia a variável do estado global
  const color = store.getState().colors[ store.getState().index ];

  // atualizar
  const valueElement = document.getElementById('value');
  valueElement.innerText = color;
  const bodyTag = document.getElementsByTagName('body')[ 0 ]
  bodyTag.style.backgroundColor = color
});

const incrementBtn = document.getElementById('next')
const decrementBtn = document.getElementById('previous')
const randomBtn = document.getElementById('random')

incrementBtn.addEventListener('click', () => {
  store.dispatch({ type: 'NEXT_COLOR' })
  console.log('+')
})

decrementBtn.addEventListener('click', () => {
  store.dispatch({ type: 'PREVIOUS_COLOR' })
  console.log('-')
})

randomBtn.addEventListener('click', () => {
  store.dispatch({ type: 'RANDOM_COLOR' })
  console.log('ramdon')
})

