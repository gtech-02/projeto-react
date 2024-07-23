import { useEffect, useState } from "react";
import Layout from "../componets/Layout"
import produtos from '../api/produtos';

const UserPage = () => {

    const [sortPrice, setSortPrice] = useState(1);

    let productList = produtos.sort(function(current, next) {
        return   current.price - next.price
    });

    if(sortPrice == 0) {
        productList = productList.reverse();
    }

    return (
        <Layout>
            <div>
                <select value={sortPrice} onChange={(event) => setSortPrice(event.target.value)}>
                    <option value="0">Maior Preço</option>
                    <option value="1">Menor preço</option>
                </select>
            </div>
            <div>
                { console.log(productList) }
                {productList.map(function(produto){
                    return (
                        <div key={produto.id}>
                            <h3>{produto.name}</h3>
                            <h4>{produto.price}</h4>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )
}

export default UserPage