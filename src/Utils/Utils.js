
export const setAuthToken = (user) => {


    const currentUser = {
        email: user.email
    }

    fetch(`https://genious-car-server-topaz.vercel.app/jwt`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    }).then(res => res.json())
        .then(data => {
            console.log(data.token);
            localStorage.setItem('token', data.token)
        })
}