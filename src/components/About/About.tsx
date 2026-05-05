import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiDownload } from 'react-icons/fi';
import { personalInfo, aboutText } from '../../data/portfolio';
import styles from './About.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="section">
        <motion.span
          className="section-label"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          custom={0}
          variants={fadeUp}
        >
          About
        </motion.span>

        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          custom={1}
          variants={fadeUp}
        >
          A bit about me
        </motion.h2>

        <div className={styles.grid}>
          <div className={styles.textCol}>
            {aboutText.map((paragraph, i) => (
              <motion.p
                key={i}
                className={styles.paragraph}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                custom={i + 2}
                variants={fadeUp}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div
            className={styles.infoCol}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            custom={4}
            variants={fadeUp}
          >
            <div className={styles.infoCard}>
              <div className={styles.infoItem}>
                <FiMapPin className={styles.infoIcon} />
                <span>{personalInfo.location}</span>
              </div>
              <div className={styles.infoItem}>
                <FiMail className={styles.infoIcon} />
                <a href={`mailto:${personalInfo.email}`} className={styles.emailLink}>
                  {personalInfo.email}
                </a>
              </div>

              <a
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cvButton}
              >
                <FiDownload />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
