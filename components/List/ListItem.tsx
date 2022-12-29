import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './List.css';

interface ListItemProps {
  text: string;
}

const ListItem = (props: ListItemProps) => {
  const { text } = props;
  const [isHidden, setIsHidden] = React.useState(false);
  return (
    <React.Fragment>
      {!isHidden && (
        <span className="list-item" onClick={() => setIsHidden(!isHidden)}>
          {text}
        </span>
      )}
    </React.Fragment>
  );
};

export default ListItem;
