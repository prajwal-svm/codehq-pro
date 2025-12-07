import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout 
      tree={source.pageTree} 
      nav={{ 
        title: (
          <span className="font-semibold text-lg tracking-tight">
            CodeHQ <span className="text-primary font-bold">Pro</span>
          </span>
        ),
        // Mintlify often has a transparent top nav that blurs
        transparentMode: 'top', 
      }}
      links={[
        {
          text: 'DSA',
          url: '/docs/dsa',
          active: 'nested-url',
        },
        {
          text: 'System Design',
          url: '/docs/system-design',
          active: 'nested-url',
        },
        {
          text: 'Low Level',
          url: '/docs/lld',
          active: 'nested-url',
        },
        {
          text: 'ML Design',
          url: '/docs/ml-design',
          active: 'nested-url',
        },
        {
          text: 'Behavioral',
          url: '/docs/behavioral',
          active: 'nested-url',
        },
      ]}
      sidebar={{
        defaultOpenLevel: 1, // Open groups by default
        collapsible: true,
        prefetch: true,
      }}
    >
      {children}
    </DocsLayout>
  );
}