import { Topic } from "./Dashboard";

interface MainProps {
  clickedTopic: Topic | undefined;
}

export function Main({clickedTopic}:MainProps) {

    return (
        <div className="flex flex-col w-full min-w-0">
          <div className="flex-1 min-h-0 p-4 overflow-y-auto"> 
          {clickedTopic ? (
              <div className="p-3"> 
                <h2 className="font-semibold text-2xl">{clickedTopic.title}</h2>
                <p className="mt-4">{clickedTopic.description}</p>
              </div>
            ) : 
          <div className="p-3"> 
            <h2 className="font-semibold text-2xl">Sejam bem vindos ao Starcatcher</h2>
            <p className="mt-4">Descrição</p>
            <img src="" alt="" />
          </div>}
          </div>
        </div>
    )
}
