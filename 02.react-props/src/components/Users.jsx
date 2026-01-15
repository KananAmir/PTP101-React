import '../assets/css/users.css'

const Users = () => {
    const users = [
        {
            id: 'sada23sdfs',
            username: "kanan",
            email: "kanan@mail.com",
            avatar: "https://i.pravatar.cc/150?img=1",
            role: "admin",
            isActive: true,
        },
        {
            id: 'adsf2342fsd',
            username: "ayla",
            email: "ayla@mail.com",
            avatar: "https://i.pravatar.cc/150?img=2",
            role: "user",
            isActive: true,
        },
        {
            id: '234fdsfsdf',
            username: "elvin",
            email: "elvin@mail.com",
            avatar: "https://i.pravatar.cc/150?img=3",
            role: "editor",
            isActive: false,
        },
        {
            id: 'wer234234sdf',
            username: "nigar",
            email: "nigar@mail.com",
            avatar: "https://i.pravatar.cc/150?img=4",
            role: "user",
            isActive: true,
        },
    ];

    return (
        <div>
            <h2>Users</h2>
            <ul className='list'>
                {users.map((user) => {
                    return (
                        <li key={user.id}>
                            <img src={user.avatar} alt={user.username} />
                            <h3>{user.username}</h3>
                            <p>{user.email}</p>
                            {/* <p style={{
                                backgroundColor: user.isActive ? 'green' : 'red'
                            }}>{user.isActive ? "Active" : "Inactive"}</p> */}
                            <p className={user.isActive ? "active" : "inactive"}>{user.isActive ? "Active" : "Inactive"}</p>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default Users