import React, { useEffect, useState } from 'react';
import Input from './elements/Input';

type Props = {}

const Block = (props) => {

    console.log(props)
    const [elements, setElements] = useState({ data: [] })

    useEffect(() => {
        console.log(props)
        setElements(props.elements)
    }, [props.elements])

    const BlockNodeRenderer = (props) => {
        const { node } = props
        console.log(node)
        return (
            // <div>1</div>
            <Block elements={node}></Block>
        )
    }

    const ElementNodeRenderer = (props) => {
        const { element } = props
        return (
            <div >{element.data}</div>
        )
    }

    return (
        <>
            {elements.data.map((node: any, index) => {
                if (node.group != 'layout') {
                    return <ElementNodeRenderer {...{ element: node }}></ElementNodeRenderer>
                }
                else if (node.group == 'layout') {
                    return <BlockNodeRenderer {...{ node: node }}></BlockNodeRenderer>
                }

            })}
        </>
    );
}

export default Block;
