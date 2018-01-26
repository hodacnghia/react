import Link from 'next/link'
import * as React from 'react'
import styled from 'styled-components'

const PanelHead = styled.h1`
    border: 3px solid black;
    background-color: rgb(106, 156, 237);
`
interface IProps {
    title: string,
    data: any,
}

interface IState {
    isExpanded: boolean,
    numOfItems: number,
}

class Panel extends React.Component<IProps, IState>  {
    state = {
      isExpanded: false,
      numOfItems : 3,
    }
    catToggle = () => {
        this.setState({isExpanded: !this.state.isExpanded})
    }

    public render() {
        const { isExpanded,  numOfItems } = this.state
        const renderedCats = isExpanded ?  this.props.data : this.props.data.slice(0, numOfItems)
        return (
            <div >
                <PanelHead>{this.props.title}</PanelHead>
                    <ul>
                        {renderedCats.map((cat: any) => <li key={cat.id}>{cat.name}</li>)}
                    </ul>
                    <button onClick={this.catToggle}>{isExpanded ? 'See Less': 'See More' }</button>
            </div>
        )
    }
}
export default Panel
