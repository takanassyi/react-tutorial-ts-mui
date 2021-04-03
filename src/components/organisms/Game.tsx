/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react';
import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import { Board } from 'components/molecules/Board';
import { Moves } from 'components/molecules/Moves';
import {
  SquareType,
  HistoryType,
  ButtonStyleType,
} from 'components/modules/interfaces';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginLeft: theme.spacing(2.5),
      marginBottom: theme.spacing(-2.5),
    },
  }),
);
const buttonStyle = {
  maxWidth: '50px',
  maxHeight: '50px',
  minWidth: '50px',
  minHeight: '50px',
  border: '1px solid #999',
  borderRadius: '1px',
} as ButtonStyleType;

const calculateWinner = (squares: SquareType[]): SquareType => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

export const Game: React.FC = () => {
  const classes = useStyles();
  const [history, setHistory] = useState<HistoryType>([
    { squares: Array<SquareType>(9).fill(null) },
  ]);

  const [stepNumber, setStepNumber] = useState<number>(0);
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const handleClick = (i: number): void => {
    // eslint-disable-next-line no-underscore-dangle
    const _history = history.slice(0, stepNumber + 1);
    const current = _history[_history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';

    setHistory(_history.concat([{ squares }]));
    setStepNumber(_history.length);
    setXIsNext(!xIsNext);
  };
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  const jumpTo = (step: number): void => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <Grid container>
      <Grid item>
        <Board
          squares={current.squares}
          onClick={handleClick}
          buttonStyle={buttonStyle}
        />
      </Grid>
      <Grid item>
        <div className={classes.paper}>
          <Typography>{status}</Typography>
        </div>
        <Moves history={history} jumpTo={jumpTo} />
      </Grid>
    </Grid>
  );
};

export default Game;
