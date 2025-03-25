import { useContext } from "react";
import { TaskContext } from "./context/taskContext";

let plantAlt: string;

const Plant = () => {
    const { completeTaskNumber } = useContext(TaskContext);

    const plantPicFileName: string = completeTaskNumber < 10 ? 
    `0${completeTaskNumber}` : `10`;

        if (completeTaskNumber === 0) {
            plantAlt = `Pixel art of a plant pot.`;
        } else if (completeTaskNumber == 1) {
            plantAlt = `Pixel art of a potted plant with one leaf.`
        } else if (completeTaskNumber < 10) {
            plantAlt = `Pixel art of a potted plant with ${completeTaskNumber} leaves.`
        } else {
            plantAlt = `Pixel art of your compeleted plant.`
        }

    return (
    <section className="plant">
        <div className="plant-pic">
            <img 
                src={`/plants/plant_${plantPicFileName}.png`} 
                alt={plantAlt} title={plantAlt} />
        </div>
    </section>
  )
}

export default Plant