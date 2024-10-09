import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {

    const [remaingingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log('1');

        const timer = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer)
        };

    }, [timeout, onTimeout]);

    useEffect(() => {
        console.log('2');

        const interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);

        return () => {
            clearInterval(interval)
        };

    }, []);

    return (
        <>
            <progress id="question-time" max={timeout} value={remaingingTime}></progress>
        </>
    )

}