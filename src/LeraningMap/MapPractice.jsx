function MapPractice() {


    let fruits = ['banana', 'mango', 'stwebarry', 'avacado', 'cherry'];



    return (

        <div className="main my-5   bg-blue-100 rounded shadow-md p-4">


            <h1 className="bg-blue-100 rounded shadow-md text-2xl font-bold">Healty fruites usinn Map</h1>
            {fruits.length === 0 ? <p>I need food </p> : null}
            <ul className="p-4 list-disc list-inside ">
                {fruits.map((item) => {
                    return <li key={item} className="mb-2 text-blue-700" > {item}  </li>

                })}
            </ul>

        </div>










    )










}




export default MapPractice; 
