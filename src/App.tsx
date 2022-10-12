import { rxDB } from "./rxdb/rxdb";

function App() {
  return (
    <div className="App">
      <button
        onClick={async () => {
          await rxDB.users.create({});
        }}
      >
        create user
      </button>
    </div>
  );
}

export default App;
