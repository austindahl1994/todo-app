import { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import EditTodoForm from './EditTodoForm';
import { Container } from 'react-bootstrap'

let idNum = 0;

const TodoWrapper = () => {
  const [todoList, setTodoList] = useState([]);

  const addTask = (addedTask) => {
    if (!addedTask) return;
    checkId(idNum);
    setTodoList((prevTodoList) => [
      ...prevTodoList,
      {
        id: idNum,
        complete: false,
        todo: addedTask,
        isEditing: false,
        isDeleting: false,
      },
    ]);
    idNum++;
  };

  const sortedList = todoList.slice().sort((taskOne, taskTwo) => {
    if (taskOne.complete && !taskTwo.complete) {
      return 1
    } else if (!taskOne.complete && taskTwo.complete) {
      return -1
    } else {
      return 0
    }
  })

  const checkId = (id) => {
    const matches = todoList.some((task) => id === task.id)
    if (matches) {
      idNum++;
      checkId(idNum++);
    }
  }

  const deleteTask = (id) => {
    const updatedList = todoList.filter((task) => (
      task.id !== id
    ));
    setTodoList(updatedList)
  }

  const editTask = (id) => {
    setTodoList(
      todoList.map((task) => 
        task.id === id ? {...task, isEditing: !task.isEditing} : task
      )
    )
  }

  const updateTask = (id, editedTask) => {
    setTodoList(
      todoList.map((task) => 
        task.id === id ? {...task, todo: editedTask, isEditing: !task.isEditing} : task
      )
    )
  }

  const toggleCheck = (id) => {
    const toggledList = todoList.map((task) => (
      task.id === id ? {...task, complete: !task.complete} : task
    ));
    setTodoList(toggledList)
  }

  return (
    <>
      <Container fluid className='border border-dark rounded mt-4 p-3 bg-light'>
        <TodoForm addTask={addTask}/>
        <Container className='d-flex flex-column'>
          {sortedList.map((task) => (
            task.isEditing === true ? 
            (<EditTodoForm 
              key={task.id}
              task={task}
              editTask={editTask}
              updateTask={updateTask}
            />) :
            (<Todo 
              key={task.id}
              task={task}
              toggleCheck={toggleCheck}
              editTask={editTask}
              deleteTask={deleteTask}
            />)
          ))}
        </Container>
      </Container>
    </>
  )
}

export default TodoWrapper