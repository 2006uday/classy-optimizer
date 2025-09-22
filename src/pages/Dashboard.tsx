import { Calendar, Users, BookOpen, Clock, TrendingUp, AlertCircle } from "lucide-react";
import { Navigation } from "@/components/ui/navigation";
import { StatsCard } from "@/components/dashboard/stats-card";
import { TimetableGrid } from "@/components/timetable/timetable-grid";
import { ParameterForm } from "@/components/forms/parameter-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroImage from "@/assets/hero-scheduler.jpg";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="relative rounded-2xl overflow-hidden shadow-strong mb-8 bg-[#00004d]">
          <div className="absolute inset-0 bg-gradient-primary opacity-40"></div>
          <img 
            src={heroImage} 
            alt="Smart Classroom Scheduler Dashboard"
            className="w-full h-64 object-cover opacity-20"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">Smart Classroom & Timetable Scheduler</h1>
              <p className="text-lg text-white/90 mb-6 max-w-2xl">
                AI-powered timetable optimization for higher education institutions. 
                Generate clash-free schedules that maximize resource utilization and faculty satisfaction.
              </p>
              <div className="flex gap-4 justify-center">
                <Badge className="bg-white/20 text-white border-white/30 hover:text-black hover:bg-white/70">
                  NEP 2020 Compliant
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30 hover:text-black hover:bg-white/70">
                  Multi-Department Support
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30 hover:text-black hover:bg-white/70">
                  AI Optimization
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Active Timetables"
            value="12"
            change="↑ 2 from last month"
            icon={Calendar}
            gradient
          />
          <StatsCard
            title="Faculty Members"
            value="85"
            change="5 new this semester"
            icon={Users}
          />
          <StatsCard
            title="Subjects Scheduled"
            value="156"
            change="↑ 12% efficiency"
            icon={BookOpen}
          />
          <StatsCard
            title="Room Utilization"
            value="87%"
            change="↑ 15% improvement"
            icon={TrendingUp}
          />
        </section>

        {/* Main Content Tabs */}
        <Tabs defaultValue="dashboard" className="space-y-6 ">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 bg-[#000060] text-white">
            <TabsTrigger value="dashboard">Current Timetable</TabsTrigger>
            <TabsTrigger value="create">Create New Schedule</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
              <div className="lg:col-span-2 ">
                <TimetableGrid title="Computer Science - Semester 6" /> 
              </div>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-warning" />
                      Quick Alerts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 bg-warning/10 border border-warning/20 rounded-lg">
                      <p className="text-sm font-medium text-warning">Room 205 Conflict</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Tuesday 11:00 AM - Two classes assigned
                      </p>
                    </div>
                    <div className="p-3 bg-accent/10 border border-accent/20 rounded-lg">
                      <p className="text-sm font-medium text-accent">Faculty Leave</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Dr. Smith - Medical leave next week
                      </p>
                    </div>
                    <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                      <p className="text-sm font-medium text-primary">New Optimization</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        15% improvement in room utilization available
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <a href="./Timetables">
                      <Button variant="outline" className="w-full justify-start my-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      Generate New Schedule
                      </Button>
                    </a>
                    <a href="Faculty">
                      <Button variant="outline" className="w-full justify-start my-1">
                      <Users className="h-4 w-4 mr-2" />
                      Manage Faculty
                      </Button>
                    </a>
                    <a href="Analytics">
                    <Button variant="outline" className="w-full justify-start my-1">
                      <Clock className="h-4 w-4 mr-2" />
                      View All Conflicts
                    </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="create">
            <ParameterForm />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Resource Utilization Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                      <p>Analytics Dashboard</p>
                      <p className="text-sm">Charts and insights coming soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Faculty Workload Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Dr. Smith</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                        <span className="text-sm text-muted-foreground">85%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Prof. Johnson</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div className="bg-accent h-2 rounded-full" style={{width: '92%'}}></div>
                        </div>
                        <span className="text-sm text-muted-foreground">92%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Dr. Brown</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div className="bg-warning h-2 rounded-full" style={{width: '78%'}}></div>
                        </div>
                        <span className="text-sm text-muted-foreground">78%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
