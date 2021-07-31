import React from 'react';
import { Table } from 'react-bootstrap';
import Monday from './Monday';
import Tuesday from './Tuesday';
import Wednesday from './Wednesday';
import Thursday from './Thursday';
import Friday from './Friday';

export default function AllSubject() {
  return (
    
<Table striped bordered hover size="sm" responsive>
  <h3>Time-table for the whole school</h3>
  <tbody>
    <Monday />
    <Tuesday />
    <Wednesday />
    <Thursday />
    <Friday />
  </tbody>
</Table>
  )
}
