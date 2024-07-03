/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Category = () => {

  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/auth/category')
    .then(result => {
      if(result.data.Status){
        setCategory(result.data.Result);
      } else {
        alert(result.data.Error)
      }
    }).catch(error => console.log(error))
  },[])

  return (
    <div className='px-5 mt-3'>
      <div className='d-flex justify-content-center'>
        <h3>Category List</h3>
      </div>
      <Link to="/dashboard/add_category" className='btn btn-success'>Add Category</Link>

      <div className='mt-3'>
        <table className='table'>
          <thead>
            <tr>
              <th>S No.</th>
              <th>Category Name</th>
            </tr>
          </thead>
          <tbody>
              {
                category.map(c => (
                  <tr>
                    <td>{c.id}</td>
                    <td>{c.name}</td>
                  </tr>
                ))
              }
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Category;
