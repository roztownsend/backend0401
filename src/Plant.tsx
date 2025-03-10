import { useContext } from "react";
import { TaskContext } from "./context/taskContext";

const Plant = () => {
    const { completedTaskNumber } = useContext(TaskContext);

    const plantPicFileName = completedTaskNumber < 10 ? 
    `0${completedTaskNumber}` : `10`;

    
    const plantAlt = `Pixel art of a potted plant with ${completedTaskNumber == 1 ? "one leaf" : `${completedTaskNumber} leaves`}.`

    const plantStatus = completedTaskNumber < 10 ? 
    `Your plant is still growing!` : 
    `You've grown a gorgeous plant!`;

    return (
    <section className="plant">
        <div className="plant-pic">
            <img 
                src={`/plants/plant_${plantPicFileName}.png`} 
                alt={plantAlt} title={plantAlt} />
        </div>
        <div className="plant-status">
            {plantStatus}
        </div>
    </section>
  )
}

export default Plant