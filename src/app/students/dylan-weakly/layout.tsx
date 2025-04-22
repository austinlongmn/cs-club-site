import CustomBackground from "@/components/custom-bg";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CustomBackground color="var(--color-neutral-800)" />
      {children}
    </>
  );
}
