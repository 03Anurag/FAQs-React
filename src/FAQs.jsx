import {React,useState} from 'react'

function FAQ({title , content}){
    const [showContent , setContent] = useState(false)
    return (
        <>
        <section onClick={()=> setContent(!showContent)}>
            <div className="Heading">
                <h1>{title}</h1>
                <h1>{showContent ? "-" : "+"}</h1>
            </div>
            {showContent && <div className='Content'>{content}</div>}
        </section>
        </>
    )
}

export default FAQ