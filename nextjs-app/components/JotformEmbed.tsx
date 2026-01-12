'use client';

import { useEffect, useRef } from 'react';

interface JotformEmbedProps {
  formId: string;
  height?: number;
}

export default function JotformEmbed({ formId, height = 800 }: JotformEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  useEffect(() => {
    const handleIFrameMessage = (e: MessageEvent) => {
      if (typeof e.data === 'object') return;
      
      const args = e.data.split(':');
      if (args.length > 2) {
        const iframe = iframeRef.current;
        if (!iframe) return;
        
        switch (args[0]) {
          case 'scrollIntoView':
            iframe.scrollIntoView();
            break;
          case 'setHeight':
            iframe.style.height = args[1] + 'px';
            break;
          case 'reloadPage':
            window.location.reload();
            break;
          case 'loadScript':
            const script = document.createElement('script');
            script.src = args[1];
            document.body.appendChild(script);
            break;
        }
      }
    };
    
    window.addEventListener('message', handleIFrameMessage, false);
    return () => window.removeEventListener('message', handleIFrameMessage);
  }, []);
  
  return (
    <div className="jotform-embed">
      <iframe
        ref={iframeRef}
        id={`JotFormIFrame-${formId}`}
        title="Jotform"
        onLoad={() => {
          if (window.parent && window.parent.postMessage) {
            window.parent.postMessage(JSON.stringify({ action: 'ready' }), '*');
          }
        }}
        allowTransparency={true}
        allow="geolocation; microphone; camera; fullscreen"
        src={`https://form.jotform.com/${formId}`}
        frameBorder="0"
        style={{
          minWidth: '100%',
          maxWidth: '100%',
          height: `${height}px`,
          border: 'none'
        }}
        scrolling="no"
      />
    </div>
  );
}
