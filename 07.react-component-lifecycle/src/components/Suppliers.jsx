import { useEffect, useState } from "react"
import axios from 'axios'
import { BASE_URL } from "../constant"

const Suppliers = () => {
    const [suppliers, setSuppliers] = useState([])

    // useEffect(()=>{
    //     axios.get(`${BASE_URL}/suppliers`)
    //         .then((response)=>{
    //             setSuppliers(response.data)
    //         })
    //         .catch((err)=>{
    //             console.log(err);
    //         })
    // }, [])



    useEffect(() => {
        async function getSuppliers() {
            try {
                const response = await axios(`${BASE_URL}/suppliers`)
                setSuppliers(response.data)
            } catch (error) {
                console.log(error);
            }
        }

        getSuppliers()
    }, [])

    console.log('aa');

    if (suppliers.length === 0) {
        return <><p>LOADING...</p></>
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Company Name</th>
                    <th>Contact Title</th>
                    <th>City, Country</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {suppliers.map((s) => {
                    return (
                        <tr key={s.id}>
                            <td>{s.companyName || 'no data'}</td>
                            <td>{s.contactTitle || 'no data'}</td>
                            <td>{s.address?.city}, {s.address?.country}</td>
                            <td>{s.address?.phone || 'no data'}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Suppliers