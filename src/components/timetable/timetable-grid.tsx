import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, User } from "lucide-react";

interface TimeSlot {
  time: string;
  subject?: string;
  faculty?: string;
  room?: string;
  type?: "lecture" | "lab" | "tutorial";
}

interface TimetableGridProps {
  title?: string;
  data?: Record<string, TimeSlot[]>;
}

const defaultData: Record<string, TimeSlot[]> = {
  Monday: [
    { time: "9:00-10:00", subject: "Data Structures", faculty: "Dr. Smith", room: "Room 201", type: "lecture" },
    { time: "10:00-11:00", subject: "Algorithms", faculty: "Prof. Johnson", room: "Room 202", type: "lecture" },
    { time: "11:00-12:00" },
    { time: "12:00-1:00", subject: "Database Lab", faculty: "Dr. Brown", room: "Lab 1", type: "lab" },
  ],
  Tuesday: [
    { time: "9:00-10:00", subject: "Machine Learning", faculty: "Dr. Davis", room: "Room 203", type: "lecture" },
    { time: "10:00-11:00" },
    { time: "11:00-12:00", subject: "Software Engineering", faculty: "Prof. Wilson", room: "Room 204", type: "tutorial" },
    { time: "12:00-1:00", subject: "Web Development", faculty: "Ms. Taylor", room: "Lab 2", type: "lab" },
  ],
  Wednesday: [
    { time: "9:00-10:00", subject: "Computer Networks", faculty: "Dr. Anderson", room: "Room 205", type: "lecture" },
    { time: "10:00-11:00", subject: "Operating Systems", faculty: "Prof. Thomas", room: "Room 206", type: "lecture" },
    { time: "11:00-12:00" },
    { time: "12:00-1:00", subject: "AI Workshop", faculty: "Dr. Garcia", room: "Lab 3", type: "lab" },
  ],
  Thursday: [
    { time: "9:00-10:00", subject: "Cyber Security", faculty: "Prof. Martinez", room: "Room 207", type: "lecture" },
    { time: "10:00-11:00", subject: "Data Analytics", faculty: "Dr. Rodriguez", room: "Room 208", type: "tutorial" },
    { time: "11:00-12:00", subject: "Cloud Computing", faculty: "Ms. Lee", room: "Room 209", type: "lecture" },
    { time: "12:00-1:00" },
  ],
  Friday: [
    { time: "9:00-10:00", subject: "Project Presentation", faculty: "All Faculty", room: "Auditorium", type: "tutorial" },
    { time: "10:00-11:00", subject: "Research Methodology", faculty: "Dr. White", room: "Room 210", type: "lecture" },
    { time: "11:00-12:00" },
    { time: "12:00-1:00", subject: "Industry Talk", faculty: "Guest Speaker", room: "Hall A", type: "tutorial" },
  ],
};

const getTypeColor = (type?: string) => {
  switch (type) {
    case "lecture":
      return "bg-primary/10 text-primary border-primary/20";
    case "lab":
      return "bg-accent/10 text-accent border-accent/20";
    case "tutorial":
      return "bg-warning/10 text-warning border-warning/20";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export function TimetableGrid({ title = "Weekly Timetable", data = defaultData }: TimetableGridProps) {
  const days = Object.keys(data);
  const timeSlots = ["9:00-10:00", "10:00-11:00", "11:00-12:00", "12:00-1:00"];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <div className="grid grid-cols-6 gap-2 w-max-fit">
            {/* Header */}
            <div className="font-semibold text-muted-foreground p-3 text-center">Time</div>
            {days.map((day) => (
              <div key={day} className="font-semibold text-muted-foreground p-3 text-center">{day}</div>
            ))}

            {/* Time slots */}
            {timeSlots.map((timeSlot) => (
              <div key={timeSlot} className="contents">
                <div className="p-3 text-sm font-medium text-muted-foreground bg-muted/30 rounded-lg flex items-center justify-center">
                  {timeSlot}
                </div>
                {days.map((day) => {
                  const slot = data[day]?.find(s => s.time === timeSlot);
                  return (
                    <div key={`${day}-${timeSlot}`} className="p-2 flex justify-center">
                      {slot?.subject ? (
                        <div className={`flex flex-col justify-between p-3 rounded-lg border-2 transition-smooth hover:shadow-soft h-32 ${slot.type === "lecture" ? "w-max text-center" : "w-full"} ${getTypeColor(slot.type)}`}>
                          <div className="font-semibold text-sm">{slot.subject}</div>
                          <div className="flex items-center gap-1 text-xs">
                            <User className="h-3 w-3" />
                            <span>{slot.faculty}</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs">
                            <MapPin className="h-3 w-3" />
                            <span>{slot.room}</span>
                          </div>
                          {/* Centered Badge */}
                          <div className="flex justify-center mt-auto">
                            <Badge variant="secondary" className="text-xs w-max">
                              {slot.type}
                            </Badge>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-35 w-auto p-3 rounded-lg border-2 border-dashed border-muted bg-muted/20 text-muted-foreground text-center text-xs ">
                          Free Period
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
