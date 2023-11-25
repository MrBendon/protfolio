const ProjectDetails = ({ project }) => {
  return (
    <div className="w-full md:w-4/5 h-full mx-auto flex flex-wrap xl:gap-4 gap-1 py-4 px-2 bg-white/10 overflow-y-auto my-scrollbar rounded-2xl ">
      <div className="w-full sm:h-[280px] h-[160px]  bg-black rounded-2xl overflow-hidden ">
        <img
          className="w-full h-full object-cover"
          src={project.websiteImage}
          alt={`${project.projectName} demo image`}
        />
      </div>

      <div className="w-full h-[50%] grid auto-rows-min xl:grid-cols-[200px_1fr] lg:grid-cols-[150px_1fr] grid-cols-[120px_1fr] text-white text-sm md:text-xl gap-y-4 py-4">
        <p>專案名稱：</p>
        <p>{project.projectName}</p>
        <p>網站連結：</p>
        {project.websiteURL === "" ? (
          <p></p>
        ) : (
          <a target="_blank" rel="noreferrer noopener" href={project.websiteURL}>
            {project.websiteURL}
          </a>
        )}

        <p>Github連結：</p>
        {project.githubURL === "" ? (
          <p></p>
        ) : (
          <a target="_blank" rel="noreferrer noopener" href={project.githubURL}>
            {project.githubURL}
          </a>
        )}
        <p>專案描述：</p>
        <p className="w-full text-ellipsis overflow-hidden">{project.description}</p>
        <p>使用技術：</p>
        <div className="flex">
          {project.techTag.map((tag, index) => {
            return <p key={index}>{tag}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
