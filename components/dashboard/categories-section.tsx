import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export function CategoriesSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Categories</CardTitle>
        <Tabs defaultValue="individual" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="individual">Individual</TabsTrigger>
            <TabsTrigger value="non-individual">Non Individual</TabsTrigger>
          </TabsList>
          <TabsContent value="individual" className="space-y-4 mt-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>RI</span>
                <span>85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>NRI</span>
                <span>65%</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>
          </TabsContent>
          <TabsContent value="non-individual" className="space-y-4 mt-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>RI</span>
                <span>75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>NRI</span>
                <span>55%</span>
              </div>
              <Progress value={55} className="h-2" />
            </div>
          </TabsContent>
        </Tabs>
      </CardHeader>
    </Card>
  )
}
