import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Square.css';

interface SquareProps {
  isVisible: boolean;
  isDisabled?: boolean;
}

const Square = (props: SquareProps) => {
  const { isVisible, isDisabled = false } = props;
  return (
    <React.Fragment>
      {!isDisabled && (
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className="square"
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{
                duration: 0.7,
                ease: 'easeInOut',
              }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            />
          )}
        </AnimatePresence>
      )}
    </React.Fragment>
  );
};

export default Square;
