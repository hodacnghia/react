import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'

const StyleNavigation = styled.div`
    margin: 0.5em;
`
class Navigation extends React.Component {
    render() {
        return (
            <StyleNavigation>
                <a href=""> Content Management </a>
                >
                <a href=""> Procurement Catalog </a>
                >
                <a> Product Master </a>
            </StyleNavigation>
        )
    }
}
export default Navigation