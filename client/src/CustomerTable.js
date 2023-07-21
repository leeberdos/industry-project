import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'


function CustomerTable() {
  
  const [customers, setCustomers] = useState([])

useEffect(() => {
  const fetchCustomers = async() => {
    let fetch = await axios.get('http://localhost:8080/privy/customers')

    setCustomers(fetch.data)
}
fetchCustomers()

},[])


const renderCustomerInRow = customers.map(customer => {
  let row = { id: customer.id, firstName: customer.firstName, lastName: customer.lastName, email: customer.email, phoneNumber: customer.phoneNumber, 
    lastOrder: customer.lastOrder, orderPrice: customer.orderPrice}
  return row
})

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'email',
    headerName: 'Email',
    width: 130,
  },
  {
    field: 'phoneNumber',
    headerName: 'Phone number',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 130,
  },
  {
    field: 'lastOrder',
    headerName: 'Last order',
    width: 130,
  },
  {
    field: 'orderPrice',
    headerName: 'Order price',
    width: 90,
  }
];

const rows = renderCustomerInRow;



  return (
    <div className="CustomerTable">
          <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>

    </div>
  );
}

export default CustomerTable;