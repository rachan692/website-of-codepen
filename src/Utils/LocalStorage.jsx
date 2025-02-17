const employees = [
  {
    "id": 1,
    "firstName": "Ram",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "UI Bug Fixes and Accessibility Enhancements",
        "taskDescription": "Fix the UI bugs on the homepage and update the buttons for better accessibility.",
        "taskDate": "2025-02-05",
        "taskNumber": 2,
        "category": "UI/UX"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Documentation Update for New Features",
        "taskDescription": "Update the documentation for the new features added to the project.",
        "taskDate": "2025-01-30",
        "taskNumber": 1,
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Payment Gateway Integration Issue",
        "taskDescription": "Integrate the new payment gateway into the system, facing issues with API calls.",
        "taskDate": "2025-01-15",
        "taskNumber": 1,
        "category": "Backend"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Sita",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Charting Library Research and Implementation",
        "taskDescription": "Research and implement a new charting library for displaying sales data.",
        "taskDate": "2025-02-05",
        "taskNumber": 2,
        "category": "Research/Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Codebase Review for Optimization Opportunities",
        "taskDescription": "Review codebase for optimization opportunities and suggest improvements.",
        "taskDate": "2025-01-29",
        "taskNumber": 1,
        "category": "Code Review"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Authentication Flow Testing and Bug Fixing",
        "taskDescription": "Test the new authentication flow and fix any discovered bugs.",
        "taskDate": "2025-01-25",
        "taskNumber": 1,
        "category": "Quality Assurance"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Hari",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Dashboard Creation for Project Progress Tracking",
        "taskDescription": "Create a user-friendly dashboard for tracking project progress.",
        "taskDate": "2025-02-05",
        "taskNumber": 2,
        "category": "Frontend"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Error Logging System Update",
        "taskDescription": "Update the app’s error logging system to capture more details for debugging.",
        "taskDate": "2025-01-31",
        "taskNumber": 1,
        "category": "Backend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Unit Test Suite for User Registration Feature",
        "taskDescription": "Write a unit test suite for the new user registration feature.",
        "taskDate": "2025-01-20",
        "taskNumber": 1,
        "category": "Testing"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Gita",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Security Vulnerabilities in Authentication System",
        "taskDescription": "Fix security vulnerabilities in the current authentication system.",
        "taskDate": "2025-02-05",
        "taskNumber": 2,
        "category": "Security"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Codebase Cleanup and Deprecation Removal",
        "taskDescription": "Audit and clean up the codebase to remove deprecated functions.",
        "taskDate": "2025-01-28",
        "taskNumber": 1,
        "category": "Maintenance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Memory Leak Resolution Using Profiling Tools",
        "taskDescription": "Resolve memory leaks in the main application using profiling tools.",
        "taskDate": "2025-01-18",
        "taskNumber": 1,
        "category": "Performance"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Krishna",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "User Feedback Form Implementation",
        "taskDescription": "Implement the new user feedback form and integrate it with the database.",
        "taskDate": "2025-02-05",
        "taskNumber": 2,
        "category": "Frontend"
      },
      {
        "active": true,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "API Refactoring for Large Datasets",
        "taskDescription": "Refactor the old API to improve performance for large datasets.",
        "taskDate": "2025-01-25",
        "taskNumber": 1,
        "category": "Backend"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Cross-Browser Compatibility Investigation",
        "taskDescription": "Investigate issues with cross-browser compatibility and provide fixes.",
        "taskDate": "2025-01-15",
        "taskNumber": 1,
        "category": "Testing"
      }
    ]
  }
];

const admin = {
  "id": 1,
  "firstName": "Bishal",
  "email": "admin@example.com",
  "password": "123",
  "tasks": [
    {
      "active": true,
      "newTask": true,
      "completed": false,
      "failed": false,
      "taskTitle": "Team Progress Oversight and Guidance",
      "taskDescription": "Oversee team’s progress on current projects and provide guidance.",
      "taskDate": "2025-02-05",
      "taskNumber": 2,
      "category": "Management"
    },
    {
      "active": false,
      "newTask": false,
      "completed": true,
      "failed": false,
      "taskTitle": "Company-Wide Meeting Organization",
      "taskDescription": "Organize the next company-wide meeting and prepare the agenda.",
      "taskDate": "2025-01-20",
      "taskNumber": 1,
      "category": "Administrative"
    }
  ]
};

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  const admin = JSON.parse(localStorage.getItem('admin')) || {};
  
  return { employees, admin };
};
