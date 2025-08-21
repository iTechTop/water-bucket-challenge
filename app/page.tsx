"use client";
import { WaterJugSolver } from "@/components/water-jug-solver";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              💧 Water Jug Challenge
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto drop-shadow">
              Solve the classic water jug riddle using two jugs with different
              capacities
            </p>
          </div>
          <WaterJugSolver />
        </div>
      </div>
    </div>
  );
}
