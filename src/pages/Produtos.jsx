import React from "react";
import Layout from "../componets/Layout"
import users from "../api/users";

const Produto = () => {
    console.log(users);
    return (
        <Layout>
            { users.map(function (user) {
                return (
                    <h2>
                        <a href={"/user/" + user.id}>{user.id} - {user.email}</a>
                    </h2>
                )
            }) }
        </Layout>
    )
}

export default Produto