/* eslint-disable react/prop-types */
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import {AiOutlineEdit, AiFillDelete} from 'react-icons/Ai'

const Todo = ({task, toggleCheck, deleteTask, editTask}) => {
  const checkboxId = `checkbox-${task.id}`

  const checkedStyle = {
    backgroundColor: task.complete ? 'lightGreen' : 'lightGrey',
  };

  return (
    <>
      <Container>
        <Row className='d-flex align-items-center border border-dark rounded p-2 mt-2 w-90' style={checkedStyle}>
          <Col xs={2} sm={1}> 
            <Form>
              <Form.Check 
              id={checkboxId} 
              onChange={() => {toggleCheck(task.id)}}/>
            </Form>
          </Col>
          <Col xs={9} sm={9} md={8} lg={9} 
            className='text-center mb-0 p-0'>
            <h5>{task.todo}</h5>
          </Col>
          <Col xs={12} sm={12} md={2} lg={2} className='d-flex justify-content-around p-2 gap-2'>
            <Button 
              variant={task.complete ? 'dark' : 'outline-dark'} 
              className='btn-sm' onClick={() => {editTask(task.id, task.task)}}
              disabled={task.complete ? true : false}>
              <AiOutlineEdit />
            </Button>
            <Button 
              variant={task.complete ? 'dark' : 'outline-dark'} 
              className='btn-sm' onClick={() => {deleteTask(task.id)}}>
              <AiFillDelete />
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
  
}

export default Todo
