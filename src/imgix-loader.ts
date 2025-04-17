"use client";

export default function imgixLoader({
  src,
  width,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (src.startsWith("http")) {
    return src
  }
  const url = new URL(`https://csc-site.imgix.net${src}`);
  const params = url.searchParams;
  params.set("auto", params.getAll("auto").join(",") || "format");
  params.set("fit", params.get("fit") || "max");
  params.set("w", params.get("w") || width.toString());
  return url.href;
}
