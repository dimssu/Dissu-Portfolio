import styles from './WrorkExperience.module.scss';
import companyIcon from '../../assets/PNG/recur-club.png';

interface WorkExpItem {
    text: string;
    highlights: string[];
}

const WorkExperience = () => {
    const workExpDescription: WorkExpItem[] = [
        {
            text: "Developed a Deal Status Tracking System with an interactive UI, reducing TAT by 37% and boosting deal visibility and closure rate.",
            highlights: ["Deal Status Tracking System", "37%"]
        },
        {
            text: "Refactored the client-facing frontend for company onboarding flow, using reusable components to enhance UX consistency and achieve a 40% increase in user engagement.",
            highlights: ["reusable components", "40%"]
        },
        {
            text: "Built intuitive UI system for repayment refund tracking, streamlining operations and reducing repayment refund-related queries by 64%.",
            highlights: ["repayment refund tracking", "64%"]
        },
        {
            text: "Designed and developed the frontend UI/UX for the AI-powered Magic Upload feature, enabling smart document tagging and boosting file retrieval speed by 70%.",
            highlights: ["Magic Upload", "70%"]
        },
        {
            text: "Designed and implemented a streamlined NACH cancellation flow across vendors, reducing user effort by 82% and significantly enhancing user control and transparency.",
            highlights: ["NACH cancellation", "82%"]
        }
    ];

    const workExpContent = {
        companyName: "Recur Club",
        companyIcon: companyIcon,
        companyNameText: "Software Engineer Intern",
        companyNameTextSub: "2024 June - Present",
        workExpDescription: workExpDescription
    };

    const highlightText = (text: string, highlights: string[]) => {
        let result = text;
        highlights.forEach(highlight => {
            const regex = new RegExp(`(${highlight})`, 'gi');
            result = result.replace(regex, `<span class="${styles.highlight}">$1</span>`);
        });
        return <span dangerouslySetInnerHTML={{ __html: result }} />;
    };

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
                {workExpDescription.map((item, index) => (
                    <li key={index}>{highlightText(item.text, item.highlights)}</li>
                ))}
            </ul>
        </div>
    );
};

export default WorkExperience;
