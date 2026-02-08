import { AIResourcesTable } from "@/components/ai-resources-table/ai-resources-table";
import { AIArticleList } from "@/components/ai-resources-table/ai-article-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AIResources } from "@/data/ai-resources";
export function AIResourcesTabs() {
  const resources = AIResources.filter((r) => !["articles", "learning"].includes(r.category));
  const articles = AIResources.filter((r) => ["articles", "learning"].includes(r.category));

  return (
    <Tabs defaultValue="tools" className="w-full">
      <TabsList className="w-full p-0 h-auto">
        <TabsTrigger
          value="tools"
          className="border border-b-0 px-4 data-[state=active]:bg-blue-100/50"
        >
          🛠️ Tools ({resources.length})
        </TabsTrigger>
        <TabsTrigger
          value="articles"
          className="border border-b-0 px-4 data-[state=active]:bg-blue-100/50"
        >
          📄 Articles ({articles.length})
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
