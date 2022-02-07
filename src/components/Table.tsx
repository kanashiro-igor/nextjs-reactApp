import Client from '../core/Client'
import { IconDelete, IconEdit } from './Icons'

interface TableProps {
    clients: Client[]
    clientSelected?: (client: Client) => void
    clientDeleted?: (client: Client) => void
}

export default function Table(props: TableProps) {

    const showActions = props.clientSelected || props.clientDeleted

    function renderTableHeader() {
        return (
            <tr>
                <th className='text-left p-4'>ID</th>
                <th className='text-left p-4'>Name</th>
                <th className='text-left p-4'>Age</th>
                {showActions ? <th className='p-4'>Actions</th> : false}
            </tr>
        )
    }

    function renderTableData() {
        return props.clients?.map((client, i) => {
            return (
                <tr key={client.id}
                    className={`${i % 2 == 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className='textt-left p-4'>{client.id}</td>
                    <td className='textt-left p-4'>{client.name}</td>
                    <td className='textt-left p-4'>{client.age}</td>
                    {showActions ? renderActions(client) : false}
                </tr>
            )
        })
    }

    function renderActions(client: Client) {
        return (
            <td className='flex justify-center p-4'>
                {props.clientSelected ? (
                    <button onClick={() => props.clientSelected?.(client)}
                        className={`
                        flex justify-center items-center
                        text-green-500 rounded-full p-2 margin-1
                        hover:bg-purple-50
                    `}>
                        {IconEdit}
                    </button>
               ) : false}
                {props.clientDeleted ? (
                    <button onClick={() => props.clientDeleted?.(client)}
                        className={`
                        flex justify-center items-center
                        text-red-500 rounded-full p-2 margin-1
                        hover:bg-purple-50
                    `}>
                        {IconDelete}
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className='w-full rounded-md overflow-hidden'>
            <thead className={`
                text-gray-100 
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderTableHeader()}
            </thead>
            <tbody>
                {renderTableData()}
            </tbody>
        </table>
    )
}