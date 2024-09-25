"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function CategorySearch() {
  const categoryList = [
    {
      Name: "Dermatologist",
      url: "/skin.png",
    },
    {
      Name: "Allergist",
      url: "/allergy.png",
    },
    {
      Name: "Gastroenterologist",
      url: "/Gastroenterologist.png",
    },
    {
      Name: "Neurologist",
      url: "/neurologist.png",
    },
    {
      Name: "Cardiologist",
      url: "/cardiologist.png",
    },
    {
      Name: "Gynecologist",
      url: "/gynecologist.png",
    },
    {
      Name: "Pediatrician",
      url: "/pediatrician.png",
    },
    {
      Name: "Hepatologist",
      url: "/hepatologist.png",
    },
    {
      Name: "Osteopathic",
      url: "/osteopathic_.png",
    },
    {
      Name: "Endocrinologist",
      url: "/endocrinologist.png",
    },
    {
      Name: "Pulmonologist",
      url: "/pulmonologist.png",
    },
    {
      Name: "Internal Medicine",
      url: "/internal_medicine.png",
    },
    {
      Name: "Common Cold",
      url: "/common_cold.png",
    },
    {
      Name: "Phlebologist",
      url: "/phlebologist.png",
    },
    {
      Name: "Osteoarthritis",
      url: "/osteoarthritis.png",
    },
    {
      Name: "Rheumatologists",
      url: "/rheumatologists.png",
    },
    {
      Name: "Otolaryngologist",
      url: "/otolaryngologist.png",
    },
  ];
  return (
    <div className="mb-10 items-center px-5 flex flex-col gap-3">
      <h2 className="font-bold text-4xl tracking-wide">
        Search <span className="text-primary">Doctors</span>
      </h2>
      <h2 className="text-gray-500 text-xl">
        Search Your Doctor and Book Appointment in one click
      </h2>

      <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search..." />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>

      {/* Display List of Category  */}
       <div className="grid grid-cols-3 gap-2 border rounded-lg p-5">
        {timeSlot?.map((item, index) => (
          <h2
            key={`${item.time}-${index}`} // Unique key here
            onClick={() => setSelectedTimeSlot(item.time)}
            className={`p-2 border cursor-pointer text-center hover:bg-primary hover:text-white rounded-full ${
              item.time === selectedTimeSlot && "bg-primary text-white"
            }`}
          >
            {item.time}
          </h2>
        ))}
      </div>

    </div>
  );
}

export default CategorySearch;
