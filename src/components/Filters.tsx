import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
export function Filters() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Categories</AccordionTrigger>
        <AccordionContent>
          <RadioGroup defaultValue="all">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="r1" />
              <Label htmlFor="r1">All</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sneakers" id="r2" />
              <Label htmlFor="r2">Sneakers</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="flats" id="r3" />
              <Label htmlFor="r3">Flats</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sandals" id="r4" />
              <Label htmlFor="r4">Sandals</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="heels" id="r5" />
              <Label htmlFor="r5">Heels</Label>
            </div>
          </RadioGroup>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Price</AccordionTrigger>
        <AccordionContent>
          <RadioGroup defaultValue="all">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="f1" />
              <Label htmlFor="f1">All</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="0" id="f2" />
              <Label htmlFor="f2">$0-$50</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="50" id="f3" />
              <Label htmlFor="f3">$50-$100</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="100" id="f4" />
              <Label htmlFor="f4">$100-$150</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="150" id="f5" />
              <Label htmlFor="f5">Over $150</Label>
            </div>
          </RadioGroup>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Colors</AccordionTrigger>
        <AccordionContent>
          <RadioGroup defaultValue="all">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="g1" />
              <Label htmlFor="g1">All</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="black" id="g2" />
              <Label htmlFor="g2">Black</Label>
            </div>
            <div className="flex items-center space-x-2 text-blue-400">
              <RadioGroupItem value="blue" id="g3" />
              <Label htmlFor="g3">Blue</Label>
            </div>
            <div className="flex items-center space-x-2 text-red-400">
              <RadioGroupItem value="red" id="g4" />
              <Label htmlFor="g4">Red</Label>
            </div>
            <div className="flex items-center space-x-2 text-green-400">
              <RadioGroupItem value="green" id="g5" />
              <Label htmlFor="g5">Green</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="white" id="g6" />
              <Label htmlFor="g6">White</Label>
            </div>
          </RadioGroup>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
