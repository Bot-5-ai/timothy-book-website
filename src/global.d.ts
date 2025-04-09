
// Global type definitions for external libraries used in the project

interface Window {
  AOS?: {
    init: (options?: any) => void;
    refresh: () => void;
  };
  
  gsap?: {
    to: (target: string | Element | Element[], vars: object) => any;
    from: (target: string | Element | Element[], vars: object) => any;
    fromTo: (target: string | Element | Element[], fromVars: object, toVars: object) => any;
    registerPlugin: (...plugins: any[]) => void;
  };
  
  ScrollTrigger?: any;
  
  Typed?: {
    new (element: string | Element, options: object): {
      destroy: () => void;
    };
  };
  
  particlesJS?: (elementId: string, options: object) => void;
  
  ScrollReveal?: () => {
    reveal: (target: string, options?: object) => void;
  };
  
  parchment?: {
    init: (element: Element) => void;
  };
}

interface Element {
  style?: CSSStyleDeclaration;
}
