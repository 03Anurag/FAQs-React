import './App.css';
import { Questions } from './Data';
import FAQ from './FAQs';

function App() {
  return (
    <>
      {Questions.map((Question)=>(
        <FAQ title={Question.title} content={Question.content}/>
      ))}
    </>
  );
}

export default App;
