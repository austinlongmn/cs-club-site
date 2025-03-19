import fs from "fs/promises";
import path from "path";

interface OSSLicenseInfo {
  name: string;
  version: string;
  repository: string;
  source: string;
  license: string;
  noticeText?: string;
  licenseText?: string;
}

export const dynamic = "force-dynamic";

export default async function AttributionPage() {
  const filePath = path.join(process.cwd(), "public", "oss-licenses.json");
  let licenses = [];

  try {
    const data = await fs.readFile(filePath, "utf8");
    licenses = JSON.parse(data);
  } catch (error) {
    if (process.env.NODE_ENV == "development") {
      return (
        <p>
          Error: you must run <code>npm run build</code> to see OSS
          attributions.
        </p>
      );
    }
    throw new Error(`Failed to load open source licenses: ${error}`);
  }

  return (
    <>
      <h1 className="text-2xl font-bold">Open Source Attribution</h1>
      <p>
        The following shows the licenses for open source projects bundled in the
        build. Note that this does not include licenses for dependencies not in
        the build.
      </p>
      <ul className="mt-4 space-y-2">
        {licenses.map((lib: OSSLicenseInfo, index: number) => (
          <li key={index} className="border-b pb-2">
            <strong>{lib.name}</strong> v{lib.version} - {lib.license}
            {lib.repository && (
              <a href={lib.repository} className="text-blue-500 ml-2">
                [Repo]
              </a>
            )}
            {lib.noticeText && (
              <pre className="whitespace-pre-wrap">{lib.noticeText}</pre>
            )}
            {lib.licenseText && (
              <pre className="whitespace-pre-wrap">{lib.licenseText}</pre>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
