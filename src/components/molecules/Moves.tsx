import React from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';

import { HistoryType } from 'components/modules/interfaces';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 210,
    },
  }),
);

export type MovesProps = {
  history: HistoryType;
  jumpTo: (move: number) => void;
};

export const Moves: React.FC<MovesProps> = (props: MovesProps) => {
  const classes = useStyles();
  const { history, jumpTo } = props;

  return (
    <List component="nav" className={classes.root} arial-label="contacts">
      <ol>
        {history.map((_, move) => {
          const desc = move ? `Go to move #${move}` : 'Go to game start';

          return (
            // eslint-disable-next-line react/no-array-index-key
            <li key={move}>
              <ListItem button>
                <ListItemText
                  primary={desc}
                  onClick={(): void => jumpTo(move)}
                />
              </ListItem>
            </li>
          );
        })}
      </ol>
    </List>
  );
};

export default Moves;
