import './App.css';

const Task = (value) => {
  return <li>{value}</li>;
};
const arraytask = ['Dog no Jiu Jitsu', 'trabalho da facul', 'lavar roupa'];

function App() {
  return (
    <div className='App'>
      {Task('teste')}
      {arraytask.map((item) => Task(item))}
    </div>
  );
}

export default App;
