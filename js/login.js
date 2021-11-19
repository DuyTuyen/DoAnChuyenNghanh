document.getElementById('username').value = localStorage.getItem('username')
document.getElementById('password').value = localStorage.getItem('password')

var formLogin = document.getElementById('formLogin')
formLogin.addEventListener("submit", async(e) => {
    e.preventDefault()
    try {
        const formData = new FormData(formLogin)
        let values = Object.fromEntries(formData.entries())
        values = {...values,grant_type: "password"}
        console.log(values)
        const config = {
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(values)
        }
        const res = await fetch('http://2c98-115-78-4-21.ngrok.io/o/token/',config)
        if(res.status === 200){
            const data = await res.json()
            console.log(data)
        }

    } catch (error) {
        console.log(error)
    }
   
})