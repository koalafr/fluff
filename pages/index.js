import { useRouter } from "next/router";
import matter from "gray-matter";

import { promises as fs } from "fs";
import path from "path";

import Hero from "../components/Hero/Hero";
import ProjectList from "../components/Project/ProjectList";
import PostsList from "../components/Posts/PostsList";
import Page from "../components/Page/Page";
import Title from "../components/Page/Title";
import Button from "../components/Common/Button";

import { getTranslation } from "../lib/locales";

export default function Home({ projectList, posts }) {
  const router = useRouter();
  const tr = getTranslation(router);
  return (
    <Page>
      {/* Hero */}
      <Hero />
      <div className='container mx-auto max-w-screen-lg'>
        <div className='container mx-auto'>
          <br />
          <Title title={tr.taglines.projects.title}></Title>
          {/* 4 Projects */}
          <ProjectList projects={projectList} count={4} />
          <Button href='/projects'>{tr.project.all_projects} &rarr;</Button>

          <br />
          <Title title={tr.post.latest_posts}></Title>
          {/* 4 Posts */}
          <PostsList posts={posts} count={4} />
          <Button href='/blog'>{tr.post.all_blog} &rarr;</Button>
        </div>
      </div>
    </Page>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  const projectsDir = path.join(process.cwd(), "pages/projects");
  const filenames = await fs.readdir(projectsDir);
  const projects = filenames.filter((project) => /\.mdx?$/.test(project));
  const projectList = await Promise.all(
    projects.map(async (project) => {
      const fullProjectPath = path.join(projectsDir, project);
      const source = await fs.readFile(fullProjectPath);
      const { data } = matter(source);
      return {
        path: project,
        slug: project.replace(/\.mdx?$/, ""),
        matter: data,
      };
    })
  );
  return {
    props: {
      projectList,
      posts,
    },
  };
}
