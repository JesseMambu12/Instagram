/** @format */

import CardComponent from "@/components/card.components";
import { posts } from "@/json/data.json";

export default function Home() {
  return (
    <div>
      {posts.map((post, key) => (
        <CardComponent {...post} key={key} />
      ))}
    </div>
  );
}
