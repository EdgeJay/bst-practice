import yargs from 'yargs';
import sortedToBST from './01_sortedToBST';
import insertNode from './02_insertNode';
import findNode from './03_findNode';

const fetchScenario = (): string => {
  const { s: scenario } = yargs.parseSync();
  if (typeof scenario !== 'string') {
    throw new Error('Missing scenario');
  }
  return scenario;
};

const start = () => {
  const scenario = fetchScenario();
  if (scenario === 'sortedToBST') {
    return sortedToBST();
  } else if (scenario === 'insertNode') {
    return insertNode();
  } else if (scenario === 'findNode') {
    return findNode();
  }
  console.log('No valid scenario selected');
};

start();
