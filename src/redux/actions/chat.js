export async function fetchrooms()
{
    return{
        type: "FETCH_ROOMS"
    }
}


export function LoadRooms(){
    return{
        type: "LOAD_ROOMS"
    }
}