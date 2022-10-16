import './App.css';
import Input from './form-components/Input';

function App() {
  const arrays = ["name","email","age"];
  return (
    
    <div className="App">
      
      <Input label="First Name: " name="fname"/>
      <Input label="Last Name: " name="lname"/>
      <Input label="Age: " name="age"/>
      <Input label={"E-mail"} name="email"/>
    </div>
  );
}

export default App;
