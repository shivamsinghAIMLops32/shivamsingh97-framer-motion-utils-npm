# Framer Motion Utils

A utility library to simplify working with Framer Motion animations.

## Installation

```bash
npm install @your-username/framer-motion-utils
```

## Usage

### Preset Animations

```jsx
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp, scaleUp } from '@your-username/framer-motion-utils';

function MyComponent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      Hello World!
    </motion.div>
  );
}
```

### AnimatedContainer Component

```jsx
import { AnimatedContainer } from '@your-username/framer-motion-utils';

function MyComponent() {
  return (
    <AnimatedContainer animation="fadeInUp">
      Hello World!
    </AnimatedContainer>
  );
}
```

### Scroll Animation Hook

```jsx
import { useScrollAnimation } from '@your-username/framer-motion-utils';

function MyComponent() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <div ref={ref}>
      {isInView && <div>This appears when scrolled into view!</div>}
    </div>
  );
}
```

## Features

- Pre-built animation variants
- Reusable animation components
- Custom hooks for common animation patterns
- TypeScript support
- Zero-config setup

## License

MIT