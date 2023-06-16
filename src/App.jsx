import getData from "./API/StarWars";

function  App() {
const Data = async () => {await getData(("people"))}
const myData = Data();
console.log(myData);
return (
    <>
    <div>hola mundo</div>
    </>
  )
}

export default App;
