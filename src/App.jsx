import './App.css';
import Everything from './components/everything/Everything'

function App() {

  // The variable value (line 7) is the props to be passed to the everything component.
  // it can be an array (ex: const value = [1,2,3,'dan']), a string or a number.
  // it can be object (ex: const value= {age: 1, weight: 50, name: 'Dan'}).
  // it can also be any falsy value (as defined in https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
 
  const value = null;

  return (
    <div className="App">
      <Everything value={value} />
    </div>
  )
}

export default App
