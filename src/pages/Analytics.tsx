import { useState, useMemo } from 'react'
import { Navigation } from '@/components/ui/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
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
} from 'lucide-react'

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('current-week')

  // Base data arrays
  const baseUtilizationData = [
    { room: 'Room 201', utilization: 92, status: 'High', conflicts: 0 },
    { room: 'Room 202', utilization: 78, status: 'Good', conflicts: 1 },
    { room: 'Lab 1', utilization: 95, status: 'High', conflicts: 0 },
    { room: 'Room 203', utilization: 65, status: 'Medium', conflicts: 2 },
    { room: 'Auditorium', utilization: 45, status: 'Low', conflicts: 0 },
    { room: 'Lab 2', utilization: 88, status: 'Good', conflicts: 0 }
  ]

  const baseDepartmentStats = [
    { name: 'Computer Science', faculty: 12, subjects: 24, utilization: 89 },
    {
      name: 'Information Technology',
      faculty: 8,
      subjects: 18,
      utilization: 82
    },
    {
      name: 'Mechanical Engineering',
      faculty: 15,
      subjects: 30,
      utilization: 76
    },
    {
      name: 'Electrical Engineering',
      faculty: 10,
      subjects: 22,
      utilization: 84
    }
  ]

  const baseWeeklyTrends = [
    { day: 'Monday', classes: 45, conflicts: 2, utilization: 87 },
    { day: 'Tuesday', classes: 42, conflicts: 1, utilization: 84 },
    { day: 'Wednesday', classes: 48, conflicts: 3, utilization: 92 },
    { day: 'Thursday', classes: 44, conflicts: 1, utilization: 86 },
    { day: 'Friday', classes: 40, conflicts: 0, utilization: 82 }
  ]

  // Filter data based on timeRange
  const utilizationData = useMemo(() => {
    switch (timeRange) {
      case 'last-week':
        return baseUtilizationData.map(r => ({
          ...r,
          utilization: Math.max(r.utilization - 5, 0)
        }))
      case 'current-month':
        return baseUtilizationData.map(r => ({
          ...r,
          utilization: Math.min(r.utilization + 3, 100)
        }))
      case 'semester':
        return baseUtilizationData.map(r => ({
          ...r,
          utilization: Math.min(r.utilization + 6, 100)
        }))
      default:
        return baseUtilizationData
    }
  }, [timeRange])

  const departmentStats = useMemo(() => {
    switch (timeRange) {
      case 'last-week':
        return baseDepartmentStats.map(d => ({
          ...d,
          utilization: Math.max(d.utilization - 4, 0)
        }))
      case 'current-month':
        return baseDepartmentStats.map(d => ({
          ...d,
          utilization: Math.min(d.utilization + 2, 100)
        }))
      case 'semester':
        return baseDepartmentStats.map(d => ({
          ...d,
          utilization: Math.min(d.utilization + 5, 100)
        }))
      default:
        return baseDepartmentStats
    }
  }, [timeRange])

  const weeklyTrends = useMemo(() => {
    switch (timeRange) {
      case 'last-week':
        return baseWeeklyTrends.map(w => ({
          ...w,
          classes: w.classes - 5,
          utilization: w.utilization - 5
        }))
      case 'current-month':
        return baseWeeklyTrends.map(w => ({
          ...w,
          classes: w.classes + 10,
          utilization: Math.min(w.utilization + 3, 100)
        }))
      case 'semester':
        return baseWeeklyTrends.map(w => ({
          ...w,
          classes: w.classes + 20,
          utilization: Math.min(w.utilization + 6, 100)
        }))
      default:
        return baseWeeklyTrends
    }
  }, [timeRange])

  return (
    <div className='min-h-screen bg-gradient-background'>
      <Navigation />

      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex justify-between items-center mb-8'>
          <div>
            <h1 className='text-3xl font-bold text-foreground'>
              Analytics Dashboard
            </h1>
            <p className='text-muted-foreground mt-2'>
              Insights and performance metrics for timetable optimization
            </p>
          </div>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className='w-[200px]'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='current-week'>Current Week</SelectItem>
              <SelectItem value='last-week'>Last Week</SelectItem>
              <SelectItem value='current-month'>Current Month</SelectItem>
              <SelectItem value='semester'>Current Semester</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
          <Card className='bg-gradient-primary text-white'>
            <CardContent className='pt-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-white/90 text-sm'>Overall Utilization</p>
                  <p className='text-2xl font-bold'>
                    {Math.round(
                      utilizationData.reduce(
                        (acc, r) => acc + r.utilization,
                        0
                      ) / utilizationData.length
                    )}
                    %
                  </p>
                  <div className='flex items-center mt-1'>
                    <TrendingUp className='h-3 w-3 mr-1' />
                    <span className='text-xs text-white/75'>
                      vs {timeRange.replace('-', ' ')}
                    </span>
                  </div>
                </div>
                <BarChart3 className='h-8 w-8 text-white/80' />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-muted-foreground text-sm'>
                    Active Faculty
                  </p>
                  <p className='text-2xl font-bold'>
                    {departmentStats.reduce((acc, d) => acc + d.faculty, 0)}
                  </p>
                </div>
                <Users className='h-8 w-8 text-primary' />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-muted-foreground text-sm'>
                    Scheduled Classes
                  </p>
                  <p className='text-2xl font-bold'>
                    {weeklyTrends.reduce((acc, w) => acc + w.classes, 0)}
                  </p>
                </div>
                <Calendar className='h-8 w-8 text-primary' />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-muted-foreground text-sm'>Conflicts</p>
                  <p className='text-2xl font-bold text-red-500'>
                    {utilizationData.reduce((acc, r) => acc + r.conflicts, 0)}
                  </p>
                </div>
                <AlertTriangle className='h-8 w-8 text-red-500' />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8'>
          <Card>
            <CardHeader>
              <CardTitle>Room Utilization</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              {utilizationData.map((room, i) => (
                <div key={i} className='p-4 border rounded-lg'>
                  <div className='flex justify-between items-center mb-2'>
                    <h3 className='font-medium'>{room.room}</h3>
                    <Badge
                      variant={
                        room.status === 'High'
                          ? 'destructive'
                          : room.status === 'Good'
                          ? 'default'
                          : 'secondary'
                      }
                    >
                      {room.status}
                    </Badge>
                  </div>
                  <div className='w-full bg-secondary h-2 rounded-full mb-2'>
                    <div
                      className={`h-full rounded-full ${
                        room.utilization > 90
                          ? 'bg-red-500'
                          : room.utilization > 75
                          ? 'bg-yellow-500'
                          : 'bg-green-500'
                      }`}
                      style={{ width: `${room.utilization}%` }}
                    />
                  </div>
                  <p className='text-sm text-muted-foreground'>
                    {room.utilization}% utilized • {room.conflicts} conflicts
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Department Statistics</CardTitle>
            </CardHeader>
            <CardContent className='grid grid-cols-1 gap-4'>
              {departmentStats.map((dept, i) => (
                <div key={i} className='p-4 border rounded-lg'>
                  <div className='flex items-center justify-between mb-2'>
                    <h3 className='font-medium'>{dept.name}</h3>
                    <Building className='h-4 w-4 text-muted-foreground' />
                  </div>
                  <p className='text-sm text-muted-foreground mb-1'>
                    {dept.faculty} Faculty
                  </p>
                  <p className='text-sm text-muted-foreground mb-2'>
                    {dept.subjects} Subjects
                  </p>
                  <div className='w-full bg-secondary h-2 rounded-full'>
                    <div
                      className='h-full bg-primary rounded-full'
                      style={{ width: `${dept.utilization}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Trends</CardTitle>
          </CardHeader>
          <CardContent className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
            {weeklyTrends.map((trend, i) => (
              <div
                key={i}
                className='p-4 border rounded-lg text-center bg-muted/20'
              >
                <h3 className='font-medium mb-2'>{trend.day}</h3>
                <p className='text-2xl font-bold mb-1'>{trend.classes}</p>
                <p className='text-sm text-muted-foreground mb-2'>
                  {trend.utilization}% Utilization
                </p>
                {trend.conflicts > 0 ? (
                  <Badge className='bg-red-500 text-white'>
                    {trend.conflicts} Conflicts
                  </Badge>
                ) : (
                  <Badge className='bg-green-500 text-white'>
                    No Conflicts
                  </Badge>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

export default Analytics
