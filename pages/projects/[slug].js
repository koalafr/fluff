import { promises as fs } from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import matter from "gray-matter";
//components imports
import Page from "../../components/Page/Page";
import Title from "../../components/Page/Title";
import Tag from "../../components/Common/Tag";
import Button from "../../components/Common/Button";

const PROJECT_DIR = "pages/projects";

export default function ProjectPage({ source, matter }) {
  return (
    <Page>
      <div className='container'>
        <div className='container'>
          <Title title={matter.title} description={matter.description} />

          <div className='project my-8 mx-auto max-w-md overflow-hidden rounded-xl bg-me-inverted shadow-md shadow-me-light md:max-w-4xl lg:max-w-6xl'>
            <div className='md:flex'>
              <div className='p-8'>
                <div className='flex flex-row gap-2'>
                  {matter.tagArray
                    ? matter.tagArray.map((tag) => <Tag key={tag}>{tag}</Tag>)
                    : ""}
                </div>
                <div className='mt-4 text-justify text-lg font-medium leading-tight text-me-base'>
                  <MDXRemote {...source} />
                </div>
                <div className='mt-4'>
                  <p className=' w-fit border-t-[1px] border-me-secondary py-2 px-4 text-me-secondary'>
                    {matter.date + " - " + matter.author}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Button href='/projects'>&larr; Back to projects</Button>
        </div>
      </div>
    </Page>
  );
}

export const getStaticProps = async ({ params }) => {
  const projectsDir = path.join(process.cwd(), PROJECT_DIR);
  const projectsFilePath = path.join(projectsDir, `${params.slug}.mdx`);
  const source = await fs.readFile(projectsFilePath);

  const { content, data } = matter(source);
  const tagArray = data.tags ? data.tags.toString().split(",") : "";
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });
  return {
    props: {
      source: mdxSource,
      matter: { ...data, tagArray },
    },
  };
};

export const getStaticPaths = async () => {
  const projectsDir = path.join(process.cwd(), PROJECT_DIR);
  const filenames = await fs.readdir(projectsDir);

  const paths = filenames
    .filter((path) => /\.mdx?$/.test(path))
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};
