var formRegister = document.getElementById("formRegister")
formRegister.addEventListener("submit", async (e) => {
    e.preventDefault()
    // const username = document.getElementById('txtTaikhoan').value
     const password = document.getElementById('txtMatkhau').value
    // const first_name = document.getElementById('txtHo').value
    // const last_name = document.getElementById('txtTen').value
    // const email = document.getElementById('txtEmail').value
    // const so_dien_thoai = document.getElementById('txtPhone').value
    // const dia_chi = document.getElementById('txtDiachi').value
    const formData = new FormData(formRegister)
    
    const values = Object.fromEntries(formData.entries());

    try {
        const config = {
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(values)
        }
        const res = await fetch('http://2c98-115-78-4-21.ngrok.io/khachhang/',config)
        console.log(res)
        if(res.status == 201) {
            const user = await res.json()
            localStorage.setItem('username', user.username)
            localStorage.setItem('password',password)
            location.href = 'login.html'
        }
        else{
            console.log("loi")
        }
    } catch (error) {
        console.log(error)
    }
})