import React from 'react';

function CompletedListItem({id, title, description, author}) {

    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
  
    const newdate = day + "." + month + "." + year;

    return (
    <tr className="table__row">
      <th>{title}</th>
      <th>{description}</th>
      <th>{author}</th>
      <th>{newdate}</th>
    </tr>
    )
}

export default CompletedListItem;
