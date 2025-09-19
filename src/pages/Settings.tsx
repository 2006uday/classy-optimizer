import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { 
  Settings as SettingsIcon, 
  Bell, 
  Shield, 
  Users, 
  Database,
  Clock,
  Save,
  RefreshCw
} from "lucide-react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">System Settings</h1>
          <p className="text-muted-foreground mt-2">Configure your timetable scheduling system preferences</p>
        </div>

        <div className="space-y-6">
          {/* General Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <SettingsIcon className="h-5 w-5" />
                General Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="institution-name">Institution Name</Label>
                  <Input 
                    id="institution-name" 
                    defaultValue="University College of Technology"
                    placeholder="Enter institution name"
                  />
                </div>
                <div>
                  <Label htmlFor="academic-year">Academic Year</Label>
                  <Select defaultValue="2024-25">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024-25">2024-25</SelectItem>
                      <SelectItem value="2025-26">2025-26</SelectItem>
                      <SelectItem value="2026-27">2026-27</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="ist">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                      <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                      <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                      <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="language">Default Language</Label>
                  <Select defaultValue="english">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="marathi">Marathi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="institution-address">Institution Address</Label>
                <Textarea 
                  id="institution-address" 
                  defaultValue="123 Education Street, University Town, State - 400001"
                  placeholder="Enter complete address"
                  className="min-h-[80px]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Scheduling Parameters */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Scheduling Parameters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="class-duration">Default Class Duration (minutes)</Label>
                  <Input id="class-duration" type="number" defaultValue="60" />
                </div>
                <div>
                  <Label htmlFor="break-duration">Break Duration (minutes)</Label>
                  <Input id="break-duration" type="number" defaultValue="15" />
                </div>
                <div>
                  <Label htmlFor="lunch-duration">Lunch Break (minutes)</Label>
                  <Input id="lunch-duration" type="number" defaultValue="45" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="start-time">Day Start Time</Label>
                  <Input id="start-time" type="time" defaultValue="09:00" />
                </div>
                <div>
                  <Label htmlFor="end-time">Day End Time</Label>
                  <Input id="end-time" type="time" defaultValue="17:00" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Saturday Classes</Label>
                    <p className="text-sm text-muted-foreground">Allow scheduling classes on Saturday</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Optimize for Room Utilization</Label>
                    <p className="text-sm text-muted-foreground">Prioritize maximizing room usage</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Faculty Workload Balancing</Label>
                    <p className="text-sm text-muted-foreground">Ensure equal distribution of teaching load</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Schedule Conflicts</Label>
                  <p className="text-sm text-muted-foreground">Get notified when timetable conflicts are detected</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Faculty Leave Updates</Label>
                  <p className="text-sm text-muted-foreground">Alerts when faculty members apply for leave</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Room Unavailability</Label>
                  <p className="text-sm text-muted-foreground">Notifications about room maintenance or unavailability</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Weekly Reports</Label>
                  <p className="text-sm text-muted-foreground">Receive weekly analytics and performance reports</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* User Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                User Access Control
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="admin-email">Primary Administrator Email</Label>
                <Input 
                  id="admin-email" 
                  type="email" 
                  defaultValue="admin@university.edu"
                  placeholder="Enter admin email"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Faculty Self-Service</Label>
                  <p className="text-sm text-muted-foreground">Allow faculty to view and request schedule changes</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Department Head Access</Label>
                  <p className="text-sm text-muted-foreground">Grant department heads administrative privileges</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Student Portal Integration</Label>
                  <p className="text-sm text-muted-foreground">Allow students to view their timetables</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          {/* Data Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Data Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  <Database className="h-4 w-4 mr-2" />
                  Export All Data
                </Button>
                <Button variant="outline" className="w-full">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Backup Database
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <Label>Automatic Backups</Label>
                  <p className="text-sm text-muted-foreground">Create daily backups of timetable data</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div>
                <Label htmlFor="retention-period">Data Retention Period</Label>
                <Select defaultValue="2-years">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-year">1 Year</SelectItem>
                    <SelectItem value="2-years">2 Years</SelectItem>
                    <SelectItem value="5-years">5 Years</SelectItem>
                    <SelectItem value="indefinite">Indefinite</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">Require 2FA for all administrators</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Session Timeout</Label>
                  <p className="text-sm text-muted-foreground">Auto-logout after inactivity</p>
                </div>
                <Select defaultValue="30-minutes">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15-minutes">15 min</SelectItem>
                    <SelectItem value="30-minutes">30 min</SelectItem>
                    <SelectItem value="1-hour">1 hour</SelectItem>
                    <SelectItem value="4-hours">4 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Audit Logging</Label>
                  <p className="text-sm text-muted-foreground">Log all system changes and user activities</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-end">
            <Button variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Reset to Defaults
            </Button>
            <Button className="bg-gradient-primary">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;