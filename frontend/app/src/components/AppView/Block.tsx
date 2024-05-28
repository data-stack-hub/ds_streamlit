import React, { useEffect, useState } from 'react';
import ElementNodeRenderer from './ElementNodeRenderer';
import Input from './elements/Input';
import { Card } from '../ui/card';
import Tabs from './Tabs';

type Props = {}

const Block = (props) => {


    const [elements, setElements] = useState({ data: [] })


    useEffect(() => {
        setElements({ data: props.elements })
        console.log(elements)
    }, [props.elements])

    const BlockNodeRenderer = (props) => {
        const { node } = props
        console.log(node)
        if (node.type == 'column') {
            return (
                <div style={{ display: 'flex', width: '100%' }}>
                    {node.data.map((col) => {
                        console.log(col)
                        const e = {
                            "data": [col]
                        }
                        return <div style={{ flexGrow: 1 }}><Block elements={e}></Block></div>
                    })}
                </div>

            )

        }

        if (node.type == 'container') {
            console.log(node)
            return (
                <Card><Block elements={node}></Block></Card>
            )
        }

        if (node.type == 'card') {
            console.log('card')
            return (
                <div className='p-3'>
                    <Card className='p-3'><Block elements={node}></Block></Card>
                </div>

            )
        }

        if (node.type == 'tabs') {
            return (
                <Tabs node={node}></Tabs>
            )
        }

    }

    return (
        <>
            {elements.data.map((node: any, index) => {
                console.log(node.type)
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
