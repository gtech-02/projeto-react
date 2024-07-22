import React from "react";
import Layout from "../componets/Layout"
import { useParams } from "react-router-dom";
import users from '../api/users';

const UserPage = () => {
    let params = useParams();

    let user = users.find(function(user) {
        return user.id == params.id
    });

    return (
        <Layout>
            <h1>{user.email}</h1>
        </Layout>
    )
}

export default UserPage