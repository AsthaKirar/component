//array aana or use render karna

const App = () => {
  let info = [
    {
      name : "astha",
      version : 24,
      status : true,
      
    },
    {
      name : "priya",
      version : 25,
      status : true,

      
    },
    {
      name : "meee",
      version : 26,
      status : true,

    }

  ];
  let x = info.map((item,index) =>{
    return(
      <div key ={index}>
        <h1>Name: {item.name}</h1>
        <p>Version: {item.version}</p>
        <p>Status: {item.status}</p>


      </div>
    )

  });
  console.log(x);
  return(
    <div>
      <h1>{x}</h1>
    </div>
  );
};


export default App;