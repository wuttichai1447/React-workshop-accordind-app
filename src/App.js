
import './App.css';
import data  from './data';
import{useState} from "react"
import SingleContent from './component/SingleContent';

function App() {
  const [content,setContent] = useState(data)
  return (
    <main>
      <div classname="container">
        <h3>เครื่องมือพัฒนาเว็บ 2023</h3>
        <section>
          {content.map((data)=>{
            return <SingleContent key={data.id}{...data}/>
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
