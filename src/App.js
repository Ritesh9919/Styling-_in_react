import styled from 'styled-components';

const DivElement = styled.div`
width:20%;
padding:10px;
background-color:cyan;
margin:50px auto 0 auto;
border-radius:5px;

&:hover{
  background-color:purple;
  
}

h1{
  color:red;
  text-align:center;
}
p{
  color:green;
  text-align:center;
  font-size:23px;
}
`

function App() {
  return (
    <DivElement>
       <h1>Hello World</h1>
       <p>Ritesh Maurya</p>
       
    </DivElement>
  );
}

export default App;
