import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}

/*
import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}
import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}
import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}

import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}
import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}
import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}
import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}
import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
    import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}import './styles.css'
import { Comment } from '../Comment'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'



interface Author {
    name: string;
    role: string;
    avatarUrl: string; 
}
interface Content{
    type: 'paragraph' | 'link';
    content: string;
}
interface PostProps {
    author : Author;
    content: Content[]; //array
}

export function Post({author, content} : PostProps){
   
    const [comments , setComments]  = useState([
        "post muito massa",

        
     
    ])
    const [newComment, setNewComment] = useState('')


function handleCreateNewComment(event: FormEvent){
   
    event.preventDefault()

  
    setComments([...comments, newComment])
    setNewComment('')   
    

}

function handlenewCommentC(event: ChangeEvent<HTMLTextAreaElement>){ //informar que foi evento de onChange no TEXTAREA
    event.target.setCustomValidity("")
    setNewComment(event.target.value)
}
function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Este campo e obrigatorio!!")
  
}
function deleteComment(comment : string){
    const commentsDeleteOne = comments.filter(coment => {
        return coment !== comment


        //remover apenas o 
    })
    setComments(commentsDeleteOne)

}
    return(
        <div className='card'>

        <div className="top-header">
        
        <div className="img-info">
            <img src={author.avatarUrl} alt=""/>
            <div className="info-names">
                <strong>{author.name}</strong>
                <p>{author.role}</p>
            </div>
        </div>
        <p >Públicado há 1h</p>
        </div>
        <div className="text-area">
        {
            content.map(line => {
                if(line.type == 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }else{
                    return <p key={line.content}>{line.content}</p>
                    
                }
            })
        }
        </div>
        <form className='o' onSubmit={handleCreateNewComment}>
            <h1>Deixe seu feedback</h1>
            <textarea placeholder='Deixe um comentario!' name='coment' value={newComment} onChange={handlenewCommentC}  required onInvalid={handleNewCommentInvalid}></textarea>
            <footer>
            <button disabled={newComment.length === 0}>Publicar</button>
            </footer>
        </form>
       {
        comments.map(coment => {
           return <Comment key={coment} content={coment} deleteComment={deleteComment}/>
        })
       }
        

       

        </div>
    )
}
}*/
