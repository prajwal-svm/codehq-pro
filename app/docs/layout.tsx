import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout 
      tree={source.pageTree} 
      nav={{ 
        title: (
          <div className="flex items-center gap-2">
            <span className="font-semibold text-lg tracking-tight text-foreground">
              CodeHQ <span className="text-primary font-bold">Pro</span>
            </span>
          </div>
        ),
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
          text: 'Behavioral',
          url: '/docs/behavioral',
          active: 'nested-url',
        },
      ]}
      sidebar={{
        defaultOpenLevel: 1, // Keep categories open to look like groups
        collapsible: false,  // Mintlify sidebars are usually fixed
        prefetch: true,
      }}
    >
      {children}
    </DocsLayout>
  );
}