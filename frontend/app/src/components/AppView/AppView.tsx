import React from 'react'
import Block from './Block'

type Props = {}

const AppView = (props: Props) => {

    const columns = [
        {
            "type": "subheader",
            "group": "element",
            "data": "columns"
        },
        {
            "type": "column",
            "group": "layout",
            "data": [
                {
                    "type": "card",
                    "group": "layout",
                    "data": [{
                        "type": "text",
                        "data": "text inside column1"
                    }, {
                        "type": "text",
                        "data": "text inside column12"
                    }]
                },
                {
                    "type": "card",
                    "group": "layout",
                    "data": [{
                        "type": "text",
                        "data": "text inside column1"
                    }, {
                        "type": "text",
                        "data": "text inside column12"
                    }]
                }
            ]
        }
    ]

    const select = [
        {
            "type": "subheader",
            "group": "element",
            "data": "Select"
        },
        {
            "type": "column",
            "group": "layout",
            "data": [
                {
                    "type": "card",
                    "group": 'layout',
                    "data": [
                        {
                            "type": "select",
                            "group": "element",
                            "data": ['a', 'b']
                        }
                    ]
                }

            ]
        }

    ]

    const input = [
        {
            "type": "subheader",
            "group": "element",
            "data": "Input"
        },
        {
            "type": "card",
            "group": "layout",
            "data": [
                {
                    "type": "input",
                    "group": "element",
                    "data": "input"
                }
            ]
        }
    ]

    const button = [
        {
            "type": "subheader",
            "group": "element",
            "data": "Button"
        },
        {
            "type": "card",
            "group": "layout",
            "data": [
                {
                    "type": "button",
                    "group": "element",
                    "data": ""
                }
            ]
        }
    ]

    const raio_button = [
        {
            "type": "subheader",
            "group": "element",
            "data": "Radio button"
        },
        {
            "type": "card",
            "group": "layout",
            "data": [
                {
                    "type": "radio_button",
                    "group": "element",
                    "data": ['Default', 'Comfortable', 'Compact']
                }
            ]
        }
    ]

    const tabs = [
        {
            "type": "subheader",
            "group": "element",
            "data": "Tabs"
        }, {
            "type": "card",
            "group": "layout",
            "data": [
                {
                    "type": "tabs",
                    "group": "layout",
                    "data": ['Account', "Password", 'tes1', 'test2', 'test3s']
                }
            ]
        }
    ]
    const elements: any = {
        data: [...[
            {
                "type": "header",
                "group": "elemnt",
                "data": "Demo app"
            }
        ], ...columns, ...select, ...input, ...button, ...raio_button, ...tabs]
    }
    const renderBlock = () => (
        <Block elements={elements}></Block>
    )
    return (
        <>

            {renderBlock()}
        </>
    )
}

export default AppView