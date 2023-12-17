import { useRef } from "react";
import styles from "./App.module.css";
import { hashMap } from "./HashMap";

function App() {
    const addKeyInputRref = useRef<HTMLInputElement>(null);
    const addValueInputRref = useRef<HTMLInputElement>(null);
    const getKeyInputRref = useRef<HTMLInputElement>(null);
    const removeKeyInputRref = useRef<HTMLInputElement>(null);

    function addValueToHashMap() {
        const key: number = Number(addKeyInputRref.current?.value);
        const value: number = Number(addValueInputRref.current?.value);
        //add the value to the Hash Map if not already present, else update the existing value
        hashMap.put(key, value);
        //updated Hash Map
        console.log(hashMap.hashArray);
    }

    function getValueFromHashMap() {
        const key: number = Number(getKeyInputRref.current?.value);
        const value: number | null = hashMap.get(key);
        console.log(value);
    }

    function removeValueFromHashMap() {
        const key: number = Number(removeKeyInputRref.current?.value);
        //remove the value from the Hash Map if present, else do nothing
        hashMap.remove(key);
        //updated Hash Map
        console.log(hashMap.hashArray);
    }

    return (
        <>
            <div className={styles.container}>
                <input type="number" ref={addKeyInputRref} placeholder="Key (number)" />
                <input
                    type="number"
                    ref={addValueInputRref}
                    placeholder="Value (number)"
                />
                <button onClick={addValueToHashMap}>Add</button>
            </div>

            <div className={styles.container}>
                <input type="number" ref={getKeyInputRref} placeholder="Key (number)" />
                <button onClick={getValueFromHashMap}>Get</button>
            </div>

            <div className={styles.container}>
                <input
                    type="number"
                    ref={removeKeyInputRref}
                    placeholder="Key (number)"
                />
                <button onClick={removeValueFromHashMap}>Remove</button>
            </div>
        </>
    );
}

export default App;