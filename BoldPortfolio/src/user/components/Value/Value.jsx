export function Value({ img, name, description }) {
  return (
    <div>
      <img src={img} alt="Bold Studio's value" />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}