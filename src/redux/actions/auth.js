export const signup =  function()
{
    console.log("SIGNUP_ACTION")
    return {
        type: "SIGNUP" 
    };
}

export const login =  function()
{
    console.log("LOGIN_ACTION")
    return {
        type: "LOGIN" 
    };
}
export const closeTicket =  function()
{
    console.log("CLOSE_TICKET_ACTION")
    return {
        type: "CLOSE_TICKET" 
    };
}

export const showSignup = function()
{
    return{
        type: "SHOW_SIGNUP"
    }
}

export const hideSignup = function()
{
    return{
        type: "HIDE_SIGNUP"
    }
}
export const showLogin= function()
{
    return{
        type: "SHOW_LOGIN"
    }
}

export const hideLogin = function()
{
    return{
        type: "HIDE_LOGIN"
    }
}