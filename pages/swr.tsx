import { StudentDetail } from '@/components/swr';
import * as React from 'react';

export default function SWRPage () {
  return (
    <div>
      <h1>SWR Playground</h1>

      <ul>
        <li><StudentDetail studentId="lea2aa9l7x3a5v1"/></li>
        <li><StudentDetail studentId="lea2aa9l7x3a5v1"/></li>
        <li><StudentDetail studentId="lea2aa9l7x3a5v1"/></li>
      </ul>
    </div>
  );
}
