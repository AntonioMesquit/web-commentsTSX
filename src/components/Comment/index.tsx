import "./styles.css"
import Trash from '../../assets/trash.svg'
import TrashRed from '../../assets/trashRed.svg'
import Like from '../../assets/like.svg'
import LikeWhite from '../../assets/likewhite.svg'
import { useState } from "react"

interface CommentsProps {
    content : string;
    deleteComment : (comment:string) => void;
}
export function Comment({content , deleteComment} : CommentsProps) {
    const [like, setLike] = useState(0)
    function handleDeleteComment(){
        deleteComment(content)
    }
    function handleLike(){
        setLike(like + 1)
    }

    return (
        <div className="head">
            <div className="img-container">
                <img src="https://github.com/AntonioMesquit.png" alt="" />
            </div>
            <div className="ns">
            <div className="txt-info">
                <p>Antonio Mesquita <span>(você)</span></p>
                <p>Cerca de 2h</p>
                <p>{content}</p>
                <button onClick={handleDeleteComment}><img src={Trash} alt="" />
                <img src={TrashRed} alt="" /></button>
            </div>
            <footer>
                <button onClick={handleLike}>
                    <img src={Like} alt="" />
                    <img src={LikeWhite} alt="" />
                    <p>Aplaudir •<span>{like}</span></p>

                </button>
            </footer>
            </div>
        </div>

    )
}