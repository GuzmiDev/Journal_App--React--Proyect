const JournalEntrey = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://laverdadnoticias.com/__export/1600893396254/sites/laverdad/img/2020/09/23/izuku_midoriya.jpg_684571543.jpg)",
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo día</p>
        <p className="journal__entry-content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </div>
      <div className="journal__entry-data-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};

export default JournalEntrey;
