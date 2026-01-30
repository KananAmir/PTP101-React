import styled from 'styled-components'

const Card = () => {
  return (
    <CardDiv>
        <CardTitle>Card Title</CardTitle>
        <CardTitle>Card Title 2</CardTitle>
        <input type="text" />
    </CardDiv>
  )
}

export default Card

const CardDiv = styled.div`
  border: 1px solid gray;
  padding: 10px;
  border-radius: 5px;
  background-color: orange;
`
const CardTitle = styled.h2`
  color: red;
  text-align: center;
  font-size: 20px;
`