import Head from "next/head";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allProjects } from "contentlayer/generated";

export default function Projects() {
    const projects = allProjects.sort((a, b) => {
        return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
      });
      return (
        <section>
          <h1 className="font-bold text-3xl font-serif mb-5">Projects</h1>
          {projects.map((project) => (
              <Link
                key={project.slug}
                className="flex flex-col space-y-1 mb-4"
                href={`/projects/${project.slug}`}
              >
                <div className="w-full flex flex-col">
                  <p>{project.title}</p>
                </div>
              </Link>
            ))}
        </section>
      );
}
