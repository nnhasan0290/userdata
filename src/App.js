import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import UserList from './components/UserList/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDetails from './components/UserDetails/UserDetails';

function App() {
  return (
    <div className="App">
      <Container  className='py-3'>
        <Row >
          <Col sm={4}>
            <UserList/>
          </Col>
          <Col sm={8}>
            <UserDetails/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
