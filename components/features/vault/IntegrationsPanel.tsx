"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Cloud, FileText } from "lucide-react";

export function IntegrationsPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Integrations</CardTitle>
        <CardDescription>
          Connect external services to automatically sync your data
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Cloud className="h-5 w-5" />
            <div>
              <Label htmlFor="google-drive">Google Drive</Label>
              <p className="text-xs text-muted-foreground">
                Sync files from your Google Drive
              </p>
            </div>
          </div>
          <Switch id="google-drive" disabled />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5" />
            <div>
              <Label htmlFor="notes">Notes App</Label>
              <p className="text-xs text-muted-foreground">
                Import from Apple Notes or other note apps
              </p>
            </div>
          </div>
          <Switch id="notes" disabled />
        </div>

        <p className="text-xs text-muted-foreground pt-2">
          More integrations coming soon
        </p>
      </CardContent>
    </Card>
  );
}