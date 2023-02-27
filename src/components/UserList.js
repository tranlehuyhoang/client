import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const UserList = () => {
    const navigate = useNavigate();
    const [users, setUser] = useState([]);
    const [name, setName] = useState("");
    const [idd, setid] = useState(0);
    const [a, seta] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Male");
    const saveUser = async (e) => {
        e.preventDefault();

        try {
            await axios.post('ps26819-hf7b.onrender.com/users', {
                name: name,
                email: email,
                gender: gender
            }).then((response) => {
                console.log(response);
            });
        } catch (err) {

        };
        seta(Math.random())
        navigate("/")
    }
    const DeleteUser = async (e) => {

        try {
            await axios.delete(`ps26819-hf7b.onrender.com/users/${e}`).then((response) => {
                console.log(response);
            });
        } catch (err) {

        };
        seta(Math.random())
        navigate("/")
        console.log(e.target)
    }
    const UpdateUser = async (e) => {
        setid(e)
        console.log("update : " + e)
        document.getElementById("a").style.display = "none";
        document.getElementById("b").style.display = "block";
        // seta(Math.random)

        try {
            await axios.get(`ps26819-hf7b.onrender.com/users/${e}`).then((response) => {
                console.log(response.data);
                setName(response.data.name)
                setEmail(response.data.email)
                setGender(response.data.gender)
            });
        } catch (err) {

        };

    }
    const UpdateUser_save = async () => {
        var iid = idd
        try {
            await axios.patch(`ps26819-hf7b.onrender.com/users/${iid}`, {
                name: name,
                email: email,
                gender: gender
            }).then((response) => {
                console.log(response);
            });
        } catch (err) {

        };

    }
    useEffect(() => {
        getUser();
        setName('')
        setEmail('')
        setGender('')

    }, [a]);
    const getUser = async () => {
        const respone = await axios.get('ps26819-hf7b.onrender.com/users')
        setUser(respone.data);
        console.log(respone.data.length)
        // axios.get('ps26819-hf7b.onrender.com/users')
        // this will re render the view with new data

    }
    return (
        <div className="columns mt-5 is-centered">
            <div className="column is half">
                <table className="table is-striped is-fullwidth">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.gender}</td>
                                        <td>
                                            <button className="button is-small is-info"
                                                onClick={(e) => {
                                                    var index = user.id;
                                                    console.log(index);
                                                    DeleteUser(index);
                                                }}>Delete</button>
                                            <button className="button is-small is-danger"
                                                onClick={(e) => {
                                                    var index = user.id;
                                                    console.log(index);
                                                    UpdateUser(index);
                                                }}
                                            >Update</button>
                                        </td>
                                    </tr>
                                )

                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="column is-half">
                <form onSubmit={saveUser} id='a'>
                    <div className="field">
                        <label htmlFor="" className='label'>Name</label>
                        <div className='control'>
                            <input type="text" name="name" id="" className='input' placeholder='Name'
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="" className='label'>Email</label>
                        <div className='control'>
                            <input type="text" name="email" id="" className='input' placeholder='Email'
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="" className='label'>Gender</label>
                        <div className='control'>
                            <select name="gender" id=""
                                value={gender}
                                onChange={(e) => { setGender(e.target.value) }}
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="field">
                        <button type='sumbit' className='button is-success'>Save</button>
                    </div>
                </form>
                <form onSubmit={UpdateUser_save} className='b' id="b" style={{ display: "none" }}>
                    <div className="field">
                        <label htmlFor="" className='label'>Name Update</label>
                        <div className='control'>
                            <input type="text" name="name" id="" className='input' placeholder='Name'
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="" className='label'>Email</label>
                        <div className='control'>
                            <input type="text" name="email" id="" className='input' placeholder='Email'
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label htmlFor="" className='label'>Gender</label>
                        <div className='control'>
                            <select name="gender" id=""
                                value={gender}
                                onChange={(e) => { setGender(e.target.value) }}
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div className="field">
                        <button type='sumbit' className='button is-success'>Save</button>
                    </div>
                </form>
            </div>
        </div>


    )
}
export default UserList;