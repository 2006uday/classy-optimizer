import { useState, useMemo } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Plus, Search, Mail, Phone, Calendar, BookOpen } from "lucide-react";

const Faculty = () => {
  const facultyMembers = [
    {
      id: 1,
      name: "Dr. John Smith",
      department: "Computer Science",
      email: "john.smith@university.edu",
      phone: "+1 (555) 123-4567",
      specialization: "Data Structures & Algorithms",
      workload: 85,
      status: "Active",
      classesThisWeek: 12,
      totalSubjects: 3,
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Prof. Sarah Johnson",
      department: "Computer Science", 
      email: "sarah.johnson@university.edu",
      phone: "+1 (555) 234-5678",
      specialization: "Machine Learning & AI",
      workload: 92,
      status: "Active",
      classesThisWeek: 14,
      totalSubjects: 4,
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Dr. Michael Brown",
      department: "Information Technology",
      email: "michael.brown@university.edu", 
      phone: "+1 (555) 345-6789",
      specialization: "Database Systems",
      workload: 78,
      status: "On Leave",
      classesThisWeek: 0,
      totalSubjects: 2,
      avatar: "/placeholder.svg"
    },
    {
      id: 4,
      name: "Ms. Emily Davis",
      department: "Computer Science",
      email: "emily.davis@university.edu",
      phone: "+1 (555) 456-7890", 
      specialization: "Web Development",
      workload: 88,
      status: "Active",
      classesThisWeek: 10,
      totalSubjects: 3,
      avatar: "/placeholder.svg"
    },
    {
      id: 5,
      name: "Dr. Robert Wilson",
      department: "Electrical Engineering",
      email: "robert.wilson@university.edu",
      phone: "+1 (555) 567-8901",
      specialization: "Digital Circuits",
      workload: 75,
      status: "Active", 
      classesThisWeek: 9,
      totalSubjects: 2,
      avatar: "/placeholder.svg"
    },
    {
      id: 6,
      name: "Prof. Lisa Anderson",
      department: "Mechanical Engineering",
      email: "lisa.anderson@university.edu",
      phone: "+1 (555) 678-9012",
      specialization: "Thermodynamics",
      workload: 90,
      status: "Active",
      classesThisWeek: 13,
      totalSubjects: 3,
      avatar: "/placeholder.svg"
    }
  ];

  const [search, setSearch] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const normalizedSearch = search.trim().toLowerCase();

  const slug = (str: string) => str.toLowerCase().replace(/\s+/g, "-");

  const getWorkloadColor = (workload: number) => {
    if (workload >= 90) return "text-destructive";
    if (workload >= 80) return "text-warning";
    return "text-accent";
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-accent text-white">Active</Badge>;
      case "On Leave":
        return <Badge variant="secondary">On Leave</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const filteredFaculty = useMemo(() => {
    return facultyMembers
      .filter((f) => {
        const deptSlug = slug(f.department);
        const statusSlug = slug(f.status);

        const deptMatches =
          selectedDepartment === "all" || selectedDepartment === deptSlug;
        const statusMatches =
          selectedStatus === "all" || selectedStatus === statusSlug;
        if (!deptMatches || !statusMatches) return false;

        if (!normalizedSearch) return true;

        const haystack = `${f.name} ${f.department} ${f.specialization} ${f.email} ${f.phone}`.toLowerCase();
        return haystack.includes(normalizedSearch);
      })
      .sort((a, b) => {
        if (!normalizedSearch) return 0;

        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();
        const term = normalizedSearch;

        const aStarts = aName.startsWith(term);
        const bStarts = bName.startsWith(term);
        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;

        const aIndex = aName.indexOf(term);
        const bIndex = bName.indexOf(term);
        if (aIndex !== bIndex) return aIndex - bIndex;

        return a.id - b.id;
      });
  }, [facultyMembers, selectedDepartment, selectedStatus, normalizedSearch]);

  return (
    <div className="min-h-screen bg-gradient-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Faculty Management</h1>
            <p className="text-muted-foreground mt-2">
              Manage faculty members and their schedules
            </p>
          </div>
          <Button className="bg-gradient-primary">
            <Plus className="h-4 w-4 mr-2" />
            Add Faculty Member
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-primary" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">{facultyMembers.length}</p>
                  <p className="text-sm text-muted-foreground">Total Faculty</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-accent" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">
                    {facultyMembers.filter(f => f.status === "Active").length}
                  </p>
                  <p className="text-sm text-muted-foreground">Active This Week</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <BookOpen className="h-8 w-8 text-warning" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">86%</p>
                  <p className="text-sm text-muted-foreground">Avg. Workload</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-destructive" />
                <div className="ml-4">
                  <p className="text-2xl font-bold">
                    {facultyMembers.filter(f => f.status === "On Leave").length}
                  </p>
                  <p className="text-sm text-muted-foreground">On Leave</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search faculty members..."
                    className="pl-9"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>

              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="All Departments" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="computer-science">Computer Science</SelectItem>
                  <SelectItem value="information-technology">Information Technology</SelectItem>
                  <SelectItem value="mechanical-engineering">Mechanical Engineering</SelectItem>
                  <SelectItem value="electrical-engineering">Electrical Engineering</SelectItem>
                </SelectContent>
              </Select>

              {/* Status Filter */}
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="on-leave">On Leave</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFaculty.map((faculty) => (
            <Card key={faculty.id} className="hover:shadow-medium transition-smooth">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={faculty.avatar} />
                      <AvatarFallback>
                        {faculty.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{faculty.name}</h3>
                      <p className="text-sm text-muted-foreground">{faculty.department}</p>
                    </div>
                  </div>
                  {getStatusBadge(faculty.status)}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Specialization</p>
                  <p className="text-sm font-medium">{faculty.specialization}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Workload</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          faculty.workload >= 90 ? 'bg-destructive' :
                          faculty.workload >= 80 ? 'bg-warning' : 'bg-accent'
                        }`}
                        style={{ width: `${faculty.workload}%` }}
                      ></div>
                    </div>
                    <span className={`text-sm font-medium ${getWorkloadColor(faculty.workload)}`}>
                      {faculty.workload}%
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Classes This Week</p>
                    <p className="font-medium">{faculty.classesThisWeek}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Total Subjects</p>
                    <p className="font-medium">{faculty.totalSubjects}</p>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Mail className="h-3 w-3" />
                    <span className="truncate">{faculty.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Phone className="h-3 w-3" />
                    <span>{faculty.phone}</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    View Schedule
                  </Button>
                  <Button size="sm" variant="outline">
                    Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Faculty;
