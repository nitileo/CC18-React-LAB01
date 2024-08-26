function App(){
    const name ='Nitipong Laptansupapon'
    const st1 = {color:'red',backgroundColor:'salmon'}
    const st2 = {color:'green',backgroundColor:'skyblue'}
    const year = () => {
        return new Date().getFullYear() - new Date("1998-08-15").getFullYear()
        }
    return(
        <div>
            <h1 style={st1}>{name}</h1>
            <p style={st2}>AGE : {year()}</p>
        </div>
    )
}

ReactDOM.createRoot(document.querySelector('#root'))
.render(<App />)
