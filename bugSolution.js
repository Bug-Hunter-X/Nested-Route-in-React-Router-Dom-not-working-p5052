```javascript
import { BrowserRouter, Routes, Route, useParams, Outlet } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactLayout/>}>
          <Route path=":id" element={<ContactDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }

function ContactLayout() {
  return (
    <div>
      <h1>Contact</h1>
      <Outlet/>
    </div>
  )
}

function ContactDetail() {
  const { id } = useParams();
  return (
    <div>
      <h1>Contact Detail</h1>
      <p>Contact ID: {id}</p>
    </div>
  );
}
export default App;
```