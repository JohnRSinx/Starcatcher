import { ChevronRight } from "lucide-react";

export function Sidebar() {
    return (
        <nav className="flex flex-col w-60 border-r min-w-0 overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <nav className="flex flex-col gap-1 p-4">
            <a
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
              href="#"
            >
              <ChevronRight  className="w-4 h-4" />
              Introduction
            </a>
            <a
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
              href="#"
            >
              <ChevronRight  className="w-4 h-4" />
              Getting Started
            </a>
            <a
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
              href="#"
            >
              <ChevronRight  className="w-4 h-4" />
              Configuration
            </a>
            <a
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
              href="#"
            >
              <ChevronRight  className="w-4 h-4" />
              Usage
            </a>
            <a
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
              href="#"
            >
              <ChevronRight  className="w-4 h-4" />
              API Reference
            </a>
          </nav>
        </div>
      </nav>
    )
}