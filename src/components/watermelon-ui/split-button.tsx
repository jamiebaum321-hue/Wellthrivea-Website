'use client';

import { type JSX, useState } from 'react';
import { motion, type Transition } from 'motion/react';
import { ArrowLeft01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

const SPRING: Transition = {
  type: 'spring',
  bounce: 0.55,
  duration: 1,
};

export interface SplitButtonProps {
  mainButton?: string;
  buttons?: string[];
  onSelect?: (name: string) => void;
}

export default function SplitButton({
  mainButton = 'New Project',
  buttons = ['iOS', 'macOS', 'tvOS'],
  onSelect,
}: SplitButtonProps = {}): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="relative flex min-h-[60px] w-full items-center justify-start font-semibold">
      {/* MAIN BUTTON */}
      <motion.button
        layout
        transition={SPRING}
        onClick={() => setOpen(true)}
        className="absolute left-0 z-10 rounded-full bg-neutral-200 whitespace-nowrap px-7 py-3 tracking-tight text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
        initial={false}
        animate={{
          scaleX: open ? 1.5 : 1,
          scaleY: open ? 0.9 : 1,
          opacity: open ? 0 : 1,
          filter: open ? 'blur(8px)' : 'blur(0px)',
          pointerEvents: open ? 'none' : 'auto',
        }}
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 1.15 }}
      >
        {mainButton}
      </motion.button>

      {/* SPLIT ROW */}
      <motion.div
        layout
        transition={SPRING}
        className="absolute left-0 z-0 flex items-center justify-start gap-1.5 sm:gap-2"
        initial={false}
        animate={{
          scaleX: open ? 1 : 0.2,
          scaleY: open ? 1 : 0.9,
          opacity: open ? 1 : 0,
          filter: open ? 'blur(0px)' : 'blur(8px)',
          pointerEvents: open ? 'auto' : 'none',
        }}
      >
        {/* BACK BUTTON */}
        <motion.button
          onClick={() => setOpen(false)}
          className="flex shrink-0 items-center justify-center rounded-full bg-neutral-200 p-2 tracking-tight text-neutral-700 sm:p-2.5 dark:bg-neutral-800 dark:text-neutral-200"
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 1.15 }}
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} />
        </motion.button>

        {buttons.map((name, index) => {
          return (
            <motion.button
              key={index}
              onClick={() => {
                setOpen(false);
                onSelect?.(name);
              }}
              className="rounded-full bg-neutral-200 px-3 py-2 text-xs whitespace-nowrap tracking-tight text-neutral-700 sm:px-4 sm:py-2.5 sm:text-sm dark:bg-neutral-800 dark:text-neutral-200"
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 1.05 }}
            >
              {name}
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}
