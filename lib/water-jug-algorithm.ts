interface State {
  jugX: number;
  jugY: number;
  action: string;
}

interface QueueItem {
  state: State;
  path: State[];
}

export function solveWaterJug(
  jugXCapacity: number,
  jugYCapacity: number,
  target: number
): State[] {
  // Check if solution is possible using GCD
  if (target > Math.max(jugXCapacity, jugYCapacity)) {
    return [];
  }

  if (target % gcd(jugXCapacity, jugYCapacity) !== 0) {
    return [];
  }

  // BFS to find shortest solution
  const visited = new Set<string>();
  const queue: QueueItem[] = [];

  const initialState: State = { jugX: 0, jugY: 0, action: "Initial state" };
  queue.push({ state: initialState, path: [initialState] });
  visited.add(`${0}-${0}`);

  while (queue.length > 0) {
    const { state, path } = queue.shift()!;

    // Check if we reached the target
    if (state.jugX === target || state.jugY === target) {
      return path.slice(1);
    }

    // Generate all possible next states
    const nextStates = getNextStates(state, jugXCapacity, jugYCapacity);

    for (const nextState of nextStates) {
      const key = `${nextState.jugX}-${nextState.jugY}`;

      if (!visited.has(key)) {
        visited.add(key);
        queue.push({
          state: nextState,
          path: [...path, nextState],
        });
      }
    }
  }

  return [];
}

function getNextStates(
  state: State,
  jugXCapacity: number,
  jugYCapacity: number
): State[] {
  const states: State[] = [];
  const { jugX, jugY } = state;

  // Fill jug X
  if (jugX < jugXCapacity) {
    states.push({
      jugX: jugXCapacity,
      jugY: jugY,
      action: "Fill jug X",
    });
  }

  // Fill jug Y
  if (jugY < jugYCapacity) {
    states.push({
      jugX: jugX,
      jugY: jugYCapacity,
      action: "Fill jug Y",
    });
  }

  // Empty jug X
  if (jugX > 0) {
    states.push({
      jugX: 0,
      jugY: jugY,
      action: "Empty jug X",
    });
  }

  // Empty jug Y
  if (jugY > 0) {
    states.push({
      jugX: jugX,
      jugY: 0,
      action: "Empty jug Y",
    });
  }

  // Transfer from X to Y
  if (jugX > 0 && jugY < jugYCapacity) {
    const transfer = Math.min(jugX, jugYCapacity - jugY);
    states.push({
      jugX: jugX - transfer,
      jugY: jugY + transfer,
      action: "Transfer from jug X to jug Y",
    });
  }

  // Transfer from Y to X
  if (jugY > 0 && jugX < jugXCapacity) {
    const transfer = Math.min(jugY, jugXCapacity - jugX);
    states.push({
      jugX: jugX + transfer,
      jugY: jugY - transfer,
      action: "Transfer from jug Y to jug X",
    });
  }

  return states;
}

function gcd(a: number, b: number): number {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
