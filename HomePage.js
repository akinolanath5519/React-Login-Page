function HomePage(){

    function LogoutBtn(){
        localStorage.clear()
        window.location.reload()
    }

    
    return(
        <div>
            <h1>Welcome to HomePage</h1>
            <button onClick={LogoutBtn}>Logout</button>
        </div>
    )
}


export default HomePage;