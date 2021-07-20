const Section = (props) => {
  console.log(props);

  return (
    <div className="container">
      <h2>{props.category}</h2>
      <div className="carroussel">
        {props.images.map((elem, index) => {
          return <img src={elem} alt={`logo ${index}`} />;
        })}
      </div>
    </div>
  );
};

export default Section;
