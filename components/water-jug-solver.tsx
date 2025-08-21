"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { WaterJugVisualization } from "./water-jug-visualization";
import { solveWaterJug } from "@/lib/water-jug-algorithm";

interface Step {
  jugX: number;
  jugY: number;
  action: string;
}

export function WaterJugSolver() {
  const [jugX, setJugX] = useState<number>(2);
  const [jugY, setJugY] = useState<number>(10);
  const [target, setTarget] = useState<number>(4);
  const [solution, setSolution] = useState<Step[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSolve = () => {
    setError("");

    if (jugX <= 0 || jugY <= 0 || target <= 0) {
      setError("All values must be greater than 0");
      return;
    }

    if (
      !Number.isInteger(jugX) ||
      !Number.isInteger(jugY) ||
      !Number.isInteger(target)
    ) {
      setError("All values must be integers");
      return;
    }

    const result = solveWaterJug(jugX, jugY, target);

    if (result.length === 0) {
      setError("No solution possible");
      setSolution([]);
      setCurrentStep(-1);
      return;
    }

    setSolution(result);
    setCurrentStep(-1);
  };

  const playAnimation = () => {
    if (solution.length === 0) return;

    setIsPlaying(true);
    setCurrentStep(0);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step >= solution.length) {
        clearInterval(interval);
        setIsPlaying(false);
        return;
      }
      setCurrentStep(step);
    }, 1500);
  };

  const resetAnimation = () => {
    setCurrentStep(-1);
    setIsPlaying(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Input Section */}
      <Card className="bg-white/90 backdrop-blur-sm border-blue-200 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-800 flex items-center gap-2">
            🪣 Configure Water Jugs
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-blue-700 mb-2">
                Jug X Capacity (gallons)
              </label>
              <Input
                type="number"
                value={jugX}
                onChange={(e) => setJugX(Number.parseInt(e.target.value) || 0)}
                className="border-blue-300 focus:border-blue-500"
                min="1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-700 mb-2">
                Jug Y Capacity (gallons)
              </label>
              <Input
                type="number"
                value={jugY}
                onChange={(e) => setJugY(Number.parseInt(e.target.value) || 0)}
                className="border-blue-300 focus:border-blue-500"
                min="1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-blue-700 mb-2">
                Target Amount (gallons)
              </label>
              <Input
                type="number"
                value={target}
                onChange={(e) =>
                  setTarget(Number.parseInt(e.target.value) || 0)
                }
                className="border-blue-300 focus:border-blue-500"
                min="1"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={handleSolve}
              className="bg-blue-600 hover:bg-blue-700 text-white"
              disabled={isPlaying}
            >
              🔍 Find Solution
            </Button>
            {solution.length > 0 && (
              <>
                <Button
                  onClick={playAnimation}
                  disabled={isPlaying}
                  variant="outline"
                  className="border-blue-300 text-blue-700 hover:bg-blue-50 bg-transparent"
                >
                  ▶️ Play Animation
                </Button>
                <Button
                  onClick={resetAnimation}
                  variant="outline"
                  className="border-blue-300 text-blue-700 hover:bg-blue-50 bg-transparent"
                >
                  🔄 Reset
                </Button>
              </>
            )}
          </div>

          {error && (
            <Alert className="border-red-300 bg-red-50">
              <AlertDescription className="text-red-700">
                {error}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {/* Visualization Section */}
      {(solution.length > 0 || currentStep >= 0) && (
        <WaterJugVisualization
          jugXCapacity={jugX}
          jugYCapacity={jugY}
          currentJugX={currentStep >= 0 ? solution[currentStep]?.jugX || 0 : 0}
          currentJugY={currentStep >= 0 ? solution[currentStep]?.jugY || 0 : 0}
          target={target}
          currentAction={
            currentStep >= 0 ? solution[currentStep]?.action || "" : ""
          }
          stepNumber={currentStep + 1}
          totalSteps={solution.length}
        />
      )}
    </div>
  );
}
