import { useEffect, useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Client from '../core/Client'

export default function Home() {

  const [client, setClient] = useState<Client>(Client.void())
  const [clients, setClients] = useState<Client[]>([])
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  function clientSelected(client: Client) {
    setClient(Client.void)
    setVisible('form')
  }

  function newClient() {
    setClient(client)
    setVisible('form')
  }

  function clientDeleted(client: Client) {
    console.log(`Excluir: ${client.name}`)
  }

  function savingClient(client: Client) {
    console.log(client);
    setVisible('table');
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Simple Registration">
        {visible === 'table' ? (
        <>
          <div className="flex justify-end">
            <Button color="green" className="mb-4" onClick={newClient}>New Client</Button>
          </div>
          <Table clients={clients} clientSelected={clientSelected} clientDeleted={clientDeleted} />
        </>
        ) : (
          <Form changeClient={savingClient} client={client} cancel={() => setVisible('table')}/>
        )}
      </Layout>
    </div>
  )
}
