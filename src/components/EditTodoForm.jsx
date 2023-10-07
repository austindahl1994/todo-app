/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import {AiOutlineCheck, AiOutlineClose} from 'react-icons/Ai'

const EditTodoForm = ({task, editTask, updateTask}) => {
  const inputID = `checkbox-${task.id}`
  const [tempTask, setTempTask] = useState(task.todo || '');

  const handleSubmit = (e) => {
    e.preventDefault()
    updateTask(task.id, tempTask, task.todo)
  }
  return (
    <>
      <Container>
        <Row className='d-flex align-items-center border border-dark rounded p-2 mt-2 w-90'>
        <Col xs={12} sm={12} md={9} lg={9} xl={10} 
          className='text-center mb-0 p-0'>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <FloatingLabel controlId={inputID} label={task.todo.length < 15 ? task.todo : 'Edit task'}>
                  <Form.Control  
                    type='text' 
                    id={inputID}
                    onChange={(e) => {setTempTask(e.target.value)}}>
                  </Form.Control>
                </FloatingLabel>
              </Form.Group>
            </Form>
          </Col>
          <Col xs={12} sm={12} md={3} lg={3} xl={2} className='d-flex justify-content-around p-2 gap-2'>
            <Button 
              variant='outline-dark' 
              className='btn-sm' 
              onClick={() => {updateTask(task.id, tempTask, task.todo)}}
              disabled={tempTask === task.todo ? true : false}>
              <AiOutlineCheck />
            </Button>
            <Button 
              variant='outline-dark' 
              className='btn-sm' onClick={() => {editTask(task.id)}}>
              <AiOutlineClose />
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default EditTodoForm