import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"


type Props = {}

const RadioButton = (props: any) => {
    const { data } = props

    return (
        <RadioGroup defaultValue="comfortable">
            {data.map((option) => (
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={option} />
                    <Label htmlFor={option}>{option}</Label>
                </div>
            ))}


        </RadioGroup>
    )
}

export default RadioButton