import DOMPurify from "isomorphic-dompurify";

const fetchCacheOptions: RequestInit = {
  cache: "force-cache",
  next: {
    revalidate: 60 * 60 * 24,
  },
};

export interface ProjectPreviewMetadata {
  title?: string;
  thumbnailURL?: string;
  route?: string;
  description?: string;
}

interface ProjectDetails {
  tags?: string[];
}

export type ProjectMetadata = ProjectPreviewMetadata & {
  projectDetails?: ProjectDetails;
};

export const cdnBasename = "https://projects-md.cdn.austinlong.dev";

export async function getAllProjects(): Promise<ProjectPreviewMetadata[]> {
  const projectsRepsonse = await fetch(
    `${cdnBasename}/manifest.json`,
    fetchCacheOptions
  );
  const contents = await projectsRepsonse.json();

  return contents;
}

export async function getSanitizedProjectContent(
  project: string
): Promise<string | null> {
  if (!project.match(/^[A-Za-z-]+$/)) {
    return null;
  }
  const htmlResponse = await fetch(
    `${cdnBasename}/${project}/`,
    fetchCacheOptions
  );

  if (htmlResponse.status == 404) {
    return null;
  }

  const unsafeContent = await htmlResponse.text();

  return DOMPurify.sanitize(unsafeContent);
}

export async function getMetadata(
  project: string
): Promise<ProjectMetadata | null> {
  if (!project.match(/^[A-Za-z-]+$/)) {
    return null;
  }
  const jsonResponse = await fetch(
    `${cdnBasename}/${project}/metadata.json`,
    fetchCacheOptions
  );

  if (jsonResponse.status == 404) {
    return null;
  }

  return await jsonResponse.json();
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
