import React, { useEffect, useState } from 'react';

const ProfilePage = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        // const storedPassword = localStorage.getItem('password');
        const storedfirstName = localStorage.getItem('firstName');
        const storedlastName = localStorage.getItem('lastName');
        const storedemail = localStorage.getItem('email');
        setUserData({ username: storedUsername, firstName: storedfirstName, lastName: storedlastName, email: storedemail });
    }, []);


    return (
        <div>
            <h2>welcome</h2>
            {userData && (
                <div>
                    <p>Username: {userData.username}</p>
                    {/* <p>Password: {userData.password}</p> */}
                    <p>firstName:{userData.firstName}</p>
                    <p>LastName:{userData.lastName}</p>
                    <p>email:{userData.email}</p>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
