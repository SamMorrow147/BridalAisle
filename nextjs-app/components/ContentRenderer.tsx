import React from 'react';
import Image from 'next/image';

interface ContentBlock {
  type: 'heading' | 'paragraph' | 'list';
  level?: number;
  tag?: string;
  text: string;
  html?: string;
}

interface ContentRendererProps {
  content: ContentBlock[];
}

export default function ContentRenderer({ content }: ContentRendererProps) {
  return (
    <div className="content-blocks">
      {content.map((block, index) => {
        if (block.type === 'heading') {
          const Tag = (`h${block.level}` || 'h2') as keyof React.JSX.IntrinsicElements;
          return <Tag key={index} className={`heading-${block.level}`}>{block.text}</Tag>;
        }
        
        if (block.type === 'paragraph') {
          return (
            <p 
              key={index} 
              dangerouslySetInnerHTML={{ __html: block.html || block.text }}
            />
          );
        }
        
        if (block.type === 'list') {
          const items = block.text.split('\n').filter(Boolean);
          const ListTag = block.tag === 'ol' ? 'ol' : 'ul';
          
          return (
            <ListTag key={index}>
              {items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ListTag>
          );
        }
        
        return null;
      })}
    </div>
  );
}
