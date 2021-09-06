




export default function Dynamic({name,colour}) {
    
    return (
        <div >
            <div style={{
                backgroundColor: `${colour}`,
                width: "100px",
                display: "flex",
                justifyContent: "center",
                borderRadius: "20px",
                margin: "30px",
                 color: "white"
            }}>{name}</div>
        </div>
    )
}