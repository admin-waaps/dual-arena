export const openTicket =  function()
{
    console.log("OPEN_TICKET_ACTION")
    return {
        type: "OPEN_TICKET" 
    };
}
export const closeTicket =  function()
{
    console.log("CLOSE_TICKET_ACTION")
    return {
        type: "CLOSE_TICKET" 
    };
}