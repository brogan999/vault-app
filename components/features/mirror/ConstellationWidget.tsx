"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

interface ConstellationWidgetProps {
  big5Scores?: {
    openness?: number;
    conscientiousness?: number;
    extraversion?: number;
    agreeableness?: number;
    neuroticism?: number;
  };
  astrologyMeta?: any;
}

export function ConstellationWidget({
  big5Scores,
  astrologyMeta: _astrologyMeta,
}: ConstellationWidgetProps) {
  if (!big5Scores) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>The Constellation</CardTitle>
          <CardDescription>No personality data available</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const data = [
    {
      trait: "Openness",
      value: big5Scores.openness || 0,
      fullMark: 100,
    },
    {
      trait: "Conscientiousness",
      value: big5Scores.conscientiousness || 0,
      fullMark: 100,
    },
    {
      trait: "Extraversion",
      value: big5Scores.extraversion || 0,
      fullMark: 100,
    },
    {
      trait: "Agreeableness",
      value: big5Scores.agreeableness || 0,
      fullMark: 100,
    },
    {
      trait: "Neuroticism",
      value: big5Scores.neuroticism || 0,
      fullMark: 100,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>The Constellation</CardTitle>
        <CardDescription>
          Big 5 Personality Traits Overlay
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={data} role="img" aria-label="Big 5 Personality Traits Radar Chart">
            <PolarGrid />
            <PolarAngleAxis dataKey="trait" />
            <PolarRadiusAxis angle={90} domain={[0, 100]} />
            <Radar
              name="Traits"
              dataKey="value"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
        <div className="sr-only">
          <table>
            <thead>
              <tr>
                <th>Trait</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.trait}>
                  <td>{item.trait}</td>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}