import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout 
      tree={source.pageTree} 
      nav={{ 
        title: 'CodeHQ Pro',
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
        defaultOpenLevel: 0,
        collapsible: true, 
      }}
    >
      {children}
    </DocsLayout>
  );
}
