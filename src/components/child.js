function child1({props}){
    return(
        <div className = "container text-center mt-5 w-75">
            <table className = "table text-center w-50 border border-dark bg-info text-dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>{
                    props.map((emplObj) => <tr key = {emplObj.id}>
                        <td>{emplObj.id}</td>
                        <td>{emplObj.name}</td>
                        <td>{emplObj.city}</td>
                        <td>{emplObj.salary}</td>
                    </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}
export default child1;