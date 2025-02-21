import { BlockRenderer } from "@/components/BlockRenderer";
import { BlogCard } from "@/components/BlogCard";
import { ContentList } from "@/components/ContentList";

import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";

async function loader() {
  const data = await getHomePage();
  if (!data) notFound();

  return { ...data.data };
}

export default async function HomeRoute() {
  const data = await loader();
  const blocks = data?.blocks || [];

  return (
    <div>
      <BlockRenderer blocks={blocks} />

      <div style={{ margin: "0 3rem" }}>
        <ContentList
          headline="the blog."
          path="/api/articles"
          component={BlogCard}
          featured
          headlineAlignment="center"
        />
      </div>
    </div>
  );
}
