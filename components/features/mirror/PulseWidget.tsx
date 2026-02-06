"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { format, subDays } from "date-fns";

interface PulseWidgetProps {
  journals?: Array<{ createdAt: string }>;
}

export function PulseWidget({ journals = [] }: PulseWidgetProps) {
  // Generate last 30 days
  const last30Days = Array.from({ length: 30 }, (_, i) => {
    const date = subDays(new Date(), 29 - i);
    return {
      date: format(date, "MMM dd"),
      count: journals.filter(
        (j) => format(new Date(j.createdAt), "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
      ).length,
    };
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pulse</CardTitle>
        <CardDescription>Schema Activation (Last 30 Days)</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={last30Days}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}