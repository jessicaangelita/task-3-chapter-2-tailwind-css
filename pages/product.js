import React from "react";
import DataTable from "../components/datatable";
import products from "../database/products";

export default function Product() {
  const columns = [
    "Product Name", 
    "Description",
    "Product Price",
    "Category",
    "Expiry Date",
    "ACTION"
  ];
  return (
    <div className='flex h-full flex-col justify-center items-center'>
      <h1 className='text-4xl mb-5 font-bold'>Product</h1>
      <div>
        <DataTable columns={columns} items={products}/>
      </div>
    </div>
  );
}
