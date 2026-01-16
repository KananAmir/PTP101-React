import './App.css'
import Button from './components/Button'
import Card from './components/Card'
import ChildA from './components/ChildA'
import Input from './components/Input'
import Layout from './components/Layout'

function App() {

  const title = "My React App"
  return (
    <>
      <Layout>
        <h2>Hello</h2>

        <hr />
        <ChildA title={title} />
        <hr />
        <Button text={'Click me!'} color={'blue'} />
        <Button text={'Submit'} color={'green'} />
        <Button text={'Cancel'} color={'red'} />
        <Button text={'Reset'} />

        <Input type="text" placeholder="Enter username here" label={'Username'} />
        <Input type="password" placeholder="Enter your password" label={'Password'} />
        <Input type="email" placeholder="Enter your email" label={'Email'} />

        <hr />

        <Card isBlue={true}>
          <h2>Card Title</h2>
          <p>This is a description inside the card.</p>
          <button>
            Learn More
          </button>
        </Card>
        <Card>
          <h2>Another Card</h2>
          <p>This is another description inside a different card.</p>
        </Card>

      </Layout>


      <Layout>
        <h2>Welcome to My App</h2>
        <p>This is a sample application demonstrating React components.</p>
      </Layout>

    </>
  )
}

export default App
