import React from 'react'
import Block from './Block'

type Props = {}

const AppView = (props: Props) => {
    const elements: any = {
        data: [
            {
                "type": "text",
                "group": "element",
                "data": "text 1"
            },
            {
                "type": "text",
                "group": "element",
                "data": "text 2"
            },
            {
                "type": "column",
                "group": "layout",
                "data": [
                    {
                        "type": "container",
                        "group": "layout",
                        "data": [{
                            "type": "text",
                            "data": "text inside column"
                        }, {
                            "type": "text",
                            "data": "text inside column2"
                        }]
                    }
                ]
            }
        ]
    }
    const renderBlock = () => (
        <Block elements={elements}></Block>
    )
    return (
        <>
            <div>AppView</div>
            {renderBlock()}
        </>
    )
}

export default AppView