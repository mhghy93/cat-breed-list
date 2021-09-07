import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Container, Row, Table, Spinner } from 'react-bootstrap';

import { CATS_API_BASE_URL } from '../config/config';

import CatListItem from '../components/CatListItem';

const Cats = () => {
  const [cats, setCats] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get(CATS_API_BASE_URL)
      .then((res) => {
        setCats(res.data.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);
  return (
    <Fragment>
      <Container>
        <Row className="mt-5">
          <h2 className="font-weight-bold mb-4">Cat Breeds</h2>
          <Col lg={12}>
            {typeof error !== 'undefined' ? (
              <p>Error while fetching data. Refresh please</p>
            ) : cats.length > 0 ? (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Cat Breed</th>
                    <th>Country</th>
                    <th>Origin</th>
                    <th>Coat</th>
                    <th>Pattern</th>
                  </tr>
                </thead>
                <tbody>
                  {cats.map((cat, index) => (
                    <CatListItem key={cat.breed} cat={cat} index={index} />
                  ))}
                </tbody>
              </Table>
            ) : (
              <Spinner animation="grow" size="lg" />
            )}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Cats;
