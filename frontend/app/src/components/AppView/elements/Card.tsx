import {
    Card as UICard,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

type Props = {}

const Card = (props: any) => {
    const elements = props
    return (
        <UICard className="w-[350px]">
            {/* <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader> */}
            <CardContent>
                elements
            </CardContent>
            {/* <CardFooter className="flex justify-between">

            </CardFooter> */}
        </UICard>
    )
}

export default Card