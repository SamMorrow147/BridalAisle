'use client';

import { usePathname } from 'next/navigation';

export default function HideOnWoods({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith('/mens-suits')) return null;
  return children;
}
