import Link from "next/link";

import { PostShow } from "@/components/posts/post-show";
import { CommentList } from "@/components/comments/comment-list";
import { CommentCreateForm } from "@/components/comments/comment-create-form";

import { paths } from "@/paths";

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

const PostShowPage = ({ params }: PostShowPageProps) => {
  const { slug, postId } = params;

  return (
    <div className="wrapper">
      <div className="space-y-3">
        <Link
          className="underline decoration-solid"
          href={paths.topicShow(slug)}
        >
          {"< "}Back to {slug}
        </Link>
        <PostShow postId={postId} />
        <CommentCreateForm postId={postId} startOpen />
        <CommentList postId={postId} />
      </div>
    </div>
  );
};

export default PostShowPage;
