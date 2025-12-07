import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout 
      tree={source.pageTree} 
      nav={{ 
        title: (
          <span className="font-bold text-xl tracking-tight">
            CodeHQ <span className="text-primary">Pro</span>
          </span>
        ),
        transparentMode: 'none',
      }}
      links={[
        {
          text: 'Data Structures',
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
      sidebar={{
        collapsible: false,
      }}
    >
      {children}
    </DocsLayout>
  );
}