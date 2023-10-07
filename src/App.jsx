import TodoWrapper from './components/TodoWrapper'
import Container from 'react-bootstrap/Container'

const App = () => {
  return (
    <Container className='d-flex w-50'>
      <TodoWrapper />
    </Container>
  )
}

export default App