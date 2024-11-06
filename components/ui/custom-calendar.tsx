"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DatePickerProps {
  label?: string;
  initialDate?: Date;
  onDateChange: (date: Date | null) => void;
}

export function DatePicker({
  label = "Select Date",
  initialDate,
  onDateChange,
}: DatePickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    initialDate || null
  );
  const [currentMonth, setCurrentMonth] = useState(
    initialDate?.getMonth() || new Date().getMonth()
  );
  const [currentYear, setCurrentYear] = useState(
    initialDate?.getFullYear() || new Date().getFullYear()
  );
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (initialDate) {
      setSelectedDate(initialDate);
      setCurrentMonth(initialDate.getMonth());
      setCurrentYear(initialDate.getFullYear());
    }
  }, [initialDate]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from({ length: 50 }, (_, i) => currentYear - i);

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handleDateClick = (day: number) => {
    const newDate = new Date(currentYear, currentMonth, day);
    setSelectedDate(newDate);
    onDateChange(newDate);
    setIsOpen(false);
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className='w-8 h-8' />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected =
        selectedDate?.getDate() === day &&
        selectedDate?.getMonth() === currentMonth &&
        selectedDate?.getFullYear() === currentYear;
      days.push(
        <Button
          key={day}
          variant={isSelected ? "default" : "ghost"}
          className={`h-8 w-8 p-0 font-normal ${
            isSelected ? "bg-primary text-primary-foreground" : ""
          }`}
          onClick={() => handleDateClick(day)}>
          {day}
        </Button>
      );
    }

    return days;
  };

  return (
    <div className='w-full max-w-sm'>
      <Label htmlFor='date-picker'>{label}</Label>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            id='date-picker'
            variant='outline'
            role='combobox'
            aria-expanded={isOpen}
            className='justify-between w-full'>
            {selectedDate
              ? selectedDate.toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              : "Select date"}
            <CalendarIcon className='opacity-50 ml-2 w-4 h-4' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='p-0 w-auto' align='start'>
          <div className='p-4'>
            <div className='flex justify-between items-center mb-4'>
              <Select
                value={currentMonth.toString()}
                onValueChange={(value) => setCurrentMonth(parseInt(value))}>
                <SelectTrigger className='w-[120px]'>
                  <SelectValue>{months[currentMonth]}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {months.map((month, index) => (
                    <SelectItem key={month} value={index.toString()}>
                      {month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={currentYear.toString()}
                onValueChange={(value) => setCurrentYear(parseInt(value))}>
                <SelectTrigger className='w-[100px]'>
                  <SelectValue>{currentYear}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {years.slice(13).map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className='flex justify-between items-center mb-2'>
              <Button variant='ghost' size='icon' onClick={handlePrevMonth}>
                <ChevronLeft className='w-4 h-4' />
              </Button>
              <span className='font-medium'>
                {months[currentMonth]} {currentYear}
              </span>
              <Button variant='ghost' size='icon' onClick={handleNextMonth}>
                <ChevronRight className='w-4 h-4' />
              </Button>
            </div>
            <div className='gap-1 grid grid-cols-7 text-center'>
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                <div
                  key={day}
                  className='font-medium text-muted-foreground text-sm'>
                  {day}
                </div>
              ))}
              {renderCalendar()}
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <span className='text-gray-400 text-xs'>Masukkan tanggal lahir</span>
    </div>
  );
}

// Example usage of the DatePicker component
export default function BirthDateForm() {
  const [birthDate, setBirthDate] = useState<Date>(new Date());

  const handleDateChange = (date: Date) => {
    setBirthDate(date);
    // You can perform additional actions here, such as form validation or API calls
  };

  return (
    <div className='space-y-8'>
      <DatePicker
        label='Date of Birth'
        initialDate={birthDate}
        onDateChange={(date: Date | null) => handleDateChange(date as Date)}
      />
      {birthDate && (
        <p className='text-muted-foreground text-sm'>
          Selected birth date: {birthDate.toLocaleDateString()}
        </p>
      )}
    </div>
  );
}
