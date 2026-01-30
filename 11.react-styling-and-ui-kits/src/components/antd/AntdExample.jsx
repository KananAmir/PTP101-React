import React, { useEffect, useState } from 'react';
import { Flex, Space, Table, Tag, Tooltip } from 'antd';

const columns = [
  {
    title: 'Photo',
    dataIndex: 'coverImageURL',
    key: 'coverImageURL',
    render: (text, record) => {
      return <img src={text} alt={record.title} style={{ width: '50px' }} />;

    }
  },
  {
    title: 'Book Title',
    dataIndex: 'title',
    key: 'title',
    render: (text, record) => {

      console.log(text, record);

      return <a>{text}</a>;
    },
    sorter: (a, b) => a.title.localeCompare(b.title),
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    render: (text) => {
      return <Tooltip placement="top" title={text}>
        <span>{text.length > 30 ? text.slice(0, 30) + '...' : text}</span>
      </Tooltip>
    }
  },
];

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sydney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];


const AntdExample = () => {

  const [books, setBooks] = useState()


  useEffect(() => {
    fetch('https://book-store-api-liard-three.vercel.app/books')
      .then((res) => res.json())
      .then((data) => {
        setBooks(data)
      }).catch((error) => {
        console.error('Error fetching books:', error);
      });

  }, [])

  return <Table columns={columns} dataSource={books} />;
};
export default AntdExample;