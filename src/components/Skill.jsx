import { motion } from 'framer-motion';
import '../scss/skill.scss';

export const Skill = ({ title, img, index = 0 }) => {
  return (
    <motion.div
      className='skill-item'
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.06 }}
    >
      <img src={img} alt={title} />
      <div className='skill-title'>{title}</div>
    </motion.div>
  );
};
