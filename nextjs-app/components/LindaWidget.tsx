'use client';

import { useEffect } from 'react';

export default function LindaWidget() {
  useEffect(() => {
    const container = document.getElementById('linda-widget-container');
    if (!container) return;

    const script = document.createElement('script');
    script.id = 'gb_widget_script';
    script.type = 'module';
    script.src = 'https://locations.linda.co/gb-widget.js';
    script.setAttribute('data-widget-token', 'e25b4c7cbee769617bfc85fafd3d29f9');

    container.appendChild(script);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            const element = node as HTMLElement;
            if (element.id?.includes('linda') ||
                element.className?.includes('linda') ||
                element.className?.includes('gb-widget') ||
                element.querySelector('[class*="linda"], [id*="linda"], [class*="gb-widget"]')) {
              if (!container.contains(element)) {
                container.appendChild(element);
              }
            }
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      const widgetElements = container.querySelectorAll('[class*="linda"], [id*="linda"], [class*="gb-widget"]');
      widgetElements.forEach(el => {
        if (el.parentNode) {
          el.remove();
        }
      });
    };
  }, []);

  return (
    <section className="linda-widget-section">
      <div id="linda-widget-container"></div>
    </section>
  );
}
