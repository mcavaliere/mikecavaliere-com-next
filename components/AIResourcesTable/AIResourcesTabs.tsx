import { AIResourcesTable } from "@/components/AIResourcesTable/AIResourcesTable";
import { AIArticleList } from "@/components/AIResourcesTable/AIArticleList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export function AIResourcesTabs() {
  return (
    <Tabs defaultValue="tools" className="w-full">
      <TabsList className="w-full p-0 h-auto">
        <TabsTrigger
          value="tools"
          className="border border-b-0 px-4 data-[state=active]:bg-blue-100/50"
        >
          🛠️ Tools
        </TabsTrigger>
        <TabsTrigger
          value="articles"
          className="border border-b-0 px-4 data-[state=active]:bg-blue-100/50"
        >
          📄 Articles
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tools" className="mt-0 bg-blue-100/50">
        <AIResourcesTable />
      </TabsContent>
      <TabsContent value="articles" className="mt-0">
        <AIArticleList />
      </TabsContent>
    </Tabs>
  );
}
