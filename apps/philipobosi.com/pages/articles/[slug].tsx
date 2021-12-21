import markdownToHtml, { getAllPosts } from "helpers/markdownLoader";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getPostBySlug } from "helpers/markdownLoader";
import { NextPage } from "next";

import styles from "../styles/articles.module.scss";
import SEO from "components/design-system/SEO";

type ArticlePage = NextPage & { post: any };

const ArticlePage: React.FC<ArticlePage> = ({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      {router.isFallback ? (
        <p>Loading…</p>
      ) : (
        <>
        <SEO
          title={post?.title}
          description={post?.excerpt}
          img={post?.img}
          slug={post?.slug}
        />
        <section className={styles.ArticlePage}>
          <main className={styles.ArticlePage_main}>
            <header className={styles.ArticlePage_main_header}>
              <h1 className={styles.ArticlePage_main_header_ttl}>{post.title}</h1>
            </header>

            {/* Render meta tags */}
            <div
              className={styles.ArticlePage_main_content}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </main>
        </section>
        </>
      )}
    </div>
  );
};

export async function getStaticProps({ params }: any) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "img",
    "excerpt"
  ]);

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default ArticlePage;
