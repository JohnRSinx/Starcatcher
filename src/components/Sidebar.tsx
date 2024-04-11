import { ChevronRight } from "lucide-react";
import { Topic } from "./Dashboard";

interface SidebarProps {
  topics: Topic[];
  handleTopicClick: (id: number) => void;
}

export function Sidebar({ topics, handleTopicClick }: SidebarProps) {
  return (
     <nav className="flex flex-col w-60 max-h-screen border-r overflow-y-auto">
        <ul className="flex flex-col gap-1">
          {topics.map(topic => (
            <li key={topic.id}>
              <a
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                onClick={() => handleTopicClick(topic.id)}
              >
                <ChevronRight className="w-4 h-4" style={{ flexShrink: 0 }} />
                {topic.title}
              </a>
            </li>
          ))}
        </ul>
    </nav>
  );
}
