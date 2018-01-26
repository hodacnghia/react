import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    width:100%;
    background-color: white;
`
const SlideRange = styled.input`
    width:100%;
    cursor:rgb(106, 156, 237);
    background:green;
`
const SetCost = styled.div`
    width:100%;
    overflow: auto;
    display:inline;
`
const Title = styled.section`
    border: 3px solid black;
    background-color: rgb(106, 156, 237);
`
const Input = styled.input`
    width: 40%;
    padding: 0.5em;
    color: palevioletred;
    background: papayawhip;
    border: none;
    border-radius: 3px;
`
const Button = styled.button`
  background-color:  'white';
  color:'palevioletred';
  font-size: 1em;
  margin: 1em;
  margin-left:37%;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

class Unitcost extends React.Component {
    public render() {
        return (
            <Section>
                <Title>Unit Cost</Title>
                <SlideRange type="range"/>
                Or choose another unit cost <br/>
                <SetCost>
                <Input /> <span>to</span>    <Input />
                    <Button>OK</Button>
                    </SetCost>

            </Section>
        )
    }
}
export default Unitcost
