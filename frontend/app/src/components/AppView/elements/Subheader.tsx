import React from 'react'

type Props = {}

const Subheader = (props: any) => {
    const { data } = props
    return (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight pb-2">
            {data}
        </h3>
    )
}

export default Subheader