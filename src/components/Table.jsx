import './styling.css';
/*
Creates table. Sat map takes data out of sat and for each item displays values.
The last item in table uses a ternary operator to display active or inactive depending on operational boolean
*/
const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
      {sat.map((data, id)=>{
      return (
      <tr key={id}>
        <td>{data.name}</td>
        <td>{data.type}</td>
        <td>{data.launchDate}</td>
        <td>{data.operational? "active": "inactive"}</td>
       </tr>
       )})}
     </tbody>
   </table>
  );
};

export default Table;