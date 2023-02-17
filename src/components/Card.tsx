interface CardProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Card = ({ userId, id, title, body }: CardProps) => {
  if (!userId || !id || !title || !body) {
    return null;
  }
  return (
    <div className="card">
      <h2>userId: {userId}</h2>
      <h2>id: {id} </h2>
      <h2>title: {title}</h2>
      <p>body: {body}</p>
    </div>
  );
};

export default Card;
