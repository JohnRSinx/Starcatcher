import { useEffect, useState } from "react";
import { Main } from "./Main";
import { Sidebar } from "./Sidebar";
import axios from "axios";
import { Rocket } from "lucide-react";

export interface Topic {
  id: number;
  title: string;
  description: string;
}

export function Dashboard() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [clickedTopic, setClickedTopic] = useState<Topic | undefined>();


  async function getAllTopics() {
    try {
      const { data } = await axios.get<Topic[]>("http://localhost:3000/topics");
      setTopics(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllTopics();
  }, []);

  function handleTopicClick(id: number) {
    const clickedTopic = topics.find(topic => topic.id === id) ;
    setClickedTopic(clickedTopic);
  }
  
  return (
    <div className="flex flex-col min-h-screen ">
      <header className="flex items-center h-14 px-4 border-b gap-2 sm:h-16 sm:px-6 justify-between ">
        <a href="/">
          <h1 className="text-2xl font-semibold">Starcatcher</h1>
        </a>
        <Rocket/>
      </header>
      <div className="flex flex-1">
        <Sidebar topics={topics} handleTopicClick={handleTopicClick} />
        <Main  clickedTopic={clickedTopic} />
      </div>
    </div>
  );
}
