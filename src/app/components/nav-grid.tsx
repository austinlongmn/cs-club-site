import Link from "next/link";

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "STUDENTS", href: "/students" },
  { label: "ALUMNI", href: "/alumni" },
  { label: "SCORES", href: "/competition-scores" },
  { label: "ABOUT US", href: "/about" },
];

export const buttonStyles = "py-3 rounded-xl bg-[#1377bd] text-center w-30";

export function NavGrid({ items = NAV_ITEMS }: { items?: NavItem[] }) {
  return (
    <div className="mt-10 text-center">
      <div className="inline-grid grid-cols-2 justify-items-center gap-4 text-lg md:grid-cols-4 md:gap-8">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className={buttonStyles}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
