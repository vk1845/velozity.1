import React from 'react'

function velocity(props) {
  const { data } = props;
  return (
    <div className="velocity">
      <table>
        <tr>
          <th>job title</th>
          <th> Company Name</th>
          <th> Name of the city of the job</th>
          <th> Name of the country of job</th>
          <th> Whether the job is remote or not</th>
        </tr>
        {data.map((ele) => (
            <tr>
            <td>{ele.title}</td>
            <td>{ele.company}</td>
            <td>{ele.city}</td>
            <td>{ele.country}</td>
            <td>{ele.remote}</td>
          </tr>
        ))
        }
      </table >
    </div >
  )
}

export default velocity

