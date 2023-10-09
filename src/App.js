import './App.css';
import { userValidation } from './Validation';

function App() {
  const createUser = async (event) => {
    event.preventDefault();
    let formData = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
    };
    console.log(formData)

    const isValid = await userValidation.isValid(formData);
    if (isValid) {
      console.log("Bilgiler geçerli. Gönderme işlemi başarılı!");
    } else {
      console.log("Bilgiler geçerli değil. Lütfen gerekli alanları doldurun ve kurallara uyun!");
    }
  }

  // function createUser(event) {
  //   event.preventDefault();
  //   let formData = {
  //     name: event.target[0].value,
  //     email: event.target[1].value,
  //     password: event.target[2].value,
  //   };
  //   console.log(formData);
  // }

  return (
    <div className="App">
      <p>Form Validation Application</p>
      <form className='form' onSubmit={createUser}>
        <input type="text" placeholder="Adınızı Girin"></input>
        <input type="email" placeholder="Mailinizi Girin"></input>
        <input type="password" placeholder="Şifrenizi Girin"></input>
        <input type="submit" className="submit"></input>
      </form>
    </div>
  );
}

export default App;
