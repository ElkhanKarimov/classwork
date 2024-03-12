import React, { useState } from 'react'
import { useEffect } from 'react'


const [data, setData] = useState([])
const [currentData, setCurrentData] = useState(
    {
        id: '',
        companyName: '',
        contactName: '',
        contactTitle: ''
    })

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = () => {
        const data = axios.get("https://northwind.vercel.app/api/suppliers").then(data =>setData(data.data));
    }


const App = () => {
    
    return (

        <div>
            <form action="">
                <input type="text" />
                <input type="text" />
                <button>Add</button>
            </form>
            <table>
                <thead>
                    <tr>Id</tr>
                    <tr>companyName</tr>
                    <tr>contactName</tr>
                    <tr>contactTitle</tr>
                    <tr>Setting</tr>
                </thead>
                <tbody>
                    {data && data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                            <td>
                                <button onClick={() => handleEdit({ item.id })}></button>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>

                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default App