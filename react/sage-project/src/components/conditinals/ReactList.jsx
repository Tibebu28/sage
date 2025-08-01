function ReactList() {
    const cars = ["BYD", "BMW", "Toyota", "Toyota"];
    return (
        <>
        <ul>
            {cars.map((car, index) => (
                <li key={index}>{car}</li>
            ))}
        </ul>
        </>
    )
}

export default ReactList;
// This component renders a list of car names using the map function to iterate over the array.