import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout 
      tree={source.pageTree} 
      nav={{ 
        // Mintlify has a minimal top nav, mostly for search and external links
        // The title/logo often lives in the sidebar or top-left
        title: (
          <span className="font-bold text-xl tracking-tight">
            CodeHQ <span className="text-primary">Pro</span>
          </span>
        ),
        transparentMode: 'top',
      }}
      sidebar={{
        defaultOpenLevel: 1,
        collapsible: false, // Keep it fixed like Mintlify
        enabled: true,
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
          text: 'ML Design',
          url: '/docs/ml-design',
          active: 'nested-url',
        },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
