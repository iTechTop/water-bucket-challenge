"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

export function WaterJugSolver() {
  const [jugX, setJugX] = useState<number>(2);
  const [jugY, setJugY] = useState<number>(10);
  const [target, setTarget] = useState<number>(4);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleSolve = () => {
    setError("");
    setSuccess("");

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

    if (target > Math.max(jugX, jugY)) {
      setError("Target cannot be larger than the biggest jug capacity");
      return;
    }

    setSuccess(
      `Ready to solve: Jug X (${jugX}L), Jug Y (${jugY}L), Target (${target}L)`
    );
    console.log("Solving water jug problem:", { jugX, jugY, target });
  };

  return (
    <div className="max-w-2xl mx-auto">
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
                placeholder="e.g., 3"
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
                placeholder="e.g., 5"
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
                placeholder="e.g., 4"
              />
            </div>
          </div>

          <Button
            onClick={handleSolve}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            🔍 Find Solution
          </Button>

          {error && (
            <Alert className="border-red-300 bg-red-50">
              <AlertDescription className="text-red-700">
                {error}
              </AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="border-green-300 bg-green-50">
              <AlertDescription className="text-green-700">
                {success}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
