import {
    Select as UISelect,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


type Props = {}

const Select = (props: any) => {
    const { data } = props
    console.log(data)
    return (
        <div>
            <UISelect>
                <SelectTrigger className="w-[180px]">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    {data.map((option) => (
                        (<SelectItem value={option}>{option}</SelectItem>)
                    ))}

                </SelectContent>
            </UISelect>
        </div>

    )
}

export default Select