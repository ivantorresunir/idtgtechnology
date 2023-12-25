import React, {useEffect} from 'react';
import '../css/create_product.css';
import {DataTable} from "../../../../components/data_table/js/data_table";
import {useFetch} from "../../../../hooks/fakestoreapi/fakestoreapi_customhook";

// let productList = [
//     [21, 'Mouse', '$35.000', 'edit', 'create', 'view'],
//     [22, 'Teclado', '$55.000', 'edit', 'create', 'view'],
//     [23, 'Monitor', '$55.000', 'edit', 'create', 'view'],
//     [24, 'UPS', '$75.000', 'edit', 'create', 'view'],
//     [25, 'Portatil', '$505.000', 'edit', 'create', 'view'],
//     [26, 'Pad Mouse', '$10.000', 'edit', 'create', 'view']
// ];

let productList = [];


const titleListModel = ['#', 'Referencia', 'Precio'];

export const CreateProduct = () => {

    let products = useFetch('https://fakestoreapi.com/products');

    if (products[0] !== null) {
        products.map((element) => (
            element.map((elementProduct) => (
                productList.push([elementProduct.id, elementProduct.title, '$' + elementProduct.price])
            ))
        ));
    }

    // useEffect(() => {
    //     if (products[0] !== null) {
    //         products.map((element) => (
    //             element.map((elementProduct) => (
    //                 productList.push([elementProduct.id, elementProduct.title, '$' + elementProduct.price])
    //             ))
    //         ));
    //
    //         productList.sort(s => s.id);
    //     }
    // });

    if (products[0] !== null) {
        return (
            <>
                <div className='container-fluid'>
                    <h1 className='text-center'>Creación de productos</h1>
                    <DataTable title_list={titleListModel} body_list={productList}></DataTable>
                </div>
            </>
        )
    }
};