import './App.css';

function App() {
  return (
    <div className="App">
      <p>Form Validation Application</p>
      <form className='form'>
        <input type="text" placeholder="Adınızı Girin"></input>
        <input type="email" placeholder="Mailinizi Girin"></input>
        <input type="password" placeholder="Şifrenizi Girin"></input>
        <input type="submit" className="submit"></input>
      </form>
    </div>
  );
}

export default App;
