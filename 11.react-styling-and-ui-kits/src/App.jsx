
import './App.css'
import CardExample from './components/bootstrap/Card'
import CarouselExample from './components/bootstrap/Carousel'
import Button from './components/Button'
import Card from './components/Card'
import Input from './components/Input'
import { Container as Containerrrrrr} from './style'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import MaterialUiExample from './components/material-ui/MaterialUiExample'
import AntdExample from './components/antd/AntdExample'

function App() {

  return (
    <>
      <div style={Containerrrrrr}>

        {/* <h1 style={{ color: 'blue', textAlign: 'center' }}>React Styling and UI Kits</h1> */}
        <h1 className='text-red-400 text-center bg-yellow-500'>React Styling and UI Kits</h1>
        <button style={btnStyle}>Click me</button>
      </div>

      <hr />

      <Input />

      <br />
      <input type="search" placeholder='search' />
      <br />

      <Card />

      <hr />

      <button className='btn'>Signup</button>
      <Button name="Login" />


      <hr />

      {/* <CardExample />
      <CarouselExample />


      <Container>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container> */}


      <hr />


      <MaterialUiExample />
      <hr/>

      <AntdExample />
    </>
  )
}

export default App


const btnStyle = {
  color: 'white',
  backgroundColor: 'teal'
}
