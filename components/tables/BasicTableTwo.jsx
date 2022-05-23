/** @format */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table, { SelectColumnFilter, StatusPill } from './Table'; // new

function BasicTableTwo() {
  const [data, setData] = useState([]);

  const getTablesOne = async () => {
    try {
      const data = await axios.get(
        'https://screening.moduit.id/frontend/web/question/two'
      );
      console.log(data.data);
      setData(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTablesOne();
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Product Name',
        accessor: 'title',
      },
      {
        Header: 'Product Code',
        accessor: 'id',
      },
      {
        Header: 'Category',
        accessor: 'footer',
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Tags',
        accessor: 'tags',
        Cell: StatusPill, // new
      },
    ],
    []
  );

  return (
    <div className='flex flex-col'>
      <div className='py-5'>
        <p className='text-gray-900 font-bold'>Question 2</p>
      </div>
      <div className='inline-block min-w-full'>
        <div className='shadow border-b border-gray-200 sm:rounded-lg '>
          <Table columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
}

export default BasicTableTwo;
