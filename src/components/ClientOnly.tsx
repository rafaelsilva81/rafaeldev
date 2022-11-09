import { useEffect, useState } from 'react';

// Workaround for running a client-only hook in a server-only component
// I think this is not gonna be needed in Next 13 (just use 'use client' directive)

export default function ClientOnly({
  children,
  ...delegated
}: {
  children: React.ReactNode;
}) {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return <div {...delegated}>{children}</div>;
}
