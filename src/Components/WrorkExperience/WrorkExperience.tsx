import styles from './WrorkExperience.module.scss';
import companyIcon from '../../assets/PNG/recur-club.png';

const WorkExperience = () => {

    const workExpDescription = [
        "Developed a Deal Status Tracking System with an interactive UI, reducing TAT by 37% and boosting deal visibility and closure rate.",
        "Refactored the client-facing frontend for company onboarding flow, using reusable components to enhance UX consistency and achieve a 40% increase in user engagement.",
        "Built intuitive UI system for repayment refund tracking, streamlining operations and reducing repayment refund-related queries by 64%.",
        "Designed and developed the frontend UI/UX for the AI-powered Magic Upload feature, enabling smart document tagging and boosting file retrieval speed by 70%.",
        "Designed and implemented a streamlined NACH cancellation flow across vendors, reducing user effort by 82% and significantly enhancing user control and transparency."
    ]

    const workExpContent = {
        companyName: "Recur Club",
        companyIcon: companyIcon,
        companyNameText: "Software Engineer Intern",
        companyNameTextSub: "2024 June - Present",
        workExpDescription: workExpDescription
    }



  return (
    <div className={styles.WorkExperience}>
      <div className={styles.CompanyName}>
        <div className={styles.CompanyNameIcon}>
            <img src={workExpContent.companyIcon} alt="Company Icon" className={styles.CompanyIcon} />
        </div>
        <div className={styles.CompanyNameText}>
            {workExpContent.companyName}
            <div className={styles.CompanyNameTextSub}>
                <p>{workExpContent.companyNameText}</p>
                <p>{workExpContent.companyNameTextSub}</p>
            </div>
        </div>
        </div>
      <ul>
        {workExpDescription.map((description, index) => (
          <li key={index}>{description}</li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperience;
