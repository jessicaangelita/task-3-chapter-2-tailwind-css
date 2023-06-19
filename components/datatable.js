import React from 'react';
//import Popup from 'reactjs-popup';
import PopupDelete from '../asset/icon-trash.png'


const DataTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          {props.columns.map((title) => (
            <th>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.items.map((user) => (
          <tr key={user.id}>
            <td className='bold-text'>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
      <tbody>
        {props.items.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            {/* <td className='bold-text'><Link to={`/ProductDetail/${product.id}`}>{product.name}</Link></td>       */}
            <td>{product.description}</td>
            <td class="text-green-400">{product.price}</td>
            <td>{product.category}</td>
            <td>{product.expiryDate}</td>
            {/* <td>
              <Popup
                trigger={
                  <button className="button">
                    <img src={PopupDelete} className="button-image" />
                    Delete
                  </button>
                }
                position="left center"
              >
                <div className="popup-box">
                  <img src={PopupDelete} className="popupImage" />
                  <p className="bold-text">
                    Are you sure to delete? <b>{product.name}</b>
                  </p>
                  <button className="popupButton">Yes</button>
                  <button className="popupButton">No</button>
                </div>
              </Popup>
            </td> */}
          </tr>
        ))}
      </tbody>
      
    </table>
    
  );
};

export default DataTable;