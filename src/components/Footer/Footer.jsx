import styles from "@/styles/footer.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";

const TEAM_LINKEDIN_PROFILES = {
  "Sidahmed slikh": "https://www.linkedin.com/in/sidahmed-zinedine",
  "Benarba Tewfik": "https://www.linkedin.com/in/mohammed-tewfik-benarba",
  "Bouchra ikram aboura": "https://www.linkedin.com/in/bouchra-ikram-aboura-1750b5169/",
  "Youssef sergma": "https://www.linkedin.com/in/sergma",
  "imane omari": "https://www.linkedin.com/in/iman-omari",
  "Melissa Sidi Said": "https://www.linkedin.com/in/milyssa-sidisaid-46170a232/",
};
const TEAM_GITHU_PROFILES = {
  "Sidahmed slikh": "https://github.com/Zino0031",
  "Benarba Tewfik": "https://github.com/Ben-Tewfik",
  "Bouchra ikram aboura": "https://github.com/ikoworld",
  "Youssef sergma": "https://github.com/ysergma",
  "imane omari": "https://github.com/iman-om",
  "Melissa Sidi Said": "https://github.com/milyssaSidisaid",
};


export default function Footer() {
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);

  const handleTeamMemberClick = (teamMember) => {
    setSelectedTeamMember(teamMember);
  };

  return (
    <div className={styles.footerContainer}>
      <div>
        <a href="/">
          <img src="/../../../../logo.svg" alt="NeoCine Logo" />
        </a>
      </div>
      <div className={styles.teamBox}>
        <h1>team</h1>
        <ul>
          {Object.keys(TEAM_MEMBER_PROFILES).map((teamMember) => (
            <li key={teamMember} onClick={() => handleTeamMemberClick(teamMember)}>
              {teamMember}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.githubBox}>
        <h1>github</h1>
        {selectedTeamMember && (
          <a href={TEAM_GITHU_PROFILES[selectedTeamMember]} target={"_blank"}>
            {selectedTeamMember}
          </a>
        )}
      </div>
      <div className={styles.linkedinBox}>
        <h1>linkedin</h1>
        {selectedTeamMember && (
          <a href={TEAM_LINKEDIN_PROFILES[selectedTeamMember]} target={"_blank"}>
            {selectedTeamMember}
          </a>
        )}
      </div>
      <div className={styles.githubRepoBox}>
        <p style={{ color: "#F5C518" }}>source code:</p>
        <a
          href="https://github.com/202306-NEA-DZ-FEW/movie-project-neocine"
          target="_blank"
        >
          <GitHubIcon sx={{ fontSize: 40 }} className={styles.githubIcon} />
        </a>
      </div>
    </div>
  );
}