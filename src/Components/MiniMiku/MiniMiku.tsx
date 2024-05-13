

interface MikuType {
    name: string,
    height: number,
    has_Leek: boolean,
    official_color: string,
    associated_software: string
}



function  MiniMiku(Miku: MikuType)  {

    return(
        <>
        <div>
            <h3>Reason</h3>
            <p>{Miku.name}</p>
            <p></p>
        </div>
        </>
    )
}
export default MiniMiku;