
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Witnessinglist() {
  const [isListView, setIsListView] = useState(false)
  return (
    (<div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Church Members to Visit</h1>
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            onClick={() => setIsListView(true)}
            className={isListView ? "bg-accent text-accent-foreground" : ""}>
            <ListIcon className="w-4 h-4 mr-2" />
            List View
          </Button>
          <Button
            variant="outline"
            onClick={() => setIsListView(false)}
            className={!isListView ? "bg-accent text-accent-foreground" : ""}>
            <LayoutGridIcon className="w-4 h-4 mr-2" />
            Grid View
          </Button>
        </div>
      </div>
      <div
        className={`grid gap-6 ${
          isListView
            ? "grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1"
            : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        }`}>
        <div
          className="bg-white shadow-md rounded-lg overflow-hidden flex items-center">
          <div className="relative w-32 h-32">
            <img
              src="/placeholder.svg"
              width={400}
              height={300}
              alt="Member Photo"
              className="w-full h-full object-cover" />
            <div
              className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
              Active
            </div>
          </div>
          <div className="p-4 flex-1">
            <h2 className="text-lg font-semibold mb-1">John Doe</h2>
            <p className="text-muted-foreground mb-2">Doe</p>
            <div className="flex items-center space-x-2 mb-2">
              <CalendarIcon className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">35 years old</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <PhoneIcon className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">123-456-7890</span>
            </div>
            <div className="flex items-center space-x-2">
              <LocateIcon className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">123 Main St, Anytown USA</span>
            </div>
          </div>
        </div>
        <div
          className="bg-white shadow-md rounded-lg overflow-hidden flex items-center">
          <div className="relative w-32 h-32">
            <img
              src="/placeholder.svg"
              width={400}
              height={300}
              alt="Member Photo"
              className="w-full h-full object-cover" />
            <div
              className="absolute top-2 right-2 bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs font-medium">
              Inactive
            </div>
          </div>
          <div className="p-4 flex-1">
            <h2 className="text-lg font-semibold mb-1">Jane Smith</h2>
            <p className="text-muted-foreground mb-2">Smith</p>
            <div className="flex items-center space-x-2 mb-2">
              <CalendarIcon className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">42 years old</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <PhoneIcon className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">987-654-3210</span>
            </div>
            <div className="flex items-center space-x-2">
              <LocateIcon className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">456 Oak Rd, Anytown USA</span>
            </div>
          </div>
        </div>
        <div
          className="bg-white shadow-md rounded-lg overflow-hidden flex items-center">
          <div className="relative w-32 h-32">
            <img
              src="/placeholder.svg"
              width={400}
              height={300}
              alt="Member Photo"
              className="w-full h-full object-cover" />
            <div
              className="absolute top-2 right-2 bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs font-medium">
              Pending
            </div>
          </div>
          <div className="p-4 flex-1">
            <h2 className="text-lg font-semibold mb-1">Michael Johnson</h2>
            <p className="text-muted-foreground mb-2">Johnson</p>
            <div className="flex items-center space-x-2 mb-2">
              <CalendarIcon className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">28 years old</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <PhoneIcon className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">555-123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <LocateIcon className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">789 Elm St, Anytown USA</span>
            </div>
          </div>
        </div>
        <div
          className="bg-white shadow-md rounded-lg overflow-hidden flex items-center">
          <div className="relative w-32 h-32">
            <img
              src="/placeholder.svg"
              width={400}
              height={300}
              alt="Member Photo"
              className="w-full h-full object-cover" />
            <div
              className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
              Active
            </div>
          </div>
          <div className="p-4 flex-1">
            <h2 className="text-lg font-semibold mb-1">Sarah Lee</h2>
            <p className="text-muted-foreground mb-2">Lee</p>
            <div className="flex items-center space-x-2 mb-2">
              <CalendarIcon className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">31 years old</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <PhoneIcon className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">222-333-4444</span>
            </div>
            <div className="flex items-center space-x-2">
              <LocateIcon className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">321 Pine St, Anytown USA</span>
            </div>
          </div>
        </div>
        <div
          className="bg-white shadow-md rounded-lg overflow-hidden flex items-center">
          <div className="relative w-32 h-32">
            <img
              src="/placeholder.svg"
              width={400}
              height={300}
              alt="Member Photo"
              className="w-full h-full object-cover" />
            <div
              className="absolute top-2 right-2 bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs font-medium">
              Inactive
            </div>
          </div>
          <div className="p-4 flex-1">
            <h2 className="text-lg font-semibold mb-1">David Kim</h2>
            <p className="text-muted-foreground mb-2">Kim</p>
            <div className="flex items-center space-x-2 mb-2">
              <CalendarIcon className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">45 years old</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <PhoneIcon className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">888-999-0000</span>
            </div>
            <div className="flex items-center space-x-2">
              <LocateIcon className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">159 Oak Ln, Anytown USA</span>
            </div>
          </div>
        </div>
        <div
          className="bg-white shadow-md rounded-lg overflow-hidden flex items-center">
          <div className="relative w-32 h-32">
            <img
              src="/placeholder.svg"
              width={400}
              height={300}
              alt="Member Photo"
              className="w-full h-full object-cover" />
            <div
              className="absolute top-2 right-2 bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs font-medium">
              Pending
            </div>
          </div>
          <div className="p-4 flex-1">
            <h2 className="text-lg font-semibold mb-1">Emily Chen</h2>
            <p className="text-muted-foreground mb-2">Chen</p>
            <div className="flex items-center space-x-2 mb-2">
              <CalendarIcon className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">25 years old</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <PhoneIcon className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">777-888-9999</span>
            </div>
            <div className="flex items-center space-x-2">
              <LocateIcon className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">246 Maple Ave, Anytown USA</span>
            </div>
          </div>
        </div>
      </div>
    </div>)
  );
}

function CalendarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>)
  );
}


function LayoutGridIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>)
  );
}


function ListIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>)
  );
}


function LocateIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>)
  );
}


function PhoneIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>)
  );
}
