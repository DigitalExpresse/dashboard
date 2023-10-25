export const fetchConnection = (email: string, password: string) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        email,
        password,
    });

    const requestOptions: any = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:3001/api/admin/connection", requestOptions)
        .then((response) => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}