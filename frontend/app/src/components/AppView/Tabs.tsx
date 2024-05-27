import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Tabs as UItabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";

type Props = {
    node: {
        data: string[];
    };
};

const Tabs = (props: Props) => {
    const { node } = props;
    const [tabs, setTabs] = useState(node.data);
    const [gridClass, setGridClass] = useState(`grid w-full grid-cols-5`)

    useEffect(() => {
        setTabs(node.data);
        const columnCount = tabs.length;
        setGridClass(`grid w-full grid-cols-${node.data.length.toString()}`);
        console.log(gridClass)
    }, [node.data]);




    return (


        <UItabs defaultValue="account" className="w-[400px]">

            <div className="flex items-center justify-between pb-3">
                <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                    {tabs.map((tab) => (
                        <TabsTrigger
                            value={tab.toLowerCase()}
                            className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                        >
                            {tab}
                        </TabsTrigger>
                    ))}
                </TabsList>

            </div>


            {tabs.map((tab) => (
                <TabsContent key={tab} value={tab.toLowerCase()}>
                    {tab.toLowerCase()}
                </TabsContent>
            ))}
        </UItabs>
    );
};

export default Tabs;
