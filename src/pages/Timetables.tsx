import { Navigation } from "@/components/ui/navigation";
import { TimetableGrid } from "@/components/timetable/timetable-grid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Plus, Download, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Timetables = () => {
  const timetables = [
    {
      id: 1,
      name: "Computer Science - Semester 6",
      department: "Computer Science",
      semester: "6th Semester",
      status: "Active",
      lastModified: "2024-01-15",
      conflicts: 0
    },
    {
      id: 2,
      name: "Information Technology - Semester 4",
      department: "Information Technology",
      semester: "4th Semester", 
      status: "Draft",
      lastModified: "2024-01-14",
      conflicts: 2
    },
    {
      id: 3,
      name: "Mechanical Engineering - Semester 8",
      department: "Mechanical Engineering",
      semester: "8th Semester",
      status: "Active",
      lastModified: "2024-01-13",
      conflicts: 1
    },
    {
      id: 4,
      name: "Electrical Engineering - Semester 2",
      department: "Electrical Engineering",
      semester: "2nd Semester",
      status: "Active",
      lastModified: "2024-01-12",
      conflicts: 0
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Timetable Management</h1>
            <p className="text-muted-foreground mt-2">Manage and view all academic timetables</p>
          </div>
          <Button className="bg-gradient-primary">
            <Plus className="h-4 w-4 mr-2" />
            Create New Timetable
          </Button>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search timetables..." className="pl-9" />
                </div>
              </div>
              <Select defaultValue="all-departments">
                <SelectTrigger className="w-[200px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-departments">All Departments</SelectItem>
                  <SelectItem value="computer-science">Computer Science</SelectItem>
                  <SelectItem value="information-technology">Information Technology</SelectItem>
                  <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
                  <SelectItem value="electrical">Electrical Engineering</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all-status">
                <SelectTrigger className="w-[150px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-status">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Timetable List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {timetables.map((timetable) => (
            <Card key={timetable.id} className="hover:shadow-medium transition-smooth">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{timetable.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {timetable.department} • {timetable.semester}
                    </p>
                  </div>
                  <Badge 
                    variant={timetable.status === "Active" ? "default" : "secondary"}
                    className={timetable.status === "Active" ? "bg-accent" : ""}
                  >
                    {timetable.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Last Modified:</span>
                    <span>{timetable.lastModified}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Conflicts:</span>
                    <Badge 
                      variant={timetable.conflicts === 0 ? "secondary" : "destructive"}
                      className="text-xs"
                    >
                      {timetable.conflicts === 0 ? "No Conflicts" : `${timetable.conflicts} Conflicts`}
                    </Badge>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Calendar className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Active Timetable Preview */}
        <TimetableGrid title="Currently Viewing: Computer Science - Semester 6" />
      </main>
    </div>
  );
};

export default Timetables;