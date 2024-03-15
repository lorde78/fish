interface UserGreetingProps {
    email: string;
  }
  
  export default function UserGreeting({ email }: UserGreetingProps) {
    return (
      <div>
        <h1>Page Protégée</h1>
        <p>Bienvenue, votre email est : {email}</p>
      </div>
    );
  }