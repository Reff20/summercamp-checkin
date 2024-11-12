import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

type TicketParams = {
    id: string;
}

const Ticket = () => {
    const { id } = useParams<TicketParams>();
    const [isTicketValid, setTicketValid] = useState<boolean>(false);
    useEffect(() => {
        if (id && id === "1") {
            setTicketValid(true)
        } else {
            setTicketValid(false)
        }
    }, [])
    return (
        <>
            {isTicketValid ? <div>Acesso Permitido</div> : <div>Acesso Negado</div>}
        </>
    )
}

export default Ticket