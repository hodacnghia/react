import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    width:100%;
    background-color: white;
`

const Title = styled.section`
border: 3px solid black;
background-color: rgb(106, 156, 237);
`
class Vendor extends React.Component {
    render() {
        return (
            <Section>
                <Title>Product Features</Title>

                <ul>

                    <li><a href="">Filter</a></li>
                </ul>
            </Section>

        )
    }
}
export default Vendor
