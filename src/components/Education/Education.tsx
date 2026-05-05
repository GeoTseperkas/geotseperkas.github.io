import { motion } from 'framer-motion';
import { education } from '../../data/portfolio';
import { FiAward } from 'react-icons/fi';
import styles from './Education.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Education() {
  return (
    <section id="education" className={styles.education}>
      <div className="section">
        <motion.span
          className="section-label"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          custom={0}
          variants={fadeUp}
        >
          Education
        </motion.span>

        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          custom={1}
          variants={fadeUp}
        >
          Academic background
        </motion.h2>

        <div className={styles.list}>
          {education.map((item, idx) => (
            <motion.div
              key={item.id}
              className={styles.card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={idx + 2}
              variants={fadeUp}
            >
              <div className={styles.iconWrap}>
                <FiAward />
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.institution}>{item.institution}</h3>
                  <span className={styles.period}>{item.period}</span>
                </div>
                <p className={styles.program}>{item.program}</p>
                {item.details && (
                  <p className={styles.details}>{item.details}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
