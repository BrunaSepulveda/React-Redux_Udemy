export default function Form ({register, tituloBotão, funButton1, funButton2 }) {
return(
<form>
      {register && <input type="text"/>}
      <input type="text"/>
      <input type="text"/>
      {register && <input type="text"/>}
      <button onClick={() => funButton1 && funButton1()}>{tituloBotão}</button>
      {register || <button onClick={() => funButton2 && funButton2()}>ainda não tenho conta</button>}
  </form>
  )}