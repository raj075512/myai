import React from 'react'

type Props= {
    params:{
        noteId:string 
    }
}

const NoteBookPage = async ( {params :{noteId}}  : Props) => {
    return (
        <div>
             {noteId}
        </div>
    )
}

export default NoteBookPage
