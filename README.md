# 💧 Water Jug Challenge

A React-based solution to the classic Water Jug Riddle with an interactive UI and step-by-step visualization.

## 🌊 Overview

The Water Jug Challenge is a classic puzzle where you need to measure exactly Z gallons of water using only two jugs with capacities X and Y gallons. This application provides an interactive solution with beautiful water-themed animations and step-by-step visualization.

## ✨ Features

- **Interactive UI**: Input any values for jug capacities and target amount
- **Step-by-step Solution**: Visual representation of each step in the solution
- **Animated Visualization**: Watch the water jugs fill, empty, and transfer in real-time
- **Water Theme**: Beautiful water-inspired design with animated backgrounds
- **Error Handling**: Detects impossible solutions and validates inputs
- **Responsive Design**: Works on desktop and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/iTechTop/water-bucket-challenge.git
   cd water-bucket-challenge
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧮 Algorithm Explanation

The application uses a **Breadth-First Search (BFS)** algorithm to find the shortest solution to the water jug problem.

### Mathematical Theory

The water jug problem has a solution if and only if the target amount Z is:

1. Less than or equal to the maximum capacity of either jug
2. A multiple of the Greatest Common Divisor (GCD) of the two jug capacities

**Formula**: `gcd(X, Y)` must divide Z evenly for a solution to exist.

### Algorithm Steps

1. **Validation**: Check if solution is mathematically possible using GCD
2. **BFS Search**: Explore all possible states (jug combinations) level by level
3. **State Generation**: For each state, generate all possible next states:
   - Fill jug X
   - Fill jug Y
   - Empty jug X
   - Empty jug Y
   - Transfer from X to Y
   - Transfer from Y to X
4. **Solution Path**: Track the path to reach the target state
5. **Optimization**: Return the shortest path (minimum steps)

## 🧪 Test Cases

### Test Case 1: Basic Solution

- **Jug X**: 2 gallons
- **Jug Y**: 10 gallons
- **Target**: 4 gallons
- **Expected**: Solution in 4 steps
- **Steps**: Fill X → Transfer X to Y → Fill X → Transfer X to Y

### Test Case 2: Large Capacity Difference

- **Jug X**: 2 gallons
- **Jug Y**: 100 gallons
- **Target**: 96 gallons
- **Expected**: Solution in 4 steps
- **Steps**: Fill Y → Transfer Y to X → Empty X → Transfer Y to X

### Test Case 3: No Solution

- **Jug X**: 2 gallons
- **Jug Y**: 6 gallons
- **Target**: 5 gallons
- **Expected**: "No Solution" (GCD(2,6) = 2, and 5 is not divisible by 2)

### Test Case 4: Target Equals Capacity

- **Jug X**: 3 gallons
- **Jug Y**: 5 gallons
- **Target**: 5 gallons
- **Expected**: Solution in 1 step (Fill Y)

### Test Case 5: Complex Solution

- **Jug X**: 3 gallons
- **Jug Y**: 5 gallons
- **Target**: 4 gallons
- **Expected**: Solution in 6 steps
