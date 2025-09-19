import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Plus, Trash2, Save, Wand2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Subject {
  name: string;
  faculty: string;
  classesPerWeek: number;
  type: "lecture" | "lab" | "tutorial";
}

export function ParameterForm() {
  const [subjects, setSubjects] = useState<Subject[]>([
    { name: "Data Structures", faculty: "Dr. Smith", classesPerWeek: 3, type: "lecture" },
    { name: "Database Lab", faculty: "Dr. Brown", classesPerWeek: 2, type: "lab" },
  ]);

  const addSubject = () => {
    setSubjects([...subjects, { name: "", faculty: "", classesPerWeek: 1, type: "lecture" }]);
  };

  const removeSubject = (index: number) => {
    setSubjects(subjects.filter((_, i) => i !== index));
  };

  const updateSubject = (index: number, field: keyof Subject, value: any) => {
    const updated = [...subjects];
    updated[index] = { ...updated[index], [field]: value };
    setSubjects(updated);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Basic Parameters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="classrooms">Number of Classrooms</Label>
              <Input id="classrooms" type="number" defaultValue="15" />
            </div>
            <div>
              <Label htmlFor="batches">Number of Batches</Label>
              <Input id="batches" type="number" defaultValue="8" />
            </div>
            <div>
              <Label htmlFor="maxClasses">Max Classes per Day</Label>
              <Input id="maxClasses" type="number" defaultValue="6" />
            </div>
          </div>
          <Separator />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="semester">Semester</Label>
              <Select defaultValue="spring2024">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="spring2024">Spring 2024</SelectItem>
                  <SelectItem value="fall2024">Fall 2024</SelectItem>
                  <SelectItem value="summer2024">Summer 2024</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="shift">Shift</Label>
              <Select defaultValue="morning">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning</SelectItem>
                  <SelectItem value="afternoon">Afternoon</SelectItem>
                  <SelectItem value="evening">Evening</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Subjects & Faculty</CardTitle>
          <Button onClick={addSubject} size="sm" variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            Add Subject
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {subjects.map((subject, index) => (
              <div key={index} className="p-4 border rounded-lg space-y-4 bg-muted/30">
                <div className="flex justify-between items-start">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 flex-1 mr-4">
                    <div>
                      <Label>Subject Name</Label>
                      <Input
                        value={subject.name}
                        onChange={(e) => updateSubject(index, "name", e.target.value)}
                        placeholder="Enter subject name"
                      />
                    </div>
                    <div>
                      <Label>Faculty</Label>
                      <Input
                        value={subject.faculty}
                        onChange={(e) => updateSubject(index, "faculty", e.target.value)}
                        placeholder="Faculty name"
                      />
                    </div>
                    <div>
                      <Label>Classes per Week</Label>
                      <Input
                        type="number"
                        value={subject.classesPerWeek}
                        onChange={(e) => updateSubject(index, "classesPerWeek", parseInt(e.target.value) || 1)}
                        min={1}
                        max={10}
                      />
                    </div>
                    <div>
                      <Label>Type</Label>
                      <Select
                        value={subject.type}
                        onValueChange={(value) => updateSubject(index, "type", value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="lecture">Lecture</SelectItem>
                          <SelectItem value="lab">Lab</SelectItem>
                          <SelectItem value="tutorial">Tutorial</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeSubject(index)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Constraints & Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="fixedSlots">Fixed Time Slots (Optional)</Label>
            <Textarea
              id="fixedSlots"
              placeholder="e.g., Assembly: Monday 9:00-9:30, Sports: Friday 3:00-4:00"
              className="min-h-[80px]"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="avgLeaves">Avg. Faculty Leaves per Month</Label>
              <Input id="avgLeaves" type="number" defaultValue="2" />
            </div>
            <div>
              <Label htmlFor="priority">Optimization Priority</Label>
              <Select defaultValue="balanced">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rooms">Maximize Room Utilization</SelectItem>
                  <SelectItem value="faculty">Balance Faculty Workload</SelectItem>
                  <SelectItem value="balanced">Balanced Approach</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4 justify-end">
        <Button variant="outline">
          <Save className="h-4 w-4 mr-2" />
          Save Parameters
        </Button>
        <Button className="bg-gradient-primary">
          <Wand2 className="h-4 w-4 mr-2" />
          Generate Timetable
        </Button>
      </div>
    </div>
  );
}