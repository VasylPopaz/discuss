import { redirect } from "next/navigation";

import { PostList } from "@/components/posts/post-list";

import { featchPostsBySearchTerm } from "@/db/queries/posts";

interface SearchPageProps {
  searchParams: {
    term: string;
  };
}

const SearchPage = ({ searchParams }: SearchPageProps) => {
  const { term } = searchParams;

  if (!term) {
    redirect("/");
  }

  return (
    <div className="wrapper">
      <PostList fetchData={() => featchPostsBySearchTerm(term)} />
    </div>
  );
};

export default SearchPage;
