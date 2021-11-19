
async function getProducts(){
    try{
        const config = {
            method:'GET',
            headers: {
                'Content-Type':'application/json'
            }
        }
        const res = await fetch('http://2c98-115-78-4-21.ngrok.io/sanpham/',config)
        if(res.status == 200){
            const data = await res.json()
            console.log(data.results)
            const listProduct = document.getElementById('sanpham')
            listProduct.innerHTML = ''
            data.results.forEach(product => {
                listProduct.innerHTML +=
                `
                <div class="col-lg-3 col-md-6 special-grid best-seller">
                    <div class="products-single fix">
                        <div class="box-img-hover">
                            <div class="type-lb">
                                <p class="sale">Sale</p>
                            </div>
                            <img src=${product.chitietsanpham_set[0].hinh}>
                            <div class="mask-icon">
                                <ul>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i class="fas fa-eye"></i></a></li>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i class="fas fa-sync-alt"></i></a></li>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i class="far fa-heart"></i></a></li>
                                </ul>
                                <a class="cart" href="#">Thêm vào giỏ hàng</a>
                            </div>
                        </div>
                        <div class="why-text">
                            <h4>${product.ten_san_pham}</h4>
                            <h5>${product.Gia}</h5>
                        </div>
                    </div>
                </div>
                `
            })
        }
        else{
        console.log('loi')
        }
    }catch(err){
    console.log(err)
    }
}
getProducts();



