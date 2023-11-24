import { AppRoutes } from 'routes/Routes.tsx';

function App() {
  // const [query, setQuery] = useState('');
  return (
    <>
      <AppRoutes />
      {/*<label>*/}
      {/*  Search albums:*/}
      {/*  <input value={query} onChange={(e) => setQuery(e.target.value)} />*/}
      {/*</label>*/}
      {/*<Suspense fallback={<h2>Loading...</h2>}>*/}
      {/*  <SearchResults query={query} />*/}
      {/*</Suspense>*/}
    </>
  );
}

export default App;
