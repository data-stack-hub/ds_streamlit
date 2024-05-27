
import React from 'react'

import Subheader from './elements/Subheader'
import Input from './elements/Input'
import Button from './elements/Button'
import RadioButton from './elements/RadioButton'


const Select = React.lazy(() => import("./elements/Select"))
const Header = React.lazy(() => import("./elements/Header"))

type Props = {}

const ElementNodeRenderer = (props: any) => {
    const { element } = props
    switch (element.type) {

        case "text": {
            return (<div>{element.data}</div>)
        }

        case "select": {
            return (<Select data={element.data}></Select>)
        }

        case "header": {
            return (<Header data={element.data}></Header>)
        }

        case "subheader": {
            return (<Subheader data={element.data}></Subheader>)
        }

        case "input": {
            return (<Input data={element.data}></Input>)
        }

        case "button": {
            return (<Button data={element.data}></Button>)
        }

        case "radio_button": {
            return (<RadioButton data={element.data}></RadioButton>)
        }
    }

}

export default ElementNodeRenderer