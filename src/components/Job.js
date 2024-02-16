export default function Job({ title, year, location, description }) {
  return (
    <div className="resume">
      <h2 className="job-title">{title}</h2>
      <p className="job-year">
        {year} :: {location}
      </p>
      <div className="job-description">
        {description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
    </div>
  );
}
