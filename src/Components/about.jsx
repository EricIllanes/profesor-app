import NavBar from "./navBar"

export default function AboutUs(){
    return(
        <div>
             <NavBar />
            <h1> Hecho con amor por:            </h1>
            {
                ["Eric Illanes", "Hiromi Ávila"].map((owners)=>{
                    return(
                        <span key={owners}>{owners}</span>
                    )
                })
            }
        </div>
    )
}