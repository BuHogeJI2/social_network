import React from 'react'

const Users = (props) => {
    return (
        <div>
            {
                props.usersPage.users.map(u => <div>
                    {u.fullName}
                </div>)
            }
        </div>
    )
}

export default Users;