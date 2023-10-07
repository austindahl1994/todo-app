/* eslint-disable react/prop-types */
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FloatingLabel } from "react-bootstrap";

const TodoForm = ({addTask}) => {
  const [task, setTask] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    addTask(task);
    setTask('');
    e.target.reset();
  }

  return (
    <> 
      <Container fluid className="mt-2">
        <Form onSubmit={handleClick}>
        <Row>
          <Col xs={12}>
            <Form.Group>
              <FloatingLabel controlId="formBasicText" label="Add new task: ">
                <Form.Control type="text" placeholder="Add task:"
                  onInput={(e) => {setTask(e.target.value)}}>
                </Form.Control>
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col className="pt-2">
            <Button type="submit" className="d-block w-100">Add Task</Button>
          </Col>
        </Row>
        </Form>
      </Container>
    </>
  );
}

export default TodoForm