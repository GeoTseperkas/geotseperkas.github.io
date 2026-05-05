import { motion } from 'framer-motion';
import { experience } from '../../data/portfolio';
import styles from './Experience.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className="section">
        <motion.span
          className="section-label"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          custom={0}
          variants={fadeUp}
        >
          Experience
        </motion.span>

        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          custom={1}
          variants={fadeUp}
        >
          Where I've worked
        </motion.h2>

        <div className={styles.timeline}>
          {experience.map((item, idx) => (
            <motion.div
              key={item.id}
              className={styles.entry}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={idx + 2}
              variants={fadeUp}
            >
              <div className={styles.dot} />

              <div className={styles.entryContent}>
                <div className={styles.entryHeader}>
                  <h3 className={styles.company}>{item.company}</h3>
                  <span className={styles.period}>{item.period}</span>
                </div>
                <p className={styles.role}>{item.role}</p>
                {item.description && (
                  <p className={styles.description}>{item.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
