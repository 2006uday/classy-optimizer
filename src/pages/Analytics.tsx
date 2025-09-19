import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Calendar, 
  Clock,
  Building,
  BookOpen,
  AlertTriangle,
  CheckCircle,
  BarChart3
} from "lucide-react";

const Analytics = () => {
  const utilizationData = [
    { room: "Room 201", utilization: 92, status: "High", conflicts: 0 },
    { room: "Room 202", utilization: 78, status: "Good", conflicts: 1 },
    { room: "Lab 1", utilization: 95, status: "High", conflicts: 0 },
    { room: "Room 203", utilization: 65, status: "Medium", conflicts: 2 },
    { room: "Auditorium", utilization: 45, status: "Low", conflicts: 0 },
    { room: "Lab 2", utilization: 88, status: "Good", conflicts: 0 }
  ];

  const departmentStats = [
    { name: "Computer Science", faculty: 12, subjects: 24, utilization: 89 },
    { name: "Information Technology", faculty: 8, subjects: 18, utilization: 82 },
    { name: "Mechanical Engineering", faculty: 15, subjects: 30, utilization: 76 },
    { name: "Electrical Engineering", faculty: 10, subjects: 22, utilization: 84 }
  ];

  const weeklyTrends = [
    { day: "Monday", classes: 45, conflicts: 2, utilization: 87 },
    { day: "Tuesday", classes: 42, conflicts: 1, utilization: 84 },
    { day: "Wednesday", classes: 48, conflicts: 3, utilization: 92 },
    { day: "Thursday", classes: 44, conflicts: 1, utilization: 86 },
    { day: "Friday", classes: 40, conflicts: 0, utilization: 82 }
  ];

  return (
    <div className="min-h-screen bg-gradient-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
            <p className="text-muted-foreground mt-2">Insights and performance metrics for timetable optimization</p>
          </div>
          <Select defaultValue="current-week">
            <SelectTrigger className="w-[200px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current-week">Current Week</SelectItem>
              <SelectItem value="last-week">Last Week</SelectItem>
              <SelectItem value="current-month">Current Month</SelectItem>
              <SelectItem value="semester">Current Semester</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-primary text-white">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/90 text-sm">Overall Utilization</p>
                  <p className="text-2xl font-bold">87%</p>
                  <div className="flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    <span className="text-xs text-white/75">+5% from last week</span>
                  </div>
                </div>
                <BarChart3 className="h-8 w-8 text-white/80" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total Conflicts</p>
                  <p className="text-2xl font-bold text-destructive">7</p>
                  <div className="flex items-center mt-1">
                    <TrendingDown className="h-3 w-3 mr-1 text-accent" />
                    <span className="text-xs text-muted-foreground">-3 from last week</span>
                  </div>
                </div>
                <AlertTriangle className="h-8 w-8 text-destructive" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Active Faculty</p>
                  <p className="text-2xl font-bold">45</p>
                  <div className="flex items-center mt-1">
                    <CheckCircle className="h-3 w-3 mr-1 text-accent" />
                    <span className="text-xs text-muted-foreground">92% attendance</span>
                  </div>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Scheduled Classes</p>
                  <p className="text-2xl font-bold">219</p>
                  <div className="flex items-center mt-1">
                    <Calendar className="h-3 w-3 mr-1 text-primary" />
                    <span className="text-xs text-muted-foreground">This week</span>
                  </div>
                </div>
                <BookOpen className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Room Utilization */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                Room Utilization Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {utilizationData.map((room) => (
                  <div key={room.room} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Building className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{room.room}</p>
                        <p className="text-sm text-muted-foreground">
                          {room.conflicts} conflicts
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="w-16 bg-muted rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              room.utilization >= 90 ? 'bg-destructive' :
                              room.utilization >= 75 ? 'bg-warning' : 'bg-accent'
                            }`}
                            style={{ width: `${room.utilization}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">{room.utilization}%</span>
                      </div>
                      <Badge 
                        variant={
                          room.status === "High" ? "destructive" :
                          room.status === "Good" ? "default" : "secondary"
                        }
                        className={
                          room.status === "Good" ? "bg-accent text-white" : ""
                        }
                      >
                        {room.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Department Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Department Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {departmentStats.map((dept) => (
                  <div key={dept.name} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold">{dept.name}</h3>
                      <Badge className="bg-primary/10 text-primary">
                        {dept.utilization}% utilized
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Faculty Members</p>
                        <p className="font-medium text-lg">{dept.faculty}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Active Subjects</p>
                        <p className="font-medium text-lg">{dept.subjects}</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-smooth"
                          style={{ width: `${dept.utilization}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Weekly Scheduling Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {weeklyTrends.map((day) => (
                <div key={day.day} className="p-4 bg-muted/30 rounded-lg text-center">
                  <h3 className="font-semibold mb-3">{day.day}</h3>
                  <div className="space-y-2">
                    <div>
                      <p className="text-2xl font-bold text-primary">{day.classes}</p>
                      <p className="text-xs text-muted-foreground">Classes</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-destructive">{day.conflicts}</p>
                      <p className="text-xs text-muted-foreground">Conflicts</p>
                    </div>
                    <div className="pt-2">
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-accent h-2 rounded-full"
                          style={{ width: `${day.utilization}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{day.utilization}% utilization</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Analytics;