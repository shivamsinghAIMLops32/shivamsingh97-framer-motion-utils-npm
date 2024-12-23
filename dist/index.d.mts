import { Variants, HTMLMotionProps } from 'framer-motion';
import * as React from 'react';
import React__default from 'react';

declare const fadeIn: Variants;
declare const fadeInUp: Variants;

declare const scaleUp: Variants;
declare const scaleInHover: Variants;

declare const useScrollAnimation: (threshold?: number) => {
    ref: React.MutableRefObject<null>;
    isInView: boolean;
};

interface AnimatedContainerProps extends HTMLMotionProps<'div'> {
    children: React__default.ReactNode;
    animation?: 'fadeIn' | 'fadeInUp' | 'scaleUp';
}
declare const AnimatedContainer: React__default.FC<AnimatedContainerProps>;

export { AnimatedContainer, fadeIn, fadeInUp, scaleInHover, scaleUp, useScrollAnimation };
