import DOMPurify from "isomorphic-dompurify";

export interface ProjectMetadata {
  title?: string;
  thumbnailURL?: string;
  route?: string;
  description?: string;
}

const cdnBasename = "https://projects-md.cdn.austinlong.dev";

export async function getAllProjects(): Promise<ProjectMetadata[]> {
  const projectsRepsonse = await fetch(`${cdnBasename}/manifest.json`);
  const contents = await projectsRepsonse.json();

  return contents;
}

export async function getMetadata(
  project: string
): Promise<ProjectMetadata | null> {
  if (!project.match(/^[A-Za-z-]+$/)) {
    return null;
  }
  const metadataResponse = await fetch(
    `${cdnBasename}/${project}.metadata.json`
  );
  if (metadataResponse.status == 404) {
    return null;
  }
  return await metadataResponse.json();
}

export async function getSanitizedProjectContent(
  project: string
): Promise<string | null> {
  if (!project.match(/^[A-Za-z-]+$/)) {
    return null;
  }
  const htmlResponse = await fetch(`${cdnBasename}/${project}.html`);

  if (htmlResponse.status == 404) {
    return null;
  }

  const unsafeContent = await htmlResponse.text();

  return DOMPurify.sanitize(unsafeContent);
}

export interface Project {
  metadata: ProjectMetadata;
  sanitizedContent: string;
}

export async function getProject(project: string): Promise<Project | null> {
  const metadataPromise = getMetadata(project);
  const contentPromise = getSanitizedProjectContent(project);

  const metadata = await metadataPromise;
  const sanitizedContent = await contentPromise;

  if (metadata == null || sanitizedContent == null) {
    return null;
  }

  return {
    metadata,
    sanitizedContent,
  };
}
