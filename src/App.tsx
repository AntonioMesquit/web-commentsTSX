
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"
import './global.css'
import styles from './App.module.css'

const posts = [
  {
      id: 1,
      author: {
          avatarUrl: 'https://github.com/Ital023.png',
          name: "Ital023",
          role: "Dev Front-end" 
      },
      content: [
          {type: "paragraph", content: "Fala galeraa 👋"},
          {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
          {type: "link", content: "👉 jane.design/doctorcare"}
      ]
  },
  {
      id: 2,
      author: {
          avatarUrl: 'https://github.com/AntonioMesquit.png',
          name: "Antonio Mesquita",
          role: "Dev Full-Stack" 
      },
      content: [
          {type: "paragraph", content: "Fala galeraa 👋"},
          {type: "paragraph", content: "Acabei de comer a karla bobo!"},
          {type: "link", content: "👉 pornodoido.com"}
      ]
  }
 ]


export function App() {
 

  return (
    <div>
   <Header/>

   <div className={styles.wrapper}>
    <Sidebar/>
    <main>
    {
      posts.map(post => {
        return(
        <Post
        key={post.id  }
        author={post.author}
        content={post.content}
      
        
        
        
        />
        
        
        )
      })
    }
    
 
    </main>

    
   </div>

   </div>
  )
}


