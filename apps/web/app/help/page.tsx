import { DialogDemo } from "@/components/dialog-demo";
import HeroExample from "../../components/hero";
import StackedExample from "../../components/stacked";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import AccordionExample from "../../components/accordion";

export default function Page() {
  return (
    <div className="flex flex-col gap-12">
      <div>
        <h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
          Help Center
        </h2>
        <p className="mt-2 text-lg/8 ">
          Find answers to common questions and learn more about our product.
        </p>
      </div>

      <div>
        <DialogDemo />
      </div>

      <div className="w-6/12 mx-auto">
        <Tabs defaultValue="accordion">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="accordion">Accordion</TabsTrigger>
            <TabsTrigger value="herosection">Hero Section</TabsTrigger>
            <TabsTrigger value="stackedlist">Stacked List</TabsTrigger>
          </TabsList>
          <TabsContent value="accordion">
            <AccordionExample />
          </TabsContent>
          <TabsContent value="herosection">
            <HeroExample />
          </TabsContent>
          <TabsContent value="stackedlist">
            <StackedExample />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
