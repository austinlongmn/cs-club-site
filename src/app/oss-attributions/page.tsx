import { redirect } from "next/navigation";

export default async function AttributionPage() {
  redirect("/oss-attributions.md");
}
