import '../scss/skill.scss';
export const Skill = ({ title, img }) => {
    return (
        <div className='skill-item'>
            <img src={img} alt={title} />
        </div>
    );
};
