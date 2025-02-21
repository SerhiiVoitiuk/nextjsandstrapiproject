import { Card } from "@/components/Card";
import { CardProps } from "@/types";

export const BlogCard = (props: Readonly<CardProps>) => (
  <Card {...props} basePath="blog" />
);