import React from 'react';
import DataTable from '../components/datatable';
import users from '../database/users';

export default function Users() {
  const columns = [
    "USERNAME",
    "EMAIL",
    "ACTION",
  ];
  return (
    <div className='flex h-full flex-col justify-center items-center'>
      <h1 className='text-4xl mb-5 font-bold'>Users</h1>
      <div>
        <DataTable columns={columns} items={users}/>
      </div>
    </div>
  );
}
