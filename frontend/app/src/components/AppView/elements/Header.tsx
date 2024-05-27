import React from 'react'

type Props = {}

const Header = (props: any) => {

    const { data } = props

    return (
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight pb-5">
            {data}
        </h1>
    )
}

export default Header