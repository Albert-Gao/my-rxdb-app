import { rxDB } from "./rxdb/rxdb";

function App() {
  return (
    <div className="App">
      <button
        onClick={async () => {
          await rxDB.users.create({});
        }}
      >
        create user with collection method
      </button>
    </div>
  );
}

export default App;
