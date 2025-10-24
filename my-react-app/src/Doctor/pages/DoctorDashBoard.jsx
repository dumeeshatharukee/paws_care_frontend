import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", patients: 20 },
  { name: "Feb", patients: 35 },
  { name: "Mar", patients: 45 },
  { name: "Apr", patients: 32 },
];

const animalPieData = [
  { name: "Dogs", value: 60 },
  { name: "Cats", value: 30 },
  { name: "Rabbits", value: 15 },
];

const reviewData = [
  { name: "5 Stars", value: 40 },
  { name: "4 Stars", value: 25 },
  { name: "3 Stars", value: 15 },
  { name: "2 Stars", value: 10 },
  { name: "1 Star", value: 10 },
];

const COLORS = ["#4CAF50", "#00C49F", "#FFBB28", "#FF8042", "#FF4444"];