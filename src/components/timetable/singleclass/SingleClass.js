import React from 'react';
import {Table} from 'react-bootstrap';

export default function SingleClass() {
  return (
    <Table border="dark" striped bordered hover size="sm" responsive style={{ borderColor:'black', backgroundColor:'white', }}>
  <tr>
    <td colSpan="7"><h3>JSS 3 Time-table</h3></td>
  </tr>
  <tbody >
    <tr>
      <th>Monday</th>
      <td>Mr Mark | Biology</td>
      <td>Miss Tom | Geography</td>
      <td>Mrs Saty | Physics</td>
      <td>Principal | Chemistry</td>
      <td>Mr Akpan | Mathematic</td>
      <td>Mr Sanny P | Religion</td>
    </tr>
    <tr>
      <th>Tuesday</th>
      <td>Jacob | Fishery</td>
      <td>Thornton | Forestry</td>
      <td>Favour | Civic</td>
      <td>Mark | Govt</td>
      <td>Otto | Marketing</td>
      <td>Mmdo | Business</td>
    </tr>
    <tr>
      <th>Wednesday</th>
      <td >Larry | Literature</td>
      <td>Twin | English</td>
      <td>Rye | Computer</td>
      <td>Mark | Sciences</td>
      <td >Larry | Literature</td>
      <td>Twin | English</td> 
    </tr>
    <tr>
      <th>Thursday</th>
      <td>Mr Mark | Biology</td>
      <td>Miss Tom | Geography</td>
      <td>Mrs Saty | Physics</td>
      <td>Principal | Chemistry</td>
      <td>Mr Akpan | Mathematic</td>
      <td>Mr Sanny P | Religion</td>
    </tr>
    <tr>
      <th>Friday</th>
      <td>Jacob | Fishery</td>
      <td>Miss Thornton | Forestry</td>
      <td>Favour | Civic</td>
      <td>Mark | Govt</td>
      <td>Otto | Marketing</td>
      <td>Mmdo | Business</td>
    </tr>
  </tbody>
</Table>
  )
}
