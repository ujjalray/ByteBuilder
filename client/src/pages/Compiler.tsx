import React from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

const Compiler = () => {
    return (
        <div>
            <ResizablePanelGroup direction="horizontal" className=""  >


                {/* left side code  */}
                <ResizablePanel defaultSize={50} className="h-[500px]">

                    left side

                </ResizablePanel>
                {/* left side code end */}


                <ResizableHandle />



                <ResizablePanel className="h-[calc(100dvh-60px)] min-w-[350px]" defaultSize={50}> 
                    
                    Right Size 
                    
                 </ResizablePanel>



            </ResizablePanelGroup>

        </div>
    )
}

export default Compiler
