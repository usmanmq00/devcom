import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from '../../../css/testing/project/style.module.css';

const Table = ({ table }) => {
  const half = Math.ceil(table.length / 2);
  return (
    <div style={{ margin: "24px 0px" }}>
      {table && Array.isArray(table) &&
        <Row>
          <Col>
            {table.slice(0, half).map((item, i) => (
              <div className={styles.table} key={i} >
                <span>No of {item.tagName}</span>
                <span className={styles.tableData}>{item.count}</span>
              </div>
            ))}
          </Col>
          <Col>
            {table.slice(half).map((item, i) => (
              <div className={styles.table} key={i} >
                <span>No of {item.tagName}</span>
                <span className={styles.tableData}>{item.count}</span>
              </div>
            ))}
          </Col>
        </Row>}
    </div>
  )
}

export default Table