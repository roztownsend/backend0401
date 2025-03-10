import { useContext } from "react";
import { TaskContext } from "./context/taskContext";

let plantAlt: string;

const Plant = () => {
    const { completedTaskNumber } = useContext(TaskContext);

    const plantPicFileName: string = completedTaskNumber < 10 ? 
    `0${completedTaskNumber}` : `10`;

        if (completedTaskNumber === 0) {
            plantAlt = `Pixel art of a plant pot.`;
        } else if (completedTaskNumber == 1) {
            plantAlt = `Pixel art of a potted plant with one leaf.`
        } else if (completedTaskNumber < 10) {
            plantAlt = `Pixel art of a potted plant with ${completedTaskNumber} leaves.`
        } else {
            plantAlt = `Pixel art of your compeleted plant.`
        }


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