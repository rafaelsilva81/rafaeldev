import { useEffect, useState } from 'react';

// Workaround for running a client-only hook in a server-only component
// I think this is not gonna be needed in Next 13 (just use 'use client' directive)

export default function ClientOnly({
  children,
  className,
  ...delegated
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
    <div
      className={className || ''}
      {...delegated}>
      {children}
    </div>
  );
}
