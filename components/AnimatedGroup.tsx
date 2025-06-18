"use client";

import React, { ReactNode, useMemo, useRef, ComponentType } from "react";
import { motion, useInView, Variants, MotionProps } from "framer-motion";

export type PresetType =
  | "fade"
  | "slide"
  | "scale"
  | "blur"
  | "blur-slide"
  | "zoom"
  | "flip"
  | "bounce"
  | "rotate"
  | "swing";

export type AnimatedGroupProps<
  T extends keyof React.JSX.IntrinsicElements = "div",
> = {
  children: ReactNode;
  className?: string;
  duration?: number;
  preset?: PresetType;
  as?: T;
  asChild?: keyof React.JSX.IntrinsicElements;
  onScroll?: boolean;
} & MotionProps;

const defaultContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.1,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(12px)",
    y: 12,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      type: "spring" as const,
      bounce: 0.3,
      duration: 1.5, // default duration
    },
  },
};

const presetVariants: Record<PresetType, Variants> = {
  fade: {},
  slide: {
    hidden: { y: 20 },
    visible: { y: 0 },
  },
  scale: {
    hidden: { scale: 0.8 },
    visible: { scale: 1 },
  },
  blur: {
    hidden: { filter: "blur(4px)" },
    visible: { filter: "blur(0px)" },
  },
  "blur-slide": {
    hidden: { filter: "blur(4px)", y: 20 },
    visible: { filter: "blur(0px)", y: 0 },
  },
  zoom: {
    hidden: { scale: 0.5 },
    visible: {
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  },
  flip: {
    hidden: { rotateX: -90 },
    visible: {
      rotateX: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  },
  bounce: {
    hidden: { y: -50 },
    visible: {
      y: 0,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  },
  rotate: {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  },
  swing: {
    hidden: { rotate: -10 },
    visible: {
      rotate: 0,
      transition: { type: "spring", stiffness: 300, damping: 8 },
    },
  },
};

const createItemVariants = (duration: number = 1.5): Variants => ({
  hidden: {
    opacity: 0,
    filter: "blur(12px)",
    y: 12,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      type: "spring" as const,
      bounce: 0.3,
      duration: duration,
    },
  },
});

const addDefaultVariants = (variants: Variants, duration: number = 1.5) => ({
  hidden: { ...createItemVariants(duration).hidden, ...variants.hidden },
  visible: {
    ...createItemVariants(duration).visible,
    ...variants.visible,
    transition: {
      type: "spring" as const,
      bounce: 0.3,
      duration: duration,
      ...((variants.visible as any)?.transition || {}),
    },
  },
});

const AnimatedGroup = React.forwardRef<HTMLElement, AnimatedGroupProps>(
  (
    {
      children,
      className,
      duration = 1.5,
      preset,
      as = "div",
      asChild = "div",
      onScroll = false,
      ...motionProps
    },
    ref,
  ) => {
    const localRef = useRef<HTMLElement>(null);
    const combinedRef = (ref as React.RefObject<HTMLElement>) ?? localRef;

    const isInView = useInView(combinedRef, { once: true });

    const selectedVariants = {
      item: addDefaultVariants(preset ? presetVariants[preset] : {}, duration),
      container: defaultContainerVariants,
    };

    const containerVariants = selectedVariants.container;
    const itemVariants = selectedVariants.item;

    const MotionComponent = useMemo(() => motion(as as any), [as]);
    const MotionChild = useMemo(() => motion(asChild as any), [asChild]);

    return (
      <MotionComponent
        ref={combinedRef}
        variants={containerVariants}
        initial="hidden"
        animate={onScroll ? (isInView ? "visible" : "hidden") : "visible"}
        className={className}
        {...motionProps}
      >
        {React.Children.map(children, (child, index) => (
          <MotionChild key={index} variants={itemVariants}>
            {child}
          </MotionChild>
        ))}
      </MotionComponent>
    );
  },
);

AnimatedGroup.displayName = "AnimatedGroup";
export { AnimatedGroup };
