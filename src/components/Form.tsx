import { useState } from "react";
import Input from "./Input";
import Client from "../core/Client"
import Button from "./Button";

interface FormProps {
    client: Client
    changeClient?: (client: Client) => void
    cancel?: () => void
}

export default function Form (props: FormProps) {
    const id = props.client?.id
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)

    return (
        <div>
            {id ? (
                <Input 
                    readOnly
                    text="Client Id" 
                    value={id}
                    className="mb-5"
                />  
            ) : false}
            <Input 
                text="Name" 
                value={name}
                changeValue={setName}
                className="mb-5"
            />
            <Input 
                text="Age" 
                type="number" 
                value={age} 
                changeValue={setAge}
            />
            <div className="flex justify-end mt-7">
                <Button color="green" className="mr-3"
                    onClick={() => props.changeClient?.(new Client(name, +age, id))}
                >{id ? 'Edit' : 'Save'}</Button>
                <Button onClick={props.cancel}>Cancel</Button>
            </div>
        </div>
    )
}