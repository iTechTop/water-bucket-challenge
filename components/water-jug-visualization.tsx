interface WaterJugVisualizationProps {
  jugXCapacity: number;
  jugYCapacity: number;
  currentJugX: number;
  currentJugY: number;
  target: number;
  currentAction: string;
  stepNumber: number;
  totalSteps: number;
}

export function WaterJugVisualization({
  jugXCapacity,
  jugYCapacity,
  currentJugX,
  currentJugY,
  target,
  currentAction,
  stepNumber,
  totalSteps,
}: WaterJugVisualizationProps) {
  const getWaterLevel = (current: number, capacity: number) => {
    return (current / capacity) * 100;
  };

  const getJugStatus = (current: number, capacity: number) => {
    if (current === 0) return "Empty";
    if (current === capacity) return "Full";
    return "Partially Full";
  };

  const isTargetReached = currentJugX === target || currentJugY === target;

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg border-blue-200 border shadow-xl p-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-blue-800 mb-2">
          Water Jug Visualization
        </h3>
        <div className="flex items-center justify-center gap-4 text-sm text-blue-600">
          <span>
            Step {stepNumber} of {totalSteps}
          </span>
          <span className="px-3 py-1 bg-blue-100 rounded-full font-medium">
            {currentAction}
          </span>
          {isTargetReached && (
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
              🎉 Target Reached!
            </span>
          )}
        </div>
      </div>

      <div className="flex justify-center items-end gap-8 mb-6">
        {/* Jug X */}
        <div className="text-center">
          <div className="relative w-24 h-40 mx-auto mb-4">
            <div className="absolute inset-0 border-4 border-blue-800 rounded-b-lg bg-transparent">
              <div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-400 to-blue-300 rounded-b transition-all duration-1000 ease-in-out"
                style={{
                  height: `${getWaterLevel(currentJugX, jugXCapacity)}%`,
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-blue-200 opacity-50 animate-pulse" />
              </div>

              {[...Array(jugXCapacity)].map((_, i) => (
                <div
                  key={i}
                  className="absolute left-0 right-0 border-t border-gray-300 opacity-30"
                  style={{ bottom: `${((i + 1) / jugXCapacity) * 100}%` }}
                />
              ))}
            </div>

            <div className="absolute -right-2 top-4 w-4 h-8 border-2 border-blue-800 rounded-r-lg bg-transparent" />
          </div>

          <div className="space-y-1">
            <h4 className="font-bold text-blue-800">Jug X</h4>
            <p className="text-sm text-gray-600">Capacity: {jugXCapacity}L</p>
            <p className="text-sm font-medium">Current: {currentJugX}L</p>
            <p className="text-xs text-blue-600">
              {getJugStatus(currentJugX, jugXCapacity)}
            </p>
          </div>
        </div>

        {/* Transfer arrow */}
        <div className="flex flex-col items-center justify-center h-40">
          <div className="text-2xl mb-2">⇄</div>
          <div className="text-xs text-gray-500 text-center">Transfer</div>
        </div>

        {/* Jug Y */}
        <div className="text-center">
          <div className="relative w-24 h-40 mx-auto mb-4">
            <div className="absolute inset-0 border-4 border-blue-800 rounded-b-lg bg-transparent">
              <div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-400 to-blue-300 rounded-b transition-all duration-1000 ease-in-out"
                style={{
                  height: `${getWaterLevel(currentJugY, jugYCapacity)}%`,
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-blue-200 opacity-50 animate-pulse" />
              </div>

              {[...Array(Math.min(jugYCapacity, 10))].map((_, i) => (
                <div
                  key={i}
                  className="absolute left-0 right-0 border-t border-gray-300 opacity-30"
                  style={{ bottom: `${((i + 1) / jugYCapacity) * 100}%` }}
                />
              ))}
            </div>

            <div className="absolute -right-2 top-4 w-4 h-8 border-2 border-blue-800 rounded-r-lg bg-transparent" />
          </div>

          <div className="space-y-1">
            <h4 className="font-bold text-blue-800">Jug Y</h4>
            <p className="text-sm text-gray-600">Capacity: {jugYCapacity}L</p>
            <p className="text-sm font-medium">Current: {currentJugY}L</p>
            <p className="text-xs text-blue-600">
              {getJugStatus(currentJugY, jugYCapacity)}
            </p>
          </div>
        </div>
      </div>

      {/* Target indicator */}
      <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-blue-800 font-medium">
          🎯 Target: {target}L {isTargetReached ? "✅ Achieved!" : ""}
        </p>
      </div>
    </div>
  );
}
