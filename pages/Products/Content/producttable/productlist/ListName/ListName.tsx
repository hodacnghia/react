import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    
`
const TableList = styled.table`
    
`
const TableList__td = styled.td`
    text-align: center;
    border: 1px solid #dddddd;
`
const TableList__th = styled.th`
    text-align: center;
    border: 1px solid #dddddd;
`

interface IProps {
    name: string,
}

export class ListID extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props)
    }
    public render() {
        return (
            <Section>
                <div>
                <table>
                    <tr>
                        <td>{this.props.name}</td>
                    </tr>
                </table>
                </div>
            </Section>
        )
    }
}

export default ListID
