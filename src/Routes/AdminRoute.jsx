import React from 'react';
import useRoleHook from '../Hooks/useRoleHook';

const AdminRoute = () => {
    const role=useRoleHook()
    console.log(role)
    return (
        <div>
            
        </div>
    );
};

export default AdminRoute;