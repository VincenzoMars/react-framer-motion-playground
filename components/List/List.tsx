import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './List.css';
import ListItem from '../List/ListItem';

interface ListProps {
  isVisible: boolean;
  isDisabled?: boolean;
}

const listVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};

const itemVariants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -200 },
};

const List = (props: ListProps) => {
  const { isVisible, isDisabled = false } = props;

  const listItems = [
    {
      id: 1,
      text: 'First Item',
    },
    {
      id: 2,
      text: 'Second Item',
    },
    {
      id: 3,
      text: 'Third Item',
    },
  ];

  return (
    <React.Fragment>
      {!isDisabled && (
        <AnimatePresence>
          {isVisible && (
            <motion.ul
              className="list"
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              {listItems.map((item) => (
                <motion.li
                  key={item.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <ListItem text={item.text} />
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      )}
    </React.Fragment>
  );
};

export default List;
